-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "scenarios" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image_key" DROP NOT NULL;
