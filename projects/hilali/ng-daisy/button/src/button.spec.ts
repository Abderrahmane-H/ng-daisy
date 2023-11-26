import { Component, ElementRef, ViewChild } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { Button } from "./button";

describe('Button', () => {
  let fixture: ComponentFixture<Testcomponent>;
  let testcomponent: Testcomponent;
  let button: Button;
  let buttonElement: HTMLButtonElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [ Testcomponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(Testcomponent)
    testcomponent = fixture.componentInstance;
    fixture.detectChanges();

    button = testcomponent.button;
    buttonElement = testcomponent.buttonElement.nativeElement;
  });

  it('should create an instance', () => {
    expect(testcomponent).toBeTruthy();
    expect(button).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  describe('type', () => {
    it('should set the type to fill', () => {
      button.variant = "fill";
      fixture.detectChanges();
      expect(buttonElement.classList.contains("btn-outline")).toBe(false);
      expect(buttonElement.classList.contains("btn-ghost")).toBe(false);
    });
    it('should set the type to outline', () => {
      button.variant = "outline";
      expect(buttonElement.classList.contains("btn-outline")).toBe(true);
    });
    it('should set the type to ghost', () => {
      button.variant = "ghost";
      expect(buttonElement.classList.contains("btn-ghost")).toBe(true);
    });
  })

  describe('color', () => {
    it('should set the color to primary', () => {
      button.color = "primary";
      expect(buttonElement.classList.contains("btn-primary")).toBe(true);
    });
    it('should set the color to secondary', () => {
      button.color = "secondary";
      expect(buttonElement.classList.contains("btn-secondary")).toBe(true);
    });
    it('should set the color to accent', () => {
      button.color = "accent";
      expect(buttonElement.classList.contains("btn-accent")).toBe(true);
    });
    it('should set the color to neutral', () => {
      button.color = "neutral";
      expect(buttonElement.classList.contains("btn-neutral")).toBe(true);
    });
    it('should set the color to info', () => {
      button.color = "info";
      expect(buttonElement.classList.contains("btn-info")).toBe(true);
    });
    it('should set the color to success', () => {
      button.color = "success";
      expect(buttonElement.classList.contains("btn-success")).toBe(true);
    });
    it('should set the color to warning', () => {
      button.color = "warning";
      expect(buttonElement.classList.contains("btn-warning")).toBe(true);
    });
    it('should set the color to error', () => {
      button.color = "error";
      expect(buttonElement.classList.contains("btn-error")).toBe(true);
    });
    it('should set the color to base-100', () => {
      button.color = "base-100";
      expect(buttonElement.classList.contains("btn-base-100")).toBe(true);
    });
    it('should set the color to base-200', () => {
      button.color = "base-200";
      expect(buttonElement.classList.contains("btn-base-200")).toBe(true);
    });
    it('should set the color to base-300', () => {
      button.color = "base-300";
      expect(buttonElement.classList.contains("btn-base-300")).toBe(true);
    });
    it('should reset color', () => {
      button.color = "none";
      expect(buttonElement.classList.contains("btn-primary")).toBe(false);
      expect(buttonElement.classList.contains("btn-secondary")).toBe(false);
      expect(buttonElement.classList.contains("btn-accent")).toBe(false);
      expect(buttonElement.classList.contains("btn-neutral")).toBe(false);
      expect(buttonElement.classList.contains("btn-info")).toBe(false);
      expect(buttonElement.classList.contains("btn-success")).toBe(false);
      expect(buttonElement.classList.contains("btn-warning")).toBe(false);
      expect(buttonElement.classList.contains("btn-error")).toBe(false);
      expect(buttonElement.classList.contains("btn-base-100")).toBe(false);
      expect(buttonElement.classList.contains("btn-base-200")).toBe(false);
      expect(buttonElement.classList.contains("btn-base-300")).toBe(false);
    });
  });

  describe('size', () => {
    it('should set the size to large', () => {
      button.size = "lg";
      expect(buttonElement.classList.contains("btn-lg")).toBe(true);
    });
    it('should set the size to meduim', () => {
      button.size = "md";
      expect(buttonElement.classList.contains("btn-md")).toBe(true);
    });
    it('should  set size to small', () => {
      button.size = "sm";
      expect(buttonElement.classList.contains("btn-sm")).toBe(true);
    });
    it ("should set size to extra small", () => {
      button.size = "xs";
      expect(buttonElement.classList.contains("btn-xs")).toBe(true);
    });
  });

  describe('shape', () => {
    it('should set the shape to circle', () => {
      button.shape = "circle";
      expect(buttonElement.classList.contains("btn-circle")).toBe(true);
    });
    it('should set the shape to square', () => {
      button.shape = "square";
      expect(buttonElement.classList.contains("btn-square")).toBe(true);
    });
    it('should set the shape to normal', () => {
      button.shape = "normal";
      expect(buttonElement.classList.contains("btn-circle")).toBe(false);
      expect(buttonElement.classList.contains("btn-square")).toBe(false);
    });
  });

  describe('loading', () => {
    it('should have loading spinner when loading is true', () => {
      button.loading = true;
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css(".loading.loading-spinner"))).toBeDefined();
    });
    it('should not have a loading spinner when loading is false', () => {
      button.loading = false;
      fixture.detectChanges();
      expect(buttonElement.querySelector(".loading.loading-spinner")).toBeNull();
    });
  });

  describe('disabled', () => {
    it('should be disabled when disabled is true', () => {
      button.disabled = true;
      fixture.detectChanges();
      expect(buttonElement.classList.contains("btn-disabled")).toBe(true);
    });
    it('should not be disabled when disabled is false', () => {
      button.disabled = false;
      fixture.detectChanges();
      expect(buttonElement.classList.contains("btn-disabled")).toBe(false);
    });
  });
})

@Component({
  standalone: true,
  imports: [Button],
  selector: 'test-component',
  template: `
    <button dai-button #btn>button</button>
  `,
  styleUrls: [],
})
class Testcomponent {
  @ViewChild(Button, {read: Button}) button!: Button;
  @ViewChild("btn", {static: true}) buttonElement!: ElementRef<HTMLButtonElement>;
}
