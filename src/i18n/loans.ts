import type { Language } from '../types'

export type LoanTranslations = Record<
  string,
  { name: string; description: string; subs: Record<string, string> }
>

const en: LoanTranslations = {
  personal: {
    name: 'Personal Loan',
    description:
      'Flexible unsecured financing for life goals — competitive rates from 150+ partner institutions.',
    subs: {
      familyFunction: 'Family Function',
      appliance: 'Purchase Of Appliance',
      furniture: 'Furniture',
      electronics: 'Electronics',
      marriage: 'Marriage',
      medical: 'Medical',
      travel: 'Travel',
      vacation: 'Vacation',
      homeRenovation: 'Home Renovation',
      education: 'Education',
      balanceTransfer: 'Balance Transfer',
      topUp: 'Top Up',
      balanceTransferTopUp: 'Balance Transfer + Top Up',
      others: 'Others',
    },
  },
  business: {
    name: 'Business Loan',
    description:
      'Fuel growth with structured capital for expansion, operations, and balance-sheet optimization.',
    subs: {
      businessExpansion: 'Business Expansion',
      workingCapital: 'Working Capital',
      debtConsolidation: 'Debt Consolidation',
      businessImprovement: 'Business Improvement',
      balanceTransfer: 'Balance Transfer',
      topUp: 'Top Up',
      balanceTransferTopUp: 'Balance Transfer + Top Up',
      others: 'Others',
    },
  },
  home: {
    name: 'Home Loan',
    description:
      'Own your dream home with tailored tenure options and partner-led competitive interest rates.',
    subs: {
      readyToOccupy: 'Buy Ready-To-Occupy Home',
      underConstruction: 'Buy Under-construction Home',
      plotOfLand: 'Plot Purchase Loan',
      balanceTransferTopUp: 'Balance Transfer + Top Up',
      repairRenovate: 'Repair & Renovate Own Home',
      others: 'Others',
    },
  },
  lap: {
    name: 'Loan Against Property',
    description:
      'Commercial or residential property mortgage for business funding and high-ticket liquidity.',
    subs: {
      commercialResidential: 'Commercial or Residential Property Mortgage',
      businessImprovement: 'Business Improvement',
      debtConsolidation: 'Debt Consolidation',
      balanceTransferTopUp: 'Balance Transfer + Top Up',
      others: 'Others',
    },
  },
  gold: {
    name: 'Gold Loan',
    description:
      'Quick liquidity against gold jewelry with low-interest ROI and same-day disbursal options.',
    subs: {
      termLoan: 'Term Loan',
      overdraft: 'OD (Overdraft)',
      quickLiquidity: 'Quick Liquidity Against Gold Jewelry',
    },
  },
  las: {
    name: 'Loan Against Securities',
    description:
      'Loans against approved shares, mutual funds, and insurance policies — unlock value without selling.',
    subs: {
      sharesMutualFunds: 'Shares, Mutual Funds & Insurance Policies',
      reinvestment: 'Re-investment',
      personal: 'Personal',
      business: 'Business',
    },
  },
  premium: {
    name: 'Loan For Premium',
    description:
      'Funding solutions tailored strictly for high-value insurance premiums and policy continuity.',
    subs: {
      insurancePremium: 'Insurance Premium Financing',
    },
  },
}

