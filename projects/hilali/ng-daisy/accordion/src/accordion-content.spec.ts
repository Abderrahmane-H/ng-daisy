import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Accordion } from './accordion';
import { AccordionContent } from './accordion-content';
import { AccordionItem } from './accordion-item';
import { AccordionTitle } from './accordion-title';

@Component({
  standalone: true,
  selector: 'test-accordion-content',
  template: `
    <dai-accordion>
      <dai-accordion-item>
        <dai-accordion-title>test</dai-accordion-title>
        <dai-accordion-content>test</dai-accordion-content>
      </dai-accordion-item>
    </dai-accordion>
  `,
  imports: [AccordionContent, Accordion, AccordionItem, AccordionTitle],
})
class TestAccordionContent {}

describe('AccordionContent', () => {
  let accordionContent: AccordionContent;
  let accordionContentElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAccordionContent],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TestAccordionContent);
    accordionContent = fixture.debugElement
      .query(By.directive(AccordionContent))
      .injector.get(AccordionContent);
    accordionContentElement = fixture.debugElement.query(
      By.directive(AccordionContent)
    ).nativeElement;
  });

  it('should create', () => {
    expect(accordionContent).toBeTruthy();
  });

  it('should have proper classes', () => {
    expect(accordionContentElement.classList).toContain('collapse-content');
  });
});
