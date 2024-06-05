-- AlterTable
ALTER TABLE "userProfiles" ADD COLUMN     "address" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "photo" TEXT,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL;
