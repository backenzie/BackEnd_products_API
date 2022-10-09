import { Router } from "express";
import {
  deletCategController,
  getCategoriesController,
  getCategoryByIdController,
  postCategorieController,
  updCategController,
} from "../controllers/categories.controller";

export const categoriesRoutes = Router();

categoriesRoutes.get("", getCategoriesController);

categoriesRoutes.post("", postCategorieController);

categoriesRoutes.get("/:id", getCategoryByIdController);

categoriesRoutes.patch("/:id", updCategController);

categoriesRoutes.delete("/:id", deletCategController);
