import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { ColorManager, DaiColor } from '@hilali/ng-daisy/common';

@Directive({
  standalone: true,
  selector: 'dai-badge, [daiBadge]',
  exportAs: 'daiBadge',
})
export class Badge extends ColorManager {
  @Input() set color(value: DaiColor | null) {
    if (value != null) {
      this.setColor(this.el.nativeElement, value, 'badge');
    } else {
      this.resetColor(this.el.nativeElement, 'badge');
    }
  }

  @Input() set variant(value: 'outline' | 'fill' | null) {
    if (value === 'outline') {
      this.renderer.addClass(this.el.nativeElement, 'badge-outline');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'badge-outline');
    }
  }

  @Input() set size(value: 'xs' | 'sm' | 'md' | 'lg' | null) {
    if (value) {
      this.el.nativeElement.classList.remove(
        'badge-xs',
        'badge-sm',
        'badge-md',
        'badge-lg'
      );
      this.renderer.addClass(this.el.nativeElement, `badge-${value}`);
    } else {
      this.el.nativeElement.classList.remove(
        'badge-xs',
        'badge-sm',
        'badge-md',
        'badge-lg'
      );
      this.el.nativeElement.classList.add('badge-md');
    }
  }

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {
    super(renderer);
    this.el.nativeElement.classList.add('badge', 'badge-md');
  }
}
