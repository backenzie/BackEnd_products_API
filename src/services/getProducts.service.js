import database from "../database";

export const listProductsService = async () => {
  try {
    let res = await database.query(`SELECT * FROM products;`, []);

    let products = res.rows;

    return products;
  } catch (error) {
    throw new Error(error);
  }
};
