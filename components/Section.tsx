import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  background?: 'light' | 'dark'
}

export function Section({ id, title, children, background = 'light' }: SectionProps) {
  const bg = background === 'dark' ? 'bg-gray-900/60' : 'bg-transparent'
  return (
    <section id={id} className={`py-20 ${bg}`}> 
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 tracking-tight">{title}</h2>
        {children}
      </div>
    </section>
  )
}
