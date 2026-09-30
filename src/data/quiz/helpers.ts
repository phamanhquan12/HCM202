import type { QuizQuestion } from '../../types'

const source = 'Giáo trình Tư tưởng Hồ Chí Minh, 2021'

export function q(
  chapter: number,
  index: number,
  question: string,
  options: [string, string, string, string],
  correctAnswer: number,
  explanation: string,
): QuizQuestion {
  return {
    id: `c${chapter}-${String(index).padStart(2, '0')}`,
    chapter,
    question,
    options,
    correctAnswer,
    explanation,
    source,
  }
}
