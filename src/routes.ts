import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import SessionController from "./controllers/SessionController";
const router = Router();

const createUserController = new CreateUserController();

router.post("/create-user", createUserController.handle);
router.post("/session", SessionController.handle);
export { router };
