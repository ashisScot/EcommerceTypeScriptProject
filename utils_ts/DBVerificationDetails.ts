import { expect } from "@playwright/test"

export class DBVerificationDetails {
     verifyOrderDisplayedCorrectlyInDB(orderDetails:any){
        console.log(orderDetails[0].name)
         console.log(orderDetails[0].price)
        expect(orderDetails[0].name).toEqual("ADIDAS ORIGINAL");
        expect(orderDetails[0].price).toEqual(11500);
    }

}
