-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Loot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Loot_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Loot" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Loot";
DROP TABLE "Loot";
ALTER TABLE "new_Loot" RENAME TO "Loot";
CREATE TABLE "new_Mineral" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Mineral_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Mineral" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Mineral";
DROP TABLE "Mineral";
ALTER TABLE "new_Mineral" RENAME TO "Mineral";
CREATE TABLE "new_Consumable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Consumable_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Consumable" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Consumable";
DROP TABLE "Consumable";
ALTER TABLE "new_Consumable" RENAME TO "Consumable";
CREATE TABLE "new_Stove" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Stove_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stove" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Stove";
DROP TABLE "Stove";
ALTER TABLE "new_Stove" RENAME TO "Stove";
CREATE TABLE "new_Tool" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Tool_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tool" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Tool";
DROP TABLE "Tool";
ALTER TABLE "new_Tool" RENAME TO "Tool";
CREATE TABLE "new_Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Food_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Food" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Food";
DROP TABLE "Food";
ALTER TABLE "new_Food" RENAME TO "Food";
CREATE TABLE "new_Upgrade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Upgrade_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Upgrade" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Upgrade";
DROP TABLE "Upgrade";
ALTER TABLE "new_Upgrade" RENAME TO "Upgrade";
CREATE TABLE "new_Collectible" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Collectible_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Collectible" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Collectible";
DROP TABLE "Collectible";
ALTER TABLE "new_Collectible" RENAME TO "Collectible";
CREATE TABLE "new_Key" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Key_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Key" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Key";
DROP TABLE "Key";
ALTER TABLE "new_Key" RENAME TO "Key";
CREATE TABLE "new_Buff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Buff_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Buff" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Buff";
DROP TABLE "Buff";
ALTER TABLE "new_Buff" RENAME TO "Buff";
CREATE TABLE "new_Anvil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Anvil_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Anvil" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Anvil";
DROP TABLE "Anvil";
ALTER TABLE "new_Anvil" RENAME TO "Anvil";
CREATE TABLE "new_Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Material_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Material" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Material";
DROP TABLE "Material";
ALTER TABLE "new_Material" RENAME TO "Material";
CREATE TABLE "new_Fish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    CONSTRAINT "Fish_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Fish" ("description", "id", "inventoryId", "name") SELECT "description", "id", "inventoryId", "name" FROM "Fish";
DROP TABLE "Fish";
ALTER TABLE "new_Fish" RENAME TO "Fish";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
