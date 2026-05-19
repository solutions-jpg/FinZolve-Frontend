import { loanProductKeywords, seoContent } from '../seo/seoContent'

const sectionStyle = {
  boxSizing: 'border-box',
  padding: '64px 40px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
}

/** Extra indexable content for Google — inserted above footer; does not alter form or nav logic. */
export function SeoContentSection({ lang, onApply }) {
  const c = seoContent[lang] || seoContent.en

  return (
    <>
      <section id="about" style={{ ...sectionStyle, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: '0 0 16px 0' }}>{c.aboutTitle}</h2>
        <p style={{ color: '#475569', fontSize: '16px', lineHeight: 1.85, margin: '0 0 24px 0', maxWidth: '900px' }}>{c.aboutBody}</p>

        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px 0' }}>{c.areasTitle}</h3>
        <ul style={{ margin: '0 0 28px 0', paddingLeft: '22px', color: '#334155', lineHeight: 2, fontSize: '15px' }}>
          {c.areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onApply}
          style={{
            backgroundColor: '#fbbf24',
            color: '#0f172a',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
          }}
        >
          {lang === 'ta' ? 'இப்போது விண்ணப்பிக்கவும்' : lang === 'hi' ? 'अभी आवेदन करें' : 'Apply now'}
        </button>
      </section>

      <section id="loan-guide" style={{ ...sectionStyle, backgroundColor: '#f1f5f9' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px 0' }}>{c.productsTitle}</h2>
        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.75, margin: '0 0 20px 0', maxWidth: '900px' }}>{c.productsIntro}</p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: 0, padding: 0, listStyle: 'none' }}>
          {loanProductKeywords.map((name) => (
            <li
              key={name}
              style={{
                backgroundColor: '#ffffff',
                padding: '14px 18px',
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                fontWeight: '700',
                color: '#0f172a',
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" style={{ ...sectionStyle, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: '0 0 28px 0' }}>{c.faqTitle}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
          {c.faqs.map((item) => (
            <article
              key={item.q}
              itemScope
              itemType="https://schema.org/Question"
              style={{
                backgroundColor: '#f8fafc',
                padding: '22px 24px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
              }}
            >
              <h3 itemProp="name" style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>
                {item.q}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.75, color: '#475569' }}>
                  {item.a}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
