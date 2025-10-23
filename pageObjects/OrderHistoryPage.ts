import { Page, Locator, expect } from "@playwright/test";
import { ShoppingPOManager } from "./ShoppingPageObjectManager";
export class OrderHistoryPage {
    private static orderHistoryPage: OrderHistoryPage
    private ordersLink: Locator
    private orderList: Locator
    private viewButton: Locator
    private tableRowLoc: Locator
   // private page:Page



    private constructor(page: Page) {
      //  this.page=page
        this.ordersLink = page.getByRole('button', { name: '  ORDERS' });
        //await page.keyboard.press('Enter');
        this.orderList = page.locator("tbody");
        this.tableRowLoc = page.locator("tbody tr");

        this.viewButton = page.getByRole('button', { name: 'View' });

    }

    async navigateToOrderSummaryFromOrderListPage(orderId:any) {
        await this.ordersLink.click();
        //await page.keyboard.press('Enter');
        await this.orderList.waitFor();
        for (let i = 0; i < await this.tableRowLoc.count(); i++) {
            let roworderID: any = await this.tableRowLoc.nth(i).locator('th').textContent();
            if (orderId.includes(roworderID)) {
                await this.tableRowLoc.nth(i).locator(this.viewButton).click();
                break;
            }
        }

    }

    static pageObject(page: Page): OrderHistoryPage {
        if (this.orderHistoryPage == null || this.orderHistoryPage == undefined) {
            this.orderHistoryPage = new OrderHistoryPage(page)
        }
        return this.orderHistoryPage;

    }

}