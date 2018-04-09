import { render } from '@stencil/core/testing';
import { ModalForm } from './tjaexa-modal-form';

describe('app', () => {
  it('should build', () => {
    expect(new ModalForm()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [ModalForm],
        html: '<app-home></app-home>'
      });
    });
  });
});