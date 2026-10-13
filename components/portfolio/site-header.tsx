'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#biografia', label: 'Biografía' },
  { href: '#libros', label: 'Libros' },
  { href: '#articulos', label: 'Artículos' },
  { href: '#investigacion', label: 'Investigación' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      openButtonRef.current?.focus()
    }
  }, [isOpen])

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 md:h-20 md:px-10">
        <a
          href="#inicio"
          className="font-serif text-lg tracking-wide text-foreground transition-colors hover:text-wine md:text-xl"
        >
          Dra. Claudia Mosqueda Gómez
        </a>
        <button
          ref={openButtonRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          className="-mr-2 flex size-10 items-center justify-center text-foreground transition-colors hover:text-wine"
        >
          <Menu className="size-6" strokeWidth={1.25} aria-hidden="true" />
        </button>
      </div>
    </header>

      <div
        id="menu-principal"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed inset-0 z-50 h-dvh transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        inert={!isOpen}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-foreground/30"
        />
        <nav
          className={`absolute right-0 top-0 flex h-full w-full flex-col bg-background px-8 pb-10 transition-transform duration-500 ease-out sm:max-w-md sm:border-l sm:border-border md:px-12 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between md:h-20">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Navegación</span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú de navegación"
              className="-mr-2 flex size-10 items-center justify-center text-foreground transition-colors hover:text-wine"
            >
              <X className="size-6" strokeWidth={1.25} aria-hidden="true" />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-border py-4 font-serif text-3xl text-foreground transition-colors hover:text-wine md:text-4xl"
                >
                  <span className="font-sans text-xs tabular-nums text-muted-foreground group-hover:text-wine">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 text-sm leading-relaxed text-muted-foreground">
            <p>Área de Estudios en Arte, Ciencia y Tecnología</p>
            <p>UAM Unidad Lerma</p>
            <a
              href="mailto:c.mosqueda@correo.ler.uam.mx"
              className="mt-3 inline-block text-wine underline-offset-4 hover:underline"
            >
              c.mosqueda@correo.ler.uam.mx
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
