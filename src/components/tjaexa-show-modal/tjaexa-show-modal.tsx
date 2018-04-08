import { Component } from '@stencil/core';


@Component({
  tag: 'tjaexa-show-modal',
  styleUrl: 'tjaexa-show-modal.scss'
})
export class ShowModal {

  render() {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color='primary'>
            <ion-title>Show Modal</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
        </ion-content>
      </ion-page>
    );
  }
}
