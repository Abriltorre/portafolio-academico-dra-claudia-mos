'use client'

import { useId, useState } from 'react'
import { ChevronDown, Download } from 'lucide-react'

export type Article = {
  year: string
  type: string
  title: string
  abstract?: string
  pdfHref: string
}

export function ArticleItem({ article }: { article: Article }) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  return (
    <li className="border-b border-border py-12 text-center">
      <article>
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-wine">
          {article.year} <span className="mx-1 text-border">|</span> {article.type}
        </p>
        <h3 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-snug text-balance text-foreground md:text-[2.25rem]">
          {article.title}
        </h3>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {article.abstract && (
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-wine"
            >
              {isOpen ? 'Ocultar resumen' : 'Leer resumen'}
              <ChevronDown
                className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          )}
          <a
            href={article.pdfHref}
            download
            className="inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-wine hover:bg-wine hover:text-primary-foreground"
          >
            <Download className="size-4" aria-hidden="true" />
            Descargar PDF
            <span className="sr-only">: {article.title}</span>
          </a>
        </div>

        {article.abstract && (
          <div
            id={panelId}
            role="region"
            aria-label={`Resumen: ${article.title}`}
            className={`grid transition-[grid-template-rows] duration-500 ease-out ${
              isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className="overflow-hidden" inert={!isOpen}>
              <p className="mx-auto mt-10 max-w-[62ch] text-left text-[1.0625rem] leading-8 text-foreground/80 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-wine">
                {article.abstract}
              </p>
            </div>
          </div>
        )}
      </article>
    </li>
  )
}
