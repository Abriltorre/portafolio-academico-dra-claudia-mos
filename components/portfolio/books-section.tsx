import { ArrowUpRight, BookOpen } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Book = {
  title: string
  year: string
  tag: string
  summary: string
  href: string
}

const BOOKS: Book[] = [
  {
    title: 'El horizonte teórico del diseño. Cinco miradas desde la Hermenéutica, la Semiótica y la Sociología',
    year: '2025',
    tag: 'Libro de Autor',
    summary:
      'Un recorrido crítico por los fundamentos teóricos del diseño que articula cinco perspectivas complementarias. La obra examina cómo la interpretación, el signo y lo social configuran el sentido de los objetos y prácticas proyectuales contemporáneas.',
    href: '#',
  },
  {
    title: 'Espacio inmersividad: miradas desde la transversalidad filosofía-arte-ciencia-tecnología',
    year: '2020',
    tag: 'Coordinación Editorial',
    summary:
      'Volumen colectivo que reúne reflexiones transdisciplinares sobre la inmersión como experiencia estética y espacial. Dialogan la filosofía, el arte, la ciencia y la tecnología para pensar los nuevos entornos sensibles.',
    href: '#',
  },
]

export function BooksSection() {
  return (
    <section
      id="libros"
      aria-labelledby="libros-titulo"
      className="border-t border-border bg-secondary/50 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="libros-titulo" eyebrow="Módulo de Difusión" title="Producción Científica y Libros" />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book) => (
            <li key={book.title}>
              <article className="group flex h-full flex-col border border-border bg-card p-8 transition-colors hover:border-wine/50">
                <div className="flex items-center justify-between">
                  <span className="border border-wine/30 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-wine">
                    {book.tag}
                  </span>
                  <span className="font-serif text-lg text-muted-foreground">{book.year}</span>
                </div>
                <BookOpen className="mt-10 size-6 text-foreground/40" strokeWidth={1} aria-hidden="true" />
                <h3 className="mt-4 font-serif text-2xl leading-snug text-pretty text-foreground">
                  {book.title} <span className="text-muted-foreground">({book.year})</span>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">{book.summary}</p>
                <a
                  href={book.href}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-8 text-sm font-medium text-foreground underline decoration-border decoration-1 underline-offset-8 transition-colors hover:text-wine hover:decoration-wine"
                >
                  Ver publicación
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only">: {book.title}</span>
                </a>
              </article>
            </li>
          ))}
          <li className="hidden lg:block">
            <div className="flex h-full min-h-72 flex-col items-center justify-center border border-dashed border-border p-8 text-center">
              <p className="font-serif text-xl italic text-muted-foreground">Próximas publicaciones</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">En preparación</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
