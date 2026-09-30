type Props = {
  eyebrow: string
  title: string
  description: string
  count?: string
}

export function PageHeader({ eyebrow, title, description, count }: Props) {
  return (
    <header className="page-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {count && <span className="page-count">{count}</span>}
    </header>
  )
}
