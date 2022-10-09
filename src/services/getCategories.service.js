import database from "../database";

export const listCategoriesService = async () => {
  try {
    let res = await database.query(`SELECT * FROM categories;`, []);

    let categories = res.rows;

    return categories;
  } catch (error) {
    throw new Error(error);
  }
};
