import { Before,After, BeforeStep, AfterStep, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { ShoppingPOManager } from "../pageObjects/ShoppingPageObjectManager";
import { sqldbPoolConfig } from "../config/dbconfig";
//const allure = require('allure-cucumberjs');
import * as allure from 'allure-js-commons';
setDefaultTimeout(60 * 1000 )

//Before After will run before and after the scenario execution
Before(async function () {
    const browser = await chromium.launch({
        'headless':true
    })
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.shoppingPOManager = new ShoppingPOManager(this.page);
    
});

After(async function(scenario){
   // if(scenario.result?.status === "FAILED"){
       const screenshot= await this.page.screenshot({fullpage:true});
    //await allure.attachment("Screenshot",screenshot,'image/png');
    await this.attach(screenshot,'image/png');
    //    if(sqldbPoolConfig !== null){
    //     await sqldbPoolConfig.end();
    //    }
       
   // }
    console.log("I am the last to execute")
});


BeforeStep(function(){

});

AfterStep(async function({result}){
    //result of the step pass and failed will come in the after step
    if(result.status == Status.FAILED){
        await this.page.screenshot({path:'failed_Screenshot1.png'})
    }

})

