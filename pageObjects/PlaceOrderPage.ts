import { Page, Locator,expect } from "@playwright/test";
import { ShoppingPOManager } from "./ShoppingPageObjectManager";
export class PlaceOrderPage {
    private checkout: Locator
    private selectCountry: Locator
    private dropdowns: Locator
    private dropdownOptions: Locator
    private userName: Locator
    private placeOrderButton: Locator
   // private page:Page

   private static placeOrderPage: PlaceOrderPage

   private constructor(page: Page) {
     //   this.page=page
        this.checkout = page.getByRole('button', { name: 'Checkout' });
        this.selectCountry = page.getByPlaceholder("Select Country"); //press sequentially typing string in a sequential manner
        this.dropdowns = page.locator("section[class*='ta-results']");
        this.dropdownOptions = page.locator("section[class*='ta-results'] button");
        this.userName = page.locator(".user__name [type='text']").first()
        this.placeOrderButton = page.getByText("Place Order ");


    }

    static pageObject(page: Page): PlaceOrderPage {
        if (this.placeOrderPage == null || this.placeOrderPage == undefined) {
            this.placeOrderPage = new PlaceOrderPage(page);
        }
        return this.placeOrderPage;
    }
    

    async placeOrder(countryName:any, countryCode: string, email:string) {
        await this.checkout.click();
        await this.selectCountry.pressSequentially(countryCode, { delay: 100 })
        await this.dropdowns.waitFor();

        const optionsCount = await this.dropdownOptions.count();
        console.log(optionsCount);
        for (let i = 0; i < optionsCount; i++) {
            let text:any = await this.dropdownOptions.nth(i).textContent();
            console.log(text);
            if (text.trim() === countryName) {
                await this.dropdownOptions.nth(i).click();
                break;
            }
        }
        await expect(this.userName).toHaveText(email);
        await this.placeOrderButton.click();
    }





}