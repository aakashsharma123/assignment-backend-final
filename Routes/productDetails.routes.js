import {
  fetchProducts,
  fetchSingleUSer,
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
  app.get("/products", fetchProducts);
  app.get("/products/:id", fetchSingleUSer);
  app.post("/add/product", addProduct);
  app.put("/update/product/:id", updateProduct);
  app.delete("/delete/product/:id", deleteProduct);
  app.get("/getCartDetails", verifyToken, getCartDetails);
  app.post("/add/tocart", verifyToken, addCart);
  app.delete("/delete/cartitem/:id", verifyToken, deleteCartItems);
}

export default routes;
