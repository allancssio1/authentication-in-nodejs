import { Router } from "express";
import { UserController } from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import { PermitionController } from "./controllers/PermitionController";
const router = Router();

const createUserController = new UserController();
const createPermitionController = new PermitionController();

router.post("/create-user", createUserController.create);
router.post("/session", SessionController.create);
router.post("/create-permition", createPermitionController.create);

export { router };
