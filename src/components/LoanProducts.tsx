import { useState } from 'react'
import { loanProducts } from '../data/loanProducts'
import { useI18n } from '../i18n/I18nContext'
import { colors, shadows } from '../styles/theme'
import type { LoanProductId, LoanSelection } from '../types'
import { LoanIcon } from './icons/LoanIcons'

interface LoanProductsProps {
  selection: LoanSelection | null
  onSelect: (selection: LoanSelection) => void
}

export function LoanProducts({ selection, onSelect }: LoanProductsProps) {
  const { t } = useI18n()
  const [expandedId, setExpandedId] = useState<LoanProductId | null>(null)
  const [justSelected, setJustSelected] = useState(false)

  const toggle = (id: LoanProductId) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleSelect = (productId: LoanProductId, subcategoryId: string) => {
    onSelect({ productId, subcategoryId })
    setJustSelected(true)
    setTimeout(() => setJustSelected(false), 4000)
    // No scroll — selection syncs to the form section above
  }

  const isSelected = (productId: LoanProductId, subId: string) =>
    selection?.productId === productId && selection.subcategoryId === subId

  return (
    <section id="products" style={{ background: colors.offWhite, padding: '80px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 32, maxWidth: 640 }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: colors.goldDark,
              marginBottom: 12,
            }}
          >
            {t.products.allPurposes}
          </span>
          <h2
            style={{
              margin: '0 0 12px',
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontWeight: 800,
              color: colors.navy900,
            }}
          >
            {t.products.title}
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: '#475569' }}>
            {t.products.subtitle}
          </p>

          {justSelected && (
            <p
              style={{
                margin: '16px 0 0',
                padding: '10px 16px',
                borderRadius: 10,
                background: '#dcfce7',
                border: '1px solid #86efac',
                color: '#166534',
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {t.products.syncNote}
            </p>
          )}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {loanProducts.map((product) => {
            const loan = t.loans[product.id]
            const isOpen = expandedId === product.id
            const hasSelection = selection?.productId === product.id

            return (
              <article
                key={product.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  border: hasSelection
                    ? `2px solid ${colors.gold}`
                    : isOpen
                      ? `2px solid ${colors.navy700}`
                      : '1.5px solid #e2e8f0',
                  boxShadow: isOpen || hasSelection ? shadows.cardHover : shadows.card,
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(product.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    padding: '22px 22px 18px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background: `linear-gradient(135deg, ${colors.navy900}, ${colors.navy700})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LoanIcon id={product.id} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: colors.navy900 }}>
                        {loan.name}
                      </h3>
                      <span
                        style={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          background: isOpen ? colors.gold : '#f1f5f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 14,
                          fontWeight: 700,
                          transform: isOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.35s',
                        }}
                        aria-hidden
                      >
                        ▾
                      </span>
                    </div>
                    <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.55, color: '#64748b' }}>
                      {loan.description}
                    </p>
                  </div>
                </button>

                <div className={`expand-panel ${isOpen ? 'expand-panel--open' : 'expand-panel--closed'}`}>
                  <div>
                    <div style={{ padding: '0 22px 22px', borderTop: '1px solid #f1f5f9' }}>
                      <p
                        style={{
                          margin: '14px 0 10px',
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#94a3b8',
                        }}
                      >
                        {t.products.allPurposes}
                      </p>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {product.subcategories.map((subId) => (
                          <li key={subId}>
                            <button
                              type="button"
                              onClick={() => handleSelect(product.id, subId)}
                              style={{
                                width: '100%',
                                padding: '10px 14px',
                                borderRadius: 8,
                                border: isSelected(product.id, subId)
                                  ? `2px solid ${colors.gold}`
                                  : '1px solid #e2e8f0',
                                background: isSelected(product.id, subId) ? 'rgba(201,169,98,0.12)' : '#f8fafc',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: 13,
                                fontWeight: isSelected(product.id, subId) ? 700 : 500,
                                color: colors.navy800,
                                fontFamily: 'inherit',
                                lineHeight: 1.4,
                              }}
                            >
                              {isSelected(product.id, subId) ? '✓ ' : ''}
                              {loan.subs[subId]}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
