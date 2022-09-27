import { prisma } from "../database/pirsmaClient";

export const RolesModel = {
  findRoleByName: async (name: string) => {
    const role = await prisma.roles.findFirst({
      where: {
        name,
      },
    });

    return role;
  },
  createNewRole: async (name: string, description: string) => {
    try {
      await prisma.roles.create({
        data: {
          name,
          description,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  },
};
