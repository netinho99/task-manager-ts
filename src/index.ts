import express from "express";
import taskRoutes from "./routes/tasks";

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(3000, () => {
    console.log("Essa bosta tá rodando é tudo que precisa saber, não mexa no código.");
});