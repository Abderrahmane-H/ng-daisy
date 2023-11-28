import { Injectable, Renderer2 } from '@angular/core';

export type DaiSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Injectable({ providedIn: 'any' })
export class SizeManager {
  private _default: DaiSize = 'sm';

  constructor(private readonly renderer: Renderer2) {}

  public setDefault(size: DaiSize) {
    this._default = size;
  }

  public setSize(element: HTMLElement, size: DaiSize, prefix: string): void {
    this.reset(element, prefix);
    this.renderer.addClass(element, `${prefix}${size}`);
  }

  private reset(element: HTMLElement, prefix: string): void {
    this.renderer.removeClass(element, `${prefix}-xs`);
    this.renderer.removeClass(element, `${prefix}-sm`);
    this.renderer.removeClass(element, `${prefix}-md`);
    this.renderer.removeClass(element, `${prefix}-lg`);
  }
}
