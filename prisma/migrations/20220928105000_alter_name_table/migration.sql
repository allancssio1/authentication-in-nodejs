/*
  Warnings:

  - You are about to drop the `PermitionsAndRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermitionsAndRoles" DROP CONSTRAINT "PermitionsAndRoles_permitionId_fkey";

-- DropForeignKey
ALTER TABLE "PermitionsAndRoles" DROP CONSTRAINT "PermitionsAndRoles_rolesId_fkey";

-- DropTable
DROP TABLE "PermitionsAndRoles";

-- CreateTable
CREATE TABLE "permitions_roles" (
    "id" TEXT NOT NULL,
    "permitionId" TEXT NOT NULL,
    "rolesId" TEXT NOT NULL,

    CONSTRAINT "permitions_roles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "permitions_roles" ADD CONSTRAINT "permitions_roles_permitionId_fkey" FOREIGN KEY ("permitionId") REFERENCES "permitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permitions_roles" ADD CONSTRAINT "permitions_roles_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
