import { Locator, Page } from "@playwright/test";

export class AdminPage {

    readonly page: Page
    readonly addAdminButton: Locator
    readonly addButton: Locator

    readonly employeeName: Locator

    readonly userRoleDropdown: Locator
    readonly statusDropdown: Locator
    readonly userName: Locator

    constructor(page: Page) {

        this.page = page
        //this.addAdminButton = page.getByText('Admin')
        this.addAdminButton = page.getByRole('link', { name: 'Admin' })
        this.addButton = page.getByRole('button', { name: 'Add' })
        this.userRoleDropdown = page.locator('.oxd-input-group').filter({ hasText: 'User Role' }).locator('.oxd-select-text')
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.statusDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text')

        this.userName = page.getByRole('textbox', { name: 'Username' })



    }

    async addAdmin() {
        await this.addAdminButton.click()
        await this.addButton.click()

    }
    async selectUserRole(role: string) {
        await this.userRoleDropdown.click()
        await this.page.getByRole('option', { name: role, exact: true })
    }

    async empName() {

        await this.employeeName.click()
        await this.employeeName.fill('AD')

        this.page.getByText('AD', { exact: true })

    }

    async selectStatus(status: string) {
        await this.statusDropdown.click()
        await this.page.getByRole('option', { name: status }).click()
    }

    async userNamee() {
        await this.userName.click()
        await this.userName.fill("ashish")

    }
}
