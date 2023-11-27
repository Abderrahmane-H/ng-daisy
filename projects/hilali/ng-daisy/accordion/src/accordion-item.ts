import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  Renderer2,
  SkipSelf,
} from '@angular/core';
import { Accordion, DAI_ACCORDION } from './accordion';
import { AccordionManager } from './accordion-manager';

@Directive({
  selector: 'dai-accordion-item, |daiAccordionItem]',
  standalone: true,
})
export class AccordionItem implements AfterViewInit, OnDestroy {
  @Input() set opened(value: boolean) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }

  _opened: boolean = false;

  constructor(
    @Inject(DAI_ACCORDION) @SkipSelf() private readonly accordion: Accordion,
    private readonly manager: AccordionManager,
    private readonly renderer: Renderer2,
    private readonly el: ElementRef<HTMLElement>
  ) {
    this.el.nativeElement.classList.add('collapse', 'bg-base-200');
  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
  }

  /**
   * Open the accordion item.
   */
  open(): void {
    this.renderer.removeClass(this.el.nativeElement, 'collapse-close');
    this.renderer.addClass(this.el.nativeElement, 'collapse-open');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'true');
    this._opened = true;
  }

  /**
   * Close the accordion item.
   */
  close(): void {
    this.renderer.removeClass(this.el.nativeElement, 'collapse-open');
    this.renderer.addClass(this.el.nativeElement, 'collapse-close');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
    this._opened = false;
  }

  /**
   * Make the accordion item joined, this will remove any spacing between items.
   */
  makeJoined(): void {
    this.el.nativeElement.classList.add(
      'join-item',
      'border',
      'border-base-300'
    );
  }

  /**
   * Make the accordion item unjoined, this will add spacing between items.
   */
  makeUnjoined(): void {
    this.el.nativeElement.classList.remove(
      'join-item',
      'border',
      'border-base-300'
    );
  }
  /**
   * Set the icon of the accordion item.
   * @param {'plus' | 'arrow' | null} icon
   */
  setIcon(icon: 'plus' | 'arrow' | null): void {
    if (icon === 'plus') {
      this.el.nativeElement.classList.remove('collapse-arrow');
      this.el.nativeElement.classList.add('collapse-plus');
    } else if (icon === 'arrow') {
      this.el.nativeElement.classList.add('collapse-arrow');
      this.el.nativeElement.classList.remove('collapse-plus');
    } else {
      this.el.nativeElement.classList.remove('collapse-plus');
      this.el.nativeElement.classList.remove('collapse-arrow');
    }
  }

  /**
   * adds an id to the accordion item
   */
  set id(value: string) {
    this.renderer.setProperty(this.el.nativeElement, 'id', value);
  }

  /**
   * returns the id of the accordion item
   */
  get id(): string {
    return this.el.nativeElement.id;
  }

  ngOnDestroy(): void {
    this.manager.unregister(this);
  }
}
