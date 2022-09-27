-- CreateTable
CREATE TABLE "PermitionsAndRoles" (
    "id" TEXT NOT NULL,
    "permitionId" TEXT NOT NULL,
    "rolesId" TEXT NOT NULL,

    CONSTRAINT "PermitionsAndRoles_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PermitionsAndRoles" ADD CONSTRAINT "PermitionsAndRoles_permitionId_fkey" FOREIGN KEY ("permitionId") REFERENCES "permitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermitionsAndRoles" ADD CONSTRAINT "PermitionsAndRoles_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
