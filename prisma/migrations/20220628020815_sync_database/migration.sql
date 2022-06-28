/*
  Warnings:

  - You are about to drop the column `veicgle` on the `deliveriesman` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `deliveriesman` DROP FOREIGN KEY `deliveriesman_address_id_fkey`;

-- AlterTable
ALTER TABLE `deliveriesman` DROP COLUMN `veicgle`,
    ADD COLUMN `veiche` VARCHAR(191) NULL,
    MODIFY `address_id` INTEGER NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `deliveriesman` ADD CONSTRAINT `deliveriesman_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `addresses`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
