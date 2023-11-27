import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'dai-card-body, [daiCardBody]',
  exportAs: 'daiCardBody',
  standalone: true,
})
export class CardBody {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'card-body');
  }
}
