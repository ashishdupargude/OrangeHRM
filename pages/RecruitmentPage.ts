import { Locator, Page } from "@playwright/test";

export class RecruitmentPage {

    readonly recruitmentButton: Locator
     readonly jobTitelDropdown: Locator
    // readonly vacancyDropDown: Locator
    // readonly hiringManager: Locator
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
        this.jobTitelDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text')

    }



async openRecruitment(){
    await this.recruitmentButton.click()

}
async selectJobTitle(jobTitle: string) {
    await this.jobTitelDropdown.click()
    //await this.page.getByText(jobTitle, { exact: true }).click()
   //await this.page.locator('.oxd-select-option').locator('span').filter({ hasText: jobTitle }).click()
   // await this.page.locator('.oxd-select-option').filter({hasText: jobTitle}).click()

   const options = this.page.locator('.oxd-select-option')

    console.log('Option count:', await options.count())
    console.log('Option text:', await options.allTextContents())

    const jobOption = options.filter({ hasText: jobTitle }).first()

    console.log('Job option count:', await options.filter({ hasText: jobTitle }).count())

    await jobOption.click()

}

}