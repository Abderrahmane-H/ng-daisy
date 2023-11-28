import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type="radio"][daiRadio]',
  standalone: true,
})
export class Radio {
  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'radio');
  }
}
