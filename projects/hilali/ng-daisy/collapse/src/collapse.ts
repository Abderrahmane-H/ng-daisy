import {
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { CollapseTitle } from './collapse-title';

@Directive({
  selector: 'dai-collapse, [daiCollapse]',
  exportAs: 'daiCollapse',
  standalone: true,
})
export class Collapse implements AfterContentInit {
  @ContentChild(CollapseTitle, { static: true, read: CollapseTitle })
  title!: CollapseTitle;

  @Input() set icon(value: 'plus' | 'arrow' | 'none') {
    this.setIcon(value);
  }

  /**
   * wether the collapse is expanded or not
   */
  @Input() set opened(value: boolean) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }

  /**
   * Triggered every time the collapse is opened or closed.
   */
  @Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  _opened: boolean = false;

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef<HTMLElement>
  ) {
    this.el.nativeElement.classList.add('collapse', 'bg-base-200');
  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
  }

  ngAfterContentInit(): void {
    // register a listener in the title to toggle the collapse
    this.title.registerListener('click', () => {
      if (this._opened) {
        this.close();
      } else {
        this.open();
      }
    });
  }

  /**
   * Open the accordion item.
   */
  open(): void {
    this.renderer.removeClass(this.el.nativeElement, 'collapse-close');
    this.renderer.addClass(this.el.nativeElement, 'collapse-open');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'true');
    this._opened = true;
    this.openedChange.emit(true);
  }

  /**
   * Close the accordion item.
   */
  close(): void {
    this.renderer.removeClass(this.el.nativeElement, 'collapse-open');
    this.renderer.addClass(this.el.nativeElement, 'collapse-close');
    this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', 'false');
    this._opened = false;
    this.openedChange.emit(false);
  }

  /**
   * Make the accordion item joined, this will remove any spacing between items.
   */
  makeJoined(): void {
    this.el.nativeElement.classList.add(
      'join-item',
      'border',
      'border-base-300'
    );
  }

  /**
   * Make the accordion item unjoined, this will add spacing between items.
   */
  makeUnjoined(): void {
    this.el.nativeElement.classList.remove(
      'join-item',
      'border',
      'border-base-300'
    );
  }
  /**
   * Set the icon of the accordion item.
   * @param {'plus' | 'arrow' | null} icon
   */
  setIcon(icon: 'plus' | 'arrow' | 'none' | null): void {
    if (icon === 'plus') {
      this.el.nativeElement.classList.remove('collapse-arrow');
      this.el.nativeElement.classList.add('collapse-plus');
    } else if (icon === 'arrow') {
      this.el.nativeElement.classList.add('collapse-arrow');
      this.el.nativeElement.classList.remove('collapse-plus');
    } else {
      this.el.nativeElement.classList.remove('collapse-plus');
      this.el.nativeElement.classList.remove('collapse-arrow');
    }
  }

  /**
   * adds an id to the accordion item
   */
  set id(value: string) {
    this.renderer.setProperty(this.el.nativeElement, 'id', value);
  }

  /**
   * returns the id of the accordion item
   */
  get id(): string {
    return this.el.nativeElement.id;
  }
}
