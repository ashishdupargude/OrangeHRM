//import { request } from 'node:http'
import { test, expect } from '../../fixtures/hooks-fixture'
import restfulApiData from '../../data/api-data/restful-booker-api-module-data.json'
test("API Testing", async ({ request }) => {


    const bookingIDs = await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await bookingIDs.json())



})
test("API test 2", async ({ request }) => {
    const bookingDetails = await request.get("https://restful-booker.herokuapp.com/booking/2")
    console.log(await bookingDetails.json())
})

test("[Restful- Booking]Verify that the user is able to fetch all the booking IDs using GET API and receive valid response", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: "Test Case Link",
        description: "Link Of TestCase"
    }
}, async ({ request }) => {

    const bookingIDsResp = await request.get("https://restful-booker.herokuapp.com/booking")
    const bookingIDsJsonResp = await bookingIDsResp.json()
    console.log(bookingIDsJsonResp)

    expect(bookingIDsResp.status()).toBe(200)
    expect(bookingIDsResp.statusText()).toBe('OK')
    //expect(bookingIDsResp.ok()).toBeTruthy()
    expect(bookingIDsResp.headers()['content-type']).toBe(restfulApiData.content_type)
    expect(bookingIDsResp).not.toBeNull()
})

test("[Restful-Booker > Booking] Verify that the user is able to fetch booking is useing GET API and receives", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'TestCasrLink'
    }
}, async ({ request }) => {
   const bookingResp = await request.get(`https://restful-booker.herokuapp.com/booking/${restfulApiData.booking_id}`)
   console.log(bookingResp)
    const bookingJsonResp =await bookingResp.json()
    console.log(bookingJsonResp)
    expect(bookingResp.status()).toBe(200)
    expect(bookingResp.statusText()).toBe("OK")
     expect(bookingResp).not.toBeNull()
     //expect(bookingJsonResp.firstname).toEqual(restfulApiData.firstname)
     expect(bookingJsonResp.firstname).toBeTruthy()




})