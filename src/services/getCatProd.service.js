import database from "../database";

export const getPrdgCatByIdService = async (id) => {
  try {
    const value = Object.values(id);

    const res = await database.query(
      `SELECT pr.name, pr.price, pr.category_id FROM products pr
      JOIN categories ca ON pr.category_id = ca.id;`,
      [value]
    );

    const ProdCat = res.rows[0];

    if (!ProdCat) {
      throw new Error("Prod/Cat not found");
    }

    return ProdCat;
  } catch (error) {
    throw new Error(error);
  }
};
