import {
  Directive,
  ElementRef,
  Optional,
  Renderer2,
  Self,
  untracked,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DaiColor, DaiSize, SizeManager } from '@hilali/ng-daisy/common';
import { BaseInput } from '../../base-input';

@Directive({
  selector:
    'input:not([type="file"]):not([type="range"]):not([type="radio"]):not([type="checkbox"]), input:not([type="file"]):not([type="range"]):not([type="radio"]):not([type="checkbox"])[daiTextInput]',
  exportAs: 'daiFileInput',
  standalone: true,
  providers: [{ provide: SizeManager, useClass: SizeManager }],
})
export class TextInput extends BaseInput {
  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional()
    @Self()
    formControl?: FormControlDirective
  ) {
    super(el, renderer, formControl);
    renderer.addClass(this.el.nativeElement, 'input');
    renderer.addClass(this.el.nativeElement, 'input-bordered');
    renderer.addClass(this.el.nativeElement, 'input-neutral');
    renderer.addClass(this.el.nativeElement, 'input-md');
  }

  /**
   * the value of the input
   */
  get value(): string | Date | number | null {
    if (this.el.nativeElement.type === 'date') {
      return this.el.nativeElement.valueAsDate;
    } else if (this.el.nativeElement.type === 'number') {
      return this.el.nativeElement.valueAsNumber;
    } else {
      return this.el.nativeElement.value;
    }
  }

  /**
   * The name of the file input.
   */
  get name(): string {
    return this.el.nativeElement.name;
  }

  /**
   * resets input color
   */
  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'input-primary',
      'input-secondary',
      'input-neutral',
      'input-info',
      'input-success',
      'input-warning',
      'input-error'
    );
  }

  protected override get _defaultClasses(): string[] {
    return [
      'input',
      'input-bordered',
      'input-neutral',
      'input-md',
      'input-default',
    ];
  }

  /**
   * updates element color
   * @param color
   */
  protected updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `input-${color}`);
  }
  /**
   * updates element status
   * @param status
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
  /**
   * sets the color of the element
   * @param el
   * @param color
   * @param prefix
   */
  protected override updateSize(size: DaiSize): void {
    this.el.nativeElement.classList.remove(
      'input-xs',
      'input-sm',
      'input-md',
      'input-lg'
    );
    this.renderer.addClass(this.el.nativeElement, `input-${size}`);
  }
  /**
   * sets the color of the element
   * @param el
   * @param color
   */
  protected updateVariant(variant: 'ghost' | 'bordered'): void {
    if (variant === 'ghost') {
      this.renderer.removeClass(this.el.nativeElement, 'input-bordered');
      this.renderer.addClass(this.el.nativeElement, 'input-ghost');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'input-ghost');
      this.renderer.addClass(this.el.nativeElement, 'input-bordered');
    }
  }
}
