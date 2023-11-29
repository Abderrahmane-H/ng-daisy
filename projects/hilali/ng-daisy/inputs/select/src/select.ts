import {
  Directive,
  ElementRef,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { BaseInput } from '@hilali/ng-daisy/inputs/base-input';
import { DaiColor, DaiSize } from '../../../../../../dist/hilali/ng-daisy';

@Directive({
  selector: 'select[daiSelect]',
  standalone: true,
  exportAs: 'daiSelect',
})
export class Select extends BaseInput {
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
    return ['select', 'select-md', 'select-neutral', 'select-bordered'];
  }
  /**
   * updates the color of the element
   * @param color the color to apply to the element
   */
  protected override updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `select-${color}`);
  }
  /**
   * updates the size of the element
   * @param size the size to apply to the element
   */
  protected override updateSize(size: DaiSize): void {
    this.resetSize();
    this.renderer.addClass(this.el.nativeElement, `select-${size}`);
  }
  /**
   * updates the variant of the element
   * @param variant the variant to apply to the element
   */
  protected override updateVariant(variant: 'ghost' | 'bordered'): void {
    this.resetVariant();
    this.renderer.addClass(this.el.nativeElement, `select-${variant}`);
  }
  /**
   * updates the status of the element
   * @param status the status to apply to the element
   */
  protected override updateStatus(
    status: 'success' | 'error' | 'default'
  ): void {
    this.resetStatus();
    this.renderer.addClass(this.el.nativeElement, `select-${status}`);
  }
  /**
   * removes all color classes from the element
   */
  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'select-primary',
      'select-secondary',
      'select-success',
      'select-warning',
      'select-error',
      'select-neutral',
      'select-info',
      'select-accent'
    );
  }
  /**
   * removes all size classes from the element
   */
  private resetSize(): void {
    this.el.nativeElement.classList.remove(
      'select-xs',
      'select-sm',
      'select-md',
      'select-lg'
    );
  }
  /**
   * removes all variant classes from the element
   */
  private resetVariant(): void {
    this.el.nativeElement.classList.remove('select-ghost', 'select-bordered');
  }
  /**
   * removes all status classes from the element
   */
  private resetStatus(): void {
    this.el.nativeElement.classList.remove('select-success', 'select-error');
  }
}
