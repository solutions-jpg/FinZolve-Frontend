import { useEffect, useRef } from 'react'
import { useLegalModal } from '../../context/LegalModalContext'
import { useI18n } from '../../i18n/I18nContext'
import { legalContent } from '../../i18n/legal'
import { colors } from '../../styles/theme'

export function LegalModal() {
  const { activeDoc, closeLegal } = useLegalModal()
  const { language, t } = useI18n()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!activeDoc) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLegal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeDoc, closeLegal])

  if (!activeDoc) return null

  const doc = legalContent[language][activeDoc]

  return (
    <div
      role="presentation"
      onClick={closeLegal}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(5, 13, 26, 0.72)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 16,
          maxWidth: 640,
          width: '100%',
          maxHeight: 'min(85vh, 720px)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          border: '1px solid rgba(201,169,98,0.35)',
        }}
      >
        <header
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 16,
            background: `linear-gradient(180deg, ${colors.navy900}, ${colors.navy800})`,
            borderRadius: '16px 16px 0 0',
          }}
        >
          <div>
            <h2 id="legal-modal-title" style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#fff' }}>
              {doc.title}
            </h2>
            <p style={{ margin: '6px 0 0', fontSize: 12, color: colors.silver }}>{doc.lastUpdated}</p>
          </div>
          <button
            type="button"
            onClick={closeLegal}
            aria-label="Close"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: 8,
              width: 36,
              height: 36,
              color: '#fff',
              fontSize: 20,
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            X
          </button>
        </header>
        <div style={{ padding: 24, overflowY: 'auto', flex: 1 }}>
          {doc.body.map((paragraph, i) => (
            <p
              key={i}
              style={{
                margin: i === 0 ? 0 : '16px 0 0',
                fontSize: 14,
                lineHeight: 1.75,
                color: '#334155',
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <footer style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', textAlign: 'right' }}>
          <button type="button" onClick={closeLegal} className="btn-luxury" style={{ fontSize: 14, padding: '12px 28px' }}>
            {t.legal.close}
          </button>
        </footer>
      </div>
    </div>
  )
}
