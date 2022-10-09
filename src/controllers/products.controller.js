import { getPrdgByIdService } from "../services/getProdByID.service";
import { listProductsService } from "../services/getProducts.service";
import { createProductService } from "../services/postProducts.service";
import { delProdService } from "../services/delProdById.service";
import { getPrdgCatByIdService } from "../services/getCatProd.service";
import { updateProdService } from "../services/patchProd.service";

export const postProductController = async (req, res) => {
  try {
    const product = req.body;
    const createProduct = await createProductService(product);
    return res.status(201).json({
      message: "Product Created!",
      product: createProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getProductsController = async (req, res) => {
  try {
    const products = await listProductsService();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getProdCatByIdController = async (req, res) => {
  try {
    const id = req.params;
    console.log(id);
    const prdFound = await getPrdgCatByIdService(id);
    return res.json(prdFound);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getprdByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const prdFound = await getPrdgByIdService(id);
    return res.json(prdFound);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const delProdController = async (req, res) => {
  try {
    const id = req.params.id;
    await delProdService(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updProdController = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;

    const updatedPrd = await updateProdService(id, product);

    return res.json({
      message: "product Updated!",
      product: updatedPrd,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};
