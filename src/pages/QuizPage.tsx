import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ProgressBar } from '../components/ProgressBar'
import { QuizQuestion } from '../components/QuizQuestion'
import { chapterNames } from '../data/flashcards'
import { quizQuestions } from '../data/quiz'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { QuizQuestion as QuizQuestionType } from '../types'
import { shuffle } from '../utils/shuffle'

type QuizState = 'setup' | 'active' | 'result'

export function QuizPage() {
  const [state, setState] = useState<QuizState>('setup')
  const [chapter, setChapter] = useState(0)
  const [questions, setQuestions] = useState<QuizQuestionType[]>([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongIds, setWrongIds] = useState<string[]>([])
  const [bestScore, setBestScore] = useLocalStorage<number>('bestQuizScore', 0)

  const startQuiz = () => {
    const pool = chapter === 0 ? quizQuestions : quizQuestions.filter((question) => question.chapter === chapter)
    setQuestions(shuffle(pool))
    setCurrent(0)
    setSelected(null)
    setSubmitted(false)
    setScore(0)
    setWrongIds([])
    setState('active')
  }

  const submitAnswer = () => {
    if (selected === null) return
    const question = questions[current]
    if (selected === question.correctAnswer) {
      setScore((value) => value + 1)
    } else {
      setWrongIds((items) => [...items, question.id])
    }
    setSubmitted(true)
  }

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent((value) => value + 1)
      setSelected(null)
      setSubmitted(false)
      return
    }

    const normalizedScore = Math.round((score / questions.length) * 10)
    if (normalizedScore > bestScore) setBestScore(normalizedScore)
    setState('result')
  }

  const scoreMessage = score / questions.length >= 0.8
    ? 'Bạn đã nắm khá tốt kiến thức.'
    : score / questions.length >= 0.5
      ? 'Bạn đang đi đúng hướng. Hãy ôn lại một vài nội dung.'
      : 'Hãy quay lại flashcards để củng cố các khái niệm trọng tâm.'

  if (state === 'setup') {
    return (
      <main className="page-main section-shell">
        <PageHeader
          eyebrow="Tự kiểm tra kiến thức"
          title="Quiz"
          description="Chọn phạm vi, trả lời từng câu và xem giải thích ngay để hiểu vì sao đáp án đúng."
          count="24 câu hỏi"
        />
        <section className="quiz-setup">
          <div className="quiz-setup-copy">
            <span className="eyebrow light">Sẵn sàng chưa?</span>
            <h2>Một lượt ôn tập ngắn,<br />một bước hiểu sâu hơn.</h2>
            <div className="quiz-rules">
              <span><b>01</b> Đủ câu hỏi trong phạm vi đã chọn</span>
              <span><b>02</b> Giải thích sau mỗi câu</span>
              <span><b>03</b> Lưu điểm tốt nhất</span>
            </div>
          </div>
          <div className="quiz-setup-form">
            <label className="select-field">
              <span>Phạm vi câu hỏi</span>
              <select value={chapter} onChange={(event) => setChapter(Number(event.target.value))}>
                <option value={0}>Tổng hợp 6 chương · 24 câu</option>
                {Object.entries(chapterNames).map(([number, name]) => (
                  <option value={number} key={number}>
                    Chương {number} · {name} · {quizQuestions.filter((question) => question.chapter === Number(number)).length} câu
                  </option>
                ))}
              </select>
            </label>
            <p>Thứ tự câu hỏi được trộn ở mỗi lượt. Bài tổng hợp luôn có đủ 24 câu; bài theo chương dùng toàn bộ câu hỏi của chương đó.</p>
            <button className="button primary full" type="button" onClick={startQuiz}>Bắt đầu làm bài <span aria-hidden="true">→</span></button>
            <div className="best-score-note">Điểm tốt nhất quy đổi trên thiết bị này <strong>{bestScore} / 10</strong></div>
          </div>
        </section>
      </main>
    )
  }

  if (state === 'result') {
    const wrongQuestions = questions.filter((question) => wrongIds.includes(question.id))
    return (
      <main className="page-main section-shell result-page">
        <section className="result-card">
          <span className="eyebrow">Hoàn thành</span>
          <h1>Kết quả của bạn</h1>
          <div className="score-ring" aria-label={`Kết quả ${score} trên ${questions.length}`}>
            <strong>{score}</strong><span>/ {questions.length}</span>
          </div>
          <p>{scoreMessage}</p>
          <div className="result-actions">
            <button className="button primary" type="button" onClick={startQuiz}>Làm lại</button>
            <button className="button secondary" type="button" onClick={() => setState('setup')}>Đổi phạm vi</button>
          </div>
        </section>
        {wrongQuestions.length > 0 && (
          <section className="review-list">
            <span className="eyebrow">Nội dung cần xem lại</span>
            <h2>{wrongQuestions.length} câu chưa đúng</h2>
            {wrongQuestions.map((question) => (
              <article key={question.id}>
                <span>Chương {question.chapter}</span>
                <div><strong>{question.question}</strong><p>{question.explanation}</p></div>
              </article>
            ))}
          </section>
        )}
      </main>
    )
  }

  const question = questions[current]
  const isCorrect = submitted && selected === question.correctAnswer

  return (
    <main className="page-main section-shell quiz-active-page">
      <div className="quiz-topbar">
        <button className="text-button" type="button" onClick={() => setState('setup')}>← Thoát bài</button>
        <ProgressBar value={current + (submitted ? 1 : 0)} max={questions.length} label={`Câu ${current + 1} / ${questions.length}`} compact />
        <span className="live-score">Điểm <strong>{score}</strong></span>
      </div>

      <section className="quiz-card">
        <QuizQuestion
          question={question}
          selected={selected}
          submitted={submitted}
          onSelect={setSelected}
        />
        {submitted && (
          <div className={isCorrect ? 'answer-feedback correct' : 'answer-feedback incorrect'} role="status">
            <strong>{isCorrect ? '✓ Chính xác' : '× Chưa đúng'}</strong>
            <p>{question.explanation}</p>
            <small>Nguồn: {question.source}</small>
          </div>
        )}
        <div className="quiz-card-footer">
          {!submitted ? (
            <button className="button primary" type="button" onClick={submitAnswer} disabled={selected === null}>Kiểm tra đáp án</button>
          ) : (
            <button className="button primary" type="button" onClick={nextQuestion}>{current === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'} <span aria-hidden="true">→</span></button>
          )}
        </div>
      </section>
    </main>
  )
}
