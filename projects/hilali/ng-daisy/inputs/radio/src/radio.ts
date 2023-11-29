import {
  Directive,
  ElementRef,
  Input,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DaiColor, DaiSize } from '@hilali/ng-daisy/common';
import { BaseInput } from '../../base-input';

@Directive({
  selector: 'input[type="radio"][daiRadio]',
  standalone: true,
})
export class Radio extends BaseInput {
  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional() @Self() formControl?: FormControlDirective
  ) {
    super(el, renderer, formControl);
  }
  /**
   * the list of default classes the element should have at creation
   */
  protected override get _defaultClasses(): string[] {
    return ['radio', 'radio-neutral', 'radio-md'];
  }
  /**
   * updates the color of the element
   * @param color the color to apply to the element
   */
  protected override updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `radio-${color}`);
  }
  /**
   * updates the size of the element
   * @param size the size to apply to the element
   */
  protected override updateSize(size: DaiSize): void {
    this.el.nativeElement.classList.remove(
      'radio-xs',
      'radio-sm',
      'radio-md',
      'radio-lg'
    );
    this.renderer.addClass(this.el.nativeElement, `radio-${size}`);
  }
  /**
   * updates the status of the element
   * @param status the status to apply to the element
   */
  protected override updateStatus(
    status: 'success' | 'error' | 'default'
  ): void {
    this.resetColor();
    if (status === 'success' || status === 'error') {
      this.renderer.addClass(this.el.nativeElement, `radio-${status}`);
    }
  }

  /**
   * removes all colors applied to the element
   */
  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'radio-primary',
      'radio-secondary',
      'radio-success',
      'radio-warning',
      'radio-error',
      'radio-neutral',
      'radio-info'
    );
  }

  @Input({ alias: '__variant__' })
  protected override updateVariant(variant: 'ghost' | 'bordered'): void {
    console.warn('Radio does not support variant');
  }
}
