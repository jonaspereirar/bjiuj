/*
  Warnings:

  - Added the required column `location` to the `gyms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_Id` to the `trainers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game_Id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gyms" ADD COLUMN     "location" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "trainers" ADD COLUMN     "game_Id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "game_Id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "graduations" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "user_Id" TEXT NOT NULL,
    "trainer_Id" TEXT NOT NULL,

    CONSTRAINT "graduations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gamers" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descrption" TEXT,

    CONSTRAINT "gamers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_game_Id_fkey" FOREIGN KEY ("game_Id") REFERENCES "gamers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_game_Id_fkey" FOREIGN KEY ("game_Id") REFERENCES "gamers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduations" ADD CONSTRAINT "graduations_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduations" ADD CONSTRAINT "graduations_trainer_Id_fkey" FOREIGN KEY ("trainer_Id") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
