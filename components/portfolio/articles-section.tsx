import { SectionHeading } from './section-heading'
import { ArticleItem, type Article } from './article-item'

const ARTICLES: Article[] = [
  {
    year: '2021',
    type: 'Capítulo de Libro',
    title: 'Inmersión. Aproximaciones desde el cuerpo intermedio-quiasmo',
    abstract:
      'Este capítulo propone pensar la inmersión no como una mera suspensión de lo real, sino como una experiencia encarnada que acontece en el cruce entre el cuerpo vivido y el entorno mediado. A partir de la noción merleaupontiana de quiasmo, se analiza el cuerpo como instancia intermedia donde lo sensible y lo técnico se entrelazan, abriendo un horizonte fenomenológico para comprender las artes mediales contemporáneas.',
    pdfHref: '#',
  },
  {
    year: '2020',
    type: 'Ensayo Científico',
    title: 'La fantasía perceptiva: una mirada fenomenológica a la experiencia inmersiva',
    pdfHref: '#',
  },
]

export function ArticlesSection() {
  return (
    <section id="articulos" aria-labelledby="articulos-titulo" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          id="articulos-titulo"
          eyebrow="Modo de lectura"
          title="Artículos y Ensayos Recientes"
          align="center"
        />
        <ol className="mt-16 border-t border-border">
          {ARTICLES.map((article) => (
            <ArticleItem key={article.title} article={article} />
          ))}
        </ol>
      </div>
    </section>
  )
}
