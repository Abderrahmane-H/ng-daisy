import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Select } from './select';

@Component({
  selector: 'dai-test',
  template: `<select daiSelect [formControl]="formControl">
    <option value="1" selected>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>`,
  standalone: true,
  imports: [Select, ReactiveFormsModule],
})
class TestSelect {
  formControl = new FormControl<'1' | '2' | '3' | null>('1', {
    validators: [Validators.required],
  });
}

describe('Select', () => {
  let select: Select;
  let testComponent: TestSelect;
  let selectEl: HTMLSelectElement;
  let fixture: ComponentFixture<TestSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSelect],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelect);
    select = fixture.debugElement
      .query(By.directive(Select))
      .injector.get(Select);
    testComponent = fixture.componentInstance;
    selectEl = fixture.debugElement.query(By.css('select')).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(select).toBeTruthy();
  });

  it('should have default classes', () => {
    expect(selectEl.classList).toContain('select');
    expect(selectEl.classList).toContain('select-neutral');
    expect(selectEl.classList).toContain('select-md');
    expect(selectEl.classList).toContain('select-bordered');
    expect(selectEl.classList).not.toContain('select-primary');
    expect(selectEl.classList).not.toContain('select-secondary');
    expect(selectEl.classList).not.toContain('select-success');
    expect(selectEl.classList).not.toContain('select-warning');
    expect(selectEl.classList).not.toContain('select-error');
    expect(selectEl.classList).not.toContain('select-info');
    expect(selectEl.classList).not.toContain('select-xs');
    expect(selectEl.classList).not.toContain('select-sm');
    expect(selectEl.classList).not.toContain('select-lg');
  });

  describe('color', () => {
    it('should set the color to primary', () => {
      select.color = 'primary';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-primary');
    });

    it('should set the color to secondary', () => {
      select.color = 'secondary';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-secondary');
    });

    it('should set the color to success', () => {
      select.color = 'success';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-success');
    });

    it('should set the color to warning', () => {
      select.color = 'warning';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-warning');
    });

    it('should set the color to error', () => {
      select.color = 'error';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-error');
    });

    it('should set the color to info', () => {
      select.color = 'info';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-info');
    });

    it('Should set the color to accent', () => {
      select.color = 'accent';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-accent');
    });

    it('should set color to neutral', () => {
      select.color = 'neutral';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-neutral');
    });
  });

  describe('size', () => {
    it('should set the size to xs', () => {
      select.size = 'xs';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-xs');
    });

    it('should set the size to sm', () => {
      select.size = 'sm';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-sm');
    });

    it('should set the size to md', () => {
      select.size = 'md';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-md');
    });

    it('should set the size to lg', () => {
      select.size = 'lg';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-lg');
    });
  });

  describe('variant', () => {
    it('should set the variant to bordered', () => {
      select.variant = 'bordered';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-bordered');
    });

    it('should set the variant to ghost', () => {
      select.variant = 'ghost';
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-ghost');
    });
  });

  describe('disabled', () => {
    it('should set disabled to true', () => {
      select.disabled = true;
      fixture.detectChanges();
      expect(selectEl.disabled).toBeTruthy();
    });

    it('should set disabled to false', () => {
      select.disabled = false;
      fixture.detectChanges();
      expect(selectEl.disabled).toBeFalsy();
    });
  });

  describe('@angular/forms integration', () => {
    it('should set the value to 1', () => {
      expect(selectEl.value).toBe('1');
    });

    it('should set the value to test1', () => {
      testComponent.formControl.setValue('3');
      fixture.detectChanges();
      expect(selectEl.value).toBe('3');
    });

    it('should set the value to 2', () => {
      testComponent.formControl.setValue('2');
      fixture.detectChanges();
      expect(selectEl.value).toBe('2');
    });

    it('Should set status to error when value is invalid', () => {
      testComponent.formControl.setValue(null);
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-error');
    });

    it('Should set status to success when value is valid', () => {
      testComponent.formControl.setValue('2');
      fixture.detectChanges();
      expect(selectEl.classList).toContain('select-success');
    });
  });
});
