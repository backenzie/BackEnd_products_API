import database from "../database";

export const getCategById = async (id) => {
  try {
    const res = await database.query(
      `SELECT
                *
            FROM
                categories
            WHERE
                id = $1`,
      [id]
    );

    const categoriesID = res.rows[0];

    if (!categoriesID) {
      throw new Error("Categorie not found");
    }

    return categoriesID;
  } catch (error) {
    throw new Error(error);
  }
};
