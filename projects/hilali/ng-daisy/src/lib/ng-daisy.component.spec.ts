import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDaisyComponent } from './ng-daisy.component';

describe('NgDaisyComponent', () => {
  let component: NgDaisyComponent;
  let fixture: ComponentFixture<NgDaisyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDaisyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgDaisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
