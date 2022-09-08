import * as answerRepository from '../repositories/answerRepository'
import { answerData } from '../types/answerTypes';

export async function findAll() {
  const questions = await answerRepository.findAll();
  return questions;
}

export async function insert(answer: answerData, questionid: String) {
    await answerRepository.insert(answer, questionid);
}
