/*
  Warnings:

  - You are about to drop the column `veiche` on the `deliveriesman` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `deliveriesman` DROP COLUMN `veiche`,
    ADD COLUMN `vehiche` VARCHAR(191) NULL;
