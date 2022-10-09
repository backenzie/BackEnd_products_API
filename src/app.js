import { startDatabase } from "./database";
import { categoriesRoutes } from "./routes/categories.routes";
import express from "express";
import "dotenv/config";
import { productsRoutes } from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});

export default app;
