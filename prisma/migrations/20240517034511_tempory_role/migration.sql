-- CreateTable
CREATE TABLE "TemporaryRole" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL
);
