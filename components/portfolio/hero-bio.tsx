import { User } from 'lucide-react'

export function HeroBio() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="px-6 py-16 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-secondary">
            <div
              className="absolute inset-4 border border-foreground/10 md:inset-6"
              aria-hidden="true"
            />
            <div className="flex h-full flex-col items-center justify-center gap-4 text-muted-foreground">
              <User className="size-12" strokeWidth={0.75} aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.25em]">Retrato profesional</span>
            </div>
          </div>
          <figcaption className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-wine" aria-hidden="true" />
            UAM Unidad Lerma · SNI
          </figcaption>
        </figure>

        <div id="biografia" className="scroll-mt-24">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Arte · Filosofía · Tecnología
          </p>
          <blockquote className="mt-6 border-l border-wine pl-6 md:pl-8">
            <p className="font-serif text-3xl italic leading-snug text-pretty text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {
                '\u201CEl arte medial y digital exige comprender la intersección crítica entre las cualidades materiales del soporte y la inmaterialidad de la experiencia inmersiva.\u201D'
              }
            </p>
          </blockquote>

          <h1 id="hero-titulo" className="sr-only">Dra. Claudia Mosqueda Gómez — Biografía</h1>
          <div className="mt-10 max-w-xl text-base leading-8 text-foreground/80 md:text-[1.0625rem]">
            <p>
              <strong className="font-semibold text-foreground">Dra. Claudia Mosqueda Gómez.</strong>{' '}
              Profesora-Investigadora Titular y Jefa del Área de Estudios en Arte, Ciencia y Tecnología (EACT)
              en la UAM Unidad Lerma. Miembro del Sistema Nacional de Investigadores (SNI). Doctora en
              Filosofía por la Universidad Autónoma de Madrid (España) con mención Cum Laude, y Doctora en
              Ciencias Sociales por la UAM Xochimilco. Su labor transdisciplinar se centra en la Sociología del
              Arte, la Hermenéutica y la Fenomenología de las experiencias inmersivas.
            </p>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { term: 'Doctorados', value: '2' },
              { term: 'Distinción', value: 'SNI' },
              { term: 'Área', value: 'EACT' },
            ].map((item) => (
              <div key={item.term}>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.term}</dt>
                <dd className="mt-2 font-serif text-3xl text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
