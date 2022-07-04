import { newE2EPage } from '@stencil/core/testing';

describe('kz-droppable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kz-droppable></kz-droppable>');

    const element = await page.find('kz-droppable');
    expect(element).toHaveClass('hydrated');
  });
});
