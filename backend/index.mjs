// Load environment variables
import './loadEnvironment.mjs';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/Amazon');

const productSchema = mongoose.Schema({
  _id: String,
  name: String,
  main_category: String,
  sub_category: String,
  image: String,
  link: String,
  ratings: Number,
  no_of_ratings: Number,
  discount_price: String,
  actual_price: String,
});

const productModel = mongoose.model('shoes', productSchema);
const productsPerPage = 20;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getProducts/page?', async (req, res) => {
  console.log('Request get products has been made');
  const pageNum = req.query.page;
  let result = await productModel
    .find({})
    .skip((pageNum - 1) * productsPerPage)
    .limit(productsPerPage);
  res.send(result).status(200);
});

/**
 * Get products by text search
 */
app.get('/getProductsByName/:name/page?', async (req, res) => {
  const name = req.params.name.split(':').at(1);
  const pageNum = req.query.page;
  let result = await productModel
    .find({
      // name: { $regex: name },
      $text: { $search: name },
    })
    .skip((pageNum - 1) * productsPerPage)
    .limit(productsPerPage);
  res.send(result).status(200);
});

/**
 * Get query execution stats
 */
app.get('/getProductsByName/executionStats/:name', async (req, res) => {
  const name = req.params.name.split(':').at(1);
  const pageNum = req.query.page;
  let result = await productModel
    .find({
      // name: { $regex: name },
      $text: { $search: name },
    })
    .limit(20)
    .skip((pageNum - 1) * productsPerPage)
    .limit(productsPerPage)
    .explain('executionStats');
  res.send(result).status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
