export type Flashcard = {
  id: string
  chapter: number
  term: string
  front: string
  back: string
  note?: string
  source?: string
}

export type TimelineEvent = {
  year?: string
  title: string
  description?: string
}

export type TimelineStage = {
  id: string
  period: string
  title: string
  summary: string
  context: string
  thought: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  sourceUrl?: string
  events: TimelineEvent[]
}

export type QuizQuestion = {
  id: string
  chapter: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  source?: string
}
