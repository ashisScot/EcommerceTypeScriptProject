import { Page, Locator, expect } from "@playwright/test";
import { ShoppingPOManager } from "./ShoppingPageObjectManager";

export class OrderSummaryPage {
  private static orderSummaryPage:OrderSummaryPage
    private orderId:Locator
    private orderIdHding:Locator
   // private page:Page

    private constructor(page:Page){
        //this.page=page
        this.orderIdHding =page.getByText("Order Id");
        this.orderId = this.orderIdHding.locator('+ div');


    }

    async verifyOrderIdDisplayedInOrderSummaryPage(orderIDText:any){
        await expect(this.orderId).toHaveText(orderIDText);

    }

    static pageObject(page: Page): OrderSummaryPage {
        if(this.orderSummaryPage == null || this.orderSummaryPage ==undefined){
            this.orderSummaryPage = new OrderSummaryPage(page);  
        }
        return this.orderSummaryPage
    }
}