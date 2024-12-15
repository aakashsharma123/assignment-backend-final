import mongoose from "mongoose"; // imported mongoose 

mongoose.connect ("mongodb://127.0.0.1:27017/Shoppyglobe"); //this is the url for connecting to database and the database name will Assignment


const db = mongoose.connection; // its saying it will connect to this url

db.on ("connected" , () => { // its saying it will connect to this url
    console.log ("mongodb is connected")
})
 
db.on ("disconnected" , () => {  // if database not connected
    console.log ("mongodb is not connected")
})

export default db //exporting the database 