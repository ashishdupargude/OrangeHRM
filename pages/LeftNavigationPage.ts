import { Locator, Page } from "@playwright/test";

export class LeftNavigationPage{
    readonly page:Page
    readonly pimLink : Locator
    readonly orangeHRMLogo : Locator
    readonly leftNavigationPanel : Locator


    constructor(page: Page){
        this.page = page
        this.pimLink = page.getByText('PIM')
        this.orangeHRMLogo = page.getByRole('link', {name:'client brand banner'})
        //this.orangeHRMLogo = page.getByRole('img', {name: 'client brand banner'});
        this.leftNavigationPanel = page.locator('.oxd-sidepanel-body')
        //   this.leftNavigation = page.locator('div.oxd-sidepanel-body')

        //this.pimLink = page.getByRole('presentation', {name:'PIM'})
    }

    async openPimModule(){
        await this.pimLink.click()
    }
}