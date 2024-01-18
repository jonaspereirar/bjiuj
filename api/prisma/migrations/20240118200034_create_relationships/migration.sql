/*
  Warnings:

  - Added the required column `gym_Id` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainer_Id` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_Id` to the `check_ins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_Id` to the `trainers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_Id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "check_ins" ADD COLUMN     "gym_Id" TEXT NOT NULL,
ADD COLUMN     "trainer_Id" TEXT NOT NULL,
ADD COLUMN     "user_Id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "trainers" ADD COLUMN     "gym_Id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "gym_Id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_gym_Id_fkey" FOREIGN KEY ("gym_Id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_gym_Id_fkey" FOREIGN KEY ("gym_Id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_trainer_Id_fkey" FOREIGN KEY ("trainer_Id") REFERENCES "trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainers" ADD CONSTRAINT "trainers_gym_Id_fkey" FOREIGN KEY ("gym_Id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
