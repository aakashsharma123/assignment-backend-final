import { userRegister , LoginUser } from "../controllers/user.controller.js"


export function userRoutes (app) {
    app.post ("/register" , userRegister )  // for user registeration   
    app.post ("/login" , LoginUser)  // for user login
}