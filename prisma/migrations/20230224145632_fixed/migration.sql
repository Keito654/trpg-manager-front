/*
  Warnings:

  - Added the required column `image_key` to the `scenarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "scenarios" ADD COLUMN     "image_key" TEXT NOT NULL,
ADD COLUMN     "read_users" TEXT[];
