import { Page, Locator, expect } from "@playwright/test";
import { ShoppingPOManager } from "./ShoppingPageObjectManager";
export class OrderConfirmationPage  {
    private static orderConfirmationPage: OrderConfirmationPage
    private thankYouOrderText: Locator
    private orderIdText: Locator
    //private page:Page




    private constructor(page: Page) {
       // this.page =page
        this.thankYouOrderText = page.getByText(' Thankyou for the order. ');
        this.orderIdText = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async getOrderID() {
        await this.thankYouOrderText.waitFor();
        let orderIdVal:any = await this.orderIdText.textContent();
        return orderIdVal.replaceAll("|","").trim();
    }


    static pageObject(page: Page): OrderConfirmationPage {
        if (this.orderConfirmationPage == null || this.orderConfirmationPage == undefined) {
            this.orderConfirmationPage = new OrderConfirmationPage(page);
        }
        return this.orderConfirmationPage;

    }

}