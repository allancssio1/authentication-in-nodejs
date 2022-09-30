import { prisma } from "../database/pirsmaClient";

export const PermitionModel = {
  findPermitionByName: async (name: string) => {
    const permition = await prisma.permition.findFirst({
      where: {
        name,
      },
    });

    return permition;
  },
  createNewPermition: async (name: string, description: string) => {
    try {
      return await prisma.permition.create({
        data: {
          name,
          description,
        },
      });
    } catch (error) {
      return false;
    }
  },
  findPermitionById: async (permitionId: string) => {
    const permitions = await prisma.permition.findMany({
      where: {
        id: permitionId,
      },
    });
    return permitions;
  },
};
