import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Card } from './card';
import { CardActions } from './card-actions';
import { CardBody } from './card-body';
import { CardTitle } from './card-title';

@Component({
  selector: 'dai-test',
  template: `<dai-card>
    <dai-card-body>
      <dai-card-title>Card Title</dai-card-title>
      <dai-card-actions>
        <button>Button</button>
      </dai-card-actions>
    </dai-card-body>
  </dai-card>`,
  imports: [Card, CardBody, CardTitle, CardActions],
  standalone: true,
})
export class TestComponent {}

describe('Card', () => {
  let fixture: ComponentFixture<TestComponent>;
  let card: Card;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    card = fixture.debugElement.query(By.directive(Card)).injector.get(Card);
    el = fixture.debugElement.query(By.css('dai-card')).nativeElement;
  });

  it('should create', () => {
    expect(card).toBeTruthy();
  });

  it('should have a default size of normal', () => {
    fixture.detectChanges();
    expect(el.classList).toContain('card-normal');
  });

  it('should have a default image position of normal', () => {
    fixture.detectChanges();
    expect(el.classList).not.toContain('card-side');
    expect(el.classList).not.toContain('image-full');
  });

  it('should have no outline by default', () => {
    fixture.detectChanges();
    expect(el.classList).not.toContain('card-bordered');
  });

  describe('size', () => {
    it('should set the size to compact', () => {
      card.size = 'compact';
      fixture.detectChanges();
      expect(el.classList).not.toContain('card-normal');
      expect(el.classList).toContain('card-compact');
    });

    it('should set the size to normal', () => {
      card.size = 'normal';
      fixture.detectChanges();
      expect(el.classList).not.toContain('card-compact');
      expect(el.classList).toContain('card-normal');
    });
  });

  describe('imagePosition', () => {
    it('should set the image position to side', () => {
      card.imagePosition = 'side';
      fixture.detectChanges();
      expect(el.classList).not.toContain('image-full');
      expect(el.classList).toContain('card-side');
    });

    it('should set the image position to background', () => {
      card.imagePosition = 'background';
      fixture.detectChanges();
      expect(el.classList).not.toContain('card-side');
      expect(el.classList).toContain('image-full');
    });

    it('should set the image position to normal', () => {
      card.imagePosition = 'normal';
      fixture.detectChanges();
      expect(el.classList).not.toContain('image-full');
      expect(el.classList).not.toContain('card-side');
    });
  });

  describe('outline', () => {
    it('should set the outline to true', () => {
      card.outline = true;
      fixture.detectChanges();
      expect(el.classList).toContain('card-bordered');
    });

    it('should set the outline to false', () => {
      card.outline = false;
      fixture.detectChanges();
      expect(el.classList).toContain('card-bordered');
    });
  });

  describe('shadow (elevation)', () => {
    it('should set the shadow to xs', () => {
      card.elevation = 'xs';
      fixture.detectChanges();
      expect(el.classList).toContain('shadow-xs');
      expect(el.classList).not.toContain('shadow-sm');
      expect(el.classList).not.toContain('shadow-md');
      expect(el.classList).not.toContain('shadow-lg');
      expect(el.classList).not.toContain('shadow-xl');
    });

    it('should set the shadow to sm', () => {
      card.elevation = 'sm';
      fixture.detectChanges();
      expect(el.classList).toContain('shadow-sm');
      expect(el.classList).not.toContain('shadow-xs');
      expect(el.classList).not.toContain('shadow-md');
      expect(el.classList).not.toContain('shadow-lg');
      expect(el.classList).not.toContain('shadow-xl');
    });

    it('should set the shadow to md', () => {
      card.elevation = 'md';
      fixture.detectChanges();
      expect(el.classList).toContain('shadow-md');
      expect(el.classList).not.toContain('shadow-xs');
      expect(el.classList).not.toContain('shadow-sm');
      expect(el.classList).not.toContain('shadow-lg');
      expect(el.classList).not.toContain('shadow-xl');
    });

    it('should set the shadow to lg', () => {
      card.elevation = 'lg';
      fixture.detectChanges();
      expect(el.classList).toContain('shadow-lg');
      expect(el.classList).not.toContain('shadow-xs');
      expect(el.classList).not.toContain('shadow-sm');
      expect(el.classList).not.toContain('shadow-md');
      expect(el.classList).not.toContain('shadow-xl');
    });

    it('should set the shadow to xl', () => {
      card.elevation = 'xl';
      fixture.detectChanges();
      expect(el.classList).toContain('shadow-xl');
      expect(el.classList).not.toContain('shadow-xs');
      expect(el.classList).not.toContain('shadow-sm');
      expect(el.classList).not.toContain('shadow-md');
      expect(el.classList).not.toContain('shadow-lg');
    });
  });

  describe('card body', () => {
    let cardBody: CardBody;
    let cardBodyEl: HTMLElement;

    beforeEach(() => {
      cardBody = fixture.debugElement
        .query(By.directive(CardBody))
        .injector.get(CardBody);

      cardBodyEl = fixture.debugElement.query(
        By.directive(CardBody)
      ).nativeElement;
    });

    it('should create', () => {
      expect(cardBody).toBeTruthy();
    });

    it('should have class card-body', () => {
      fixture.detectChanges();
      expect(cardBodyEl.classList).toContain('card-body');
    });
  });

  describe('card title', () => {
    let cardTitle: CardTitle;
    let cardTitleEl: HTMLElement;

    beforeEach(() => {
      cardTitle = fixture.debugElement
        .query(By.directive(CardTitle))
        .injector.get(CardTitle);

      cardTitleEl = fixture.debugElement.query(
        By.directive(CardTitle)
      ).nativeElement;
    });

    it('should create', () => {
      expect(cardTitle).toBeTruthy();
    });

    it('should have class card-title', () => {
      fixture.detectChanges();
      expect(cardTitleEl.classList).toContain('card-title');
    });
  });

  describe('card actions', () => {
    let cardActions: CardActions;
    let cardActionsEl: HTMLElement;

    beforeEach(() => {
      cardActions = fixture.debugElement
        .query(By.directive(CardActions))
        .injector.get(CardActions);

      cardActionsEl = fixture.debugElement.query(
        By.directive(CardActions)
      ).nativeElement;
    });

    it('should create', () => {
      expect(cardActions).toBeTruthy();
    });

    it('should have class card-actions', () => {
      fixture.detectChanges();
      expect(cardActionsEl.classList).toContain('card-actions');
    });

    describe('align', () => {
      it('should set the align to start', () => {
        cardActions.align = 'start';
        fixture.detectChanges();
        expect(cardActionsEl.classList).toContain('justify-start');
        expect(cardActionsEl.classList).not.toContain('justify-end');
        expect(cardActionsEl.classList).not.toContain('justify-center');
      });

      it('should set the align to end', () => {
        cardActions.align = 'end';
        fixture.detectChanges();
        expect(cardActionsEl.classList).toContain('justify-end');
        expect(cardActionsEl.classList).not.toContain('justify-start');
        expect(cardActionsEl.classList).not.toContain('justify-center');
      });

      it('should set the align to center', () => {
        cardActions.align = 'center';
        fixture.detectChanges();
        expect(cardActionsEl.classList).toContain('justify-center');
        expect(cardActionsEl.classList).not.toContain('justify-start');
        expect(cardActionsEl.classList).not.toContain('justify-end');
      });
    });
  });
});
