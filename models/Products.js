import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    title : {
        type : String,
        required : true,
        unique : true
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
        type : String
    },
})

const productModel = mongoose.model ("products" , productSchema);

export default productModel;