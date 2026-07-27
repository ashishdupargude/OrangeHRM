import { Locator, Page } from "@playwright/test";

class LoginPage {
    readonly page: Page
    readonly userNmaeInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.userNmaeInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }



    //TO oprn URl into browser
    async gotoOrangeHRM() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }


    //TO Login OrangeHRM Application

    async loginOrangeHRM(userNmae: string, password: string) {
        await this.userNmaeInput.fill(userNmae)
        await this.passwordInput.fill(password)
        await this.loginButton.click()


    }

}                