import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { AccordionItem } from './accordion-item';
import { AccordionManager } from './accordion-manager';

@Directive({
  selector: 'dai-accordion-title, |daiAccordionTitle]',
  standalone: true,
})
export class AccordionTitle {
  constructor(
    private readonly el: ElementRef,
    @Optional() private readonly accordionItem: AccordionItem,
    private readonly manager: AccordionManager
  ) {
    this.el.nativeElement.classList.add(
      'collapse-title',
      'text-xl',
      'font-medium',
      'pointer'
    );
    this.el.nativeElement.tabindex = 0;
  }

  @HostListener('click')
  onClick(): void {
    if (this.accordionItem) {
      this.manager.toggle(this.accordionItem);
    }
  }
}
