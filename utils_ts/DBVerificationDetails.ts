import { expect } from "@playwright/test"

export class DBVerificationDetails {
     async verifyOrderDisplayedCorrectlyInDB(orderDetails:any){
      //  console.log("Order details: ",orderDetails);
        await expect(orderDetails[0].name).toEqual("ADIDAS ORIGINAL");
        await expect(orderDetails[0].price).toEqual(11500);
    }

}
