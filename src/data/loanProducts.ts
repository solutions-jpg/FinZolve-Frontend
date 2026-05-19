import type { LoanProductId } from '../types'

export interface LoanProductConfig {
  id: LoanProductId
  subcategories: string[]
}

export const loanProducts: LoanProductConfig[] = [
  {
    id: 'personal',
    subcategories: [
      'familyFunction',
      'appliance',
      'furniture',
      'electronics',
      'marriage',
      'medical',
      'travel',
      'vacation',
      'homeRenovation',
      'education',
      'balanceTransfer',
      'topUp',
      'balanceTransferTopUp',
      'others',
    ],
  },
  {
    id: 'business',
    subcategories: [
      'businessExpansion',
      'workingCapital',
      'debtConsolidation',
      'businessImprovement',
      'balanceTransfer',
      'topUp',
      'balanceTransferTopUp',
      'others',
    ],
  },
  {
    id: 'home',
    subcategories: [
      'readyToOccupy',
      'underConstruction',
      'plotOfLand',
      'balanceTransferTopUp',
      'repairRenovate',
      'others',
    ],
  },
  {
    id: 'lap',
    subcategories: [
      'commercialResidential',
      'businessImprovement',
      'debtConsolidation',
      'balanceTransferTopUp',
      'others',
    ],
  },
  {
    id: 'gold',
    subcategories: ['termLoan', 'overdraft', 'quickLiquidity'],
  },
  {
    id: 'las',
    subcategories: ['sharesMutualFunds', 'reinvestment', 'personal', 'business'],
  },
  {
    id: 'premium',
    subcategories: ['insurancePremium'],
  },
]