const ta: LoanTranslations = {
  personal: {
    name: 'தனிநபர் கடன்',
    description:
      'வாழ்க்கை இலக்குகளுக்கான நெகிழ்வான கடன் — 150+ நிதி கூட்டாளர்களிடமிருந்து போட்டி வட்டி விகிதங்கள்.',
    subs: {
      familyFunction: 'குடும்ப விழா',
      appliance: 'உபகரணம் வாங்குதல்',
      furniture: 'தளபாடங்கள்',
      electronics: 'மின்னணு பொருட்கள்',
      marriage: 'திருமணம்',
      medical: 'மருத்துவம்',
      travel: 'பயணம்',
      vacation: 'விடுமுறை',
      homeRenovation: 'வீட்டு புதுப்பிப்பு',
      education: 'கல்வி',
      balanceTransfer: 'இருப்பு மாற்றம்',
      topUp: 'டாப் அப்',
      balanceTransferTopUp: 'இருப்பு மாற்றம் + டாப் அப்',
      others: 'மற்றவை',
    },
  },
  business: {
    name: 'வணிக கடன்',
    description:
      'விரிவாக்கம், செயல்பாட்டு மூலதனம் மற்றும் கடன் ஒருங்கிணைப்புக்கான கட்டமைக்கப்பட்ட நிதி.',
    subs: {
      businessExpansion: 'வணிக விரிவாக்கம்',
      workingCapital: 'பணப்புழக்க மூலதனம்',
      debtConsolidation: 'கடன் ஒருங்கிணைப்பு',
      businessImprovement: 'வணிக மேம்பாடு',
      balanceTransfer: 'இருப்பு மாற்றம்',
      topUp: 'டாப் அப்',
      balanceTransferTopUp: 'இருப்பு மாற்றம் + டாப் அப்',
      others: 'மற்றவை',
    },
  },
  home: {
    name: 'வீட்டுக் கடன்',
    description:
      'கனவு வீட்டை சொந்தமாக்குங்கள் — தனிப்பயன் காலம் மற்றும் போட்டி வட்டி விகிதங்கள்.',
    subs: {
      readyToOccupy: 'உடனே குடியிருக்க வீடு வாங்குதல்',
      underConstruction: 'கட்டுமானத்தில் உள்ள வீடு வாங்குதல்',
      plotOfLand: 'நிலம் வாங்கும் கடன்',
      balanceTransferTopUp: 'இருப்பு மாற்றம் + டாப் அப்',
      repairRenovate: 'வீட்டை பழுதுபார்த்தல் / புதுப்பித்தல்',
      others: 'மற்றவை',
    },
  },
  lap: {
    name: 'சொத்துக்கு எதிரான கடன்',
    description:
      'வணிக நிதிக்கான வணிக அல்லது குடியிருப்பு சொத்து அடமானம் — உயர் தொகை பணப்புழக்கம்.',
    subs: {
      commercialResidential: 'வணிக / குடியிருப்பு சொத்து அடமானம்',
      businessImprovement: 'வணிக மேம்பாடு',
      debtConsolidation: 'கடன் ஒருங்கிணைப்பு',
      balanceTransferTopUp: 'இருப்பு மாற்றம் + டாப் அப்',
      others: 'மற்றவை',
    },
  },
  gold: {
    name: 'தங்கக் கடன்',
    description:
      'தங்க நகைக்கு எதிரான விரைவு பணப்புழக்கம் — குறைந்த வட்டி மற்றும் அதே நாள் வழங்கல்.',
    subs: {
      termLoan: 'கால கடன்',
      overdraft: 'ஓவர் டிராஃப்ட் (OD)',
      quickLiquidity: 'தங்க நகைக்கு எதிரான விரைவு பணப்புழக்கம்',
    },
  },
  las: {
    name: 'பத்திரங்களுக்கு எதிரான கடன்',
    description:
      'அங்கீகரிக்கப்பட்ட பங்குகள், மியூச்சுவல் ஃபண்டுகள் மற்றும் காப்பீட்டு பாலிசிகளுக்கு எதிரான கடன்.',
    subs: {
      sharesMutualFunds: 'பங்குகள், மியூச்சுவல் ஃபண்டுகள் & காப்பீட்டு பாலிசிகள்',
      reinvestment: 'மறு முதலீடு',
      personal: 'தனிப்பட்ட',
      business: 'வணிக',
    },
  },
  premium: {
    name: 'பிரீமியத்திற்கான கடன்',
    description:
      'உயர் மதிப்புள்ள காப்பீட்டு பிரீமியங்களுக்காக வடிவமைக்கப்பட்ட நிதி தீர்வுகள்.',
    subs: {
      insurancePremium: 'காப்பீட்டு பிரீமியம் நிதியுதவி',
    },
  },
}

