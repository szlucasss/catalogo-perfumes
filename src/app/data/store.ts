export const STORE = {
  name: 'Maison Éclat',
  tagline: 'Fragrâncias de assinatura',
  city: 'São Paulo',
  whatsapp: '5511978512281',
  greeting: 'Olá! Vim pelo catálogo da Maison Éclat.',
} as const;

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${STORE.whatsapp}?text=${text}`;
}

export function perfumeWhatsappMessage(name: string, volume: string, price: string): string {
  return `${STORE.greeting} Tenho interesse no perfume *${name}* (${volume}) — ${price}. Pode me ajudar?`;
}
