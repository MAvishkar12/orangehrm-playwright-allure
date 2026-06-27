import {test as base} from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

type Myfixtures ={
    loginPage :LoginPage,
  registerPage :RegisterPage
}

export const test=base.extend<Myfixtures> (
    {
        loginPage:async({page},use)=>{
            const loginPage= new LoginPage(page)
            
            await use(loginPage)
        }
    }
)

export {expect } from "@playwright/test";