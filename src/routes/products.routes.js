import { Router } from "express";
import {
  getProductsController,
  postProductController,
  getprdByIdController,
  delProdController,
  getProdCatByIdController,
  updProdController,
} from "../controllers/products.controller";

export const productsRoutes = Router();

productsRoutes.get("", getProductsController);

productsRoutes.get("/:id", getprdByIdController);

productsRoutes.get("/category/:category_id", getProdCatByIdController);

productsRoutes.post("", postProductController);

productsRoutes.delete("/:id", delProdController);

productsRoutes.patch("/:id", updProdController);
