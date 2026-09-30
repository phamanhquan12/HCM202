import type { QuizQuestion } from '../types'
import { chapter1Questions } from './quiz/chapter1'
import { chapter2Questions } from './quiz/chapter2'
import { chapter3Questions } from './quiz/chapter3'
import { chapter4Questions } from './quiz/chapter4'
import { chapter5Questions } from './quiz/chapter5'
import { chapter6Questions } from './quiz/chapter6'

export const quizQuestions: QuizQuestion[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions,
]
