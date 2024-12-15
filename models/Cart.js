import mongoose from "mongoose";

const CartSchema = new mongoose.Schema ({  // cart schema for structure of the cartproduct 

     
    title : {
        type : String,
        required : true
    },

    description : {
        type : String ,
        required : true
    },

    rating : {
        type : Number,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    images : {
        type : String,
        required : true
    }

    ,
    productids : {
        type : String,
        required : true
    }


})

const cartModel = mongoose.model ("cart" , CartSchema);  // we can now use that schema and add to cart


export default cartModel;

