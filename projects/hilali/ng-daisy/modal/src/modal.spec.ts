import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Modal } from './modal';

describe('ModalComponent', () => {
  let fixture: ComponentFixture<Modal>;
  let modal: Modal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal],
    }).compileComponents();

    fixture = TestBed.createComponent(Modal);
    modal = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Toggle open/close', () => {
    it('should open the modal', () => {
      modal.opened = true;
      fixture.detectChanges();
      expect(
        (
          fixture.debugElement.query(By.css('dialog'))
            .nativeElement as HTMLDialogElement
        ).open
      ).toBe(true);
    });

    it('should close the modal', () => {
      modal.opened = false;
      fixture.detectChanges();
      expect(
        (
          fixture.debugElement.query(By.css('dialog'))
            .nativeElement as HTMLDialogElement
        ).open
      ).toBe(false);
    });

    it('should close the modal when clicking on the backdrop', () => {
      modal.opened = true;
      modal.hasBackdrop = true;
      fixture.detectChanges();
      const backdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
      backdrop.nativeElement.click();
      fixture.detectChanges();
      expect(modal._opened()).toBe(false);
      expect(
        (
          fixture.debugElement.query(By.css('dialog'))
            .nativeElement as HTMLDialogElement
        ).open
      ).toBe(false);
    });

    it('should close the modal when clicking on the close button', () => {
      modal.opened = true;
      fixture.detectChanges();
      expect(
        (
          fixture.debugElement.query(By.css('dialog'))
            .nativeElement as HTMLDialogElement
        ).open
      ).toBe(true);

      fixture.debugElement.query(By.css('.modal-close')).nativeElement.click();
      fixture.detectChanges();

      expect(
        (
          fixture.debugElement.query(By.css('dialog'))
            .nativeElement as HTMLDialogElement
        ).open
      ).toBe(false);
    });

    it('should emit closed event when clicking on the close button', () => {
      modal.opened = true;
      fixture.detectChanges();
      spyOn(modal.closed, 'emit');

      fixture.debugElement
        .query(By.css('.modal-close'))
        .nativeElement.addEventListener('click', () => {
          console.log('clicked');
        });

      fixture.debugElement.query(By.css('.modal-close')).nativeElement.click();
      fixture.detectChanges();

      expect(modal.closed.emit).toHaveBeenCalled();
    });

    it('should emit closed event when clicking on the backdrop', () => {
      modal.opened = true;
      modal.hasBackdrop = true;
      fixture.detectChanges();

      spyOn(modal.closed, 'emit');
      fixture.debugElement
        .query(By.css('.modal-backdrop'))
        .nativeElement.click();
      expect(modal.closed.emit).toHaveBeenCalled();
    });

    it('should emit closed event when calling the onClose method', () => {
      modal.opened = true;
      spyOn(modal.closed, 'emit');
      modal.onClose();
      expect(modal.closed.emit).toHaveBeenCalled();
    });

    it('should close the modal when calling the onClose method', () => {
      modal.opened = true;
      fixture.detectChanges();
      modal.onClose();
      fixture.detectChanges();
      expect(
        (
          fixture.debugElement.query(By.css('dialog'))
            .nativeElement as HTMLDialogElement
        ).open
      ).toBe(false);
    });
  });

  describe('Position', () => {
    it('should be centered by default', () => {
      expect(
        fixture.debugElement.query(By.css('.modal')).nativeElement.classList
      ).toContain('modal-middle');
    });

    it('should be top', () => {
      modal.position = 'top';
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('.modal')).nativeElement.classList
      ).toContain('modal-top');
    });

    it('should be bottom', () => {
      modal.position = 'bottom';
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('.modal')).nativeElement.classList
      ).toContain('modal-bottom');
    });
  });

  describe('Backdrop', () => {
    it('should not have a backdrop by default', () => {
      expect(fixture.debugElement.query(By.css('.modal-backdrop'))).toBeNull();
    });

    it('should have a backdrop', () => {
      modal.hasBackdrop = true;
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('.modal-backdrop'))
      ).toBeDefined();
    });
  });
});
