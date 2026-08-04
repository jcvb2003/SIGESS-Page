import type { ReactNode } from 'react';
import { Footer } from '../sections/Footer';
import { Navbar } from './Navbar';

export interface LegalSection {
  title: string;
  paragraphs?: ReactNode[];
  items?: ReactNode[];
}

interface LegalDocumentProps {
  title: string;
  highlightedTitle: string;
  effectiveDate: string;
  lastUpdate: string;
  introduction: ReactNode;
  sections: LegalSection[];
  closingTitle: string;
  closingText: ReactNode;
}

export function LegalDocument({
  title,
  highlightedTitle,
  effectiveDate,
  lastUpdate,
  introduction,
  sections,
  closingTitle,
  closingText,
}: LegalDocumentProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="border-b border-slate-200 pb-8 pt-8">
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title} <span className="text-emerald-700">{highlightedTitle}</span>
            </h1>
            <dl className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div><dt className="font-semibold text-slate-800">Vigência</dt><dd>{effectiveDate}</dd></div>
              <div><dt className="font-semibold text-slate-800">Última atualização</dt><dd>{lastUpdate}</dd></div>
            </dl>
          </header>

          <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Sumário do documento">
              <nav className="border-b border-slate-200 py-6 lg:border-b-0">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Sumário</p>
                <ol className="space-y-2 text-sm leading-5 text-slate-600">
                  {sections.map((section, index) => (
                    <li key={section.title}>
                      <a className="transition-colors hover:text-emerald-700" href={`#secao-${index + 1}`}>
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li><a className="transition-colors hover:text-emerald-700" href="#contato-documento">{closingTitle}</a></li>
                </ol>
              </nav>
            </aside>

            <article className="min-w-0 bg-white px-5 py-8 shadow-sm ring-1 ring-slate-200 sm:px-10 sm:py-12 lg:px-14">
              <div className="border-b border-slate-200 pb-8 text-[1.02rem] leading-8 text-slate-700">
                {introduction}
              </div>

              <div className="legal-document-content">
                {sections.map((section, index) => (
                  <section id={`secao-${index + 1}`} key={section.title} className="scroll-mt-28 border-b border-slate-200 py-9 last:border-b-0">
                    <h2 className="text-xl font-bold leading-8 text-slate-900">{section.title}</h2>
                    <div className="mt-4 space-y-4 text-[1.02rem] leading-8 text-slate-700">
                      {section.paragraphs?.map((paragraph, paragraphIndex) => (
                        <p key={`${section.title}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                      ))}
                      {section.items && (
                        <ol className="list-[lower-alpha] space-y-2 pl-7">
                          {section.items.map((item, itemIndex) => <li key={`${section.title}-item-${itemIndex}`}>{item}</li>)}
                        </ol>
                      )}
                    </div>
                  </section>
                ))}

                <section id="contato-documento" className="scroll-mt-28 border-t border-slate-200 pt-9">
                  <h2 className="text-xl font-bold leading-8 text-slate-900">{closingTitle}</h2>
                  <p className="mt-4 text-[1.02rem] leading-8 text-slate-700">{closingText}</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
