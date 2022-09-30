import { Request, Response } from "express";
import { PermitionModel } from "../models/Permitions";
import { PermitionsRoles } from "../models/PermitionsRoles";
import { RolesModel } from "../models/Roles";

export class RoleController {
  async create(req: Request, res: Response) {
    const { name, description, permitionsIds } = req.body;

    const resultCreateRole = await RolesModel.createNewRole(name, description);

    if (!resultCreateRole)
      return res.status(400).json({
        message: "Role don't created!",
      });

    const roleId = resultCreateRole.id;

    const resultPermitionsRoles = await PermitionsRoles.createPermitionsRole(
      permitionsIds,
      roleId,
    );

    return res.json({
      resultCreateRole,
      resultPermitionsRoles,
    });
  }
}
