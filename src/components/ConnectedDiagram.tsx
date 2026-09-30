import { useEffect, useRef, useState, type ReactNode } from 'react'

type Port = 'top' | 'right' | 'bottom' | 'left'

export type DiagramEdge = {
  from: string
  to: string
  fromPort?: Port
  toPort?: Port
  route?: 'branch' | 'tree'
}

type Wire = { id: string; path: string; endX: number; endY: number }

/** Connect the actual node boundaries, including after fonts or viewport sizes change. */
export function ConnectedDiagram({ children, edges, className, label }: {
  children: ReactNode
  edges: DiagramEdge[]
  className: string
  label: string
}) {
  const frameRef = useRef<HTMLDivElement>(null)
  const [drawing, setDrawing] = useState<{ width: number; height: number; wires: Wire[] } | null>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    let animationFrame = 0
    let disposed = false

    const measure = () => {
      if (disposed) return
      const bounds = frame.getBoundingClientRect()
      const nodes = new Map(Array.from(frame.querySelectorAll<HTMLElement>('[data-node]')).map((node) => [node.dataset.node, node.getBoundingClientRect()]))
      const point = (rect: DOMRect, port: Port) => ({
        x: rect.left - bounds.left + (port === 'left' ? 0 : port === 'right' ? rect.width : rect.width / 2),
        y: rect.top - bounds.top + (port === 'top' ? 0 : port === 'bottom' ? rect.height : rect.height / 2),
      })
      const wires = edges.flatMap((edge) => {
        const source = nodes.get(edge.from)
        const target = nodes.get(edge.to)
        if (!source || !target) return []
        const branch = edge.route === 'branch' || (edge.route === 'tree' && window.matchMedia('(max-width: 480px)').matches)
        const fromPort = edge.fromPort ?? 'bottom'
        const start = point(source, fromPort)
        const end = point(target, branch ? 'left' : edge.toPort ?? 'top')
        const middle = branch
          ? `V ${start.y + 28} H ${end.x - 16} V ${end.y}`
          : fromPort === 'left' || fromPort === 'right'
          ? `H ${(start.x + end.x) / 2} V ${end.y}`
          : `V ${(start.y + end.y) / 2} H ${end.x}`
        return [{ id: `${edge.from}-${edge.to}`, path: `M ${start.x} ${start.y} ${middle} L ${end.x} ${end.y}`, endX: end.x, endY: end.y }]
      })
      setDrawing({ width: bounds.width, height: bounds.height, wires })
    }
    const schedule = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(measure)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(frame)
    frame.querySelectorAll('[data-node]').forEach((node) => observer.observe(node))
    document.fonts.ready.then(schedule)
    schedule()
    return () => {
      disposed = true
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [edges])

  return (
    <div className={`connected-diagram ${className}`} ref={frameRef} role="group" aria-label={label}>
      {drawing && <svg className="diagram-wires" viewBox={`0 0 ${drawing.width} ${drawing.height}`} aria-hidden="true">
        {drawing.wires.map((wire) => <g key={wire.id}><path d={wire.path} /><circle cx={wire.endX} cy={wire.endY} r="3" /></g>)}
      </svg>}
      {children}
    </div>
  )
}
