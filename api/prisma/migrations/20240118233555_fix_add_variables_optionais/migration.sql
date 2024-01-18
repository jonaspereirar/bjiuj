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
ALTER TABLE "graduations" ALTER COLUMN "user_Id" DROP NOT NULL,
ALTER COLUMN "trainer_Id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "gyms" ALTER COLUMN "location" DROP NOT NULL;

-- AlterTable
ALTER TABLE "trainers" ALTER COLUMN "gym_Id" DROP NOT NULL,
ALTER COLUMN "game_Id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "gym_Id" DROP NOT NULL,
ALTER COLUMN "game_Id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_gym_Id_fkey" FOREIGN KEY ("gym_Id") REFERENCES "gyms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_game_Id_fkey" FOREIGN KEY ("game_Id") REFERENCES "gamers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_game_Id_fkey" FOREIGN KEY ("game_Id") REFERENCES "gamers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_gym_Id_fkey" FOREIGN KEY ("gym_Id") REFERENCES "gyms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduations" ADD CONSTRAINT "graduations_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "graduations" ADD CONSTRAINT "graduations_trainer_Id_fkey" FOREIGN KEY ("trainer_Id") REFERENCES "trainers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
