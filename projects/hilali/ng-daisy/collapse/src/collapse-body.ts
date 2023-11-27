import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'dai-collapse-content, |daiCollapseContent]',
  standalone: true,
})
export class CollapseContent {
  constructor(private readonly el: ElementRef<HTMLElement>) {
    this.el.nativeElement.classList.add('collapse-content');
  }
}
