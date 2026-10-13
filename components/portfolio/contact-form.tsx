'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const CONTACT_EMAIL = 'c.mosqueda@correo.ler.uam.mx'

const fieldClass =
  'w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-wine focus:outline-none focus:ring-0'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('nombre') ?? '').trim()
    const email = String(data.get('correo') ?? '').trim()
    const message = String(data.get('mensaje') ?? '').trim()

    const subject = encodeURIComponent(`Contacto desde el portafolio — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate={false}>
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Su nombre"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="correo" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="nombre@institucion.mx"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="mensaje" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          maxLength={3000}
          placeholder="Escriba su mensaje..."
          className={`${fieldClass} resize-none leading-7`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-wine focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
        >
          Enviar mensaje
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
        <p role="status" className="text-sm text-muted-foreground">
          {sent ? 'Se abrió su cliente de correo para completar el envío.' : ''}
        </p>
      </div>
    </form>
  )
}
