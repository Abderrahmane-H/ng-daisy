import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type="checkbox"][daiCheckbox]',
  standalone: true,
})
export class Checkbox {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'checkbox');
  }
}
