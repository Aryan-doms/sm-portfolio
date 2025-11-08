"use client"
import Link from 'next/link'

export function Navbar() {
  const links = [
    { id: 'bettercallthrift', label: 'Section 1' },
    { id: 'side-quest', label: 'Section 2' }
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800"> 
      <nav className="container mx-auto flex items-center justify-between px-4 h-16">
        <Link href="#bettercallthrift" className="font-semibold tracking-tight text-lg">
          Aryan
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="text-gray-300 hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
