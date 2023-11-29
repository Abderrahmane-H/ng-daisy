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
import { BaseInput } from '@hilali/ng-daisy/inputs';

@Directive({
  selector: 'input[type="checkbox"][daiToggle]',
  standalone: true,
})
export class Toggle extends BaseInput {
  protected override get _defaultClasses(): string[] {
    return ['toggle', 'toggle-neutral', 'toggle-md'];
  }
  protected override updateColor(color: DaiColor): void {
    this.resetColor();
    this.renderer.addClass(this.el.nativeElement, `toggle-${color}`);
  }
  protected override updateSize(size: DaiSize): void {
    this.el.nativeElement.classList.remove(
      'toggle-xs',
      'toggle-sm',
      'toggle-md',
      'toggle-lg'
    );
    this.renderer.addClass(this.el.nativeElement, `toggle-${size}`);
  }
  protected override updateStatus(
    status: 'success' | 'error' | 'default'
  ): void {
    this.resetColor();
    if (status === 'success' || status === 'error') {
      this.renderer.addClass(this.el.nativeElement, `toggle-${status}`);
    }
  }

  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional() @Self() formControl: FormControlDirective
  ) {
    super(el, renderer, formControl);
  }

  private resetColor(): void {
    this.el.nativeElement.classList.remove(
      'toggle-primary',
      'toggle-secondary',
      'toggle-success',
      'toggle-warning',
      'toggle-error',
      'toggle-neutral',
      'toggle-info',
      'toggle-accent'
    );
  }
  // this element does not have vairants
  @Input({ alias: 'variant' }) __variant__: 'checkbox' | 'radio' = 'checkbox';
  protected override updateVariant(variant: 'ghost' | 'bordered'): void {}
}
