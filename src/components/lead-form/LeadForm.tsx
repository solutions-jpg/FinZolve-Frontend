import { useCallback, useMemo, useState } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import { colors } from '../../styles/theme'
import type { FormStep, LeadFormData, LoanSelection, Step2SubStage } from '../../types'
import {
  DOB_REGEX,
  EMAIL_REGEX,
  MOBILE_REGEX,
  OTP_REGEX,
  PAN_REGEX,
  PINCODE_REGEX,
} from '../../utils/validation'
import { Step1Contact } from './Step1Contact'
import { Step2Profile } from './Step2Profile'
import { Step3OTP } from './Step3OTP'

const emptyForm = (): LeadFormData => ({
  mobile: '', consent: false, firstName: '', middleName: '', lastName: '',
  gender: '', email: '', pan: '', panName: '', panDob: '',
  loanAmount: '', tenureMonths: '', pincode: '', city: '', state: '', otp: '',
})

interface LeadFormProps {
  selection: LoanSelection
}

export function LeadForm({ selection }: LeadFormProps) {
  const { t } = useI18n()
  const f = t.form
  const loanT = t.loans[selection.productId]

  const [step, setStep] = useState<FormStep>(1)
  const [subStage, setSubStage] = useState<Step2SubStage>('2a')
  const [data, setData] = useState<LeadFormData>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({})
  const [mobileError, setMobileError] = useState('')
  const [consentError, setConsentError] = useState('')
  const [otpError, setOtpError] = useState('')

  const selectedLabel = useMemo(
    () => `${loanT.name} — ${loanT.subs[selection.subcategoryId]}`,
    [loanT, selection.subcategoryId],
  )

  const patch = useCallback((partial: Partial<LeadFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
    setErrors((prev) => {
      const next = { ...prev }
      for (const key of Object.keys(partial) as (keyof LeadFormData)[]) delete next[key]
      return next
    })
  }, [])

  const goStep1Next = () => {
    let ok = true
    if (!MOBILE_REGEX.test(data.mobile)) { setMobileError(f.errors.mobile); ok = false } else setMobileError('')
    if (!data.consent) { setConsentError(f.errors.consent); ok = false } else setConsentError('')
    if (ok) { setStep(2); setSubStage('2a') }
  }

  const validateStep2Fields = (stage: Step2SubStage): boolean => {
    const next: Partial<Record<keyof LeadFormData, string>> = {}
    if (stage === '2a') {
      if (!data.firstName.trim()) next.firstName = f.errors.required
      if (!data.lastName.trim()) next.lastName = f.errors.required
      if (!data.gender) next.gender = f.errors.required
      if (!EMAIL_REGEX.test(data.email)) next.email = f.errors.email
    }
    if (stage === '2b') {
      if (!PAN_REGEX.test(data.pan)) next.pan = f.errors.pan
      if (!data.panName.trim()) next.panName = f.errors.required
      if (!DOB_REGEX.test(data.panDob)) next.panDob = f.errors.dob
    }
    if (stage === '2c') {
      if (!data.loanAmount.trim()) next.loanAmount = f.errors.required
      if (!data.tenureMonths.trim()) next.tenureMonths = f.errors.required
      if (!PINCODE_REGEX.test(data.pincode)) next.pincode = f.errors.pincode
      if (!data.city.trim()) next.city = f.errors.required
      if (!data.state.trim()) next.state = f.errors.required
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const goSubStageNext = () => {
    if (!validateStep2Fields(subStage)) return
    if (subStage === '2a') setSubStage('2b')
    else if (subStage === '2b') setSubStage('2c')
  }

  const goStep3 = () => { if (validateStep2Fields('2c')) setStep(3) }

  const handleStep2Back = () => {
    if (subStage === '2c') setSubStage('2b')
    else if (subStage === '2b') setSubStage('2a')
    else setStep(1)
  }

  const handleSubmit = () => {
    if (!OTP_REGEX.test(data.otp)) { setOtpError(f.errors.otp); return }
    setOtpError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="animate-fade-up" style={{ textAlign: 'center', padding: '32px 0' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', color: '#16a34a', fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>✓</div>
        <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: colors.navy900 }}>{f.successTitle}</h3>
        <p style={{ margin: '0 0 16px', color: '#64748b' }}>{f.successMessage}</p>
        <p style={{ margin: 0, padding: '10px 16px', borderRadius: 8, background: '#f8fafc', fontSize: 13, fontWeight: 600, color: colors.navy900 }}>{selectedLabel}</p>
      </div>
    )
  }

  const formSteps = [
    { num: 2, label: f.step1Title },
    { num: 3, label: f.step2aTitle },
    { num: 4, label: f.step3Title },
  ]
  const currentFormStep = step === 1 ? 2 : step === 2 ? 3 : 4

  return (
    <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: 24, marginTop: 4 }}>
      {/* Progress — steps 2-4 (step 1 is purpose picker above) */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }} aria-label="Form progress">
        {formSteps.map(({ num, label }) => (
          <div key={num} style={{ flex: 1 }}>
            <div
              style={{
                height: 4,
                borderRadius: 2,
                background: currentFormStep >= num
                  ? `linear-gradient(90deg, ${colors.gold}, ${colors.navy700})`
                  : '#e2e8f0',
                transition: 'background 0.4s',
              }}
            />
            <p style={{ margin: '5px 0 0', fontSize: 9, fontWeight: 700, color: currentFormStep >= num ? colors.navy900 : '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {num}. {label.split(' ').slice(0, 2).join(' ')}
            </p>
          </div>
        ))}
      </div>

      {step === 1 && (
        <Step1Contact
          mobile={data.mobile}
          consent={data.consent}
          mobileError={mobileError}
          consentError={consentError}
          onMobileChange={(mobile) => patch({ mobile })}
          onConsentChange={(consent) => patch({ consent })}
          onNext={goStep1Next}
        />
      )}
      {step === 2 && (
        <Step2Profile
          data={data}
          subStage={subStage}
          errors={errors}
          onChange={patch}
          onSubStageNext={goSubStageNext}
          onProceedToStep3={goStep3}
          onBack={handleStep2Back}
        />
      )}
      {step === 3 && (
        <Step3OTP
          otp={data.otp}
          otpError={otpError}
          onOtpChange={(otp) => patch({ otp })}
          onSubmit={handleSubmit}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  )
}
