import express from 'express';
const app = express();
import db from './database.js';
import routes from './Routes/productDetails.routes.js';
import bodyParser from 'body-parser';
import { userRoutes } from './Routes/user.routes.js';
//...................the below middlewares is to parse JSON AND URLENCODED codes//
app.use (express.json())
app.use (express.urlencoded ({extended : true}))
app.use (bodyParser.json())

routes (app)
userRoutes (app)

app.listen (3000 , () => {
    console.log ("server is connected to the port : 3000")
})

