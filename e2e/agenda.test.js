import { test, expect } from '@playwright/test';

test('Agenda item can be added and removed', async ({ page }) => {
  await page.goto('/');

  await page.fill('input', 'Test');
  await page.click('text=Add');

  await expect(page.locator('li')).toContainText('Test');

  await page.click('text=Remove');
  await expect(page.locator('li')).toHaveCount(0);
});