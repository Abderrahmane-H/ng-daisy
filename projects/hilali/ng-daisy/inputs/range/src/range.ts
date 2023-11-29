import {
  Directive,
  ElementRef,
  Input,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DaiColor, DaiSize, SizeManager } from '@hilali/ng-daisy/common';
import { BaseInput } from '@hilali/ng-daisy/inputs';

@Directive({
  selector: 'input[type="range"], input[type="range"][daiRange]',
  standalone: true,
  providers: [{ provide: SizeManager, useClass: SizeManager }],
})
export class Range extends BaseInput {
  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional() @Self() control: FormControlDirective
  ) {
    super(el, renderer, control);
  }

  protected override get _defaultClasses(): string[] {
    return ['range', 'range-neutral', 'range-md'];
  }
  protected override updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `range-${color}`);
  }
  protected override updateSize(size: DaiSize): void {
    this.el.nativeElement.classList.remove(
      'range-xs',
      'range-sm',
      'range-md',
      'range-lg'
    );
    this.renderer.addClass(this.el.nativeElement, `range-${size}`);
  }

  protected override updateStatus(
    status: 'success' | 'error' | 'default'
  ): void {
    this.resetColor();
    if (status === 'success' || status === 'error') {
      this.renderer.addClass(this.el.nativeElement, `range-${status}`);
    }
  }

  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'range-primary',
      'range-secondary',
      'range-success',
      'range-warning',
      'range-error',
      'range-neutral',
      'range-accent',
      'range-info'
    );
  }

  /**
   * this element has no variants
   */
  @Input({ alias: 'variant' }) _variant_: 'ghost' | 'bordered' = 'bordered';
  protected override updateVariant(variant: 'ghost' | 'bordered'): void {}
}
