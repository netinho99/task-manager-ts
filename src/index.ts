import express from "express";
import taskRoutes from "./routes/tasks";
import "./database/database.js";

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(3000, () => {
    console.log("compilou, iniciou e não explodiu. Já é um ótimo começo.");
});