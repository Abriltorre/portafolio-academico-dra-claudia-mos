import { ArrowUpRight, Briefcase, GraduationCap, Mail, Microscope } from 'lucide-react'

const PORTALS = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/', icon: GraduationCap },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/', icon: Microscope },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Briefcase },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-6 pt-16 pb-8 text-primary-foreground md:px-10 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="font-serif text-3xl">Dra. Claudia Mosqueda Gómez</p>
            <p className="mt-3 text-sm leading-7 text-primary-foreground/60">
              Área de Estudios en Arte, Ciencia y Tecnología (EACT)
              <br />
              Universidad Autónoma Metropolitana, Unidad Lerma
            </p>
            <a
              href="mailto:c.mosqueda@correo.ler.uam.mx"
              className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground underline decoration-primary-foreground/30 underline-offset-8 transition-colors hover:decoration-primary-foreground"
            >
              <Mail className="size-4" aria-hidden="true" />
              c.mosqueda@correo.ler.uam.mx
            </a>
          </div>

          <nav aria-label="Portales académicos" className="md:justify-self-end">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50">Portales académicos</p>
            <ul className="mt-5 flex flex-col">
              {PORTALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-w-64 items-center justify-between gap-6 border-b border-primary-foreground/15 py-3 text-sm transition-colors hover:border-primary-foreground/50"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 text-primary-foreground/60" aria-hidden="true" />
                      {label}
                    </span>
                    <ArrowUpRight
                      className="size-4 text-primary-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-foreground"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(se abre en una nueva pestaña)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dra. Claudia Mosqueda Gómez. Todos los derechos reservados.
          </p>
          <p>Los contenidos de este sitio están protegidos por derechos de autor.</p>
        </div>
      </div>
    </footer>
  )
}
