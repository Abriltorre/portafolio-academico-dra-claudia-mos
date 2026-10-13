import Image from 'next/image'
import { Camera, Orbit, Play } from 'lucide-react'
import { SectionHeading } from './section-heading'

type MediaKind = 'video' | 'foto' | 'recorrido'

type Project = {
  kind: MediaKind
  label: string
  title: string
  description: string
  image?: { src: string; alt: string }
  embedUrl?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    kind: 'video',
    label: 'Video · Conferencia',
    title: 'Fenomenología de la experiencia inmersiva',
    description:
      'Espacio preparado para incrustar conferencias, entrevistas o documentales desde YouTube o Vimeo.',
    featured: true,
  },
  {
    kind: 'foto',
    label: 'Registro fotográfico',
    title: 'Investigación de campo',
    description: 'Documentación visual de procesos de investigación y archivo en el EACT.',
    image: {
      src: '/images/registro-campo.png',
      alt: 'Escritorio de investigación con libros de filosofía, notas manuscritas, visor de realidad virtual y cámara',
    },
  },
  {
    kind: 'recorrido',
    label: 'Recorrido virtual',
    title: 'Instalación: Espacio inmersividad',
    description: 'Registro y recorrido de instalaciones artísticas de arte medial y digital.',
    image: {
      src: '/images/instalacion-inmersiva.png',
      alt: 'Visitante frente a una instalación inmersiva con proyecciones de luz en tonos burdeos',
    },
  },
]

const KIND_ICON = { video: Play, foto: Camera, recorrido: Orbit } as const

function MediaFrame({ project }: { project: Project }) {
  if (project.embedUrl) {
    return (
      <iframe
        src={project.embedUrl}
        title={project.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    )
  }

  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    )
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-foreground text-primary-foreground">
      <span className="flex size-16 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors group-hover:border-wine group-hover:bg-wine">
        <Play className="ml-1 size-6" strokeWidth={1.25} aria-hidden="true" />
      </span>
      <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
        Reproductor de video · YouTube / Vimeo
      </span>
    </div>
  )
}

export function ResearchSection() {
  return (
    <section
      id="investigacion"
      aria-labelledby="investigacion-titulo"
      className="border-t border-border bg-secondary/50 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="investigacion-titulo"
          eyebrow="Galería multimedia"
          title="Proyectos de Investigación y Divulgación"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => {
            const Icon = KIND_ICON[project.kind]
            return (
              <li key={project.title} className={project.featured ? 'md:col-span-2' : ''}>
                <article className="group flex h-full flex-col border border-border bg-card">
                  <div
                    className={`relative w-full overflow-hidden bg-muted ${
                      project.featured ? 'aspect-video' : 'aspect-[4/3] md:aspect-auto md:min-h-72 md:flex-1'
                    }`}
                  >
                    <MediaFrame project={project} />
                  </div>
                  <div className="flex flex-col gap-3 p-6 md:p-8">
                    <p className="flex items-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-wine">
                      <Icon className="size-3.5" aria-hidden="true" />
                      {project.label}
                    </p>
                    <h3 className="font-serif text-2xl leading-snug text-foreground">{project.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
