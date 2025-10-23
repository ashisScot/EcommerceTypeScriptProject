import { Page, Locator } from "@playwright/test";
import { ShoppingPOManager } from "./ShoppingPageObjectManager";
export class DashboardPage {
    private static dashboardPage:DashboardPage
    private allProductitles: Locator
    private allproductItems: Locator
    private addToCart: Locator
    private cart: Locator
   // private page:Page

     private constructor(page: Page) {
       // this.page=page
        this.allProductitles = page.locator(".card-body b");
        this.allproductItems = page.locator("div.card-body");
        this.addToCart = page.getByRole('button', { name: 'Add To Cart' })
        this.cart = page.locator('button[routerlink*=cart]');

    }

    async addProductToCart(productName: string) {
        await this.allProductitles.first().waitFor();
        await this.allproductItems.filter({ hasText: productName }).
            getByRole('button', { name: 'Add To Cart' }).click();


    }

    async naviateToCart() {
        await this.cart.click();

    }


    static pageObject(page: Page): DashboardPage {
        if(this.dashboardPage == null || this.dashboardPage == undefined){
            this.dashboardPage = new DashboardPage(page)
        }
        return this.dashboardPage
    }


}