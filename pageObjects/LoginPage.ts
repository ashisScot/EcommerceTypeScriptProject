import { Page,Locator} from "@playwright/test";
import { ShoppingPOManager } from "./ShoppingPageObjectManager";
export class LoginPage {
    private userNameLoc:Locator
    private passwordLoc:Locator
    private signInBtn:Locator
    //private page:Page
    private static loginPage:LoginPage

   private constructor(page:Page){
       // this.page=page
        this.userNameLoc = page.locator("#userEmail");
        this.signInBtn = page.locator('[value="Login"]');
        this.passwordLoc =page.locator('#userPassword')

    }

    async login(username:string, password:string){
        await this.userNameLoc.fill(username);
        await this.passwordLoc.fill(password);
        await this.signInBtn.click();

    }

     static pageObject(page:Page):LoginPage{
        if(this.loginPage == null ||this.loginPage ==undefined){
            this.loginPage = new LoginPage(page)
        }
        return this.loginPage
    }
}