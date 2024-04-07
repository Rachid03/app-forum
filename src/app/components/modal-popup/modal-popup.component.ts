import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent {
  @Output() deleteConfirmed = new EventEmitter<void>();

  confirmDelete() {
    this.deleteConfirmed.emit();
  }

}
