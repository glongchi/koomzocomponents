import { newE2EPage } from '@stencil/core/testing';

describe('kz-draggable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kz-draggable></kz-draggable>');

    const element = await page.find('kz-draggable');
    expect(element).toHaveClass('hydrated');
  });
});
