import { loanProducts } from '../../data/loanProducts'
import { useI18n } from '../../i18n/I18nContext'
import { colors } from '../../styles/theme'
import type { LoanProductId, LoanSelection } from '../../types'

interface PurposeSelectorProps {
  selection: LoanSelection | null
  onSelect: (selection: LoanSelection) => void
}

export function PurposeSelector({ selection, onSelect }: PurposeSelectorProps) {
  const { t } = useI18n()
  const f = t.form

  const activeProductId = selection?.productId ?? ''
  const activeSubId = selection?.subcategoryId ?? ''
  const productConfig = loanProducts.find((p) => p.id === activeProductId)
  const loanT = activeProductId ? t.loans[activeProductId] : null

  const handleProductChange = (productId: string) => {
    const product = loanProducts.find((p) => p.id === productId)
    if (product) {
      onSelect({ productId: product.id, subcategoryId: product.subcategories[0] })
    }
  }

  const isComplete = Boolean(selection && loanT?.subs[selection.subcategoryId])

  return (
    <div
      id="purpose-picker"
      style={{
        scrollMarginTop: 100,
        marginBottom: 28,
        padding: '22px 20px',
        borderRadius: 14,
        border: isComplete ? `2px solid ${colors.gold}` : '2px dashed #cbd5e1',
        background: isComplete ? 'rgba(201,169,98,0.07)' : '#f8fafc',
        transition: 'border-color 0.3s, background 0.3s',
      }}
    >
      {/* Step badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: colors.navy900,
            color: colors.gold,
            fontSize: 13,
            fontWeight: 800,
            flexShrink: 0,
          }}
        >
          1
        </span>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: colors.navy900 }}>
          {f.purposeTitle}
        </h3>
      </div>

      <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.6, color: '#64748b' }}>
        {f.purposeHint}
      </p>

      {/* Loan type dropdown */}
      <label style={{ display: 'block', marginBottom: 14 }}>
        <span style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 700, color: colors.navy900 }}>
          {f.chooseProduct} <span style={{ color: colors.gold }}>*</span>
        </span>
        <select
          className="fz-input"
          value={activeProductId}
          onChange={(e) => handleProductChange(e.target.value)}
          style={{ cursor: 'pointer', fontWeight: 500 }}
        >
          <option value="" disabled>
            {f.chooseProductPlaceholder}
          </option>
          {loanProducts.map((p) => (
            <option key={p.id} value={p.id}>
              {t.loans[p.id].name}
            </option>
          ))}
        </select>
      </label>

      {/* Purpose dropdown — appears after product chosen */}
      {productConfig && loanT && (
        <label style={{ display: 'block', marginBottom: isComplete ? 14 : 0 }}>
          <span style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 700, color: colors.navy900 }}>
            {f.chooseSubcategory} <span style={{ color: colors.gold }}>*</span>
          </span>
          <select
            className="fz-input"
            value={activeSubId}
            onChange={(e) => onSelect({ productId: activeProductId as LoanProductId, subcategoryId: e.target.value })}
            style={{ cursor: 'pointer', fontWeight: 500 }}
          >
            {productConfig.subcategories.map((subId) => (
              <option key={subId} value={subId}>
                {loanT.subs[subId]}
              </option>
            ))}
          </select>
        </label>
      )}

      {/* Confirmation banner */}
      {isComplete && selection && loanT && (
        <div
          style={{
            marginTop: 14,
            padding: '12px 16px',
            borderRadius: 10,
            background: '#fff',
            border: `1px solid ${colors.gold}`,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <span style={{ color: '#16a34a', fontSize: 18, lineHeight: 1 }} aria-hidden>✓</span>
          <div>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: colors.navy900 }}>
              {f.purposeConfirmed}
            </p>
            <p style={{ margin: '4px 0 0', fontSize: 13, color: '#475569' }}>
              {loanT.name} — {loanT.subs[selection.subcategoryId]}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
