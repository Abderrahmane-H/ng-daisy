import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import {
  ColorManager,
  DaiColor,
  DaiSize,
  SizeManager,
} from '@hilali/ng-daisy/common';

@Directive({
  selector: 'input[type="range"], input[type="range"][daiRange]',
  standalone: true,
  providers: [{ provide: SizeManager, useClass: SizeManager }],
})
export class Range extends ColorManager {
  @Input() set size(size: DaiSize) {
    this.sizeManager.setSize(this.el.nativeElement, size, 'range');
  }

  @Input() set color(v: DaiColor) {
    this.setColor(this.el.nativeElement, v, 'range');
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private readonly sizeManager: SizeManager
  ) {
    super(renderer);
    this.sizeManager.setDefault('md');
    this.renderer.addClass(this.el.nativeElement, 'range');
  }
}
