-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inventoryId" INTEGER,
    "power" TEXT,
    "craftRecipeId" INTEGER,
    CONSTRAINT "Item_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Item_craftRecipeId_fkey" FOREIGN KEY ("craftRecipeId") REFERENCES "CraftRecipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("craftRecipeId", "description", "id", "inventoryId", "name", "power") SELECT "craftRecipeId", "description", "id", "inventoryId", "name", "power" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
