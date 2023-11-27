import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'dai-accordion-content, |daiAccordionContent]',
  standalone: true,
})
export class AccordionContent {
  constructor(private readonly el: ElementRef<HTMLElement>) {
    this.el.nativeElement.classList.add('collapse-content');
  }
}
