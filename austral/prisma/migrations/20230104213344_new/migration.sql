-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL,
    "car_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "datePickUp" TIMESTAMP(3) NOT NULL,
    "dateReturn" TIMESTAMP(3) NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "placePickUp" TEXT NOT NULL,
    "placeReturn" TEXT NOT NULL,
    "timePickUp" TIMESTAMP(3) NOT NULL,
    "timeReturn" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "rentCode" INTEGER NOT NULL,
    "chairPrice" INTEGER NOT NULL,
    "garantyPrice" INTEGER NOT NULL,
    "copilotPrice" INTEGER NOT NULL,

    CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "transmition" TEXT NOT NULL,
    "motor" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "flight" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rent_id_key" ON "Rent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rent_rentCode_key" ON "Rent"("rentCode");

-- CreateIndex
CREATE UNIQUE INDEX "Cars_id_key" ON "Cars"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "Cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
