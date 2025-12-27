import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber";
import EcommerceTestData from '../testData/ECommerceTestData.json';
import { DBPersistence } from "../utils_ts/DBPersistence";
import { sqlDBConnect } from "../utils_ts/sqlDbConnect";
import { DBVerificationDetails } from "../utils_ts/DBVerificationDetails";
 Given('User login to ecommerce Application', async function () {
           // Write code here that turns the phrase above into concrete actions
           await this.page.goto(EcommerceTestData.appUrl);
            let loginPage = this.shoppingPOManager.loginPO;
            await loginPage.login(EcommerceTestData.loginCredentials.username,EcommerceTestData.loginCredentials.password)

         });

 Given('User add product {string} to cart', async function (productName:string) {
           // Write code here that turns the phrase above into concrete actions
           let dashboardPage =this.shoppingPOManager.dashboardPO;
            await dashboardPage.addProductToCart(productName);
         await dashboardPage.naviateToCart();
});

When('user places the order with valid details', async function () {
           // Write code here that turns the phrase above into concrete actions
            let placeOrderPage = this.shoppingPOManager.placeOrderPO;
            let orderconfirmationPage = this.shoppingPOManager.orderConfirmationPO
           await placeOrderPage.placeOrder(EcommerceTestData.productDetails.countryName,EcommerceTestData.productDetails.countryCode,EcommerceTestData.loginCredentials.username)
            this.orderId =await orderconfirmationPage.getOrderID();
           
         });

Then('verify order is listed in the order history page', async function () {
           // Write code here that turns the phrase above into concrete actions
          let orderHistoryPage = this.shoppingPOManager.orderHistoryPO
           await orderHistoryPage.navigateToOrderSummaryFromOrderListPage(this.orderId);
         });

Then('verify order displayed in order summary Page', async function () {
           // Write code here that turns the phrase above into concrete actions
           let orderSummaryPage = this.shoppingPOManager.orderSummaryPO
           await orderSummaryPage.verifyOrderIdDisplayedInOrderSummaryPage(this.orderId);
         });


Then('Verify order is reflecting in db correctly', async function () {
           // Write code here that turns the phrase above into concrete actions
           let orderId="68ebb713f669d6cb0a0dd9eb";
           let dBVerificationDetails= new DBVerificationDetails();
          let orderData= await dBVerificationDetails.getOrderDetailsFromDB(orderId);
           await dBVerificationDetails.verifyOrderDisplayedCorrectlyInDB(orderData);
      
         });         
