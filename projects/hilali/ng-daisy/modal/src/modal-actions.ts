import { Directive } from '@angular/core';

@Directive({
  selector: 'ng-template[daiModalAction], ng-template[dai-modal-action]',
  standalone: true,
})
export class ModalAction {}
