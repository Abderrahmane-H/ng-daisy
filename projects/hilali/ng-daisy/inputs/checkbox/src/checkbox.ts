import {
  Directive,
  ElementRef,
  Input,
  Optional,
  Renderer2,
  Self,
  untracked,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DaiColor, DaiSize } from '../../../../../../dist/hilali/ng-daisy';
import { BaseInput } from '../../base-input';

@Directive({
  selector: 'input[type="checkbox"][daiCheckbox]',
  standalone: true,
})
export class Checkbox extends BaseInput {
  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional() @Self() formControl: FormControlDirective
  ) {
    super(el, renderer, formControl);
  }

  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'checkbox-primary',
      'checkbox-secondary',
      'checkbox-success',
      'checkbox-warning',
      'checkbox-error',
      'checkbox-neutral',
      'checkbox-info'
    );
  }
  /**
   * the list of default classes the element should have at creation
   */
  protected override get _defaultClasses(): string[] {
    return ['checkbox'];
  }
  /**
   * updates the color of the element
   * @param color the color to apply to the element
   */
  protected override updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `checkbox-${color}`);
  }
  /**
   * updates the size of the element
   * @param size the size to apply to the element
   */
  protected override updateSize(size: DaiSize): void {
    this.el.nativeElement.classList.remove(
      'checkbox-xs',
      'checkbox-sm',
      'checkbox-md',
      'checkbox-lg'
    );
    this.renderer.addClass(this.el.nativeElement, `checkbox-${size}`);
  }
  /**
   * updates the status of the lement
   * @param status the status to apply to the element
   */
  protected override updateStatus(
    status: 'success' | 'error' | 'default'
  ): void {
    if (status === 'success') {
      this.updateColor('success');
    } else if (status === 'error') {
      this.updateColor('error');
    } else {
      this.updateColor(untracked(this._color));
    }
  }

  /*************not supported for this element */
  @Input({ required: false, alias: '__variant__' })
  override set variant(v: 'ghost' | 'bordered') {
    console.warn('The checkbox component does not have variants');
  }
  protected override updateVariant(variant: 'ghost' | 'bordered'): void {
    // this does not support variant input
  }
}
