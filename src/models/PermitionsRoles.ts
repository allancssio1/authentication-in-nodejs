import { prisma } from '../database/pirsmaClient';

export const PermitionsRoles = {
  createPermitionsRole: async (permitionId: string, rolesId: string) => {
    const resultRelationPermitionsRoles =
      await prisma.permitionsAndRoles.create({
        data: {
          permitionId,
          rolesId,
        },
      });

    return resultRelationPermitionsRoles;
  },
};
