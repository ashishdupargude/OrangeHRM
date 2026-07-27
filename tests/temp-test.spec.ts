import { test } from '../fixtures/pom-fixture'




test('temp', async ({ page, loginPage }) => {



    await loginPage.gotoOrangeHRM()
    await loginPage.loginOrangeHRM('Admin', 'admin123')





})