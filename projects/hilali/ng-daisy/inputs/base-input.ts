import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { FormControlDirective } from '@angular/forms';
import { DaiColor, DaiSize } from '@hilali/ng-daisy/common';

@Directive() // added to avoid error : this classe uses an angular feature please add an angular feature decorator
export abstract class BaseInput implements OnInit {
  @Input() set size(size: DaiSize) {
    this._size.set(size);
  }

  @Input() set color(v: DaiColor) {
    this._color.set(v);
  }

  @Input() set variant(v: 'ghost' | 'bordered') {
    this._variant.set(v);
  }

  @Input() set status(v: 'success' | 'error' | 'default') {
    this._status.set(v);
  }

  @Input() set disabled(v: boolean) {
    this._disabled.set(v);
  }

  constructor(
    protected readonly el: ElementRef<HTMLInputElement>,
    protected readonly renderer: Renderer2,
    protected readonly formControl?: FormControlDirective
  ) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add(...this._defaultClasses);
    this.formControl?.control?.statusChanges?.subscribe((status) => {
      if (status === 'VALID') {
        this._status.set('success');
      } else if (status === 'INVALID') {
        this._status.set('error');
      } else {
        this._status.set('default');
      }
    });
  }

  /**
   * The status of the input, the default status applies the color se by the color input
   * @default 'default'
   */
  readonly _status: WritableSignal<'success' | 'error' | 'default'> =
    signal('default');
  /**
   * The size of the input
   * @default 'md'
   */
  readonly _size: WritableSignal<DaiSize> = signal('md');
  /**
   * The color of the input
   * @default 'neutral'
   */
  readonly _color: WritableSignal<DaiColor> = signal('neutral');
  /**
   * The variant of the input
   * @default 'bordered'
   */
  readonly _variant: WritableSignal<'ghost' | 'bordered'> = signal('bordered');
  /**
   * The disabled state of the input
   */
  readonly _disabled: WritableSignal<boolean> = signal(false);

  private readonly statusEffect = effect(() => {
    this.updateStatus(this._status());
  });

  private readonly colorEffect = effect(() => {
    this.updateColor(this._color());
  });

  private readonly sizeEffect = effect(() => {
    this.updateSize(this._size());
  });

  private readonly variantEffect = effect(() => {
    this.updateVariant(this._variant());
  });

  private readonly disabledEffect = effect(() => {
    this.toggleDisabled(this._disabled());
  });

  protected abstract get _defaultClasses(): string[];

  /**
   * updates the color of the current element
   * @param color
   */
  protected abstract updateColor(color: DaiColor): void;
  /**
   * updates the size of the current element
   * @param size
   */
  protected abstract updateSize(size: DaiSize): void;
  /**
   * updates the variant of the current element
   * @param variant
   */
  protected abstract updateVariant(variant: 'ghost' | 'bordered'): void;
  /**
   * updates the status of the current element
   * @param status
   */
  protected abstract updateStatus(
    status: 'success' | 'error' | 'default'
  ): void;
  /**
   * toggles disable status
   * @param disabled
   */
  protected toggleDisabled(disabled: boolean): void {
    if (disabled) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
}
