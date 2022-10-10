import database from "../database";

export const getPrdgCatByIdService = async (id) => {
  try {
    const res = await database.query(
      `SELECT pr.name, pr.price, pr.category_id AS category FROM products pr
      JOIN categories ca ON pr.category_id = $1;`,
      [id]
    );

    const ProdCat = res.rows;

    if (!ProdCat) {
      throw new Error("category not found");
    }
    return ProdCat;
  } catch (error) {
    throw new Error(error);
  }
};
