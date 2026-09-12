import { test, expect } from '../../fixtures/hooks-fixture'
import { RecruitmentPage } from '../../pages/RecruitmentPage'

test('[Recruitment] Verify candidate search filters',{
    tag:['@UI', '@UAT'],
    annotation: {
        type: 'TestCaseLink',
        description: 'https://github.com/ashishdupargude/OrangeHRM.git'
    }
}, async ({ page,gotoUrl }) => {

  const recruitmentPage = new RecruitmentPage(page)

    await recruitmentPage.openRecruitment()
  await recruitmentPage.selectJobTitle('Automation Tester')
  await recruitmentPage.selectVacancy('Account Assistant')
  await recruitmentPage.selectHiringManager('Rahul Patil')
  await recruitmentPage.selectStatus('Application Initiated')
})