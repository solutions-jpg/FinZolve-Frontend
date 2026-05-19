import type { ReactNode } from 'react'
import type { LegalDocType } from '../../i18n/legal'
import { useLegalModal } from '../../context/LegalModalContext'
import { colors } from '../../styles/theme'

interface LegalLinkProps {
  doc: LegalDocType
  children: ReactNode
  variant?: 'inline' | 'footer'
}

export function LegalLink({ doc, children, variant = 'inline' }: LegalLinkProps) {
  const { openLegal } = useLegalModal()

  const style =
    variant === 'footer'
      ? {
          background: 'none',
          border: 'none',
          padding: 0,
          color: colors.silver,
          fontSize: 13,
          cursor: 'pointer',
          fontFamily: 'inherit',
          textDecoration: 'underline',
        }
      : {
          background: 'none',
          border: 'none',
          padding: 0,
          color: colors.navy900,
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'inherit',
          textDecoration: 'underline',
        }

  return (
    <button type="button" onClick={() => openLegal(doc)} style={style}>
      {children}
    </button>
  )
}
