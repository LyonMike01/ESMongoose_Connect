const express = require ("express");
const app = express();
const mongoose = require ("mongoose");

//Database


const database = module.exports = async  () => {

        try {
          await  mongoose.connect("mongodb+srv://Lyonmike01:Perfectgen2mic@mycluster1.iee4evx.mongodb.net/?retryWrites=true&w=majority")
            console.log("Database connected Successfully")
        } catch (error) {
            console.log(error.message);
        }
}



database();

const port = 3000;

app.listen (port, () => {
    console.log (`Server is running on port ${port}`);
})