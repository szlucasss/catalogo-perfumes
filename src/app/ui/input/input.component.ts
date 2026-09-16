import { Component, input } from '@angular/core';
import { cn } from '../../lib/utils';

@Component({
  selector: 'input[ui-input]',
  standalone: true,
  template: '',
  host: {
    '[class]': 'hostClass()',
  },
})
export class InputComponent {
  readonly extraClass = input('', { alias: 'class' });

  hostClass(): string {
    return cn(
      'h-9 w-full min-w-0 rounded-md border border-stone-300 bg-white px-3 py-1 text-sm shadow-sm transition-[color,box-shadow] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40',
      this.extraClass(),
    );
  }
}
