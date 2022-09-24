import { prisma } from "../database/pirsmaClient";
import { hash } from "bcryptjs";

export const UserModels = {
  findUserByUsername: async (username: string) => {
    const userFinded = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    return userFinded;
  },
  createNewUser: async (name: string, username: string, password: string) => {
    try {
      await prisma.user.create({
        data: {
          name,
          username,
          password: await hash(password, 8),
        },
      });
      return true;
    } catch (error) {
      return error;
    }
  },
};
