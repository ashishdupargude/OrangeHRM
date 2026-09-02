import { Locator, Page } from "@playwright/test";

export class AdminPage {

    readonly page: Page
    readonly addAdminButton: Locator
    readonly addButton: Locator
    readonly userRoleDropdown: Locator

    constructor(page: Page) {

        this.page = page
        //this.addAdminButton = page.getByText('Admin')
        this.addAdminButton = page.getByRole('link', { name: 'Admin' })
        this.addButton = page.getByRole('button', { name: 'Add' })
        this.userRoleDropdown = page.locator('.oxd-input-group').filter({ hasText: 'User Role' }).locator('.oxd-select-text')
    }

    async addAdmin() {
        await this.addAdminButton.click()
        await this.addButton.click()

    }
    async selectUserRole(role: string) {
        await this.userRoleDropdown.click()
        await this.page.getByRole('option', { name: role, exact: true }).click()
    }
}