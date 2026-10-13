import { SiteHeader } from '@/components/portfolio/site-header'
import { HeroBio } from '@/components/portfolio/hero-bio'
import { BooksSection } from '@/components/portfolio/books-section'
import { ArticlesSection } from '@/components/portfolio/articles-section'
import { ResearchSection } from '@/components/portfolio/research-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { SiteFooter } from '@/components/portfolio/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroBio />
        <BooksSection />
        <ArticlesSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
