-- CreateTable
CREATE TABLE `Skill` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `performance` VARCHAR(191) NULL,
    `last_weak` VARCHAR(191) NULL,
    `last_month` VARCHAR(191) NULL,

    UNIQUE INDEX `Skill_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
