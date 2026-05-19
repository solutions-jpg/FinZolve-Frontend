import { seoContent } from '../seo/seoContent'

const sectionStyle = {
  boxSizing: 'border-box',
  padding: '56px 40px 64px',
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderTop: '1px solid #e2e8f0',
}

/** Compact FAQ only — avoids duplicating hero, products and footer copy. */
export function SeoContentSection({ lang }) {
  const c = seoContent[lang] || seoContent.en

  return (
    <section id="faq" style={sectionStyle} aria-labelledby="faq-heading">
      <h2 id="faq-heading" style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 24px 0' }}>
        {c.faqTitle}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {c.faqs.map((item) => (
          <article
            key={item.q}
            itemScope
            itemType="https://schema.org/Question"
            style={{
              backgroundColor: '#f8fafc',
              padding: '20px 22px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h3 itemProp="name" style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' }}>
              {item.q}
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p itemProp="text" style={{ margin: 0, fontSize: '14px', lineHeight: 1.7, color: '#475569' }}>
                {item.a}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
