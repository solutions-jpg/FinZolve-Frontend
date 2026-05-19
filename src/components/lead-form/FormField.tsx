import type { ReactNode } from 'react'
import { colors } from '../../styles/theme'

interface FormFieldProps {
  label: string
  error?: string
  children: ReactNode
  required?: boolean
}

export function FormField({ label, error, children, required }: FormFieldProps) {
  return (
    <label style={{ display: 'block', marginBottom: 18 }}>
      <span
        style={{
          display: 'block',
          marginBottom: 6,
          fontSize: 13,
          fontWeight: 700,
          color: colors.navy900,
          letterSpacing: '0.01em',
        }}
      >
        {label}
        {required && <span style={{ color: colors.gold }}> *</span>}
      </span>
      {children}
      {error && (
        <span style={{ display: 'block', marginTop: 5, fontSize: 12, color: '#dc2626' }} role="alert">
          {error}
        </span>
      )}
    </label>
  )
}
