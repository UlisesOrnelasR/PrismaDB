/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "missionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "mainStack" TEXT NOT NULL,
    "currentEnrollment" BOOLEAN NOT NULL DEFAULT false,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "missionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_key" ON "Student"("name");
