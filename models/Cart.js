import mongoose from "mongoose";

const CartSchema = new mongoose.Schema ({

     
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

const cartModel = mongoose.model ("cart" , CartSchema);

export default cartModel;

