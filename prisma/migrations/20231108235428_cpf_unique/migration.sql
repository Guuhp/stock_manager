/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `persons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "persons_cpf_key" ON "persons"("cpf");
