import { prisma } from '../config/database';
import { QuestionData } from '../types/questionTypes';

export async function findAll() {
  const result = await prisma.question.findMany();
  return result;
}


export async function insert(question: QuestionData) {
  await prisma.question.create({ data: question });
}