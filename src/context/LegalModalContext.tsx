import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import type { LegalDocType } from '../i18n/legal'

interface LegalModalContextValue {
  activeDoc: LegalDocType | null
  openLegal: (doc: LegalDocType) => void
  closeLegal: () => void
}

const LegalModalContext = createContext<LegalModalContextValue | null>(null)

export function LegalModalProvider({ children }: { children: ReactNode }) {
  const [activeDoc, setActiveDoc] = useState<LegalDocType | null>(null)

  const openLegal = useCallback((doc: LegalDocType) => setActiveDoc(doc), [])
  const closeLegal = useCallback(() => setActiveDoc(null), [])

  useEffect(() => {
    if (activeDoc) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeDoc])

  return (
    <LegalModalContext.Provider value={{ activeDoc, openLegal, closeLegal }}>
      {children}
    </LegalModalContext.Provider>
  )
}

export function useLegalModal() {
  const ctx = useContext(LegalModalContext)
  if (!ctx) throw new Error('useLegalModal must be used within LegalModalProvider')
  return ctx
}
