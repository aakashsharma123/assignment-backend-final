import mongoose from "mongoose"; 

const productSchema = new mongoose.Schema({     // product schema for structure of the product 
    
    title : {
        type : String,
        required : true,
        unique: true,
    },

    description : {
        type : String ,
        required : true,

    },

    rating : {
        type : Number,
        required : true,

    },

    price : {
        type : Number,
        required : true,

    },

    images : {
        type : String,

    },
})

const productModel = mongoose.model ("products" , productSchema); // we can now use that schema and add products

export default productModel;