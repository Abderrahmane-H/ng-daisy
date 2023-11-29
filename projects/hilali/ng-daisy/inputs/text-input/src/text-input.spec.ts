import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TextInput } from './text-input';

@Component({
  selector: 'dai-test',
  template: `<input type="text" daiTextInput [formControl]="formControl" />`,
  imports: [TextInput, ReactiveFormsModule],
  standalone: true,
})
export class TextInputTest {
  formControl = new FormControl<string | null>(null, [Validators.required]);
}

describe('FileInput', () => {
  let textInput: TextInput;
  let fixture: ComponentFixture<TextInputTest>;
  let testComponent: TextInputTest;
  let textInputEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInput],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputTest);
    textInput = fixture.debugElement
      .query(By.directive(TextInput))
      .injector.get(TextInput);
    textInputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    testComponent = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(textInput).toBeTruthy();
    expect(textInputEl).toBeTruthy();
  });

  it('Should have class input', () => {
    expect(textInputEl.classList).toContain('input');
  });

  describe('color', () => {
    it('Should have color neutral by default', () => {
      expect(textInputEl.classList).toContain('input-neutral');
    });

    it('should set the color to primary', () => {
      textInput.color = 'primary';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-primary');
    });

    it('should set the color to secondary', () => {
      textInput.color = 'secondary';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-secondary');
    });

    it('should set the color to accent', () => {
      textInput.color = 'accent';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-accent');
    });

    it('should set the color to neutral', () => {
      textInput.color = 'neutral';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-neutral');
    });

    it('should set the color to info', () => {
      textInput.color = 'info';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-info');
    });

    it('should set the color to success', () => {
      textInput.color = 'success';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-success');
    });

    it('should set the color to warning', () => {
      textInput.color = 'warning';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-warning');
    });

    it('should set the color to error', () => {
      textInput.color = 'error';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-error');
    });

    it('should set the color to base-100', () => {
      textInput.color = 'base-100';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-base-100');
    });

    it('should set the color to base-200', () => {
      textInput.color = 'base-200';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-base-200');
    });

    it('should set the color to base-300', () => {
      textInput.color = 'base-300';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-base-300');
    });
  });

  describe('size', () => {
    it('Should have size md by default', () => {
      expect(textInputEl.classList).toContain('input-md');
    });

    it('should set the size to xsmall', () => {
      textInput.size = 'xs';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-xs');
    });

    it('should set the size to small', () => {
      textInput.size = 'sm';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-sm');
    });

    it('should set the size to meduim', () => {
      textInput.size = 'md';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-md');
    });

    it('should set the size to large', () => {
      textInput.size = 'lg';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-lg');
    });
  });

  describe('variant', () => {
    it('Should have variant bordered by default', () => {
      expect(textInputEl.classList).toContain('input-bordered');
    });

    it('should set the variant to bordered', () => {
      textInput.variant = 'bordered';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-bordered');
    });

    it('should set the variant to ghost', () => {
      textInput.variant = 'ghost';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-ghost');
    });
  });

  describe('status', () => {
    it('Should have status default by default', () => {
      expect(textInputEl.classList).toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to default', () => {
      textInput.status = 'default';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to success', () => {
      textInput.status = 'success';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to error', () => {
      textInput.status = 'error';
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });
  });

  describe('disabled', () => {
    it('Should not have disabled by default', () => {
      expect(textInputEl.hasAttribute('disabled')).toBeFalsy();
    });

    it('should set the disabled to true', () => {
      textInput.disabled = true;
      fixture.detectChanges();
      expect(textInputEl.hasAttribute('disabled')).toBeTruthy();
    });

    it('should set the disabled to false', () => {
      textInput.disabled = false;
      fixture.detectChanges();
      expect(textInputEl.hasAttribute('disabled')).toBeFalsy();
    });
  });

  describe('@angular/forms compatibility', () => {
    it('should set the status to success when the formControl is valid', () => {
      testComponent.formControl.setValue('test');
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to error when the formControl is invalid', () => {
      testComponent.formControl.setValue(null);
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to default when the formControl is pending', () => {
      testComponent.formControl.setValue(null);
      testComponent.formControl.markAsPending();
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to default and add attribute disabled when the formControl is disabled', () => {
      testComponent.formControl.setValue(null);
      testComponent.formControl.disable();
      fixture.detectChanges();
      expect(textInputEl.hasAttribute('disabled')).toBeTruthy();
      expect(textInputEl.classList).toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to default and success when the formControl is re-enabled', () => {
      testComponent.formControl.setValue('test');
      testComponent.formControl.disable();
      testComponent.formControl.enable();
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-success'); // since the value is valid
      expect(textInputEl.hasAttribute('disabled')).toBeFalsy();
      expect(textInputEl.classList).not.toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-error');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });

    it('should set the status to default and error when the formControl is re-enabled', () => {
      testComponent.formControl.setValue(null);
      testComponent.formControl.disable();
      testComponent.formControl.enable();
      fixture.detectChanges();
      expect(textInputEl.classList).toContain('input-error'); // since the value is invalid
      expect(textInputEl.hasAttribute('disabled')).toBeFalsy();
      expect(textInputEl.classList).not.toContain('input-neutral');
      expect(textInputEl.classList).not.toContain('input-success');
      expect(textInputEl.classList).not.toContain('input-warning');
      expect(textInputEl.classList).not.toContain('input-info');
      expect(textInputEl.classList).not.toContain('input-primary');
      expect(textInputEl.classList).not.toContain('input-secondary');
      expect(textInputEl.classList).not.toContain('input-accent');
    });
  });
});
