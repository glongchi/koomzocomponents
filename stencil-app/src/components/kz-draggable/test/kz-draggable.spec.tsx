import { newSpecPage } from '@stencil/core/testing';
import { KzDraggable } from '../kz-draggable';

describe('kz-draggable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KzDraggable],
      html: `<kz-draggable></kz-draggable>`,
    });
    expect(page.root).toEqualHtml(`
      <kz-draggable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kz-draggable>
    `);
  });
});
