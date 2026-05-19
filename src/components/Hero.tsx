import { useI18n } from '../i18n/I18nContext'
import { colors } from '../styles/theme'
import { scrollToApply } from '../utils/scroll'
import { FinZolveLogo } from './brand/FinZolveLogo'

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.navy950} 0%, ${colors.navy900} 45%, ${colors.navy700} 100%)`,
        color: '#fff',
        minHeight: 'min(90vh, 720px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Decorative orbs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,98,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hero-grid"
        style={{
          position: 'relative',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 20px',
          width: '100%',
        }}
      >
        <div className="hero-qr flex flex-col items-center">
          <div
            style={{
              background: '#ffffff',
              borderRadius: 20,
              padding: 28,
              boxShadow: '0 24px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,169,98,0.25)',
              width: '100%',
              maxWidth: 280,
            }}
          >
            <p
              style={{
                margin: '0 0 16px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: colors.navy700,
                textAlign: 'center',
              }}
            >
              {t.hero.qrLabel}
            </p>

            {/* QR pattern */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '1',
                background: '#f8fafc',
                borderRadius: 12,
                border: `2px dashed ${colors.gold}`,
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: 3,
                padding: 16,
              }}
              aria-label={t.hero.qrCaption}
            >
              {Array.from({ length: 49 }).map((_, i) => {
                const filled = [
                  0,1,2,3,4,5,6, 7,13,14,20,21,27,28,34,35,41,42,43,44,45,46,47,48,
                  8,10,16,18,24,26,32,38, 9,11,17,19,25,31,37,39,
                ].includes(i)
                return (
                  <span
                    key={i}
                    style={{
                      borderRadius: 2,
                      background: filled ? colors.navy900 : 'transparent',
                    }}
                  />
                )
              })}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 10,
                    padding: '6px 10px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    border: `2px solid ${colors.gold}`,
                  }}
                >
                  <FinZolveLogo size={32} showWordmark={false} />
                </div>
              </div>
            </div>

            <p style={{ margin: '14px 0 0', fontSize: 12, color: '#64748b', textAlign: 'center' }}>
              {t.hero.qrCaption}
            </p>
          </div>
        </div>

        <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(201,169,98,0.15)',
              border: '1px solid rgba(201,169,98,0.35)',
              fontSize: 12,
              fontWeight: 600,
              color: colors.goldLight,
              letterSpacing: '0.05em',
            }}
          >
            ★ {t.hero.badge}
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(1.875rem, 5vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: '#ffffff',
            }}
          >
            {t.hero.headline}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
              lineHeight: 1.75,
              color: colors.silver,
              maxWidth: 520,
            }}
          >
            {t.hero.subheadline}
          </p>

          <button
            type="button"
            onClick={() => scrollToApply({ force: true })}
            className="btn-luxury animate-shimmer"
            style={{
              width: '100%',
              maxWidth: 360,
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <span>{t.hero.cta}</span>
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
