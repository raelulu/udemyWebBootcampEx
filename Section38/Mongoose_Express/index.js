const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("CONNECTION OPEN!!!");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

app.get("products/:id", async (req, res) => {
  const { id } = res.params;
  const product = await Product.findById(id);
  console.log(product);
  res.send("details page!");
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!");
});
