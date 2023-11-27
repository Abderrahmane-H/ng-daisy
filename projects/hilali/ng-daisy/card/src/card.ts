import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

export type CardSize = 'normal' | 'compact';
export type ImagePosition = 'background' | 'side' | 'normal';

@Directive({
  selector: 'dai-card, [daiCard]',
  exportAs: 'daiCard',
  standalone: true,
})
export class Card {
  /**
   * sets the elevation of the card
   * @default 'md'
   */
  @Input() set elevation(v: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
    switch (v) {
      case 'xs':
        this.el.nativeElement.classList.add('shadow-xs');
        this.el.nativeElement.classList.remove(
          'shadow-sm',
          'shadow-md',
          'shadow-lg',
          'shadow-xl'
        );
        break;
      case 'sm':
        this.el.nativeElement.classList.add('shadow-sm');
        this.el.nativeElement.classList.remove(
          'shadow-xs',
          'shadow-md',
          'shadow-lg',
          'shadow-xl'
        );
        break;
      case 'md':
        this.el.nativeElement.classList.add('shadow-md');
        this.el.nativeElement.classList.remove(
          'shadow-sm',
          'shadow-xs',
          'shadow-lg',
          'shadow-xl'
        );
        break;
      case 'lg':
        this.el.nativeElement.classList.add('shadow-lg');
        this.el.nativeElement.classList.remove(
          'shadow-sm',
          'shadow-md',
          'shadow-xs',
          'shadow-xl'
        );
        break;
      case 'xl':
        this.el.nativeElement.classList.add('shadow-xl');
        this.el.nativeElement.classList.remove(
          'shadow-sm',
          'shadow-md',
          'shadow-lg',
          'shadow-xs'
        );
        break;
      default:
        this.el.nativeElement.classList.remove(
          'shadow-sm',
          'shadow-md',
          'shadow-lg',
          'shadow-xs',
          'shadow-xl'
        );
        this.el.nativeElement.classList.add('shadow-md');
        break;
    }
  }

  /**
   * sets the size of the card
   * @default 'normal'
   */
  @Input() set size(value: CardSize) {
    if (value === 'compact') {
      this.el.nativeElement.classList.add('card-compact');
      this.el.nativeElement.classList.remove('card-normal');
    } else {
      this.el.nativeElement.classList.add('card-normal');
      this.el.nativeElement.classList.remove('card-compact');
    }
  }
  /**
   * sets the image position of the card
   * @default 'normal'
   */
  @Input() set imagePosition(value: ImagePosition) {
    if (value === 'side') {
      this.el.nativeElement.classList.add('card-side');
      this.el.nativeElement.classList.remove('image-full');
    } else if (value === 'background') {
      this.el.nativeElement.classList.add('image-full');
      this.el.nativeElement.classList.remove('card-side');
    } else {
      this.el.nativeElement.classList.remove('image-full', 'card-side');
    }
  }

  /**
   * sets the image position of the card
   * @default false
   */
  @Input() set outline(value: boolean) {
    if (value) {
      this.renderer.addClass(this.el.nativeElement, 'card-bordered');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'card-bordered');
    }
  }

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef<HTMLElement>
  ) {
    this.renderer.addClass(this.el.nativeElement, 'card');
    this.renderer.addClass(this.el.nativeElement, 'card-normal');
    this.renderer.addClass(this.el.nativeElement, 'bg-base-100');
  }
}
