import { prisma } from "../database/pirsmaClient";

export const RolesModel = {
  findRoleById: async (id: string) => {
    const role = await prisma.roles.findFirst({
      where: {
        id,
      },
    });

    return role;
  },
  createNewRole: async (name: string, description: string) => {
    try {
      return await prisma.roles.create({
        data: {
          name,
          description,
        },
      });
    } catch (error) {
      return false;
    }
  },
};
