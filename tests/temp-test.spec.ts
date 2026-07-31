//import { test } from '../fixtures/pom-fixture'
import CommonUtils from '../utils/common-util'
import { expect } from '@playwright/test'
import { test } from '../fixtures/hooks-fixture'
import { LoginPage } from '../pages/LoginPage'



// test.beforeEach('Before Each Hook', async({loginPage})=>{
//     await loginPage.gotoOrangeHRM()

// })


// test.afterEach('After Each Hook', async ({userPage})=> {
//     await userPage.logout()

// })


test('temp', async ({ page, gotoUrl, loginPage, commonUtils }) => {

    // console.log(process.env.BASE_URL)
    // console.log(process.env.USER_NAME)
    // console.log(process.env.PASSWORD)
    
    // await loginPage.gotoOrangeHRM()
    // await loginPage.loginOrangeHRM('Admin', 'admin123')

    //const commonUtilsObj = new CommonUtils()
    // commonUtilsObj.encryptData('admin123')

    // const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!)
    // const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!)

    // await loginPage.gotoOrangeHRM()   //Now We are useing Hooks for login 
    console.log(await page.title())
    //await loginPage.loginOrangeHRM(decryptedUserName, decryptedPassword)

    //await page.pause()

})
test('Temp test 2', async ({ page, gotoUrl, loginPage }) => {
    // await loginPage.gotoOrangeHRM()
    await expect(page).toHaveTitle('OrangeHRM')

})

test('Temp test 3', async ({ page, gotoUrl,logout, loginPage }) => {
    // await loginPage.gotoOrangeHRM()
    await expect(page).toHaveTitle('OrangeHRM')

})

