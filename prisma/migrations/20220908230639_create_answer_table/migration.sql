-- CreateTable
CREATE TABLE "answer" (
    "id" SERIAL NOT NULL,
    "answeredBy" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "answerId" INTEGER NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
