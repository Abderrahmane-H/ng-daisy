import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: 'dai-collapse-title, |daiCollapseTitle]',
  standalone: true,
})
export class CollapseTitle implements OnDestroy {
  private readonly _listeners: Array<() => void> = [];

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.el.nativeElement.classList.add(
      'collapse-title',
      'text-xl',
      'font-medium',
      'cursor-pointer'
    );
    this.renderer.setAttribute(this.el.nativeElement, 'tabindex', '0');
  }

  /**
   * registers a listner on the title element
   * @param {string} event an HTML element event
   * @param handler the callback to be called when the event is triggered
   */
  public registerListener(event: string, handler: () => void): void {
    this._listeners.push(
      this.renderer.listen(this.el.nativeElement, event, handler)
    );
  }

  ngOnDestroy(): void {
    this._listeners.forEach((unlisten) => unlisten());
  }
}
