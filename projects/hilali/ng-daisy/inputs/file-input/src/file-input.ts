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
import { BaseInput } from '@hilali/ng-daisy/inputs';

@Directive({
  selector: 'input[type="file"], input[type="file"][daiFileInput]',
  exportAs: 'daiFileInput',
  standalone: true,
  providers: [{ provide: SizeManager, useClass: SizeManager }],
})
export class FileInput extends BaseInput {
  constructor(
    el: ElementRef<HTMLInputElement>,
    renderer: Renderer2,
    @Optional() @Self() formControl: FormControlDirective
  ) {
    super(el, renderer, formControl);
    this.renderer.addClass(this.el.nativeElement, 'file-input');
  }

  /**
   * The files currently selected in this input.
   */
  get files(): FileList | null {
    return this.el.nativeElement.files;
  }

  /**
   * The name of the file input.
   */
  get name(): string {
    return this.el.nativeElement.name;
  }

  protected override get _defaultClasses(): string[] {
    return [
      'file-input',
      'file-input-bordered',
      'file-input-neutral',
      'file-input-md',
    ];
  }

  protected override updateColor(color: DaiColor): void {
    this.el.nativeElement.classList.remove(
      'file-input-primary',
      'file-input-secondary',
      'file-input-success',
      'file-input-warning',
      'file-input-error',
      'file-input-neutral',
      'file-input-info'
    );
    this.renderer.addClass(this.el.nativeElement, `file-input-${color}`);
  }

  protected override updateSize(size: DaiSize): void {
    this.el.nativeElement.classList.remove(
      'file-input-xs',
      'file-input-sm',
      'file-input-md',
      'file-input-lg'
    );
    this.renderer.addClass(this.el.nativeElement, `file-input-${size}`);
  }

  protected override updateVariant(variant: 'ghost' | 'bordered'): void {
    this.el.nativeElement.classList.remove(
      'file-input-ghost',
      'file-input-bordered'
    );
    this.renderer.addClass(this.el.nativeElement, `file-input-${variant}`);
  }

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
}
