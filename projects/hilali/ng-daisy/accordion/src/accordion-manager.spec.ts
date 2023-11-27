import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accordion } from './accordion';
import { AccordionContent } from './accordion-content';
import { AccordionItem } from './accordion-item';
import { AccordionManager } from './accordion-manager';
import { AccordionTitle } from './accordion-title';

@Component({
  standalone: true,
  selector: 'test-accordion',
  imports: [
    CommonModule,
    Accordion,
    AccordionItem,
    AccordionTitle,
    AccordionContent,
  ],
  template: `
    <dai-accordion #accordion>
      <dai-accordion-item>
        <dai-accordion-title>Item 1</dai-accordion-title>
        <dai-accordion-content>Content 1</dai-accordion-content>
      </dai-accordion-item>
      <dai-accordion-item>
        <dai-accordion-title>Item 2</dai-accordion-title>
        <dai-accordion-content>Content 2</dai-accordion-content>
      </dai-accordion-item>
      <dai-accordion-item>
        <dai-accordion-title>Item 3</dai-accordion-title>
        <dai-accordion-content>Content 3</dai-accordion-content>
      </dai-accordion-item>
    </dai-accordion>
  `,
})
class TestAccordion {
  @ViewChild('accordion', { static: true, read: Accordion })
  accordion!: Accordion;

  @ViewChildren(AccordionItem, { read: AccordionItem })
  items: QueryList<AccordionItem> | undefined;
}

describe('AccordionManager', () => {
  let fixture: ComponentFixture<TestAccordion>;
  let manager: AccordionManager;
  let item1: AccordionItem;
  let item2: AccordionItem;
  let item3: AccordionItem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(TestAccordion);
    fixture.detectChanges();
    manager = fixture.componentInstance.accordion.manager;
    item1 = fixture.componentInstance.items?.get(0)!;
    item2 = fixture.componentInstance.items?.get(1)!;
    item3 = fixture.componentInstance.items?.get(2)!;
  });

  it('should have 3 registered accordion items', () => {
    expect(manager.length).toBe(3);
  });

  it('should unregister an item', () => {
    manager.unregister(item1);
    expect(manager.length).toBe(2);
  });

  it('should close all items except the one passed in params', () => {
    manager.open(item1);
    manager.closeOthers(item1);
    expect(item1._opened).toBe(true);
    expect(item2._opened).toBe(false);
    expect(item3._opened).toBe(false);
  });

  it('should close all items', () => {
    manager.closeAll();
    expect(item1._opened).toBe(false);
    expect(item2._opened).toBe(false);
    expect(item3._opened).toBe(false);
  });

  it('should open all items', () => {
    manager.openAll();
    expect(item1._opened).toBe(true);
    expect(item2._opened).toBe(true);
    expect(item3._opened).toBe(true);
  });

  it('should toggle an item', () => {
    manager.toggle(item1);
    expect(item1._opened).toBe(true);

    manager.toggle(item1);
    expect(item1._opened).toBe(false);
  });

  it('should open an item', () => {
    manager.open(item1);
    expect(item1._opened).toBe(true);
  });

  it('should close an item', () => {
    manager.close(item1);
    expect(item1._opened).toBe(false);
  });
});
