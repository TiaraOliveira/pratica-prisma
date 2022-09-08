import { question } from '@prisma/client';

export type QuestionData = Omit<question, 'id'>;

