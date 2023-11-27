import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Accordion } from './accordion';
import { AccordionContent } from './accordion-content';
import { AccordionItem } from './accordion-item';
import { AccordionTitle } from './accordion-title';

@Component({
  standalone: true,
  selector: 'test-accordion-item',
  template: `
    <dai-accordion>
      <dai-accordion-item>
        <dai-accordion-title>test</dai-accordion-title>
        <dai-accordion-content>test</dai-accordion-content>
      </dai-accordion-item>
    </dai-accordion>
  `,
  imports: [AccordionItem, Accordion, AccordionTitle, AccordionContent],
})
class TestAccordionItem {}

describe('AccordionItem', () => {
  let fixture: ComponentFixture<TestAccordionItem>;
  let accordionItem: AccordionItem;
  let accordionItemElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAccordionItem],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionItem);
    accordionItem = fixture.debugElement
      .query(By.directive(AccordionItem))
      .injector.get(AccordionItem);

    accordionItemElement = fixture.debugElement.query(
      By.directive(AccordionItem)
    ).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionItemElement).toBeTruthy();
  });

  it('should have proper classes', () => {
    expect(accordionItemElement.classList).toContain('collapse');
    expect(accordionItemElement.classList).toContain('bg-base-200');
  });

  it('should have a proper id', () => {
    expect(accordionItemElement.id).toContain('dai-accordion-item-1');
  });

  it('should have a proper aria-expanded attribute', () => {
    expect(accordionItemElement.getAttribute('aria-expanded')).toBe('false');

    accordionItem.open();
    expect(accordionItemElement.getAttribute('aria-expanded')).toBe('true');

    accordionItem.close();
    expect(accordionItemElement.getAttribute('aria-expanded')).toBe('false');
  });

  it('should open the accordion item', () => {
    accordionItem.open();
    expect(accordionItem._opened).toBeTrue();
  });

  it('should close the accordion item', () => {
    accordionItem.open();

    accordionItem.close();
    expect(accordionItem._opened).toBeFalse();
  });

  /*it('should have a proper aria-controls attribute', () => {
    expect(accordionItemElement.getAttribute('aria-controls')).toBe(
      'dai-accordion-item-1-content'
    );
  });

  it('should have a proper aria-labelledby attribute', () => {
    expect(accordionItemElement.getAttribute('aria-labelledby')).toBe(
      'dai-accordion-item-1-title'
    );
  });

  it('should have a proper role attribute', () => {
    expect(accordionItemElement.getAttribute('role')).toBe('button');
  });*/

  it('Should have proper classes when joined', () => {
    accordionItem.makeJoined();
    expect(accordionItemElement.classList).toContain('join-item');
    expect(accordionItemElement.classList).toContain('border');
    expect(accordionItemElement.classList).toContain('border-base-300');
  });

  it('Should have proper classes when unjoined', () => {
    accordionItem.makeUnjoined();
    expect(accordionItemElement.classList).not.toContain('join-item');
    expect(accordionItemElement.classList).not.toContain('border');
    expect(accordionItemElement.classList).not.toContain('border-base-300');
  });

  it('Should have proper classes when icon is plus', () => {
    accordionItem.setIcon('plus');
    expect(accordionItemElement.classList).toContain('collapse-plus');
    expect(accordionItemElement.classList).not.toContain('collapse-arrow');
  });

  it('Should have proper classes when icon is arrow', () => {
    accordionItem.setIcon('arrow');
    expect(accordionItemElement.classList).toContain('collapse-arrow');
    expect(accordionItemElement.classList).not.toContain('collapse-plus');
  });

  it('Should have proper classes when icon is null', () => {
    accordionItem.setIcon(null);
    expect(accordionItemElement.classList).not.toContain('collapse-arrow');
    expect(accordionItemElement.classList).not.toContain('collapse-plus');
  });

  it('Should have proper classes when opened input is set to true', () => {
    accordionItem.opened = true;
    expect(accordionItemElement.classList).toContain('collapse-open');
  });

  it('Should have proper classes when opened input is set to false', () => {
    accordionItem.opened = false;
    expect(accordionItemElement.classList).toContain('collapse-close');
  });
});
