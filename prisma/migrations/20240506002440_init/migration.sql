-- CreateTable
CREATE TABLE "Guild" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "prefix" TEXT NOT NULL DEFAULT 'a!'
);

-- CreateTable
CREATE TABLE "ConfigPartner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guildID" TEXT NOT NULL,
    "partnerChannel" TEXT,
    "affiliateChannel" TEXT,
    CONSTRAINT "ConfigPartner_guildID_fkey" FOREIGN KEY ("guildID") REFERENCES "Guild" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "coin" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uid" TEXT NOT NULL,
    "sfwPoint" INTEGER NOT NULL DEFAULT 0,
    "nsfwPoint" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Partner_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Guild_id_key" ON "Guild"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
