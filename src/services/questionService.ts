import * as questionRepository from '../repositories/questionRepository'
import { QuestionData } from '../types/questionTypes';

export async function findAll() {
  const questions = await questionRepository.findAll();
  return questions;
}

export async function insert(question: QuestionData) {
    console.log("aa")
  await questionRepository.insert(question);
}
