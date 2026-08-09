import { request } from 'node:http'
import{test} from '../../fixtures/hooks-fixture'

test("API Testing", async({request}) => {


    const bookingIDs = await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await bookingIDs.json())
    


})
test("API test 2", async({request}) =>{
    const bookingDetails = await request.get("https://restful-booker.herokuapp.com/booking/1")
    console.log(await bookingDetails.json())
})