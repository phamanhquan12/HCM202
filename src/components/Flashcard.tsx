import { useState } from 'react'
import type { Flashcard as FlashcardType } from '../types'
import { ChapterBadge } from './ChapterBadge'

type Props = {
  card: FlashcardType
  status: 'known' | 'unknown' | 'unmarked'
}

export function Flashcard({ card, status }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flashcard ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped((value) => !value)}
      aria-label={`${flipped ? 'Mặt giải thích' : 'Mặt câu hỏi'}: ${card.front}. Nhấn để lật thẻ.`}
    >
      <span className="flashcard-topline">
        <ChapterBadge chapter={card.chapter} />
        {status !== 'unmarked' && (
          <span className={`card-status ${status}`}>
            {status === 'known' ? '✓ Đã thuộc' : '• Cần ôn'}
          </span>
        )}
      </span>

      {!flipped ? (
        <span className="flashcard-front">
          <span className="eyebrow">Câu hỏi gợi nhớ</span>
          <span className="card-term">{card.term}</span>
          <strong>{card.front}</strong>
          <span className="flip-hint">Tự trả lời, sau đó nhấn để kiểm tra <span aria-hidden="true">↗</span></span>
        </span>
      ) : (
        <span className="flashcard-back">
          <span className="eyebrow">Câu trả lời · {card.term}</span>
          <strong>{card.back}</strong>
          {card.note && <span className="card-note"><b>Ghi nhớ:</b> {card.note}</span>}
          {card.source && <span className="card-source">Nguồn: {card.source}</span>}
        </span>
      )}
    </button>
  )
}
