import {
  Directive,
  ElementRef,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DaiColor, DaiSize } from '@hilali/ng-daisy/common';
import { BaseInput } from '@hilali/ng-daisy/inputs/base-input';

@Directive({
  selector: 'textarea[daiTextarea]',
  standalone: true,
  exportAs: 'daiTextarea',
})
export class Textarea extends BaseInput {
  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional() @Self() formControl: FormControlDirective
  ) {
    super(el, renderer, formControl);
  }
  /**
   * the list of default classes the element should have at creation
   * @returns the list of default classes
   */
  protected override get _defaultClasses(): string[] {
    return ['textarea', 'textarea-md', 'textarea-neutral', 'textarea-bordered'];
  }
  /**
   * updates the color of the element
   * @param color the color to apply to the element
   */
  protected override updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `textarea-${color}`);
  }
  /**7
   * updates the size of the element
   * @param size the size to apply to the element
   */
  protected override updateSize(size: DaiSize): void {
    this.resetSize();
    this.renderer.addClass(this.el.nativeElement, `textarea-${size}`);
  }
  /**
   * updates the variant of the element
   * @param variant the variant to apply to the element
   */
  protected override updateVariant(variant: 'ghost' | 'bordered'): void {
    this.resetVariant();
    this.renderer.addClass(this.el.nativeElement, `textarea-${variant}`);
  }
  /**
   * updates the status of the element
   * @param status the status to apply to the element
   */
  protected override updateStatus(
    status: 'success' | 'error' | 'default'
  ): void {
    this.resetStatus();
    if (status === 'success' || status === 'error') {
      this.renderer.addClass(this.el.nativeElement, `textarea-${status}`);
    }
  }
  /**
   * resets the color of the element
   */
  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'textarea-primary',
      'textarea-secondary',
      'textarea-success',
      'textarea-warning',
      'textarea-error',
      'textarea-neutral',
      'textarea-info',
      'textarea-accent'
    );
  }
  /**
   * resets the size of the element
   */
  private resetSize() {
    this.el.nativeElement.classList.remove(
      'textarea-xs',
      'textarea-sm',
      'textarea-md',
      'textarea-lg'
    );
  }
  /**
   * resets the variant of the element
   */
  private resetVariant() {
    this.el.nativeElement.classList.remove(
      'textarea-ghost',
      'textarea-bordered'
    );
  }
  /**
   * resets the status of the element
   */
  private resetStatus(): void {
    this.el.nativeElement.classList.remove(
      'textarea-success',
      'textarea-error'
    );
  }
}
