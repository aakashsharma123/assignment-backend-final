import cartModel from "../models/Cart.js";

export async function addCart(req, res) { // for adding  to the cart
  const { title, description, rating, price, images, productids } = req.body; //from the req.body we took it 

  try {
    const addProduct = new cartModel({ // Create a new cart item document with provided data
      title,
      description,
      rating,
      price,
      images,
      productids
    });

    const addedProduct = await addProduct.save();  // Save the new cart item to the database

    addedProduct
      ? res
          .status(200)
          .json({ message: "product has been added to the cart successfully" })
      : res.status(404).json({ message: "user not added check the info " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

export async function getCartDetails(req, res) { // how many products are addded to cart we use this funtion
  const allCartItems = await cartModel.find();
  try {
    cartModel.length > 0
      ? res.status(200).json({ addedProductItemsToCart: allCartItems.length })
      : res.status(404).json({ message: "no product added to cart" });
  } catch (err) {
    res.status(500).json({ message: "problem occured while fetching data" });
  }
}

export async function deleteCartItems(req, res) {
  const id = req.params.id;
  try {
    const deleteItems = await cartModel.deleteMany({ productids: id });  // Delete cart items with matching product ID

    // console.log(deleteItems);

    deleteItems // Check if any items were deleted
      ? res
          .status(200)
          .json({ message: "caritems has been deletedSuccessfully" })  // Send success message if deleted

      : res.status(404).json({ message: "no user found with that id" }); // Send message if no items found
  } catch (err) {
    res.status(500).json({ message: `something went wrong ${err}` }); // Send generic error message
  }
}
