import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { Button } from '@hilali/ng-daisy/button';
import { Modal, ModalAction, ModalContent } from '@hilali/ng-daisy/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Modal, ModalAction, ModalContent, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  modalOpened: WritableSignal<boolean> = signal(false);

  openModal(): void {
    this.modalOpened.set(true);
  }

  onModalClose() {
    this.modalOpened.set(false);
    console.log('modal closed');
  }
}
