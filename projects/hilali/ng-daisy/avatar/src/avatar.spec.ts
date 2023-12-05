import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Avatar } from './avatar';

describe('AvatarComponent', () => {
  let component: Avatar;
  let fixture: ComponentFixture<Avatar>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avatar],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Avatar);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement as HTMLDivElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default size of 4rem', () => {
    fixture.detectChanges();
    expect(el.classList).toContain('w-16');
  });

  it('should have a default shape of square', () => {
    fixture.detectChanges();
    expect(el.classList).not.toContain('rounded-full');
  });

  it('should have no outline by default', () => {
    fixture.detectChanges();
    expect(el.classList).not.toContain('ring');
    expect(el.classList).not.toContain('ring-primary');
    expect(el.classList).not.toContain('ring-offset');
    expect(el.classList).not.toContain('base-100');
    expect(el.classList).not.toContain('ring-offset-2');
  });

  it('should have no presence insidcator by default', () => {
    fixture.detectChanges();
    expect(el.classList).not.toContain('offline');
    expect(el.classList).not.toContain('online');
  });

  describe('size', () => {
    it('should set the size to 2rem', () => {
      component.size = 2;
      fixture.detectChanges();
      expect(el.classList).not.toContain('w-16');
      // 32px = 2rem
      expect(el.clientWidth).toBe(32);
    });

    it('should set the size to 6rem', () => {
      component.size = 6;
      fixture.detectChanges();
      // 96 = 6rem
      expect(el.clientWidth).toBe(96);
    });
  });

  describe('shape', () => {
    it('should set the shape to rounded', () => {
      component.shape = 'rounded';
      fixture.detectChanges();
      expect(el.classList).toContain('rounded-full');
    });

    it('should set the shape to square', () => {
      component.shape = 'square';
      fixture.detectChanges();
      expect(el.classList).not.toContain('rounded-full');
    });
  });

  describe('outline', () => {
    it('should be outlined', () => {
      component.outline = true;
      fixture.detectChanges();
      expect(el.classList).toContain('ring');
      expect(el.classList).toContain('ring-primary');
      expect(el.classList).toContain('ring-offset');
      expect(el.classList).toContain('base-100');
      expect(el.classList).toContain('ring-offset-2');
    });

    it('should have no outline', () => {
      component.outline = false;
      fixture.detectChanges();
      expect(el.classList).not.toContain('ring');
      expect(el.classList).not.toContain('ring-primary');
      expect(el.classList).not.toContain('ring-offset');
      expect(el.classList).not.toContain('base-100');
      expect(el.classList).not.toContain('ring-offset-2');
    });
  });

  describe('presence', () => {
    it('should be online', () => {
      component.presence = 'online';
      fixture.detectChanges();
      expect(component['el'].nativeElement.classList).toContain('online');
    });

    it('should be offline', () => {
      component.presence = 'offline';
      fixture.detectChanges();
      expect(component['el'].nativeElement.classList).toContain('offline');
    });

    it('should have no presence indicator', () => {
      component.presence = null;
      fixture.detectChanges();
      expect(component['el'].nativeElement.classList).not.toContain('offline');
      expect(component['el'].nativeElement.classList).not.toContain('online');
    });
  });
});
