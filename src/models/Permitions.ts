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
      await prisma.permition.create({
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
