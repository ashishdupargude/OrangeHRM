import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type PomFixturesType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage

}
export const test = baseTest.extend<PomFixturesType>({
    loginPage: async ({ page }, use) => {

        // const loginPageObj = new LoginPage(page)
        // use(loginPageObj)

        //both method are allowe to create object and use or directly we can use
        await use(new LoginPage(page))

    },

    dashboardPage: async ({ page }, use) => {

        await use(new DashboardPage(page))
    }
})