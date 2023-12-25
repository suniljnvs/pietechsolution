const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./apis/route.js");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://pramodkumarjnvs:MUvTCoFLoyI9yNCi@test-pro-sun.uzc7nio.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
    process.exit();
  });

app.use("/", apiRoutes);
app.listen(process.env.port || 3000 , function(){
    console.log('Server Running at Port 3000');
}); 