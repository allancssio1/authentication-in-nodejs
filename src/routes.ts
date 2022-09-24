import { Router } from "express";
import { CreateUserController } from "./controllers/UserController";

const router = Router();

const createUserController = new CreateUserController();

router.post("/create-user", createUserController.handle);

export { router };
