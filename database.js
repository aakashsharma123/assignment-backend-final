import mongoose from "mongoose";

mongoose.connect ("mongodb://127.0.0.1:27017/Shoppyglobe");


const db = mongoose.connection;

db.on ("connected" , () => {
    console.log ("mongodb is connected")
})

db.on ("disconnected" , () => {
    console.log ("mongodb is not connected")
})

export default db