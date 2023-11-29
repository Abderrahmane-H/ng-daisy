import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Checkbox } from './checkbox';

@Component({
  selector: 'dai-test',
  template: `<input type="checkbox" daiCheckbox [formControl]="formControl" />`,
  standalone: true,
  imports: [Checkbox, ReactiveFormsModule],
})
export class TestCheckbox {
  formControl = new FormControl<boolean>(false);
}

describe('Checkbox', () => {
  let checkbox: Checkbox;
  let testComponent: TestCheckbox;
  let checkboxEl: HTMLInputElement;
  let fixture: ComponentFixture<TestCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCheckbox],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckbox);
    checkbox = fixture.debugElement
      .query(By.directive(Checkbox))
      .injector.get(Checkbox);
    testComponent = fixture.componentInstance;
    checkboxEl = fixture.debugElement.query(By.css('input')).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(checkbox).toBeTruthy();
  });

  it('should have class checkbox', () => {
    expect(checkboxEl.classList).toContain('checkbox');
    expect(checkboxEl.classList).toContain('checkbox-neutral');
    expect(checkboxEl.classList).not.toContain('checkbox-primary');
    expect(checkboxEl.classList).not.toContain('checkbox-secondary');
    expect(checkboxEl.classList).not.toContain('checkbox-success');
    expect(checkboxEl.classList).not.toContain('checkbox-warning');
    expect(checkboxEl.classList).not.toContain('checkbox-error');
    expect(checkboxEl.classList).not.toContain('checkbox-info');
  });

  describe('color', () => {
    it('should set the color to primary', () => {
      checkbox.color = 'primary';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-primary');
    });

    it('should set the color to secondary', () => {
      checkbox.color = 'secondary';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-secondary');
    });

    it('should set the color to success', () => {
      checkbox.color = 'success';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-success');
    });

    it('should set the color to warning', () => {
      checkbox.color = 'warning';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-warning');
    });

    it('should set the color to info', () => {
      checkbox.color = 'info';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-info');
    });
  });

  describe('size', () => {
    it('should set the size to small', () => {
      checkbox.size = 'sm';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-sm');
    });

    it('should set the size to large', () => {
      checkbox.size = 'lg';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-lg');
    });

    it('should set the size to md', () => {
      checkbox.size = 'md';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-md');
    });

    it('should set the size to xs', () => {
      checkbox.size = 'xs';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-xs');
    });
  });

  describe('status', () => {
    it('should set the status to success', () => {
      checkbox.status = 'success';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-success');
      expect(checkboxEl.classList).not.toContain('checkbox-error');
      expect(checkboxEl.classList).not.toContain('checkbox-warning');
      expect(checkboxEl.classList).not.toContain('checkbox-info');
      expect(checkboxEl.classList).not.toContain('checkbox-neutral');
      expect(checkboxEl.classList).not.toContain('checkbox-primary');
      expect(checkboxEl.classList).not.toContain('checkbox-secondary');
    });

    it('should set the status to error', () => {
      checkbox.status = 'error';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox-error');
      expect(checkboxEl.classList).not.toContain('checkbox-success');
      expect(checkboxEl.classList).not.toContain('checkbox-warning');
      expect(checkboxEl.classList).not.toContain('checkbox-info');
      expect(checkboxEl.classList).not.toContain('checkbox-neutral');
      expect(checkboxEl.classList).not.toContain('checkbox-primary');
      expect(checkboxEl.classList).not.toContain('checkbox-secondary');
    });

    it('should set the status to default', () => {
      checkbox.status = 'default';
      fixture.detectChanges();
      expect(checkboxEl.classList).toContain('checkbox');
      expect(checkboxEl.classList).toContain('checkbox-neutral');
      expect(checkboxEl.classList).not.toContain('checkbox-success');
      expect(checkboxEl.classList).not.toContain('checkbox-warning');
      expect(checkboxEl.classList).not.toContain('checkbox-info');
      expect(checkboxEl.classList).not.toContain('checkbox-primary');
      expect(checkboxEl.classList).not.toContain('checkbox-secondary');
      expect(checkboxEl.classList).not.toContain('checkbox-error');
    });
  });

  describe('disabled', () => {
    it('should be disabled', () => {
      checkbox.disabled = true;
      fixture.detectChanges();
      expect(checkboxEl.hasAttribute('disabled')).toBeTruthy();
    });

    it('should not be disabled', () => {
      checkbox.disabled = false;
      fixture.detectChanges();
      expect(checkboxEl.hasAttribute('disabled')).toBeFalsy();
    });
  });

  describe('@angular/forms integration', () => {
    it('should set the value to true', () => {
      testComponent.formControl.setValue(true);
      fixture.detectChanges();
      expect(checkboxEl.checked).toBeTruthy();
    });

    it('should set the value to false', () => {
      testComponent.formControl.setValue(false);
      fixture.detectChanges();
      expect(checkboxEl.checked).toBeFalsy();
    });

    it('should set the value to true when clicked', () => {
      checkboxEl.click();
      fixture.detectChanges();
      expect(checkboxEl.checked).toBeTruthy();
      expect(testComponent.formControl.value).toBeTruthy();
    });

    it('should set the value to false when clicked', () => {
      checkboxEl.click();
      fixture.detectChanges();
      checkboxEl.click();
      fixture.detectChanges();
      expect(checkboxEl.checked).toBeFalsy();
      expect(testComponent.formControl.value).toBeFalsy();
    });

    it('should be disbaled when the formControl is disabled', () => {
      testComponent.formControl.disable();
      fixture.detectChanges();
      expect(checkboxEl.disabled).toBeTruthy();
    });
  });
});
