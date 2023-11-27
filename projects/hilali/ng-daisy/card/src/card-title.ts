import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'dai-card-title, [daiCardTitle]',
  exportAs: 'daiCardTitle',
  standalone: true,
})
export class CardTitle {
  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'card-title');
  }
}
