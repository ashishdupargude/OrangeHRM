//import { request } from 'node:http'
import { test, expect } from '../../fixtures/hooks-fixture'
import restfulApiData from '../../data/api-data/restful-booker-api-module-data.json'
import { request } from 'node:http'
test("API Testing", async ({ request }) => {


    const bookingIDs = await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await bookingIDs.json())



})
test("API test 2", async ({ request }) => {
    const bookingDetails = await request.get("https://restful-booker.herokuapp.com/booking/2")
    console.log(await bookingDetails.json())
})

test("ID -8 - [Restful- Booking]Verify that the user is able to fetch all the booking IDs using GET API and receive valid response", {
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

test("ID -9 -[Restful-Booker > Booking] Verify that the user is able to fetch booking is useing GET API and receives", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'TestCasrLink'
    }
}, async ({ request }) => {
    const bookingResp = await request.get(`https://restful-booker.herokuapp.com/booking/${restfulApiData.booking_id}`)
    console.log(bookingResp)
    const bookingJsonResp = await bookingResp.json()
    console.log(bookingJsonResp)
    expect(bookingResp.status()).toBe(200)
    expect(bookingResp.statusText()).toBe("OK")
    expect(bookingResp).not.toBeNull()
    //expect(bookingJsonResp.firstname).toEqual(restfulApiData.firstname)
    expect(bookingJsonResp.firstname).toBeTruthy()
})

test("ID -10 -[Restful-Booker > Booking ] Verify that the user is able to create new booking useing Post API and recevie valid response.", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'TestCasrLink'
    }
}, async ({ request }) => {

    const createBookingRest = await request.post('https://restful-booker.herokuapp.com/booking', {

        data: restfulApiData.create_booking

    })
    const createBookigJsonResp = await createBookingRest.json()
    console.log(createBookigJsonResp)
    expect(createBookingRest.status()).toBe(200)
    expect(createBookigJsonResp.booking).toMatchObject(restfulApiData.create_booking)


})

test("ID -11 - [Restful-Booker > Booking] verify that the user is able to update existing booking useing Put API and receive valid response.", {
    tag: ['@API', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'TestCasrLink'
    }

}, async ({ request, commonAPIUtils }) => {

    const tokenValue = await commonAPIUtils.createToken()

    const updatedbookingResp = await request.put(`https://restful-booker.herokuapp.com/booking/${restfulApiData.booking_id3}`, {
        headers: {

            //Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="

            Cookie: `token=${tokenValue}`

        },

        data: restfulApiData.update_booking

    })

    const updateBookingJsonResp = await updatedbookingResp.json()
    console.log(updateBookingJsonResp)

    expect(updatedbookingResp.status()).toBe(200)
    expect(updateBookingJsonResp).toMatchObject(restfulApiData.update_booking)
    //const updateBookingResp = await request.put(`https://restful-booker.herokuapp.com/booking/:id/${restfulApiData.update_booking}`)

})

test('ID -12 - [Restful-Booker > Booking] Verify that the user is able to partially update existing booking using PATCH API and receive valid respons', {
    tag: ['@API', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'TestCasrLink'
    }

}, async ({ request, commonAPIUtils }) => {

    const apiToken = await commonAPIUtils.createToken()

    const partialUpdateBookingResp = await request.patch(`https://restful-booker.herokuapp.com/booking/${restfulApiData.booking_id3}`, {

        headers: {

            Cookie: `token=${apiToken}`

        },

        data: restfulApiData.update_partial_booking

    })

    console.log(partialUpdateBookingResp)
    const partialUpdateBookingJsonResp = await partialUpdateBookingResp.json()
    console.log(partialUpdateBookingJsonResp)

    expect(partialUpdateBookingResp.status()).toBe(200)
    expect(partialUpdateBookingJsonResp.firstname).toMatch(restfulApiData.update_partial_booking.firstname)
    expect(partialUpdateBookingJsonResp.lastname).toMatch(restfulApiData.update_partial_booking.lastname)

}) 