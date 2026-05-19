import { useI18n } from '../i18n/I18nContext'
import { SUPPORT_EMAIL } from '../i18n/legal'
import { colors } from '../styles/theme'
import { FinZolveLogo } from './brand/FinZolveLogo'
import { LegalLink } from './legal/LegalLink'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      style={{
        scrollMarginTop: 96,
        background: colors.navy950,
        color: colors.silver,
        borderTop: '1px solid rgba(201,169,98,0.15)',
        padding: '48px 20px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 32,
            marginBottom: 32,
          }}
        >
          <div>
            <FinZolveLogo size={36} />
            <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.7, color: '#94a3b8' }}>
              {t.footer.corporate}
            </p>
          </div>

          <div>
            <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>
              {t.footer.legalHeading}
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }} aria-label="Legal">
              <LegalLink doc="privacy" variant="footer">{t.footer.privacy}</LegalLink>
              <LegalLink doc="terms" variant="footer">{t.footer.terms}</LegalLink>
              <LegalLink doc="disclaimer" variant="footer">{t.footer.disclaimer}</LegalLink>
            </nav>
          </div>

          <div>
            <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>
              {t.contact.title}
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8 }}>
              <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: colors.gold, textDecoration: 'none' }}>
                {t.contact.email}
              </a>
            </p>
            <p style={{ margin: '12px 0 6px', fontSize: 12, fontWeight: 600, color: '#cbd5e1' }}>
              {t.contact.districtsLabel}
            </p>
            <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: '#94a3b8' }}>
              {t.contact.districts.map((district) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
            <p style={{ margin: '12px 0 0', fontSize: 12, lineHeight: 1.6, color: '#64748b' }}>{t.footer.panIndia}</p>
          </div>
        </div>

        <p
          style={{
            margin: 0,
            padding: '14px 18px',
            borderRadius: 10,
            border: '1px solid rgba(201,169,98,0.25)',
            background: colors.navy900,
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 600,
            color: colors.gold,
            lineHeight: 1.5,
          }}
        >
          {t.footer.trustBadge}
        </p>

        <p style={{ margin: '20px 0 0', fontSize: 11, color: '#64748b', textAlign: 'center' }}>
          © {year} {t.brand.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
