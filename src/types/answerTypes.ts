import { answer } from '@prisma/client';

export type answerData = Omit<answer, 'id'>;