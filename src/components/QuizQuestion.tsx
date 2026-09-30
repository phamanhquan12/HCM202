import type { QuizQuestion as QuizQuestionType } from '../types'
import { ChapterBadge } from './ChapterBadge'

type Props = {
  question: QuizQuestionType
  selected: number | null
  submitted: boolean
  onSelect: (index: number) => void
}

const letters = ['A', 'B', 'C', 'D']

export function QuizQuestion({ question, selected, submitted, onSelect }: Props) {
  return (
    <div className="quiz-question">
      <ChapterBadge chapter={question.chapter} />
      <h2>{question.question}</h2>
      <div className="quiz-options" role="radiogroup" aria-label="Các phương án trả lời">
        {question.options.map((option, index) => {
          const correct = submitted && index === question.correctAnswer
          const incorrect = submitted && selected === index && index !== question.correctAnswer
          const classes = ['quiz-option', selected === index ? 'selected' : '', correct ? 'correct' : '', incorrect ? 'incorrect' : ''].filter(Boolean).join(' ')

          return (
            <button
              type="button"
              key={option}
              className={classes}
              onClick={() => onSelect(index)}
              disabled={submitted}
              role="radio"
              aria-checked={selected === index}
            >
              <span className="option-letter">{letters[index]}</span>
              <span>{option}</span>
              {correct && <span className="answer-icon" aria-label="Đáp án đúng">✓</span>}
              {incorrect && <span className="answer-icon" aria-label="Đáp án đã chọn chưa đúng">×</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