const hi: LoanTranslations = {
  personal: {
    name: 'व्यक्तिगत लोन',
    description:
      'जीवन लक्ष्यों के लिए लचीला अनसुरक्षित वित्त — 150+ साझेदार संस्थानों से प्रतिस्पर्धी दरें।',
    subs: {
      familyFunction: 'पारिवारिक समारोह',
      appliance: 'उपकरण खरीद',
      furniture: 'फर्नीचर',
      electronics: 'इलेक्ट्रॉनिक्स',
      marriage: 'विवाह',
      medical: 'चिकित्सा',
      travel: 'यात्रा',
      vacation: 'अवकाश',
      homeRenovation: 'घर नवीनीकरण',
      education: 'शिक्षा',
      balanceTransfer: 'बैलेंस ट्रांसफर',
      topUp: 'टॉप अप',
      balanceTransferTopUp: 'बैलेंस ट्रांसफर + टॉप अप',
      others: 'अन्य',
    },
  },
  business: {
    name: 'व्यापार लोन',
    description:
      'विस्तार, परिचालन पूंजी और ऋण समेकन के लिए संरचित पूंजी से विकास को गति दें।',
    subs: {
      businessExpansion: 'व्यापार विस्तार',
      workingCapital: 'कार्यशील पूंजी',
      debtConsolidation: 'ऋण समेकन',
      businessImprovement: 'व्यापार सुधार',
      balanceTransfer: 'बैलेंस ट्रांसफर',
      topUp: 'टॉप अप',
      balanceTransferTopUp: 'बैलेंस ट्रांसफर + टॉप अप',
      others: 'अन्य',
    },
  },
  home: {
    name: 'होम लोन',
    description:
      'सपनों का घर पाएं — अनुकूलित अवधि और साझेदार-नेतृत्व वाली प्रतिस्पर्धी ब्याज दरें।',
    subs: {
      readyToOccupy: 'तैयार घर खरीदें',
      underConstruction: 'निर्माणाधीन घर खरीदें',
      plotOfLand: 'प्लॉट खरीद लोन',
      balanceTransferTopUp: 'बैलेंस ट्रांसफर + टॉप अप',
      repairRenovate: 'घर की मरम्मत और नवीनीकरण',
      others: 'अन्य',
    },
  },
  lap: {
    name: 'संपत्ति के विरुद्ध लोन',
    description:
      'व्यापार वित्तपोषण के लिए व्यावसायिक या आवासीय संपत्ति बंधक — उच्च मूल्य तरलता।',
    subs: {
      commercialResidential: 'व्यावसायिक या आवासीय संपत्ति बंधक',
      businessImprovement: 'व्यापार सुधार',
      debtConsolidation: 'ऋण समेकन',
      balanceTransferTopUp: 'बैलेंस ट्रांसफर + टॉप अप',
      others: 'अन्य',
    },
  },
  gold: {
    name: 'गोल्ड लोन',
    description:
      'सोने के आभूषण के विरुद्ध त्वरित तरलता — कम ब्याज ROI और उसी दिन वितरण।',
    subs: {
      termLoan: 'टर्म लोन',
      overdraft: 'ओवरड्राफ्ट (OD)',
      quickLiquidity: 'सोने के आभूषण के विरुद्ध त्वरित तरलता',
    },
  },
  las: {
    name: 'प्रतिभूतियों के विरुद्ध लोन',
    description:
      'अनुमोदित शेयरों, म्यूचुअल फंड और बीमा पॉलिसियों के विरुद्ध लोन — बेचे बिना मूल्य अनलॉक करें।',
    subs: {
      sharesMutualFunds: 'शेयर, म्यूचुअल फंड और बीमा पॉलिसियां',
      reinvestment: 'पुनर्निवेश',
      personal: 'व्यक्तिगत',
      business: 'व्यापार',
    },
  },
  premium: {
    name: 'प्रीमियम के लिए लोन',
    description:
      'उच्च मूल्य के बीमा प्रीमियम और पॉलिसी निरंतरता के लिए विशेष रूप से तैयार वित्त समाधान।',
    subs: {
      insurancePremium: 'बीमा प्रीमियम वित्तपोषण',
    },
  },
}

export const loanTranslations: Record<Language, LoanTranslations> = { en, ta, hi }
