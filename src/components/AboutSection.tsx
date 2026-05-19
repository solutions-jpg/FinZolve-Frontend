import { useI18n } from '../i18n/I18nContext'
import { colors } from '../styles/theme'

export function AboutSection() {
  const { t } = useI18n()

  return (
    <section
      id="about"
      style={{
        scrollMarginTop: 96,
        background: '#fff',
        padding: '64px 20px',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px', fontSize: 28, fontWeight: 800, color: colors.navy900 }}>
          {t.about.title}
        </h2>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.75, color: '#475569' }}>
          {t.about.body}
        </p>
      </div>
    </section>
  )
}
