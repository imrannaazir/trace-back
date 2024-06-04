/*
  Warnings:

  - Added the required column `emailAddress` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foundDate` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `foundItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foundItems" ADD COLUMN     "emailAddress" TEXT NOT NULL,
ADD COLUMN     "foundDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT;
