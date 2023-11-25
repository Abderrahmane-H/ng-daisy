import { Directive, ElementRef, Injectable, Input, Renderer2 } from "@angular/core";

export type DaiColor = 'primary' | 'secondary' | "accent" | "neutral" | "info" | "success" |"warning" | "error" |"base-100" |"base-200" | "base-300";
export type DaiColorPalette = {[key in DaiColor]: string};
export type DaiTheme = "light"|"dark"|"cupcake"|"bumblebee"|"emerald"|"corporate"|"synthwave"|"retro"|"cyberpunk"|"valentine"|"halloween"|"garden"|"forest"|"aqua"|"lofi"|"pastel"|"fantasy"|"wireframe"|"black"|"luxury"|"dracula"|"cmyk"|"autumn"|"business"|"acid"|"lemonade"|"night"|"coffee"|"winter"|"dim"|"nord"|"sunset";

@Injectable({providedIn: 'root'})
export class DaiColorService {
  private colors: DaiColorPalette = {
    primary: '#3f51b5',
    secondary: '#f50057',
    accent: '#ff4081',
    neutral: '#8c8c8c',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
    "base-100": "#ffffff",
    "base-200": "#f5f5f5",
    "base-300": "#e0e0e0",
  }
  /**
   * returns the color value for the given color name
   * @param {DaiColor} color
   * @returns {string} color value
   */
  getColor(color: DaiColor): string {
    return this.colors[color];
  }
}

@Directive({
  standalone: true,
  selector: '[daiTheme], [dai-theme]'
})
export class ThemeProvider {

  @Input() theme: DaiTheme = "light";

  constructor(private readonly renderer: Renderer2, private readonly el: ElementRef) {
    this.renderer.setAttribute(this.el.nativeElement, 'data-theme', this.theme);
  }
}
