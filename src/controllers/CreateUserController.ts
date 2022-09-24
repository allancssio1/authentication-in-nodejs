import { Request, Response } from "express";
import { prisma } from "../database/pirsmaClient";
import { UserModels } from "../models/Users";

export class CreateUserController {
  async handle(req: Request, res: Response) {
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
      response: resultCreate ? "User Create Success" : resultCreate,
    });
  }
}
