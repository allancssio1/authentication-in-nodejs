import { Request, Response } from "express";
import { RolesModel } from "../models/Roles";

export class RoleController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const existsRole = await RolesModel.findRoleByName(name);

    if (existsRole)
      return res.status(400).json({
        message: "Role already exists!",
      });

    const resultCreate = await RolesModel.createNewRole(name, description);

    return res.json({
      response: resultCreate ? "Role Create Success" : "Create role Error",
    });
  }
}
