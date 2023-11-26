import { Directive } from '@angular/core';

@Directive({
  selector: 'ng-template[daiMmodalContent], ng-template[dai-modal-content]',
  standalone: true,
})
export class ModalContent {}
