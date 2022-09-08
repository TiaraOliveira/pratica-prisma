import { prisma } from '../config/database';
import { answerData } from '../types/answerTypes';

export async function findAll() {
  const result = await prisma.question.findMany();
  return result;
}


export async function insert(answer: answerData, questionid: String) {
  await prisma.answer.create({ data: answer });
}