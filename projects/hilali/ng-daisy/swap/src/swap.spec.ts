import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Swap } from './swap';

describe('Swap', () => {
  let component: Swap;
  let fixture: ComponentFixture<Swap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Swap],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Swap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default animation of rotate', () => {
    expect(component._animation()).toBe('rotate');
    expect(
      fixture.debugElement
        .query(By.css('label'))
        .nativeElement.classList.contains('swap-rotate')
    ).toBeTrue();
  });

  it('should have a flip animation', () => {
    component.animation = 'flip';
    fixture.detectChanges();
    expect(component._animation()).toBe('flip');
    expect(
      fixture.debugElement
        .query(By.css('label'))
        .nativeElement.classList.contains('swap-flip')
    ).toBeTrue();
  });
});
