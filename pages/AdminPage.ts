import { Locator, Page } from "@playwright/test";

export class AdminPage {

    readonly page: Page
    readonly addAdminButton: Locator
    readonly addButton: Locator

    constructor(page: Page) {

        this.page = page
        //this.addAdminButton = page.getByText('Admin')
        this.addAdminButton = page.getByRole('link', { name: 'Admin' })
        this.addButton = page.getByRole('button', { name: 'Add' })

    }

    async addAdmin(){
        await this.addAdminButton.click()
        await this.addButton.click()

    }
}