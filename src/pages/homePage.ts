import { Page, expect } from "@playwright/test";


export default class homePage{
    private readonly serviceTitleLocator = "service";
    constructor(private page: Page) {

    }
    
    async verifyUserIsLoggedIn(){
        await expect (this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({timeout:15000}); //wait for the element to
        
    }
}