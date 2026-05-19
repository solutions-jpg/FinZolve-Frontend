import { useI18n } from '../i18n/I18nContext'
import { colors, shadows } from '../styles/theme'

const icons = ['🏦', '🔒', '🌐', '🤝']

export function WhyFinZolve() {
  const { t } = useI18n()

  return (
    <section
      id="why"
      style={{
        background: 'linear-gradient(180deg, #eef2f7 0%, #ffffff 100%)',
        padding: '80px 20px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2
            style={{
              margin: '0 0 12px',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 800,
              color: colors.navy900,
            }}
          >
            {t.why.title}
          </h2>
          <p style={{ margin: 0, fontSize: 17, color: '#475569', maxWidth: 520, marginInline: 'auto' }}>
            {t.why.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 24,
          }}
        >
          {t.why.features.map((feature, i) => (
            <article
              key={feature.title}
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 28,
                border: '1.5px solid #e2e8f0',
                boxShadow: shadows.card,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = shadows.cardHover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = shadows.card
              }}
            >
              <span style={{ fontSize: 32 }} aria-hidden>{icons[i]}</span>
              <h3 style={{ margin: '16px 0 8px', fontSize: 16, fontWeight: 700, color: colors.navy900 }}>
                {feature.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#64748b' }}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
