import { Locator, Page } from "@playwright/test";

export class RecruitmentPage {

    readonly page: Page
    readonly recruitmentButton: Locator
    readonly jobTitleDropdown: Locator
    readonly vacancyDropDown: Locator
    readonly hiringManagerDropDown: Locator
    // readonly stateDropdown: Locator
    // readonly condidateName: Locator
    // readonly keywords: Locator
    // readonly dateOfApplicationFrom: Locator
    // readonly dateOfApplicationTo: Locator
    // readonly methodOfApplication: Locator
    // readonly searchButton: Locator

    constructor(page: Page) {
        this.page = page
        this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' })
        //  this.jobTitelDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text')
        this.vacancyDropDown = page.locator('.oxd-input-group').filter({ hasText: 'Vacancy' }).locator('.oxd-select-text')
        this.hiringManagerDropDown = page.locator('.oxd-input-group').filter({hasText: 'Hiring Manager'}).locator('.oxd-select-text-input')



    }



    async openRecruitment() {
        await this.recruitmentButton.click()

    }
    async selectJobTitle(jobTitle: string) {
        //     await this.jobTitelDropdown.click()
        //     //await this.page.getByText(jobTitle, { exact: true }).click()
        //    //await this.page.locator('.oxd-select-option').locator('span').filter({ hasText: jobTitle }).click()
        //    // await this.page.locator('.oxd-select-option').filter({hasText: jobTitle}).click()
        //    const options = this.page.locator('.oxd-select-option')
        //     console.log('Option count:', await options.count())
        //     console.log('Option text:', await options.allTextContents())
        //     const jobOption = options.filter({ hasText: jobTitle }).first()
        //     console.log('Job option count:', await options.filter({ hasText: jobTitle }).count())
        //     await jobOption.click()


        await this.page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
        await this.page.getByRole('option', { name: 'Automaton Tester' }).click()


    }
    async selectVacancy(vacancy: string) {
        await this.vacancyDropDown.click()
        await this.page.getByRole('option', { name: vacancy }).click()

    }
async selectHiringManager(HiringManager:string){
    await this.hiringManagerDropDown.click()
    await this.page.getByRole('option', {name: HiringManager}).click()

}
}