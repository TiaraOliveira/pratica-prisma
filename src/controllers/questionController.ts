import { Request, Response } from 'express';
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  console.log("aaaaaa")
  const question = req.body;

  await questionService.insert(question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const questionid = req.params
  const answer = req.body;

  await answerService.insert(answer, questionid);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
