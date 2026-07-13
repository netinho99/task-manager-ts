import { Router, Request, Response } from "express";
import { Task } from "../models/Task.js";

const router = Router();

let tasks: Task[] = [
    {
        id: 1,
        title: "Minha primeira tarefa",
        completed: false,
    },
      {
        id: 2,
        title: "Minha segunda tarefa",
        completed: false,
    }
];

router.get("/", (_req: Request, res: Response) => {
    return res.status(200).json(tasks);
});

router.post("/", (req: Request, res: Response) => {
    const { title } = req.body;

    if (!title || typeof title !== "string") {
        return res.status(400).json({
            message: "O campo 'title' é obrigatório.",
        });
    }

    const newTask: Task = {
        id: tasks.length + 1,
        title,
        completed: false,
    };

    tasks.push(newTask);

    return res.status(201).json(newTask);
});

router.put("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Tarefa não encontrada.",
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
        task.title = title;
    }

    if (completed !== undefined) {
        task.completed = completed;
    }

    return res.status(200).json(task);
});

router.delete("/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const taskExists = tasks.some((task) => task.id === id);

    if (!taskExists) {
        return res.status(404).json({
            message: "Tarefa não encontrada.",
        });
    }

    tasks = tasks.filter((task) => task.id !== id);

    return res.status(200).json({
        message: "Tarefa removida com sucesso.",
    });
});

router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Tarefa não encontrada."
        });
    }

    return res.status(200).json(task);

});

export default router;