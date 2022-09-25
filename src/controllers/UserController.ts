import { Request, Response } from "express";
import { UserModels } from "../models/Users";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, username, password } = req.body;

    const userAlreadyExists = await UserModels.findUserByUsername(username);

    if (userAlreadyExists)
      return res.json({
        error: "user already exists",
      });

    const resultCreate = await UserModels.createNewUser(
      name,
      username,
      password,
    );

    return res.json({
      response: resultCreate ? "User Create Success." : "Create user error!",
    });
  }
}
