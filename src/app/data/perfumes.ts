export type PerfumeCategory = 'feminino' | 'masculino' | 'unissex';

export interface Perfume {
  id: string;
  name: string;
  brand: string;
  category: PerfumeCategory;
  volume: string;
  price: number;
  notes: string[];
  description: string;
  image: string;
  featured?: boolean;
}

export const PERFUMES: Perfume[] = [
  {
    id: 'noir-absolu',
    name: 'Noir Absolu',
    brand: 'Maison Éclat',
    category: 'unissex',
    volume: '100 ml',
    price: 689,
    notes: ['Oud', 'Baunilha', 'Âmbar'],
    description: 'Uma assinatura noturna, densa e envolvente. Oud e âmbar se encontram com um fundo cremoso de baunilha.',
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=900',
    featured: true,
  },
  {
    id: 'fleur-de-nuit',
    name: 'Fleur de Nuit',
    brand: 'Maison Éclat',
    category: 'feminino',
    volume: '75 ml',
    price: 549,
    notes: ['Jasmim', 'Rosa', 'Almíscar'],
    description: 'Floral branco com alma de boudoir. Jasmim e rosa sobre um almíscar suave que permanece na pele.',
    image: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=900',
    featured: true,
  },
  {
    id: 'cedre-sauvage',
    name: 'Cèdre Sauvage',
    brand: 'Maison Éclat',
    category: 'masculino',
    volume: '100 ml',
    price: 619,
    notes: ['Cedro', 'Bergamota', 'Couro'],
    description: 'Madeira seca e bergamota cítrica, com um toque de couro que evoca um casaco de inverno.',
    image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'rose-imperiale',
    name: 'Rose Impériale',
    brand: 'Maison Éclat',
    category: 'feminino',
    volume: '50 ml',
    price: 479,
    notes: ['Rosa', 'Peônia', 'Sândalo'],
    description: 'Uma rosa moderna, luminosa e aveludada. Peônia no coração e sândalo cremoso na base.',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'vetiver-royal',
    name: 'Vetiver Royal',
    brand: 'Maison Éclat',
    category: 'masculino',
    volume: '100 ml',
    price: 599,
    notes: ['Vetiver', 'Tabaco', 'Especiarias'],
    description: 'Vetiver terroso com tabaco dourado e um acorde de especiarias quentes. Elegante e seco.',
    image: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'ambre-dore',
    name: 'Ambre Doré',
    brand: 'Maison Éclat',
    category: 'unissex',
    volume: '100 ml',
    price: 729,
    notes: ['Âmbar', 'Fava Tonka', 'Incenso'],
    description: 'Ouro líquido na pele. Âmbar resinoso, tonka adocicada e um véu de incenso.',
    image: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=900',
    featured: true,
  },
  {
    id: 'bergamote-blanche',
    name: 'Bergamote Blanche',
    brand: 'Maison Éclat',
    category: 'unissex',
    volume: '75 ml',
    price: 429,
    notes: ['Citrus', 'Neroli', 'Almíscar branco'],
    description: 'A abertura de um dia claro. Bergamota, flor de laranjeira e um almíscar limpo.',
    image: 'https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'iris-velours',
    name: 'Iris Velours',
    brand: 'Maison Éclat',
    category: 'feminino',
    volume: '50 ml',
    price: 659,
    notes: ['Íris', 'Violeta', 'Pó de arroz'],
    description: 'Íris em pó, violeta e um acabamento de veludo. Sofisticada, íntima e memorável.',
    image: 'https://images.pexels.com/photos/965987/pexels-photo-965987.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function categoryLabel(category: PerfumeCategory | 'todos'): string {
  const labels: Record<PerfumeCategory | 'todos', string> = {
    todos: 'Todos',
    feminino: 'Feminino',
    masculino: 'Masculino',
    unissex: 'Unissex',
  };
  return labels[category];
}
