import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Radio } from './radio';

@Component({
  selector: 'dai-test',
  template: `
    <input type="radio" daiRadio value="test" [formControl]="formControl" />
    <input type="radio" daiRadio value="test1" [formControl]="formControl" />
  `,
  standalone: true,
  imports: [Radio, ReactiveFormsModule],
})
export class TestRadio {
  formControl = new FormControl<'test' | 'test1'>('test');
}

describe('Radio', () => {
  let radio: Radio;
  let testComponent: TestRadio;
  let radioEl: HTMLInputElement;
  let radioEl1: HTMLInputElement;
  let fixture: ComponentFixture<TestRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRadio],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRadio);
    radio = fixture.debugElement.query(By.directive(Radio)).injector.get(Radio);
    testComponent = fixture.componentInstance;
    radioEl = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
    radioEl1 = fixture.debugElement.queryAll(By.css('input'))[1].nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(radio).toBeTruthy();
  });

  it('should have default classes', () => {
    expect(radioEl.classList).toContain('radio');
    expect(radioEl.classList).toContain('radio-neutral');
    expect(radioEl.classList).toContain('radio-md');
    expect(radioEl.classList).not.toContain('radio-primary');
    expect(radioEl.classList).not.toContain('radio-secondary');
    expect(radioEl.classList).not.toContain('radio-success');
    expect(radioEl.classList).not.toContain('radio-warning');
    expect(radioEl.classList).not.toContain('radio-error');
    expect(radioEl.classList).not.toContain('radio-info');
    expect(radioEl.classList).not.toContain('radio-xs');
    expect(radioEl.classList).not.toContain('radio-sm');
    expect(radioEl.classList).not.toContain('radio-lg');
  });

  describe('color', () => {
    it('should set the color to primary', () => {
      radio.color = 'primary';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-primary');
      expect(radioEl.classList).not.toContain('radio-neutral');
      expect(radioEl.classList).not.toContain('radio-secondary');
      expect(radioEl.classList).not.toContain('radio-success');
      expect(radioEl.classList).not.toContain('radio-warning');
      expect(radioEl.classList).not.toContain('radio-error');
      expect(radioEl.classList).not.toContain('radio-info');
    });

    it('should set the color to secondary', () => {
      radio.color = 'secondary';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-secondary');
      expect(radioEl.classList).not.toContain('radio-primary');
      expect(radioEl.classList).not.toContain('radio-neutral');
      expect(radioEl.classList).not.toContain('radio-success');
      expect(radioEl.classList).not.toContain('radio-warning');
      expect(radioEl.classList).not.toContain('radio-error');
      expect(radioEl.classList).not.toContain('radio-info');
    });

    it('should set the color to success', () => {
      radio.color = 'success';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-success');
      expect(radioEl.classList).not.toContain('radio-primary');
      expect(radioEl.classList).not.toContain('radio-secondary');
      expect(radioEl.classList).not.toContain('radio-neutral');
      expect(radioEl.classList).not.toContain('radio-warning');
      expect(radioEl.classList).not.toContain('radio-error');
      expect(radioEl.classList).not.toContain('radio-info');
    });

    it('should set the color to warning', () => {
      radio.color = 'warning';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-warning');
      expect(radioEl.classList).not.toContain('radio-primary');
      expect(radioEl.classList).not.toContain('radio-secondary');
      expect(radioEl.classList).not.toContain('radio-success');
      expect(radioEl.classList).not.toContain('radio-neutral');
      expect(radioEl.classList).not.toContain('radio-error');
      expect(radioEl.classList).not.toContain('radio-info');
    });

    it('should set the color to error', () => {
      radio.color = 'error';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-error');
      expect(radioEl.classList).not.toContain('radio-primary');
      expect(radioEl.classList).not.toContain('radio-secondary');
      expect(radioEl.classList).not.toContain('radio-success');
      expect(radioEl.classList).not.toContain('radio-warning');
      expect(radioEl.classList).not.toContain('radio-neutral');
      expect(radioEl.classList).not.toContain('radio-info');
    });

    it('should set the color to info', () => {
      radio.color = 'info';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-info');
      expect(radioEl.classList).not.toContain('radio-primary');
      expect(radioEl.classList).not.toContain('radio-secondary');
      expect(radioEl.classList).not.toContain('radio-success');
      expect(radioEl.classList).not.toContain('radio-warning');
      expect(radioEl.classList).not.toContain('radio-error');
      expect(radioEl.classList).not.toContain('radio-neutral');
    });
  });

  describe('size', () => {
    it('should set the size to xs', () => {
      radio.size = 'xs';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-xs');
      expect(radioEl.classList).not.toContain('radio-sm');
      expect(radioEl.classList).not.toContain('radio-md');
      expect(radioEl.classList).not.toContain('radio-lg');
    });

    it('should set the size to sm', () => {
      radio.size = 'sm';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-sm');
      expect(radioEl.classList).not.toContain('radio-xs');
      expect(radioEl.classList).not.toContain('radio-md');
      expect(radioEl.classList).not.toContain('radio-lg');
    });

    it('should set the size to md', () => {
      radio.size = 'md';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-md');
      expect(radioEl.classList).not.toContain('radio-sm');
      expect(radioEl.classList).not.toContain('radio-xs');
      expect(radioEl.classList).not.toContain('radio-lg');
    });

    it('should set the size to lg', () => {
      radio.size = 'lg';
      fixture.detectChanges();
      expect(radioEl.classList).toContain('radio-lg');
      expect(radioEl.classList).not.toContain('radio-sm');
      expect(radioEl.classList).not.toContain('radio-md');
      expect(radioEl.classList).not.toContain('radio-xs');
    });
  });

  describe('disabled', () => {
    it('should set the disabled to true', () => {
      radio.disabled = true;
      fixture.detectChanges();
      expect(radioEl.disabled).toBeTrue();
    });

    it('should set the disabled to false', () => {
      radio.disabled = false;
      fixture.detectChanges();
      expect(radioEl.disabled).toBeFalse();
    });
  });

  describe('@angular/forms integration', () => {
    it('should set the value to test1', () => {
      testComponent.formControl.setValue('test1');
      fixture.detectChanges();
      expect(radioEl1.checked).toBeTruthy();
    });

    it('should set the value to test', () => {
      testComponent.formControl.setValue('test1');
      fixture.detectChanges();
      testComponent.formControl.setValue('test');
      expect(radioEl.checked).toBeTruthy();
    });

    it('should enable/disable radio buttons', () => {
      testComponent.formControl.disable();
      fixture.detectChanges();
      expect(radioEl.disabled).toBeTrue();
      expect(radioEl1.disabled).toBeTrue();
      testComponent.formControl.enable();
      fixture.detectChanges();
      expect(radioEl.disabled).toBeFalse();
      expect(radioEl1.disabled).toBeFalse();
    });
  });
});
