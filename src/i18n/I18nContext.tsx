import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Language } from '../types'
import { translations, type TranslationBundle } from './translations'

interface I18nContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationBundle
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = useMemo(() => translations[language], [language])

  const setLang = useCallback((lang: Language) => {
    setLanguage(lang)
    document.documentElement.lang = lang
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage: setLang, t }),
    [language, setLang, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
