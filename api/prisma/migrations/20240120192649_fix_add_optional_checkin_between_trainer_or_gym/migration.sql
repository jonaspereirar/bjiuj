-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_gym_id_fkey";

-- DropForeignKey
ALTER TABLE "check_ins" DROP CONSTRAINT "check_ins_trainer_id_fkey";

-- AlterTable
ALTER TABLE "check_ins" ALTER COLUMN "gym_id" DROP NOT NULL,
ALTER COLUMN "trainer_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "check_ins" ADD CONSTRAINT "check_ins_trainer_id_fkey" FOREIGN KEY ("trainer_id") REFERENCES "trainers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
