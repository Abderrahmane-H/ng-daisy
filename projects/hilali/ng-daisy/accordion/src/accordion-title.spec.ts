import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Accordion } from './accordion';
import { AccordionContent } from './accordion-content';
import { AccordionItem } from './accordion-item';
import { AccordionTitle } from './accordion-title';

@Component({
  standalone: true,
  selector: 'test-accordion-title',
  template: `
    <dai-accordion>
      <dai-accordion-item>
        <dai-accordion-title>test</dai-accordion-title>
        <dai-accordion-content>test</dai-accordion-content>
      </dai-accordion-item>
    </dai-accordion>
  `,
  imports: [AccordionTitle, Accordion, AccordionItem, AccordionContent],
})
class TestAccordionTitle {}

describe('AccordionTitle', () => {
  let fixture: ComponentFixture<TestAccordionTitle>;
  let accordionTitleElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAccordionTitle],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionTitle);
    accordionTitleElement = fixture.debugElement.query(
      By.directive(AccordionTitle)
    ).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionTitleElement).toBeTruthy();
  });

  it('should have proper classes', () => {
    expect(accordionTitleElement.classList).toContain('collapse-title');
    expect(accordionTitleElement.classList).toContain('text-xl');
    expect(accordionTitleElement.classList).toContain('font-medium');
    expect(accordionTitleElement.classList).toContain('pointer');
  });

  it('should toggle the accordion item', () => {
    const accordionItem = fixture.debugElement
      .query(By.directive(AccordionItem))
      .injector.get(AccordionItem);
    expect(accordionItem).toBeDefined();

    accordionTitleElement.click();
    expect(accordionItem._opened).toBeTrue();

    accordionTitleElement.click();
    expect(accordionItem._opened).toBeFalse();
  });
});
