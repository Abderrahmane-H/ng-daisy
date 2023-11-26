import { Component, Input, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'dai-swap',
  standalone: true,
  templateUrl: './swap.html',
})
export class Swap {
  @Input()
  set animation(animation: 'flip' | 'rotate') {
    this._animation.set(animation);
  }

  _animation: WritableSignal<'flip' | 'rotate'> = signal('rotate');
}
