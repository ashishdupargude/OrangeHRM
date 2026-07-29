//import { test } from '../fixtures/pom-fixture'
import CommonUtils from '../utils/common-util'

import { test } from '../fixtures/commom-fixture'





test('temp', async ({ page, loginPage,commonUtils }) => {

    // console.log(process.env.BASE_URL)
    // console.log(process.env.USER_NAME)
    // console.log(process.env.PASSWORD)



    // await loginPage.gotoOrangeHRM()
    // await loginPage.loginOrangeHRM('Admin', 'admin123')


    //const commonUtilsObj = new CommonUtils()
    // commonUtilsObj.encryptData('admin123')

    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!)
    const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!)

    await loginPage.gotoOrangeHRM()
    await loginPage.loginOrangeHRM(decryptedUserName, decryptedPassword)

})