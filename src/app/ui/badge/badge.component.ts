import { Component, input } from '@angular/core';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

const variants: Record<BadgeVariant, string> = {
  default: 'bg-primary text-primary-foreground border-transparent',
  secondary: 'bg-secondary text-secondary-foreground border-transparent',
  destructive: 'bg-destructive text-white border-transparent',
  outline: 'border-border text-foreground',
};

@Component({
  selector: 'ui-badge',
  standalone: true,
  template: `<ng-content />`,
  host: {
    '[class]': 'hostClass()',
  },
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('default');
  readonly extraClass = input('', { alias: 'class' });

  hostClass(): string {
    return cn(
      'inline-flex w-fit shrink-0 items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium whitespace-nowrap',
      variants[this.variant()],
      this.extraClass(),
    );
  }
}
