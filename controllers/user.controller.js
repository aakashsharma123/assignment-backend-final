import  jwt from "jsonwebtoken";
import userModel from "../models/user.js";
import bcrypt, { hash, hashSync } from 'bcrypt';

export async function userRegister (req , res) {
        const {username , password , name} = req.body;

        try {
            const existingUser  = await userModel.findOne({username});

            if (existingUser) res.status (404).json ({message : "user already registered..."})
                   
            const newUser = new userModel ({
                username , password : bcrypt.hashSync (password , 10), name
            })

            const user = await newUser.save();

            user && res.status(200).json ({message : "user has successfully registered"})
            
        }catch (err) {  
            res.status (500).json ({message : "something happened" , err})
        }
}

export async function LoginUser (req , res) {
    const {username , password} = req.body;

    try {
        const findUser = await userModel.findOne ({username})

        if (findUser) {
            const token = jwt.sign (findUser.username , "secret")
            const compareUserPassword = await bcrypt.compare (password , findUser.password);

            if (compareUserPassword) {
                res.send ({
                    login : "user has successfully logined in ",
                    details : {
                        username,password
                    },
                    accesstoken : token
                })
            }else {
                res.status (404).json ({message : "username or password is invalid check again"})
            }
        }
    }catch (err) {  
        res.status(500).json ({message : "issue while fetching data from database"} , err)
    }
}