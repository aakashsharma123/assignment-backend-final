import productModel from "../models/Products.js";

export async function fetchProducts(req, res) {
  try {
    const products = await productModel.find();

    products.length > 0 && products
      ? res.status(200).send(products)
      : res.status(404).json({ message: "No products found." });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while fetching products." });
  }
}

export async function fetchSingleUSer(req, res) {
  const { id } = req.params;

  try {
    const product = await productModel.findOne({ _id: id });

    product
      ? res.status(200).send(product)
      : res.status(404).json({ message: "prodcut not found" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "problem has accured while fetching data" });
  }
}

export async function addProduct(req, res) {
  const { title, description, rating, price, images } = req.body;


  try {
    const newUser = new productModel({
      title,
      description,
      rating,
      price,
      images
    });

    const createdUser = await newUser.save();
    const existinguser = await productModel.findOne({title});

    
      createdUser
      ? res.status(200).json({ message: "product has been added successfully" })
      : res.status(404).json({
          message: "product not added successfully , check the data again"
        });
    
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "problem occured while fetching data" });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const body = req.body;

  try {
    const product = await productModel.findByIdAndUpdate({ _id: id }, body);

    product
      ? res.status(200).json({ message: "Product has been updated successfully" })
      : res.status(404).json({ message: "Product not found." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the product." });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const product = await productModel.findByIdAndDelete({ _id: id });

    product
      ? res.status(200).json({ message: "Product has been deleted successfully." })
      : res.status(404).json({ message: "Product not found." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the product." });
  }
}
