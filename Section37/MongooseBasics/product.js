const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("CONNECTION OPEN!!!");
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive!"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Cucling Jersey",
  price: 28.5,
  categories: ["Cycling"],
  size: "XS",
});
bike
  .save()
  .then((data) => {
    console.log("IT WORKED!");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO ERROR!");
    console.log(err);
  });

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: -9 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("IT WORKED!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO ERROR!");
//     console.log(err);
//   });
