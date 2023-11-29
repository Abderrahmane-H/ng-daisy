import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Textarea } from './textarea';

@Component({
  selector: 'dai-test',
  template: `<textarea daiTextarea [formControl]="formControl"></textarea>`,
  standalone: true,
  imports: [Textarea, ReactiveFormsModule],
})
export class TestTextarea {
  formControl = new FormControl<string>('', {
    validators: [Validators.required],
  });
}

describe('Textarea', () => {
  let textarea: Textarea;
  let testComponent: TestTextarea;
  let textareaEl: HTMLTextAreaElement;
  let fixture: ComponentFixture<TestTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTextarea],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTextarea);
    textarea = fixture.debugElement
      .query(By.directive(Textarea))
      .injector.get(Textarea);
    testComponent = fixture.componentInstance;
    textareaEl = fixture.debugElement.query(By.css('textarea')).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(textarea).toBeTruthy();
  });

  it('should have default classes', () => {
    expect(textareaEl.classList).toContain('textarea');
    expect(textareaEl.classList).toContain('textarea-neutral');
    expect(textareaEl.classList).toContain('textarea-md');
    expect(textareaEl.classList).toContain('textarea-bordered');
    expect(textareaEl.classList).not.toContain('textarea-primary');
    expect(textareaEl.classList).not.toContain('textarea-secondary');
    expect(textareaEl.classList).not.toContain('textarea-success');
    expect(textareaEl.classList).not.toContain('textarea-warning');
    expect(textareaEl.classList).not.toContain('textarea-error');
    expect(textareaEl.classList).not.toContain('textarea-info');
    expect(textareaEl.classList).not.toContain('textarea-xs');
    expect(textareaEl.classList).not.toContain('textarea-sm');
    expect(textareaEl.classList).not.toContain('textarea-lg');
  });

  describe('color', () => {
    it('should set the color to primary', () => {
      textarea.color = 'primary';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-primary');
    });

    it('should set the color to secondary', () => {
      textarea.color = 'secondary';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-secondary');
    });

    it('should set the color to success', () => {
      textarea.color = 'success';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-success');
    });

    it('should set the color to warning', () => {
      textarea.color = 'warning';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-warning');
    });

    it('should set the color to error', () => {
      textarea.color = 'error';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-error');
    });

    it('should set the color to info', () => {
      textarea.color = 'info';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-info');
    });

    it('should set the color to neutral', () => {
      textarea.color = 'neutral';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-neutral');
    });

    it('should set the color to accent', () => {
      textarea.color = 'accent';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-accent');
    });
  });

  describe('size', () => {
    it('should set the size to small', () => {
      textarea.size = 'sm';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-sm');
    });

    it('should set the size to large', () => {
      textarea.size = 'lg';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-lg');
    });

    it('should set the size to md', () => {
      textarea.size = 'md';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-md');
    });

    it('should set the size to xs', () => {
      textarea.size = 'xs';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-xs');
    });
  });

  describe('variant', () => {
    it('should set the variant to ghost', () => {
      textarea.variant = 'ghost';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-ghost');
    });

    it('should set the variant to bordered', () => {
      textarea.variant = 'bordered';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-bordered');
    });
  });

  describe('status', () => {
    it('should set the status to success', () => {
      textarea.status = 'success';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-success');
      expect(textareaEl.classList).not.toContain('textarea-error');
    });

    it('should set the status to error', () => {
      textarea.status = 'error';
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-error');
      expect(textareaEl.classList).not.toContain('textarea-success');
    });
  });

  describe('disabled', () => {
    it('should set the disabled to true', () => {
      textarea.disabled = true;
      fixture.detectChanges();
      expect(textareaEl.getAttribute('disabled')).toBeTruthy();
    });

    it('should set the disabled to false', () => {
      textarea.disabled = false;
      fixture.detectChanges();
      expect(textareaEl.getAttribute('disabled')).toBeFalsy();
    });
  });

  describe('@angular/forms integration', () => {
    it("should set the value to 'test'", () => {
      testComponent.formControl.setValue('test');
      fixture.detectChanges();
      expect(textareaEl.value).toEqual('test');
    });

    it("should set the value to 'test' and update the value", () => {
      testComponent.formControl.setValue('test');
      fixture.detectChanges();
      expect(textareaEl.value).toEqual('test');
      testComponent.formControl.setValue('test2');
      fixture.detectChanges();
      expect(textareaEl.value).toEqual('test2');
    });

    it('Should set status to success when the formControl is valid', () => {
      testComponent.formControl.setValue('test');
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-success');
    });

    it('Should set status to error when the formControl is invalid', () => {
      testComponent.formControl.setValue(null);
      fixture.detectChanges();
      expect(textareaEl.classList).toContain('textarea-error');
    });
  });
});
