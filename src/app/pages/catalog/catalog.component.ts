import { Component, computed, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  categoryLabel,
  formatPrice,
  PERFUMES,
  Perfume,
  PerfumeCategory,
} from '../../data/perfumes';
import { perfumeWhatsappMessage, STORE, whatsappLink } from '../../data/store';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputComponent } from '../../ui/input/input.component';
import { SeparatorComponent } from '../../ui/separator/separator.component';

type Filter = 'todos' | PerfumeCategory;

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FormsModule, BadgeComponent, ButtonComponent, InputComponent, SeparatorComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  readonly store = STORE;
  readonly filters: Filter[] = ['todos', 'feminino', 'masculino', 'unissex'];
  readonly search = signal('');
  readonly filter = signal<Filter>('todos');
  readonly selected = signal<Perfume | null>(null);

  readonly results = computed(() => {
    const term = this.search().trim().toLowerCase();
    const category = this.filter();

    return PERFUMES.filter((perfume) => {
      const matchesCategory = category === 'todos' || perfume.category === category;
      const matchesTerm =
        !term ||
        perfume.name.toLowerCase().includes(term) ||
        perfume.notes.some((note) => note.toLowerCase().includes(term));
      return matchesCategory && matchesTerm;
    });
  });

  categoryLabel = categoryLabel;
  formatPrice = formatPrice;

  setFilter(next: Filter): void {
    this.filter.set(next);
  }

  openDetails(perfume: Perfume): void {
    this.selected.set(perfume);
    document.body.style.overflow = 'hidden';
  }

  closeDetails(): void {
    this.selected.set(null);
    document.body.style.overflow = '';
  }

  orderLink(perfume: Perfume): string {
    return whatsappLink(perfumeWhatsappMessage(perfume.name, perfume.volume, formatPrice(perfume.price)));
  }

  consultLink(): string {
    return whatsappLink(`${STORE.greeting} Quero uma indicação de fragrância.`);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selected()) {
      this.closeDetails();
    }
  }
}
