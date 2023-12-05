import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Collapse } from './collapse';
import { CollapseContent } from './collapse-body';
import { CollapseTitle } from './collapse-title';

@Component({
  selector: 'test-component',
  template: `<dai-collapse>
    <dai-collapse-title>title</dai-collapse-title>
    <dai-collapse-content>body</dai-collapse-content>
  </dai-collapse>`,
  standalone: true,
  imports: [Collapse, CollapseContent, CollapseTitle],
})
export class TestComponent {}

describe('collapse', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let collapseEl: HTMLElement;
  let collapse: Collapse;
  let title: CollapseTitle;
  let titleEl: HTMLElement;
  let content: CollapseContent;
  let contentEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    collapseEl = fixture.debugElement.query(
      By.directive(Collapse)
    ).nativeElement;
    collapse = fixture.debugElement
      .query(By.directive(Collapse))
      .injector.get(Collapse);

    title = fixture.debugElement
      .query(By.directive(CollapseTitle))
      .injector.get(CollapseTitle);
    titleEl = fixture.debugElement.query(
      By.css('dai-collapse-title')
    ).nativeElement;

    content = fixture.debugElement
      .query(By.directive(CollapseContent))
      .injector.get(CollapseContent);
    contentEl = fixture.debugElement.query(
      By.css('dai-collapse-content')
    ).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('title', () => {
    let title: CollapseTitle;
    let titleEl: HTMLElement;

    beforeEach(() => {
      title = fixture.debugElement
        .query(By.directive(CollapseTitle))
        .injector.get(CollapseTitle);
      titleEl = fixture.debugElement.query(
        By.css('dai-collapse-title')
      ).nativeElement;
    });

    it('should create', () => {
      expect(title).toBeTruthy();
    });

    it('Should have classes', () => {
      expect(titleEl.classList).toContain('collapse-title');
      expect(titleEl.classList).toContain('cursor-pointer');
      expect(titleEl.classList).toContain('text-xl');
      expect(titleEl.classList).toContain('font-medium');
    });

    it('should have tabindex', () => {
      expect(titleEl.getAttribute('tabindex')).toBe('0');
    });

    it('Should have one listener by default since it is used inside a collapse', () => {
      expect(title['_listeners'].length).toBe(1);
    });
  });

  describe('close/open', () => {
    it('should create', () => {
      expect(content).toBeTruthy();
      expect(title).toBeTruthy();
    });

    it('should open when the title is clicked', () => {
      titleEl.click();
      fixture.detectChanges();
      expect(collapse._opened).toBe(true);
      expect(collapseEl.getAttribute('aria-expanded')).toBe('true');
      expect(collapseEl.classList).toContain('collapse-open');
      expect(collapseEl.classList).not.toContain('collapse-close');
    });

    it('should close when the title is clicked', () => {
      titleEl.click();
      fixture.detectChanges(); // opened
      titleEl.click();
      fixture.detectChanges(); // should be closed ?
      expect(collapse._opened).toBe(false);
      expect(collapseEl.getAttribute('aria-expanded')).toBe('false');
      expect(collapseEl.classList).toContain('collapse-close');
      expect(collapseEl.classList).not.toContain('collapse-open');
    });

    it('should open when open input is set to true', () => {
      collapse.opened = true;
      fixture.detectChanges();
      expect(collapse._opened).toBe(true);
      expect(collapseEl.getAttribute('aria-expanded')).toBe('true');
      expect(collapseEl.classList).toContain('collapse-open');
      expect(collapseEl.classList).not.toContain('collapse-close');
    });

    it('should close when open input is set to false', () => {
      collapse.opened = false;
      fixture.detectChanges();
      expect(collapse._opened).toBe(false);
      expect(collapseEl.getAttribute('aria-expanded')).toBe('false');
      expect(collapseEl.classList).toContain('collapse-close');
      expect(collapseEl.classList).not.toContain('collapse-open');
    });
  });

  describe('icon', () => {
    it('should have ni icon by default', () => {
      expect(collapseEl.classList).not.toContain('collapse-plus');
      expect(collapseEl.classList).not.toContain('collapse-arrow');
    });

    it('should have an icon of arrow', () => {
      collapse.icon = 'arrow';
      fixture.detectChanges();
      expect(collapseEl.classList).toContain('collapse-arrow');
      expect(collapseEl.classList).not.toContain('collapse-plus');
    });

    it('should have an icon of plus', () => {
      collapse.icon = 'plus';
      fixture.detectChanges();
      expect(collapseEl.classList).toContain('collapse-plus');
      expect(collapseEl.classList).not.toContain('collapse-arrow');
    });

    it('should have no icon', () => {
      collapse.icon = 'none';
      fixture.detectChanges();
      expect(collapseEl.classList).not.toContain('collapse-plus');
      expect(collapseEl.classList).not.toContain('collapse-arrow');
    });
  });

  describe('id', () => {
    it('should have an id', () => {
      collapse.id = 'test';
      expect(collapseEl.id).toEqual('test');
    });
  });
});
