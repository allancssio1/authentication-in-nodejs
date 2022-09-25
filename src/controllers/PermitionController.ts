import { Request, Response } from "express";
import { PermitionModel } from "../models/Permitions";

export class PermitionController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const existsPermition = await PermitionModel.findPermitionByName(name);

    if (existsPermition)
      return res.status(400).json({
        message: "Permition already exists!",
      });

    const resultCreate = await PermitionModel.createNewPermition(
      name,
      description,
    );

    return res.json({
      response: resultCreate
        ? "Permition Create Success"
        : "Create permition Error",
    });
  }
}
