import { Request, response, Response } from "express";
import { UserModels } from "../models/Users";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class SessionController {
  async handle(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await UserModels.findUserByUsername(username);

    if (!user)
      return res.status(400).json({
        message: "User not found!",
      });

    const matchPassword = await compare(password, user.password);

    if (!matchPassword)
      return res.status(500).json({
        message: "invalid data",
      });

    const token = sign({}, "f5d79c434c8fe986e83d34d59062063e", {
      subject: user.id,
      expiresIn: "1d",
    });

    user.password = "";
    user.username = "";

    return res.json({
      token,
      user,
    });
  }
}

export default new SessionController();
