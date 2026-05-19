export type Language = 'en' | 'ta' | 'hi'

export type LoanProductId =
  | 'personal'
  | 'business'
  | 'home'
  | 'lap'
  | 'gold'
  | 'las'
  | 'premium'

export interface LoanSelection {
  productId: LoanProductId
  subcategoryId: string
}

export interface LeadFormData {
  mobile: string
  consent: boolean
  firstName: string
  middleName: string
  lastName: string
  gender: string
  email: string
  pan: string
  panName: string
  panDob: string
  loanAmount: string
  tenureMonths: string
  pincode: string
  city: string
  state: string
  otp: string
}

export type FormStep = 1 | 2 | 3
export type Step2SubStage = '2a' | '2b' | '2c'
