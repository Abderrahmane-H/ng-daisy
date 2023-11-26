import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  WritableSignal,
  signal,
} from '@angular/core';
import { ModalAction } from './modal-actions';
import { ModalContent } from './modal-content';

@Component({
  selector: 'dai-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],
})
export class Modal {
  @ContentChild(ModalContent, { read: TemplateRef })
  modalContentTemplate: TemplateRef<unknown> | null = null;
  @ContentChild(ModalAction, { read: TemplateRef })
  modalActionTemplate: TemplateRef<unknown> | null = null;

  /**
   * @description whether the modal is opened or not
   */
  @Input()
  set opened(opened: boolean) {
    this._opened.set(opened);
  }
  /**
   * @description the vertical position of the modal
   */
  @Input()
  set position(position: 'top' | 'center' | 'bottom') {
    this._position.set(position);
  }
  /**
   * @description whether the modal has a backdrop or not
   * @default false
   * @type {boolean}
   */
  @Input()
  set hasBackdrop(hasBackdrop: boolean) {
    this._hasBackdrop.set(hasBackdrop);
  }

  /**
   * @description triggered when the modal is closed
   * @type {EventEmitter<void>}
   * @returns {void}
   * @memberof Modal
   * @example
   * ```html
   * <dai-modal (closed)="onModalClosed()"></dai-modal>
   * ```
   * ```ts
   * onModalClosed() {
   *  console.log('modal closed');
   * }
   * ```
   **/
  @Output() closed: EventEmitter<void> = new EventEmitter();

  _opened: WritableSignal<boolean> = signal(false);
  _position: WritableSignal<'top' | 'center' | 'bottom'> = signal('center');
  _hasBackdrop: WritableSignal<boolean> = signal(false);

  /**
   * @description triggered when the modal is closed by backdrop click or close button.
   * @returns {void}
   * @memberof Modal
   *
   */
  onClose(): void {
    this._opened.set(false);
    this.closed.emit();
  }
}
