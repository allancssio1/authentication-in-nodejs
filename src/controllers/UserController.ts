import { Request, Response } from "express";
import { prisma } from "../database/pirsmaClient";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, username, password } = req.body;
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (userAlreadyExists)
      return res.json({
        error: "user already exists",
      });

    const user = await prisma.user.create({
      data: {
        name,
        username,
        password,
      },
    });

    return res.json({
      response: "User Create Success",
    });
  }
}
