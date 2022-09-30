import { Request, Response } from 'express';
import { RolesModel } from '../models/Roles';
import { UserModels } from '../models/Users';
import { UsersRoles } from '../models/UsersRoles';

export class UserController {
  async create(req: Request, res: Response) {
    const { name, username, password, roleId } = req.body;

    const userAlreadyExists = await UserModels.findUserByUsername(username);

    if (userAlreadyExists)
      return res.json({
        error: 'user already exists',
      });

    const roleFinded = await RolesModel.findRoleById(roleId);
    const resultCreateUser = await UserModels.createNewUser(
      name,
      username,
      password,
    );
    const roleFindedId = roleFinded && roleFinded.id ? roleFinded.id : '';
    const rresultCreateUserId =
      resultCreateUser && resultCreateUser.id ? resultCreateUser.id : '';
    const resultUsersRoles = await UsersRoles.createUserRole(
      rresultCreateUserId,
      roleFindedId,
    );

    return res.json({
      user: resultCreateUser,
      userRoles: resultUsersRoles,
    });
  }
}
