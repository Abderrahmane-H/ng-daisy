import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type="checkbox"][daiToggle]',
  standalone: true,
})
export class Toggle {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'toggle');
  }
}
