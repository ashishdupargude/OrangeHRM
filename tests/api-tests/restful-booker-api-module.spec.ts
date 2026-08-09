import{test} from '../../fixtures/hooks-fixture'

test("API Testing", async({request}) => {


    const bookingIDs = await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await bookingIDs.json())
    


})