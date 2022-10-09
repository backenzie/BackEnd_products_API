import { getCategById } from "../services/getCategorie.service";
import { listCategoriesService } from "../services/getCategories.service";
import { createCategoryService } from "../services/postCategories.service";
import { delCategorieService } from "../services/delCategorie.service";
import { updateCategorieService } from "../services/patchCategorie.service";

export const getCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();

    return res.json(categories);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const postCategorieController = async (req, res) => {
  try {
    const cat = req.body;

    const createdCat = await createCategoryService(cat);

    return res.status(201).json({
      message: "Categorie Created!",
      category: createdCat,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getCategoryByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const categorieFound = await getCategById(id);
    return res.json(categorieFound);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const deletCategController = async (req, res) => {
  try {
    const id = req.params.id;
    await delCategorieService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updCategController = async (req, res) => {
  try {
    const id = req.params.id;
    const categorie = req.body;

    const updatedCateg = await updateCategorieService(id, categorie);

    return res.json({
      message: "Categorie Updated!",
      category: updatedCateg,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};
