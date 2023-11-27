import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'dai-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
})
export class Avatar {
  @ViewChild('avatarContainer', { static: true, read: ElementRef })
  avatarContainer!: ElementRef<HTMLDivElement>;
  /**
   * sets the presence indicator of the avatar
   */
  @Input()
  set presence(presence: Presence) {
    if (presence === 'online') {
      this.setOnline();
    } else if (presence === 'offline') {
      this.setOffline();
    } else {
      this.removePresenceIndicator();
    }
  }
  /**
   * determines if the avatar should be outlined or not
   */
  @Input() set outline(value: boolean) {
    if (value) {
      this.makeOutlined();
    } else {
      this.makeBorderless();
    }
  }

  /**
   * sets the shape of the avatar
   * @param {'rounded' | 'square'} value
   * @default 'square'
   */
  @Input() set shape(value: 'rounded' | 'square') {
    if (value == 'rounded') {
      this.makeRounded();
    } else {
      this.makeSquare();
    }
  }

  /**
   * width of the avatar in rem unit
   * @param {number} value
   * @default 4rem
   */
  @Input() set size(value: number) {
    // we remove the default size of 4rem (w-16)
    this.renderer.removeClass(this.avatarContainer.nativeElement, 'w-16');
    this.renderer.setStyle(
      this.avatarContainer.nativeElement,
      'width',
      `${value}rem`
    );
  }

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef<HTMLElement>
  ) {
    this.renderer.addClass(this.el.nativeElement, 'avatar');
  }

  /**
   * adds the online indicator
   */
  setOnline(): void {
    this.renderer.removeClass(this.el.nativeElement, 'offline');
    this.renderer.addClass(this.el.nativeElement, 'online');
  }

  /**
   * removes the online indicator
   */
  setOffline(): void {
    this.renderer.removeClass(this.el.nativeElement, 'online');
    this.renderer.addClass(this.el.nativeElement, 'offline');
  }

  /**
   * removes the online and offline indicator
   */
  removePresenceIndicator(): void {
    this.renderer.removeClass(this.el.nativeElement, 'online');
    this.renderer.removeClass(this.el.nativeElement, 'offline');
  }

  /**
   * sets the avatar to rounded
   */
  makeRounded(): void {
    this.avatarContainer.nativeElement.classList.add('rounded-full');
  }

  /**
   * sets the avatar to square
   */
  makeSquare(): void {
    this.avatarContainer.nativeElement.classList.remove('rounded-full');
  }
  /**
   * sets the avatar to outlined, adds a ring to the avatar
   */
  makeOutlined(): void {
    this.avatarContainer.nativeElement.classList.add(
      'ring',
      'ring-primary',
      'ring-offset',
      'base-100',
      'ring-offset-2'
    );
  }
  /**
   * sets the avatar to borderless, removes the ring from the avatar
   */
  makeBorderless(): void {
    this.avatarContainer.nativeElement.classList.remove(
      'ring',
      'ring-primary',
      'ring-offset',
      'base-100',
      'ring-offset-2'
    );
  }
}

export type Presence = 'online' | 'offline' | null;
