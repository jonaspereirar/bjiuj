/*
  Warnings:

  - You are about to drop the column `gym_Id` on the `check_ins` table. All the data in the column will be lost.
  - You are about to drop the column `trainer_Id` on the `check_ins` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `check_ins` table. All the data in the column will be lost.
  - You are about to drop the column `trainer_Id` on the `graduations` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `graduations` table. All the data in the column will be lost.
  - You are about to drop the column `game_Id` on the `trainers` table. All the data in the column will be lost.
  - You are about to drop the column `gym_Id` on the `trainers` table. All the data in the column will be lost.
  - You are about to drop the column `game_Id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `gym_Id` on the `users` table. All the data in the column will be lost.
  - Added the required column `gym_id` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainer_id` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `check_ins` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_gym_Id_fkey";

-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_trainer_Id_fkey";

-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "graduations" DROP CONSTRAINT "graduations_trainer_Id_fkey";

-- DropForeignKey
ALTER TABLE "graduations" DROP CONSTRAINT "graduations_user_Id_fkey";

-- DropForeignKey
ALTER TABLE "trainers" DROP CONSTRAINT "trainers_game_Id_fkey";

-- DropForeignKey
ALTER TABLE "trainers" DROP CONSTRAINT "trainers_gym_Id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_game_Id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_gym_Id_fkey";

-- AlterTable
ALTER TABLE "check_ins" DROP COLUMN "gym_Id",
DROP COLUMN "trainer_Id",
DROP COLUMN "user_Id",
ADD COLUMN     "gym_id" TEXT NOT NULL,
ADD COLUMN     "trainer_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "graduations" DROP COLUMN "trainer_Id",
DROP COLUMN "user_Id",
ADD COLUMN     "trainer_id" TEXT,
ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "trainers" DROP COLUMN "game_Id",
DROP COLUMN "gym_Id",
ADD COLUMN     "game_id" TEXT,
ADD COLUMN     "gym_id" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "game_Id",
DROP COLUMN "gym_Id",
ADD COLUMN     "game_id" TEXT,
ADD COLUMN     "gym_id" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "gamers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "gamers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduations" ADD CONSTRAINT "graduations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduations" ADD CONSTRAINT "graduations_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
