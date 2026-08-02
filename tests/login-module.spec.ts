import { test, expect } from '../fixtures/hooks-fixture'

import loginModuleData from '../data/login-module-data.json'

test.use({storageState:{
    cookies: [],
    origins: []
}})

test('[Login] verify that the user cannot log in with invalid password', {
    tag:['@UI','@UAT']
},async ({ gotoUrl, loginPage, commonUtils }) => {

    const username = commonUtils.decryptData(process.env.USER_NAME!)

    await loginPage.loginOrangeHRM(username, loginModuleData.worng_password)
    await expect(loginPage.invaildCredentialErrorPopup).toHaveText(loginModuleData.invaild_credentials_text)
    await expect(loginPage.userNameInput).toBeVisible()
})

test('[Login] verify that the user cannot log in with invalid username',{
    tag:['@UI','@UAT'],
    annotation: {
        type: 'Test Case Link',
       description : 'https://github.com/ashishdupargude/OrangeHRM.git'
    }
}, async ({ gotoUrl, loginPage, commonUtils }) => {

    const coreectpassword = commonUtils.decryptData(process.env.PASSWORD!)

    await loginPage.loginOrangeHRM(loginModuleData.wrong_username,coreectpassword)
    await expect(loginPage.invaildCredentialErrorPopup).toHaveText(loginModuleData.invaild_credentials_text)
    await expect(loginPage.userNameInput).toBeVisible()
})


test('[Login] verify that the user cannot log in with both invalid username and password',{
    tag:['@UI','@DEV']
}, async ({ gotoUrl, loginPage, commonUtils }) => {

   

    await loginPage.loginOrangeHRM(loginModuleData.wrong_username,loginModuleData.worng_password)
    await expect(loginPage.invaildCredentialErrorPopup).toHaveText(loginModuleData.invaild_credentials_text)
    await expect(loginPage.userNameInput).toBeVisible()
})

