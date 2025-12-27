import { expect } from "@playwright/test"
import { sqlDBConnect } from "./sqlDbConnect";
import { DBPersistence } from "./DBPersistence";

export class DBVerificationDetails {
     async verifyOrderDisplayedCorrectlyInDB(orderDetails:any){
      //  console.log("Order details: ",orderDetails);
        await expect(orderDetails[0].name).toEqual("ADIDAS ORIGINAL");
        await expect(orderDetails[0].price).toEqual(11500);
    }

    async getOrderDetailsFromDB(orderId:string){
      let dbConnection: DBPersistence = new sqlDBConnect();
      let orderData = await dbConnection.getDataFromDB("SELECT * FROM orders WHERE order_id =?;", [orderId]);
      console.log("Order Data from DB:", orderData);
      return orderData;
    }

}
