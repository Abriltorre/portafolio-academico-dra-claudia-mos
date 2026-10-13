type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}

export function SectionHeading({ id, eyebrow, title, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 font-serif text-4xl font-normal leading-tight text-balance text-foreground md:text-5xl"
      >
        {title}
      </h2>
      <div className={`mt-6 h-px w-16 bg-wine ${centered ? 'mx-auto' : ''}`} aria-hidden="true" />
    </div>
  )
}
