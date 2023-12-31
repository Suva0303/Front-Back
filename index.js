const express = require("express"); 
const mongoose = require("mongoose"); 
const app = express(); 

const itemRouter = require("./routes/itemRouter.js");
const homeRouter = require("./routes/homeRouter.js");
 
app.set("view engine", "hbs"); 
app.set("views", "pages"); 
app.use(express.static('./css'));  
app.use('/images', express.static('./images')); 
app.use(express.urlencoded({ extended: false})); 
 
const PORT = 3000 
const DBName = "person" 

app.use("/items", itemRouter);
app.use("/", homeRouter); 

async function main(){ 
    try{ 
        await mongoose.connect("mongodb://127.0.0.1:27017/" + DBName); 
        app.listen(PORT); 
        console.log("Сервер подключен..."); 
    } 
 
    catch(err){ 
        return console.log(err); 
    } 
} 
main(); 
 
process.on("SIGINT", async() =>{ 
    await mongoose.disconnect(); 
    console.log("Приложение завершило работу"); 
    process.exit(); 
});