import { Component, input } from '@angular/core';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-separator',
  standalone: true,
  template: '',
  host: {
    role: 'separator',
    '[class]': 'hostClass()',
  },
})
export class SeparatorComponent {
  readonly extraClass = input('', { alias: 'class' });

  hostClass(): string {
    return cn('block h-px w-full shrink-0 bg-border', this.extraClass());
  }
}
