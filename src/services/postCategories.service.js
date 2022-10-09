import database from "../database";

export const createCategoryService = async (categorie) => {
  try {
    const res = await database.query(
      `INSERT INTO
          categories(name)
        VALUES
          ($1)
        RETURNING *;
        `,
      [categorie.name]
    );

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
