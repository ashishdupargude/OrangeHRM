import {test} from '@playwright/test'
import {LoginPage} from "../pages/LoginPage"


test('temp', async ({page})=> {

    const loginPage = new LoginPage(page)

    await loginPage.gotoOrangeHRM()
    await loginPage.loginOrangeHRM('Admin','admin123')
    




})