# Maison Éclat — Catálogo de Perfumes

Front Angular com visual shadcn/ui (tema Elegant Luxury). Sem backend: o pedido vai direto para o WhatsApp.

## Como rodar

```bash
npm start
```

Abre em `http://localhost:4200`.

## WhatsApp

Edite o número em `src/app/data/store.ts`:

```ts
whatsapp: '5511999999999', // DDI + DDD + número
```

## Branches

| Branch | Uso |
|---|---|
| `dev` | Trabalho (branch padrão) |
| `prd` | Produção — só entra por PR `dev` → `prd` |

Publicação: veja `CHECKLIST-PUBLICACAO.md`.
