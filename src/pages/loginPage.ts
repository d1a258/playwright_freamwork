import {Page} from "@playwright/test"
import homePage from "./homePage";


export default class loginPage{

    private readonly userNameSelector = "#username";
    private readonly passwordSelector ="#password";
    private readonly submitButtonSelector = "#Login";
    
    constructor(private page: Page) {

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async  enterUserName(userName: string){
       return await this.page.fill(this.userNameSelector, userName);
    }
    async enterPassword(passWord: string){
        return await this.page.fill(this.passwordSelector, passWord);
    }
    
    async  clickOnSubmitBtn() : Promise<void> {
         await this.page
         .locator(this.submitButtonSelector)
         .click()
         .catch((error)=>{
            console.error(`Error while clicking on the Submit Button : ${error}`);
            throw  error;
        })  
        const HomePage = new homePage(this.page)
        // return HomePage
    }


}