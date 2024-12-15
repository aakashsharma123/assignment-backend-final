import {
  fetchProducts,
  fetchSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
} from "../controllers/products.controller.js";
import {
  getCartDetails,
  addCart,
  deleteCartItems
} from "../controllers/cart.controller.js";
import verifyToken from "../middlewares/verifyToken.js";

function routes(app) {
  app.get("/products", fetchProducts); // for fetching the products 
  app.get("/products/:id", fetchSingleProduct); // for fetching one specfic product
  app.post("/add/product", addProduct); // add one product
  app.put("/update/product/:id", updateProduct); // update specfic product
  app.delete("/delete/product/:id", deleteProduct); // delete product
  app.get("/getCartDetails", verifyToken, getCartDetails); // get cart details
  app.post("/add/tocart", verifyToken, addCart); // add to cart
  app.delete("/delete/cartitem/:id", verifyToken, deleteCartItems); // delete product from cart
}

export default routes;
