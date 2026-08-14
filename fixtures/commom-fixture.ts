import {test as baseTest} from './pom-fixture'
import CommonUtils from '../utils/Commonutil'
import CommonApiUtils from '../utils/CommonApiUtils'


type CommonFixtureType ={
    commonUtils : CommonUtils,
    commonAPIUtils: CommonApiUtils

}
export const test = baseTest.extend<CommonFixtureType>({
    commonUtils : async ({},use)=> {
       await use (new CommonUtils())
    },
    commonAPIUtils: async({request}, use)=>{
        use(new CommonApiUtils(request))
    }
})