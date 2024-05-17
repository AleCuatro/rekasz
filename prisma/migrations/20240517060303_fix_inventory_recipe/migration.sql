/*
  Warnings:

  - You are about to drop the `Chest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChestItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Component` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CraftRecipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Guild_id_key";

-- DropIndex
DROP INDEX "User_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Chest";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ChestItem";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Component";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CraftRecipe";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Item";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Consumable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Consumable_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collectible" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Collectible_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Upgrade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Upgrade_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tool" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Tool_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Fish" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Fish_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Material" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Material_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mineral" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Mineral_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Buff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Buff_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Key" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Key_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Loot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Loot_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LootItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lootId" INTEGER NOT NULL,
    "consumableId" INTEGER,
    "collectibleId" INTEGER,
    "toolId" INTEGER,
    "fishId" INTEGER,
    "materialId" INTEGER,
    "mineralId" INTEGER,
    "keyId" INTEGER,
    "probability" REAL NOT NULL,
    CONSTRAINT "LootItem_lootId_fkey" FOREIGN KEY ("lootId") REFERENCES "Loot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LootItem_consumableId_fkey" FOREIGN KEY ("consumableId") REFERENCES "Consumable" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LootItem_collectibleId_fkey" FOREIGN KEY ("collectibleId") REFERENCES "Collectible" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LootItem_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LootItem_fishId_fkey" FOREIGN KEY ("fishId") REFERENCES "Fish" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LootItem_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LootItem_mineralId_fkey" FOREIGN KEY ("mineralId") REFERENCES "Mineral" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "LootItem_keyId_fkey" FOREIGN KEY ("keyId") REFERENCES "Key" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "requiredMaterialId" INTEGER,
    "requiredFoodId" INTEGER,
    "requiredMineralId" INTEGER,
    "requiredStoveId" INTEGER,
    "toolId" INTEGER,
    "anvilId" INTEGER,
    CONSTRAINT "Recipe_requiredMaterialId_fkey" FOREIGN KEY ("requiredMaterialId") REFERENCES "Material" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Recipe_requiredFoodId_fkey" FOREIGN KEY ("requiredFoodId") REFERENCES "Food" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Recipe_requiredMineralId_fkey" FOREIGN KEY ("requiredMineralId") REFERENCES "Mineral" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Recipe_requiredStoveId_fkey" FOREIGN KEY ("requiredStoveId") REFERENCES "Stove" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Recipe_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Recipe_anvilId_fkey" FOREIGN KEY ("anvilId") REFERENCES "Anvil" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stove" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Stove_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Anvil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Anvil_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Food" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Food_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
