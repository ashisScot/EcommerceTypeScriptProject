import { Page } from "@playwright/test"
import { LoginPage } from "./LoginPage"
import { DashboardPage } from "./DashboardPage"
import { OrderConfirmationPage } from "./orderConfirmationPage"
import { OrderHistoryPage } from "./OrderHistoryPage"
import { OrderSummaryPage } from "./OrderSummaryPage"
import { PlaceOrderPage } from "./PlaceOrderPage"
export class ShoppingPOManager{
     private page:Page

     constructor(page:Page){
        this.page =page
     }

     get loginPO(){
        return LoginPage.pageObject(this.page);

     }

     get dashboardPO(){
        return DashboardPage.pageObject(this.page);

     }
     get orderConfirmationPO(){
        return OrderConfirmationPage.pageObject(this.page);

     }
     get orderHistoryPO(){
        return OrderHistoryPage.pageObject(this.page);

     }
     get orderSummaryPO(){
        return OrderSummaryPage.pageObject(this.page);

     }

     get placeOrderPO(){
        return PlaceOrderPage.pageObject(this.page);

     }
}