import { newSpecPage } from '@stencil/core/testing';
import { KzDroppable } from '../kz-droppable';

describe('kz-droppable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KzDroppable],
      html: `<kz-droppable></kz-droppable>`,
    });
    expect(page.root).toEqualHtml(`
      <kz-droppable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kz-droppable>
    `);
  });
});
