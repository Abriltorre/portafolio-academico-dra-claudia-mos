import { ContactForm } from './contact-form'

export function ContactSection() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[5fr_7fr] md:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Contacto</p>
          <h2
            id="contacto-titulo"
            className="mt-4 font-serif text-5xl font-normal leading-tight text-foreground md:text-6xl"
          >
            ¿Hablamos?
          </h2>
          <div className="mt-6 h-px w-16 bg-wine" aria-hidden="true" />
          <p className="mt-8 max-w-sm text-base leading-8 text-muted-foreground">
            Para colaboraciones académicas, conferencias, asesorías de investigación o proyectos de divulgación
            en arte, ciencia y tecnología.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
