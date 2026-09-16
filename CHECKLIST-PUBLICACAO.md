# Checklist — publicar o catálogo (Azure + CI/CD)

Git do projeto: branches `dev` (trabalho) e `prd` (produção). **Só entra em produção por PR `dev` → `prd`.**

CI/CD da Azure **ainda não está ligado**. Ele nasce quando você conectar o repo à Static Web App, apontando a branch de produção para **`prd`**.

| Campo Azure | Valor |
|---|---|
| App location | `/` |
| Api location | *(vazio)* |
| Output location | `dist/catalogo-perfumes/browser` |
| Branch de produção | `prd` |

---

## 0. Ver o valor localmente (antes de qualquer publicação)

```powershell
npm start
```

Abra `http://localhost:4200`:

- [ ] Textos da loja em `src/app/data/store.ts` estão certos
- [ ] **WhatsApp** em `store.ts` **não é mais** `5511999999999`
- [ ] Clique em WhatsApp de um perfume (nome, volume, preço na mensagem)
- [ ] Botão flutuante e “Pedir indicação” abrem a conversa certa
- [ ] Preços em `src/app/data/perfumes.ts` estão corretos
- [ ] Fotos, filtros e busca ok no celular

Não avance com o número de teste. Esse valor vai para o ar.

---

## 1. Build de produção local (recomendado)

```powershell
npm run build
npx --yes serve dist/catalogo-perfumes/browser
```

- [ ] O site abre no build
- [ ] WhatsApp e preços iguais ao passo 0

---

## 2. Git (já feito neste projeto)

O repositório usa:

| Branch | Uso |
|---|---|
| `dev` | Trabalho do dia a dia (branch padrão) |
| `prd` | Produção — **sem push direto**, só PR vindo de `dev` |

O workflow `.github/workflows/prd-from-dev.yml` recusa PR para `prd` que não saia de `dev`.

- [ ] Repo no GitHub, branches `dev` e `prd` enviadas
- [ ] Branch padrão: `dev`
- [ ] Proteção de `prd` ativa (obrigatório PR)

Se o `gh repo create` ainda não rodou, veja a seção “Comandos Git” no fim deste arquivo.

---

## 3. Ligar a Azure (isso cria o CI/CD)

1. [ ] Portal Azure → **Criar um recurso** → **Static Web App**
2. [ ] Grupo de recursos + nome + plano **Free**
3. [ ] Origem: **GitHub** → repo `catalogo-perfumes` → branch **`prd`** (não `main`, não `dev`)
4. [ ] App location: `/` · Api: vazio · Output: `dist/catalogo-perfumes/browser`
5. [ ] **Create**

A Azure cria um workflow na **`prd`**. Traga esse arquivo para `dev` (senão o próximo PR apaga o CI):

```powershell
git checkout prd
git pull
git checkout dev
git merge prd
git push origin dev
```

- [ ] GitHub → **Actions** → workflow da Azure rodou
- [ ] URL de produção anotada — **ainda não divulgue**

Comportamento depois disso:

- PR `dev` → `prd` → URL de **preview**
- Merge nesse PR → publica **produção**

---

## 4. Ver o valor no preview (antes do go-live)

Trabalhe em `dev`. Quando estiver pronto para produção:

```powershell
git checkout dev
git push origin dev
gh pr create --base prd --head dev --title "Release para produção" --body "Validar WhatsApp e preços no preview antes do merge"
```

- [ ] Action “PRD só a partir de dev” verde
- [ ] Action da Azure verde
- [ ] Comentário da Azure no PR com a **URL de preview**
- [ ] Abra o preview no celular
- [ ] WhatsApp de 2 perfumes + botão flutuante — número e texto certos
- [ ] Preços, fotos e textos ok
- [ ] Se falhar: corrija em `dev`, dê push, o preview atualiza. **Não faça merge.**

---

## 5. Publicar de verdade (go-live)

- [ ] Merge do PR `dev` → `prd` no GitHub
- [ ] Action da `prd` verde
- [ ] URL de **produção** testada (WhatsApp de novo)
- [ ] Preview some ao fechar o PR — esperado

Daí em diante: mudança em `dev` → PR para `prd` → olhar preview → merge.

---

## 6. Depois do go-live (opcional)

- [ ] Custom domain na Static Web App
- [ ] Features: `git checkout -b feat/nome` a partir de `dev`, depois merge em `dev` (PR opcional). **Nunca** abra PR de feature direto para `prd`.

---

## Como saber que o CI/CD está ok

| Evento | Resultado |
|---|---|
| PR `dev` → `prd` | Preview da Azure + check “origem deve ser dev” |
| PR de outra branch → `prd` | Check vermelho (bloqueado) |
| Merge em `prd` | Produção atualiza |
| Action vermelha | Site antigo permanece |

Se falhar com *index.html not found*, o output não é `dist/catalogo-perfumes/browser`.

---

## Comandos Git (referência)

```powershell
cd C:\Users\lucas.lsouza\Lucas\Projetos-front\catalogo-perfumes

git checkout dev
# ... altera o catálogo ...
git add .
git commit -m "Ajuste no catálogo"
git push origin dev

gh pr create --base prd --head dev --title "Release para produção" --body "Preview antes do go-live"
# valida a URL de preview no PR
# só então: Merge pull request no GitHub
```
