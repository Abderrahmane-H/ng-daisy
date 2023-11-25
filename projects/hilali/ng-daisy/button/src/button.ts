import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import { DaiColor } from "@hilali/ng-daisy/common";

@Directive({
  standalone: true,
  selector: 'button[daiButton], button[dai-button]'
})
export class Button {
  /**
   * button type, defines the button style
   */
  @Input()
  set type(type: "fill" | "outline" | "ghost") {
    if (type === "fill") {
      this.renderer.removeClass(this.el.nativeElement, "btn-outline");
      this.renderer.removeClass(this.el.nativeElement, "btn-ghost");
    } else if (type === "outline") {
      this.renderer.removeClass(this.el.nativeElement, "btn-ghost");
      this.renderer.addClass(this.el.nativeElement, "btn-outline");
    } else if (type === "ghost") {
      this.renderer.removeClass(this.el.nativeElement, "btn-outline");
      this.renderer.addClass(this.el.nativeElement, "btn-ghost");
    }
  }
  /**
   * button color, defines the button color
   *
   * if the type is fill, then the color is the background color
   * if the type is outline, then the color is the border color
   * if the type is text, then the color is the text color
   */
  @Input()
  set color(color: DaiColor | "none") {
    if (color === "none") {
      this.resetColor();
    } else {
      this.renderer.addClass(this.el.nativeElement, `btn-${color}`);
    }
  }
  /**
   * button size, defines the button size
   */
  @Input()
  set size(size: "xs" | "sm" | "md" | "lg") {
    this.renderer.addClass(this.el.nativeElement, `btn-${size}`);
  }
  /**
   * button disabled state
   */
  @Input()
  set disabled(disabled: boolean) {
    if (disabled) {
      this.renderer.addClass(this.el.nativeElement, "btn-disabled");
    } else {
      this.renderer.removeClass(this.el.nativeElement, "btn-disabled");
    }
  }
  /**
   * button loading state
   */
  @Input()
  set loading(loading: boolean) {
    if (loading) {
      this.createLoadingSpinner();
    } else {
      this.removeLoadingSpinner();
    }
  }
  /**
   * button shape
   * @see https://daisyui.com/components/button/
   * normal: is the normal button shape
   * round: is the rounded ratio of 1:1
   * square: is the square button shape with a ratio of 1:1
   *
   * @default normal
   */
  @Input()
  set shape(shape: "circle" | "square" |"normal") {
    if (shape === "circle") {
      this.renderer.addClass(this.el.nativeElement, "btn-circle");
    } else if (shape === "square") {
      this.renderer.addClass(this.el.nativeElement, "btn-square");
    } else {
      this.renderer.removeClass(this.el.nativeElement, "btn-circle");
      this.renderer.removeClass(this.el.nativeElement, "btn-square");
    }
  }

  constructor(private readonly el: ElementRef<HTMLElement>, private readonly renderer: Renderer2 ) {
    this.renderer.addClass(this.el.nativeElement, "btn");
  }

  /**
   * resets the button color
   * @private
   */
  private resetColor(): void {
    this.renderer.removeClass(this.el.nativeElement, "btn-primary");
    this.renderer.removeClass(this.el.nativeElement, "btn-secondary");
    this.renderer.removeClass(this.el.nativeElement, "btn-accent");
    this.renderer.removeClass(this.el.nativeElement, "btn-neutral");
    this.renderer.removeClass(this.el.nativeElement, "btn-info");
    this.renderer.removeClass(this.el.nativeElement, "btn-success");
    this.renderer.removeClass(this.el.nativeElement, "btn-warning");
    this.renderer.removeClass(this.el.nativeElement, "btn-error");
    this.renderer.removeClass(this.el.nativeElement, "btn-base-100");
    this.renderer.removeClass(this.el.nativeElement, "btn-base-200");
    this.renderer.removeClass(this.el.nativeElement, "btn-base-300");
  }

  /**
   * creates the loading element
   * @private
   */
  private createLoadingSpinner(): void {
    const loading = this.renderer.createElement("span");
    this.renderer.addClass(loading, "loading");
    this.renderer.addClass(loading, "loading-spinner");
    this.renderer.appendChild(this.el.nativeElement, loading)
  }

  /**
   * removes the loading element
   * @private
   */
  private removeLoadingSpinner(): void {
    const loading = this.el.nativeElement.querySelector(".loading.loading-spinner");
    if (loading) this.el.nativeElement.removeChild(loading);
  }
}
