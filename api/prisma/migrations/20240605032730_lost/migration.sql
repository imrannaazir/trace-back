-- CreateTable
CREATE TABLE "LostItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "lostItemName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "photo" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "lostDate" TIMESTAMP(3) NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "isFound" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LostItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LostItem" ADD CONSTRAINT "LostItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LostItem" ADD CONSTRAINT "LostItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "foundItemCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
