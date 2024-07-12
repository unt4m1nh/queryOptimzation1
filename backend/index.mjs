// Load environment variables
import "./loadEnvironment.mjs";
import express from "express"
import mongoose from "mongoose";

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/Ecommerce');

const productSchema = mongoose.Schema({
    ID: Number,
    Type: String,
    SKU: String,
    Name: String,
    Published: Number,
    'Is featured ?': Number,
    'Visibility in catalog': String,
    'Short description': String,
    'In stock ?': Number,
    'Stock': Number,
    'Backorders allowed ?': Number,
    'Sold individually ?': Number,
    'Allow customer reviews?': Number,
    'Regular price': Number,
    Categories: String,
    Images: String,
    'Attribute 1 name': String,
    'Attribute 1 value(s)': String,
    'Attribute 2 name': String,
    'Attribute 2 value(s)': String
})

const productModel = mongoose.model("Product", productSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/getProducts', async (req, res) => {
    console.log('Request get products has been made');
    let result = await productModel.find({});
    res.send(result).status(200);
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })