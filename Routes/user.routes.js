import { userRegister , LoginUser } from "../controllers/user.controller.js"


export function userRoutes (app) {
    app.post ("/register" , userRegister )
    app.post ("/login" , LoginUser)
}