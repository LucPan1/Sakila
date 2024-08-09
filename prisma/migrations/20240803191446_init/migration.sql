-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "store_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address_id" TEXT NOT NULL,
    "activebool" BOOLEAN NOT NULL DEFAULT false,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Film" (
    "film_id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "release_year" INTEGER,
    "language_id" INTEGER NOT NULL,
    "original_language_id" INTEGER,
    "rental_duration" INTEGER NOT NULL DEFAULT 3,
    "rental_rate" DOUBLE PRECISION NOT NULL DEFAULT 4.99,
    "length" INTEGER,
    "replacement_cost" DOUBLE PRECISION NOT NULL DEFAULT 19.99,
    "rating" TEXT NOT NULL DEFAULT 'G',
    "last_update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "special_features" TEXT[],
    "fulltext" TEXT NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("film_id")
);

-- CreateTable
CREATE TABLE "Rental" (
    "rental_id" SERIAL NOT NULL,
    "rental_date" TIMESTAMP(3) NOT NULL,
    "inventory_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "return_date" TIMESTAMP(3),
    "staff_id" INTEGER NOT NULL,
    "last_update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rental_pkey" PRIMARY KEY ("rental_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");
