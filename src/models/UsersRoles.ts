import { prisma } from "../database/pirsmaClient";

export const UsersRoles = {
  createUserRole: async (userId: string, rolesId: string) => {
    const resultRelationPermitionsRoles = await prisma.usersRoles.create({
      data: {
        userId,
        rolesId,
      },
    });

    return resultRelationPermitionsRoles;
  },
};
