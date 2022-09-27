import { Router } from "express";
import { UserController } from "./controllers/UserController";
import SessionController from "./controllers/SessionController";
import { PermitionController } from "./controllers/PermitionController";
import { RoleController } from "./controllers/RoleController";
const router = Router();

const createUserController = new UserController();
const createPermitionController = new PermitionController();
const createRoleController = new RoleController();

router.post("/create-user", createUserController.create);
router.post("/session", SessionController.create);
router.post("/create-permition", createPermitionController.create);
router.post("/create-roles", createRoleController.create);

export { router };
