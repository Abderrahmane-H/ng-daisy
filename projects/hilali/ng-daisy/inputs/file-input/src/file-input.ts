import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import {
  ColorManager,
  DaiColor,
  DaiSize,
  SizeManager,
} from '@hilali/ng-daisy/common';

@Directive({
  selector: 'input[type="file"], input[type="file"][daiFileInput]',
  exportAs: 'daiFileInput',
  standalone: true,
  providers: [{ provide: SizeManager, useClass: SizeManager }],
})
export class FileInput extends ColorManager {
  @Input() set size(size: DaiSize) {
    this.sizeManager.setSize(this.el.nativeElement, size, 'file-input');
  }

  @Input() set color(v: DaiColor) {
    this.setColor(this.el.nativeElement, v, 'file-input');
  }

  @Input() set variant(v: 'ghost' | 'bordered' | 'default') {
    if (v === 'ghost') {
      this.renderer.removeClass(this.el.nativeElement, 'file-input-bordered');
      this.renderer.addClass(this.el.nativeElement, 'file-input-ghost');
    } else if (v === 'bordered') {
      this.renderer.removeClass(this.el.nativeElement, 'file-input-ghost');
      this.renderer.addClass(this.el.nativeElement, 'file-input-bordered');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'file-input-ghost');
      this.renderer.removeClass(this.el.nativeElement, 'file-input-bordered');
    }
  }

  constructor(
    private readonly el: ElementRef<HTMLInputElement>,
    private readonly renderer: Renderer2,
    private readonly sizeManager: SizeManager
  ) {
    super(renderer);
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
}
