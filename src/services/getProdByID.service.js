import database from "../database";

export const getPrdgByIdService = async (id) => {
  try {
    const res = await database.query(
      `SELECT
                *
            FROM
                products
            WHERE
                id = $1`,
      [id]
    );

    const ProdID = res.rows[0];

    if (!ProdID) {
      throw new Error("Categorie not found");
    }

    return ProdID;
  } catch (error) {
    throw new Error(error);
  }
};
