import {test as baseTest} from './commom-fixture'

type HooksFixureType ={

    gotoUrl : any
    logout: any

}

export const test = baseTest.extend<HooksFixureType>({
    gotoUrl: async({loginPage}, use) => {

        await loginPage.gotoOrangeHRM()
        await use()

    },
    logout: async({userPage}, use) =>{
        await use()
        await  userPage.logout()



    }
})

export {expect} from '@playwright/test'