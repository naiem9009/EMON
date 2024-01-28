-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Satisfy` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `value` INTEGER NULL,

    UNIQUE INDEX `Satisfy_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `About` (
    `id` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `About_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personal_info` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `date_of_birth` DATETIME(3) NULL,
    `address` VARCHAR(191) NULL,
    `zip_code` INTEGER NULL,
    `email` VARCHAR(191) NULL,
    `number` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Personal_info` ADD CONSTRAINT `Personal_info_id_fkey` FOREIGN KEY (`id`) REFERENCES `About`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
