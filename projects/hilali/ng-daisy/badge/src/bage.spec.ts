import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Badge } from './badge';

@Component({
  standalone: true,
  selector: 'dai-test',
  template: `<dai-badge>Badge</dai-badge>`,
  imports: [Badge],
})
export class TestComponent {}

describe('badge', () => {
  let component: Badge;
  let fixture: ComponentFixture<TestComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement
      .query(By.directive(Badge))
      .injector.get(Badge);
    el = fixture.debugElement.query(By.css('dai-badge')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default size of md', () => {
    fixture.detectChanges();
    expect(el.classList).toContain('badge-md');
  });

  it('should have a default color', () => {
    fixture.detectChanges();
    expect(el.classList).not.toContain('badge-primary');
    expect(el.classList).not.toContain('badge-secondary');
    expect(el.classList).not.toContain('badge-accent');
    expect(el.classList).not.toContain('badge-neutral');
    expect(el.classList).not.toContain('badge-info');
    expect(el.classList).not.toContain('badge-success');
    expect(el.classList).not.toContain('badge-warning');
    expect(el.classList).not.toContain('badge-error');
    expect(el.classList).not.toContain('badge-base-100');
    expect(el.classList).not.toContain('badge-base-200');
    expect(el.classList).not.toContain('badge-base-300');
    expect(el.classList).toContain('badge');
  });

  it('should have have "fill" variant by default', () => {
    fixture.detectChanges();
    expect(el.classList).toContain('badge');
    expect(el.classList).not.toContain('badge-outline');
  });

  describe('size', () => {
    it('should set the size to xs', () => {
      component.size = 'xs';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-xs');
    });

    it('should set the size to sm', () => {
      component.size = 'sm';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-sm');
    });

    it('should set the size to md', () => {
      component.size = 'md';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-md');
    });

    it('should set the size to lg', () => {
      component.size = 'lg';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-lg');
    });
  });

  describe('color', () => {
    it('should set the color to secondary', () => {
      component.color = 'secondary';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-secondary');
    });

    it('should set the color to accent', () => {
      component.color = 'accent';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-accent');
    });

    it('should set the color to neutral', () => {
      component.color = 'neutral';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-neutral');
    });

    it('should set the color to info', () => {
      component.color = 'info';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-info');
    });

    it('should set the color to success', () => {
      component.color = 'success';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-success');
    });

    it('should set the color to warning', () => {
      component.color = 'warning';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-warning');
    });

    it('should set the color to error', () => {
      component.color = 'error';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-error');
    });

    it('should set the color to base-100', () => {
      component.color = 'base-100';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-base-100');
    });

    it('should set the color to base-200', () => {
      component.color = 'base-200';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-base-200');
    });

    it('should set the color to base-300', () => {
      component.color = 'base-300';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-base-300');
    });

    it('should set the color to primary', () => {
      component.color = 'primary';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-primary');
    });
  });

  describe('variant', () => {
    it('should set the variant to outline', () => {
      component.variant = 'outline';
      fixture.detectChanges();
      expect(el.classList).toContain('badge-outline');
    });

    it('should set the variant to fill', () => {
      component.variant = 'fill';
      fixture.detectChanges();
      expect(el.classList).not.toContain('badge-outline');
    });
  });
});
