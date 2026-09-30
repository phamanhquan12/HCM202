type Props = {
  chapter: number
}

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI']

export function ChapterBadge({ chapter }: Props) {
  return <span className="chapter-badge">Chương {roman[chapter - 1] ?? chapter}</span>
}
