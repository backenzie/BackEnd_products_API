import database from "../database";

export const updateCategorieService = async (id, categorie) => {
  try {
    if (categorie.id) {
      delete categorie["id"];
    }

    let query = "UPDATE categories SET ";
    const keys = Object.keys(categorie);
    const values = Object.values(categorie);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    if (res.rowCount === 0) {
      throw new Error("Categorie not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
