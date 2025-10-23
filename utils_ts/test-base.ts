//creating custom fixture for a test by extending base properties
import {test as baseTest} from '@playwright/test'

interface TestDataForOrder{
    username:string,
    password:string,
    productName:string,
    countryName:string,
    countryCode:string

}
//extending existing default object with customize property
//exporting whole new behavior by extending new properties as one property called test
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(
    {
        //all customize property need to give in curly braces
        //java script object with typing
        //testDataforOrder fixture
        testDataForOrder:{
    
    username:"riya.kundu@gmail.com",
    password:"bubuDarling@21",
    productName:"ZARA COAT 3",
    countryName:"India",
    countryCode:"ind"
    }    

    }
)