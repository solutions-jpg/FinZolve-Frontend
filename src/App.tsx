import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ApplicationSection } from './components/ApplicationSection'
import { FloatingWidgets } from './components/FloatingWidgets'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LegalModal } from './components/legal/LegalModal'
import { LoanProducts } from './components/LoanProducts'
import { WhyFinZolve } from './components/WhyFinZolve'
import { LegalModalProvider } from './context/LegalModalContext'
import { I18nProvider } from './i18n/I18nContext'
import type { LoanSelection } from './types'

export default function App() {
  const [selection, setSelection] = useState<LoanSelection | null>(null)

  return (
    <I18nProvider>
      <LegalModalProvider>
        <div style={{ minHeight: '100vh', background: '#f7f8fb' }}>
          <Header />
          <main>
            <Hero />
            <ApplicationSection selection={selection} onSelect={setSelection} />
            <LoanProducts selection={selection} onSelect={setSelection} />
            <WhyFinZolve />
            <AboutSection />
          </main>
          <Footer />
          <FloatingWidgets />
          <LegalModal />
        </div>
      </LegalModalProvider>
    </I18nProvider>
  )
}
