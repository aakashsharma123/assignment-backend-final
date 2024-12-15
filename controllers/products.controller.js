import productModel from "../models/Products.js";

export async function fetchProducts(req, res) {
  // for getting all products we use this function
  try {
    const products = await productModel.find(); // this will give us all the products that are there in database

    products.length > 0 && products // in database if length is > 0 then we will get all the products if not no products
      ? res.status(200).send(products)
      : res.status(404).json({ message: "No products found." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching products." });
  }
}

export async function fetchSingleProduct(req, res) {
  // this is used to get details of one product
  const { id } = req.params;

  try {
    const product = await productModel.findOne({ _id: id }); // we will check the product is there in database or not

    product
      ? res.status(200).send(product) // if product is there in database then i will return that product
      : res.status(404).json({ message: "product not found" }); // else no product is returned
  } catch (err) {
    res
      .status(500)
      .json({ message: "problem has accured while fetching data" }); // problems while fetching
  }
}

export async function addProduct(req, res) {
  const { title, description, rating, price, images } = req.body; // Extract product data from request body

  try {
    const newProduct = new productModel({ // Use correct variable name for new product
      title,
      description,
      rating,
      price,
      images,
    });

    const createdProduct = await newProduct.save(); // Save the new product

    createdProduct
      ? res.status(200).json({ message: "Product has been added successfully." })
      : res.status(500).json({ message: "An error occurred while adding the product." }); // More specific error message
  } catch (err) {
    console.error(err);
    // You can access the error message here: err.message
    res.status(500).json({ message: "An error occurred while adding the product." });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params; // Extract the product ID from request parameters
  const body = req.body; // Get the updated product data

  try {
    const product = await productModel.findByIdAndUpdate({ _id: id }, body);

    product
      ? res
          .status(200)
          .json({ message: "Product has been updated successfully" })
      : res.status(404).json({ message: "Product not found." }); // Send a 404 if product not found
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the product." }); // Send a generic error message
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params; // Extract the product ID from request parameters

  try {
    const product = await productModel.findByIdAndDelete({ _id: id }); //find the id and delete it

    product
      ? res
          .status(200)
          .json({ message: "Product has been deleted successfully." })
      : res.status(404).json({ message: "Product not found." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the product." });
  }
}
