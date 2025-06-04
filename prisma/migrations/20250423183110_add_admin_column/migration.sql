-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Users" ("created_at", "email", "id", "name", "password") SELECT "created_at", "email", "id", "name", "password" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
