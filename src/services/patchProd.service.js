import database from "../database";

export const updateProdService = async (id, product) => {
  try {
    if (product.id) {
      delete product["id"];
    }

    let query = "UPDATE products SET ";
    const keys = Object.keys(product);
    const values = Object.values(product);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    if (res.rowCount === 0) {
      throw new Error("Product not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
