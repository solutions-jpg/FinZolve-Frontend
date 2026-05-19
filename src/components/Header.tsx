import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { languageLabels } from '../i18n/translations'
import { colors } from '../styles/theme'
import type { Language } from '../types'
import { scrollToApply, scrollToSection } from '../utils/scroll'
import { FinZolveLogo } from './brand/FinZolveLogo'

const languages: Language[] = ['en', 'ta', 'hi']

type NavKey = 'home' | 'products' | 'applyLoan' | 'why' | 'about' | 'contact'

const navItems: { id: string; key: NavKey; action: 'scroll' | 'apply' }[] = [
  { id: 'home', key: 'home', action: 'scroll' },
  { id: 'products', key: 'products', action: 'scroll' },
  { id: 'apply-form', key: 'applyLoan', action: 'apply' },
  { id: 'why', key: 'why', action: 'scroll' },
  { id: 'about', key: 'about', action: 'scroll' },
  { id: 'contact', key: 'contact', action: 'scroll' },
]

export function Header() {
  const { language, setLanguage, t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  const isTamil = language === 'ta'

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const handleNav = (item: (typeof navItems)[0]) => {
    if (item.action === 'apply') scrollToApply({ force: true })
    else scrollToSection(item.id)
    setMenuOpen(false)
  }

  const linkStyle = (highlight?: boolean): CSSProperties => ({
    background: highlight ? 'rgba(201,169,98,0.18)' : 'transparent',
    border: highlight ? '1px solid rgba(201,169,98,0.45)' : '1px solid transparent',
    cursor: 'pointer',
    padding: isTamil ? '6px 9px' : '8px 12px',
    borderRadius: 8,
    fontSize: isTamil ? 12 : 14,
    fontWeight: highlight ? 700 : 500,
    color: highlight ? colors.gold : colors.silverLight,
    fontFamily: 'inherit',
    lineHeight: 1.3,
    whiteSpace: 'nowrap',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
  })

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__brand"
          onClick={() => scrollToSection('home')}
        >
          <FinZolveLogo size={isTamil ? 38 : 42} />
          <span className="site-header__tagline">{t.brand.tagline}</span>
        </button>

        <nav className="site-header__nav hidden xl:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const highlight = item.key === 'applyLoan'
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNav(item)}
                style={linkStyle(highlight)}
                onMouseEnter={(e) => {
                  if (!highlight) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#fff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!highlight) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = colors.silverLight
                  }
                }}
              >
                {t.nav[item.key]}
              </button>
            )
          })}
        </nav>

        <div className="site-header__actions">
          <div ref={langRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              aria-expanded={langOpen}
              className="site-header__lang-btn"
            >
              {languageLabels[language]}
              <span aria-hidden> ▾</span>
            </button>
            {langOpen && (
              <ul className="site-header__lang-menu" role="listbox">
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage(lang)
                        setLangOpen(false)
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px 18px',
                        border: 'none',
                        background: language === lang ? '#f8fafc' : 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: 14,
                        fontWeight: language === lang ? 700 : 400,
                        color: language === lang ? colors.navy900 : '#475569',
                        fontFamily: 'inherit',
                      }}
                    >
                      {languageLabels[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className="site-header__menu-btn xl:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="site-header__mobile xl:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleNav(item)}
              style={{
                ...linkStyle(item.key === 'applyLoan'),
                display: 'block',
                width: '100%',
                textAlign: 'left',
                marginBottom: 4,
                whiteSpace: 'normal',
              }}
            >
              {t.nav[item.key]}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
