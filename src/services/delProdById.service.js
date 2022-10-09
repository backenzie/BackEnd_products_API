import database from "../database";

export const delProdService = async (id) => {
  try {
    const res = await database.query(
      `DELETE FROM 	
                products 
            WHERE 
                id = $1
            RETURNING *;`,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("Product not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};
