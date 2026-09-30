import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Flashcard } from '../components/Flashcard'
import { PageHeader } from '../components/PageHeader'
import { ProgressBar } from '../components/ProgressBar'
import { chapterNames, flashcards } from '../data/flashcards'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { shuffle } from '../utils/shuffle'

export function FlashcardsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialChapter = Number(searchParams.get('chapter'))
  const [chapter, setChapter] = useState(initialChapter >= 1 && initialChapter <= 6 ? initialChapter : 0)
  const [current, setCurrent] = useState(0)
  const [cardOrder, setCardOrder] = useState(() => flashcards.map((card) => card.id))
  const [knownCards, setKnownCards] = useLocalStorage<string[]>('knownCards', [])
  const [unknownCards, setUnknownCards] = useLocalStorage<string[]>('unknownCards', [])

  const cards = useMemo(() => {
    const ordered = cardOrder.map((id) => flashcards.find((card) => card.id === id)).filter((card) => card !== undefined)
    return chapter === 0 ? ordered : ordered.filter((card) => card.chapter === chapter)
  }, [cardOrder, chapter])

  const card = cards[current] ?? cards[0]
  const status = card && knownCards.includes(card.id)
    ? 'known'
    : card && unknownCards.includes(card.id)
      ? 'unknown'
      : 'unmarked'

  const changeChapter = (nextChapter: number) => {
    setChapter(nextChapter)
    setSearchParams(nextChapter ? { chapter: String(nextChapter) } : {})
    setCurrent(0)
  }

  const move = (direction: number) => {
    setCurrent((value) => (value + direction + cards.length) % cards.length)
  }

  const markKnown = () => {
    if (!card) return
    setKnownCards((items) => Array.from(new Set([...items, card.id])))
    setUnknownCards((items) => items.filter((id) => id !== card.id))
  }

  const markUnknown = () => {
    if (!card) return
    setUnknownCards((items) => Array.from(new Set([...items, card.id])))
    setKnownCards((items) => items.filter((id) => id !== card.id))
  }

  const shuffleCards = () => {
    setCardOrder((items) => shuffle(items))
    setCurrent(0)
  }

  return (
    <main className="page-main section-shell">
      <PageHeader
        eyebrow="Ghi nhớ khái niệm"
        title="Flashcards"
        description="Học theo chương, lật thẻ để xem giải thích và đánh dấu phần bạn đã nắm vững."
        count="72 thẻ"
      />

      <div className="study-toolbar">
        <label className="select-field">
          <span>Chọn nội dung</span>
          <select value={chapter} onChange={(event) => changeChapter(Number(event.target.value))}>
            <option value={0}>Tất cả 6 chương</option>
            {Object.entries(chapterNames).map(([number, name]) => (
              <option value={number} key={number}>Chương {number} · {name}</option>
            ))}
          </select>
        </label>
        <button className="button secondary shuffle-button" type="button" onClick={shuffleCards}>
          <span aria-hidden="true">⤨</span> Trộn thẻ
        </button>
      </div>

      <div className="flashcard-layout">
        <aside className="deck-progress">
          <span className="eyebrow">Bộ thẻ hiện tại</span>
          <div className="deck-count"><strong>{String(current + 1).padStart(2, '0')}</strong><span>/ {String(cards.length).padStart(2, '0')}</span></div>
          <ProgressBar value={knownCards.length} max={flashcards.length} label="Tổng tiến độ" compact />
          <p>Mẹo: hãy tự trả lời trước khi lật thẻ. Đánh dấu “Cần ôn” với phần còn nhầm lẫn.</p>
        </aside>

        <div className="flashcard-stage">
          {card && <Flashcard key={card.id} card={card} status={status} />}
          <div className="card-navigation">
            <button type="button" onClick={() => move(-1)} aria-label="Thẻ trước"><span aria-hidden="true">←</span> Thẻ trước</button>
            <span>{current + 1} / {cards.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Thẻ tiếp theo">Thẻ sau <span aria-hidden="true">→</span></button>
          </div>
          <div className="knowledge-actions">
            <button type="button" className={status === 'unknown' ? 'review active' : 'review'} onClick={markUnknown}>↻ Cần ôn lại</button>
            <button type="button" className={status === 'known' ? 'known active' : 'known'} onClick={markKnown}>✓ Đã thuộc</button>
          </div>
        </div>
      </div>
    </main>
  )
}
