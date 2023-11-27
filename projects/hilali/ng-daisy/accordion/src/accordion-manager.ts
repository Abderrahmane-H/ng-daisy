import { Injectable } from '@angular/core';
import { AccordionItem } from './accordion-item';

@Injectable({ providedIn: 'any' })
export class AccordionManager {
  multiple: boolean = false;
  private readonly items: Array<AccordionItem> = [];

  get length(): number {
    return this.items.length;
  }
  /**
   * Register an accordion item
   * @param item
   */
  register(item: AccordionItem): void {
    let exists = false;
    this.items.forEach((i) => {
      if (i.id === item.id) {
        exists = true;
      }
    });
    if (exists) return;
    const id = `dai-accordion-item-${this.length + 1}`;
    item.id = id;
    this.items.push(item);
  }
  /**
   * Unregister an accordion item
   * @param item
   */
  unregister(item: AccordionItem): void {
    this.items.forEach((i, index) => {
      if (i.id === item.id) {
        this.items.splice(index, 1);
      }
    });
  }

  /**
   * Close all accordion items except the one passed in params
   * @param item
   */
  closeOthers(item: AccordionItem): void {
    this.items.forEach((i) => {
      if (i.id !== item.id) {
        i.close();
      }
    });
  }

  /**
   * Close all accordion items
   */
  closeAll(): void {
    this.items.forEach((i) => i.close());
  }

  /**
   * Open all accordion items
   */
  openAll(): void {
    this.items.forEach((i) => i.open());
  }

  /**
   * Toggle the accordion item
   * @param item
   */
  toggle(item: AccordionItem): void {
    if (item._opened) {
      this.close(item);
    } else {
      this.open(item);
    }
  }

  /**
   * Open the accordion item
   * @param item
   */
  open(item: AccordionItem): void {
    if (this.multiple) {
      item.open();
    } else {
      this.closeOthers(item);
      item.open();
    }
  }

  /**
   * Close the accordion item
   * @param item
   */
  close(item: AccordionItem): void {
    item.close();
  }
}
