import { expect } from "@playwright/test";
export class APIValidations{
    async verifyCreateBookAPIBody(response:any,apiPayloads:any){
         let responseBody = await response.json();
            let booking = responseBody.booking;
            //validating status
            await expect(response.status()).toBe(200);
            await expect(response.ok()).toBeTruthy();
            console.log("Response Body:",responseBody);

            //va;idating response body
            await expect(responseBody).toHaveProperty('bookingid')
            await expect(responseBody).toHaveProperty('booking')
            await expect(responseBody.booking).toHaveProperty('additionalneeds');
            await expect(booking).toMatchObject(apiPayloads.createBookApi.requestPayload);

            //validating booking dates
            await expect(booking.bookingdates).toMatchObject(apiPayloads.createBookApi.requestPayload.bookingdates);

    }
 }