import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  InjectionToken,
  Input,
  QueryList,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { AccordionItem } from './accordion-item';
import { AccordionManager } from './accordion-manager';

export const DAI_ACCORDION: InjectionToken<Accordion> =
  new InjectionToken<Accordion>('daiAccordion');

@Directive({
  selector: 'dai-accordion, [daiAccordion]',
  exportAs: 'daiAccordion',
  standalone: true,
  providers: [
    { provide: DAI_ACCORDION, useExisting: Accordion },
    { provide: AccordionManager, useClass: AccordionManager },
  ],
})
export class Accordion implements AfterContentInit {
  @ContentChildren(AccordionItem, {
    read: AccordionItem,
    emitDistinctChangesOnly: true,
  })
  items!: QueryList<AccordionItem>;

  /**
   * Whether the accordion items are joined or not.
   */
  @Input() set join(joined: boolean) {
    this.joined.set(joined);
  }
  /**
   * The icon to use for the accordion items.
   */
  @Input({ alias: 'icon' }) set _icon(icon: 'plus' | 'arrow' | null) {
    this.icon.set(icon);
  }

  /**
   * Whether the accordion items can be opened simultaneously or not.
   */
  @Input({ alias: 'multiple' }) set _multiple(multiple: boolean) {
    this.multiple.set(multiple);
    this.manager.multiple = multiple;
  }

  /**
   * Whether the accordion items are joined or not.
   */
  public joined: WritableSignal<boolean> = signal(false);
  /**
   * The icon to use for the accordion items.
   *
   * this is the icon displayed at the end of the accordion title.
   */
  public icon: WritableSignal<'plus' | 'arrow' | null> = signal('arrow');
  /**
   * Whether the accordion items can be opened simultaneously or not.
   */
  public multiple: WritableSignal<boolean> = signal(false);

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    public readonly manager: AccordionManager
  ) {
    effect(() => {
      if (this.joined()) {
        this.el.nativeElement.classList.add('join', 'join-vertical', 'w-full');
        this.items.forEach((item) => item.makeJoined());
      } else {
        this.el.nativeElement.classList.remove('join', 'join-vertical');
        this.items.forEach((item) => item.makeUnjoined());
      }
    });

    effect(() => {
      this.items.forEach((item) => item.setIcon(this.icon()));
    });
  }

  ngAfterContentInit(): void {
    this.items.forEach((item) => this.manager.register(item));
  }
}
