import cartModel from "../models/Cart.js";

export async function addCart(req, res) {
  const { title, description, rating, price, images, productids } = req.body;

  try {
    const addProduct = new cartModel({
      title,
      description,
      rating,
      price,
      images,
      productids
    });

    const addedProduct = await addProduct.save();

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

export async function getCartDetails(req, res) {
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
    const deleteItems = await cartModel.deleteMany({ productids: id });
    // console.log(deleteItems);

    deleteItems
      ? res
          .status(200)
          .json({ message: "caritems has been deletedSuccessfully" })
      : res.status(404).json({ message: "no user found with that id" });
  } catch (err) {
    res.status(500).json({ message: `something went wrong ${err}` });
  }
}
