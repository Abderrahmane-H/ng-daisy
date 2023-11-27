import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'dai-card-actions, [daiCardActions]',
  exportAs: 'daiCardActions',
})
export class CardActions {
  @Input() set align(value: 'start' | 'end' | 'center') {
    this.el.nativeElement.classList.remove(
      'justify-start',
      'justify-end',
      'justify-center'
    );
    this.el.nativeElement.classList.add(`justify-${value}`);
  }

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'card-actions');
    this.renderer.addClass(this.el.nativeElement, 'justify-end');
  }
}
