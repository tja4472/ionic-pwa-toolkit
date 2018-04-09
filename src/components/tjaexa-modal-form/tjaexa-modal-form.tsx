import { Component } from '@stencil/core';

@Component({
  tag: 'tjaexa-modal-form',
  styleUrl: 'tjaexa-modal-form.scss',
})
export class ModalForm {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Show Modal</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content />,
    ];
  }
}
