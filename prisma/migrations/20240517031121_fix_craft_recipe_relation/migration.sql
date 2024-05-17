-- CreateTable
CREATE TABLE "Inventory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Inventory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER NOT NULL,
    "power" TEXT,
    "craftRecipeId" INTEGER,
    CONSTRAINT "Item_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Item_craftRecipeId_fkey" FOREIGN KEY ("craftRecipeId") REFERENCES "CraftRecipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CraftRecipe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resultItemId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Component" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "craftRecipeId" INTEGER NOT NULL,
    CONSTRAINT "Component_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Component_craftRecipeId_fkey" FOREIGN KEY ("craftRecipeId") REFERENCES "CraftRecipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inventoryId" INTEGER NOT NULL,
    CONSTRAINT "Chest_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChestItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chestId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "probability" REAL NOT NULL,
    CONSTRAINT "ChestItem_chestId_fkey" FOREIGN KEY ("chestId") REFERENCES "Chest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChestItem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_userId_key" ON "Inventory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CraftRecipe_id_key" ON "CraftRecipe"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CraftRecipe_resultItemId_key" ON "CraftRecipe"("resultItemId");
