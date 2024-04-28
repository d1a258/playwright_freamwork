import test from "@playwright/test";
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";

test('test', async({page})=>{

    const LoginPage = new loginPage(page)

    await LoginPage.navigateToLoginPage();
    await LoginPage.enterUserName('diaaeldin@sayed258.com');
    await LoginPage.enterPassword('D!@@eldin25800');
    await LoginPage.clickOnSubmitBtn()



    const HomePage = new homePage(page);
    await HomePage.verifyUserIsLoggedIn();
})