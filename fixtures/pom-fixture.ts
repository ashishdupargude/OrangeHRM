import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

type PomFixturesType = {
    loginPage: LoginPage;

}
export const test = baseTest.extend<PomFixturesType>({
    loginPage: async ({ page }, use) => {

        // const loginPageObj = new LoginPage(page)
        // use(loginPageObj)

        //both method are allowe to create object and use or directly we can use
        use(new LoginPage(page))

    }
})