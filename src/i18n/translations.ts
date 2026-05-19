import type { Language } from '../types'
import { loanTranslations, type LoanTranslations } from './loans'

export interface TranslationBundle {
  brand: { name: string; tagline: string }
  nav: {
    home: string
    products: string
    applyLoan: string
    why: string
    about: string
    contact: string
  }
  legal: { close: string }
  hero: {
    headline: string
    subheadline: string
    cta: string
    qrCaption: string
    badge: string
    qrLabel: string
  }
  products: {
    title: string
    subtitle: string
    applyCta: string
    allPurposes: string
    syncNote: string
  }
  why: {
    title: string
    subtitle: string
    features: Array<{ title: string; description: string }>
  }
  about: { title: string; body: string }
  contact: { title: string; email: string; serviceRegion: string }
  application: { title: string; subtitle: string }
  loans: LoanTranslations
  form: {
    consentHint: string
    step1Title: string
    mobile: string
    mobilePlaceholder: string
    consentLead: string
    consentJoin: string
    terms: string
    privacy: string
    next: string
    step2aTitle: string
    firstName: string
    middleName: string
    lastName: string
    gender: string
    genderMale: string
    genderFemale: string
    genderOther: string
    email: string
    step2bTitle: string
    pan: string
    panName: string
    panDob: string
    panDobPlaceholder: string
    step2cTitle: string
    loanAmount: string
    tenure: string
    pincode: string
    city: string
    state: string
    proceedVerify: string
    step3Title: string
    otp: string
    otpPlaceholder: string
    submit: string
    back: string
    selectPurpose: string
    purposeTitle: string
    purposeHint: string
    purposeWaiting: string
    purposeConfirmed: string
    chooseProduct: string
    chooseProductPlaceholder: string
    chooseSubcategory: string
    selectedLoan: string
    errors: {
      mobile: string
      consent: string
      required: string
      email: string
      pan: string
      dob: string
      pincode: string
      otp: string
    }
    loadingPincode: string
    pincodeFailed: string
    successTitle: string
    successMessage: string
  }
  footer: {
    corporate: string
    legalHeading: string
    privacy: string
    disclaimer: string
    terms: string
    trustBadge: string
    panIndia: string
    rights: string
  }
}

const formEn = {
  step1Title: 'Check Your Loan Eligibility',
  consentHint: 'Accept Terms & Privacy to continue',
  mobile: 'Mobile Number',
  mobilePlaceholder: '10-digit mobile number',
  consentLead: 'By continuing, you agree to our',
  consentJoin: 'and',
  terms: 'Terms and Conditions',
  privacy: 'Privacy Policy',
  next: 'Next',
  step2aTitle: 'Personal Details',
  firstName: 'First Name',
  middleName: 'Middle Name',
  lastName: 'Last Name',
  gender: 'Gender',
  genderMale: 'Male',
  genderFemale: 'Female',
  genderOther: 'Other',
  email: 'Personal Email ID',
  step2bTitle: 'PAN Identity Verification',
  pan: 'PAN Number',
  panName: 'Name as per PAN',
  panDob: 'Date of Birth as per PAN',
  panDobPlaceholder: 'DD/MM/YYYY',
  step2cTitle: 'Loan Requirement & Location',
  loanAmount: 'Required Loan Amount',
  tenure: 'Tenure in Months',
  pincode: 'Residential Pincode',
  city: 'City / District',
  state: 'State',
  proceedVerify: 'Proceed to Verify',
  step3Title: 'Enter OTP Verification Code',
  otp: 'OTP Code',
  otpPlaceholder: '6-digit OTP',
  submit: 'Submit Loan Application',
  back: 'Back',
  selectPurpose: 'Select loan purpose to begin',
  purposeTitle: 'Choose Your Loan Purpose',
  purposeHint: 'First, pick your loan type and purpose using the dropdowns below. Then fill in your details.',
  purposeWaiting: 'Please select your loan type and purpose above to unlock the application form.',
  purposeConfirmed: 'Purpose selected — continue with your details below',
  chooseProduct: 'Loan Type',
  chooseProductPlaceholder: '— Select a loan type —',
  chooseSubcategory: 'Loan Purpose',
  selectedLoan: 'Selected loan',
  errors: {
    mobile: 'Enter a valid 10-digit mobile number',
    consent: 'You must accept the Terms and Privacy Policy',
    required: 'This field is required',
    email: 'Enter a valid email address',
    pan: 'Enter a valid PAN (e.g. ABCDE1234F)',
    dob: 'Enter date as DD/MM/YYYY',
    pincode: 'Enter a valid 6-digit pincode',
    otp: 'Enter a valid 6-digit OTP',
  },
  loadingPincode: 'Fetching location…',
  pincodeFailed: 'Could not fetch location for this pincode',
  successTitle: 'Application Submitted',
  successMessage: 'Thank you. Our team will contact you shortly.',
}

const formTa = {
  ...formEn,
  step1Title: 'உங்கள் லோன் தகுதியைச் சரிபார்க்கவும்',
  consentHint: 'தொடர விதிமுறைகள் மற்றும் தனியுரிமையை ஏற்கவும்',
  mobile: 'மொபைல் எண்',
  mobilePlaceholder: '10 இலக்க மொபைல் எண்',
  consentLead: 'தொடர்வதன் மூலம், எங்களது',
  consentJoin: 'மற்றும்',
  terms: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
  privacy: 'தனியுரிமைக் கொள்கை',
  next: 'அடுத்து',
  step2aTitle: 'தனிப்பட்ட விவரங்கள்',
  firstName: 'முதல் பெயர்',
  middleName: 'நடுப் பெயர்',
  lastName: 'கடைசி பெயர்',
  gender: 'பாலினம்',
  genderMale: 'ஆண்',
  genderFemale: 'பெண்',
  genderOther: 'மற்றவை',
  email: 'தனிப்பட்ட மின்னஞ்சல்',
  step2bTitle: 'PAN அடையாள சரிபார்ப்பு',
  pan: 'PAN எண்',
  panName: 'PAN படி பெயர்',
  panDob: 'PAN படி பிறந்த தேதி',
  step2cTitle: 'கடன் தேவை மற்றும் இடம்',
  loanAmount: 'தேவைப்படும் லோன் தொகை',
  tenure: 'கடன் காலம் - மாதங்களில்',
  pincode: 'வசிப்பிட பின்கோடு',
  city: 'நகரம் / மாவட்டம்',
  state: 'மாநிலம்',
  proceedVerify: 'சரிபார்க்க தொடரவும்',
  step3Title: 'OTP குறியீட்டை உள்ளிடவும்',
  otp: 'OTP குறியீடு',
  otpPlaceholder: '6 இலக்க OTP',
  submit: 'லோன் விண்ணப்பத்தைச் சமர்ப்பி',
  back: 'பின்செல்',
  selectPurpose: 'தொடங்க கடன் நோக்கத்தைத் தேர்ந்தெடுக்கவும்',
  purposeTitle: 'உங்கள் கடன் நோக்கத்தைத் தேர்ந்தெடுக்கவும்',
  purposeHint: 'முதலில், கீழே உள்ள பட்டியல்களில் கடன் வகை மற்றும் நோக்கத்தைத் தேர்ந்தெடுக்கவும். பின்னர் உங்கள் விவரங்களை நிரப்பவும்.',
  purposeWaiting: 'விண்ணப்ப படிவத்தைத் திறக்க மேலே கடன் வகை மற்றும் நோக்கத்தைத் தேர்ந்தெடுக்கவும்.',
  purposeConfirmed: 'நோக்கம் தேர்ந்தெடுக்கப்பட்டது — கீழே உங்கள் விவரங்களை நிரப்பவும்',
  chooseProduct: 'கடன் வகை',
  chooseProductPlaceholder: '— கடன் வகையைத் தேர்ந்தெடுக்கவும் —',
  chooseSubcategory: 'கடன் நோக்கம்',
  selectedLoan: 'தேர்ந்தெடுக்கப்பட்ட கடன்',
  errors: {
    mobile: 'செல்லுபடியாகும் 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்',
    consent: 'விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்க வேண்டும்',
    required: 'இந்த புலம் அவசியம்',
    email: 'செல்லுபடியாகும் மின்னஞ்சலை உள்ளிடவும்',
    pan: 'செல்லுபடியாகும் PAN ஐ உள்ளிடவும்',
    dob: 'தேதியை DD/MM/YYYY வடிவில் உள்ளிடவும்',
    pincode: 'செல்லுபடியாகும் 6 இலக்க பின்கோடை உள்ளிடவும்',
    otp: 'செல்லுபடியாகும் 6 இலக்க OTP ஐ உள்ளிடவும்',
  },
  loadingPincode: 'இடம் பெறப்படுகிறது…',
  pincodeFailed: 'இந்த பின்கோடுக்கான இடத்தை பெற முடியவில்லை',
  successTitle: 'விண்ணப்பம் சமர்ப்பிக்கப்பட்டது',
  successMessage: 'நன்றி. எங்கள் குழு விரைவில் உங்களை தொடர்பு கொள்ளும்.',
}

const formHi = {
  ...formEn,
  step1Title: 'अपनी लोन पात्रता जांचें',
  consentHint: 'आगे बढ़ने के लिए नियम और गोपनीयता स्वीकार करें',
  mobile: 'मोबाइल नंबर',
  mobilePlaceholder: '10 अंकों का मोबाइल नंबर',
  consentLead: 'आगे बढ़कर, आप हमारे',
  consentJoin: 'और',
  terms: 'नियम और शर्तें',
  privacy: 'गोपनीयता नीति',
  next: 'आगे बढ़ें',
  step2aTitle: 'व्यक्तिगत विवरण',
  firstName: 'पहला नाम',
  middleName: 'मध्य नाम',
  lastName: 'अंतिम नाम',
  gender: 'लिंग',
  genderMale: 'पुरुष',
  genderFemale: 'महिला',
  genderOther: 'अन्य',
  email: 'व्यक्तिगत ईमेल आईडी',
  step2bTitle: 'PAN पहचान सत्यापन',
  pan: 'PAN नंबर',
  panName: 'PAN के अनुसार नाम',
  panDob: 'PAN के अनुसार जन्म तिथि',
  step2cTitle: 'लोन आवश्यकता और स्थान',
  loanAmount: 'आवश्यक लोन राशि',
  tenure: 'लोन की अवधि - महीनों में',
  pincode: 'पिनकोड',
  city: 'शहर / जिला',
  state: 'राज्य',
  proceedVerify: 'सत्यापित करने के लिए आगे बढ़ें',
  step3Title: 'ओटीपी कोड दर्ज करें',
  otp: 'ओटीपी कोड',
  otpPlaceholder: '6 अंकों का ओटीपी',
  submit: 'लोन आवेदन जमा करें',
  back: 'वापस',
  selectPurpose: 'शुरू करने के लिए लोन उद्देश्य चुनें',
  purposeTitle: 'अपना लोन उद्देश्य चुनें',
  purposeHint: 'पहले नीचे दिए गए विकल्पों से लोन प्रकार और उद्देश्य चुनें। फिर अपना विवरण भरें।',
  purposeWaiting: 'आवेदन फ़ॉर्म खोलने के लिए ऊपर लोन प्रकार और उद्देश्य चुनें।',
  purposeConfirmed: 'उद्देश्य चयनित — नीचे अपना विवरण भरें',
  chooseProduct: 'लोन प्रकार',
  chooseProductPlaceholder: '— लोन प्रकार चुनें —',
  chooseSubcategory: 'लोन उद्देश्य',
  selectedLoan: 'चयनित लोन',
  errors: {
    mobile: 'मान्य 10 अंकों का मोबाइल नंबर दर्ज करें',
    consent: 'नियम और गोपनीयता नीति स्वीकार करना आवश्यक है',
    required: 'यह फ़ील्ड आवश्यक है',
    email: 'मान्य ईमेल पता दर्ज करें',
    pan: 'मान्य PAN दर्ज करें (जैसे ABCDE1234F)',
    dob: 'तिथि DD/MM/YYYY प्रारूप में दर्ज करें',
    pincode: 'मान्य 6 अंकों का पिनकोड दर्ज करें',
    otp: 'मान्य 6 अंकों का ओटीपी दर्ज करें',
  },
  loadingPincode: 'स्थान प्राप्त हो रहा है…',
  pincodeFailed: 'इस पिनकोड के लिए स्थान प्राप्त नहीं हो सका',
  successTitle: 'आवेदन जमा हो गया',
  successMessage: 'धन्यवाद। हमारी टीम शीघ्र आपसे संपर्क करेगी।',
}

export const translations: Record<Language, TranslationBundle> = {
  en: {
    brand: { name: 'FinZolve', tagline: 'Smart Loans. Simplified.' },
    nav: {
      home: 'Home',
      products: 'Our Loan Products',
      applyLoan: 'Apply Loan',
      why: 'Why FinZolve?',
      about: 'About Us',
      contact: 'Contact Us',
    },
    legal: { close: 'Close' },
    hero: {
      headline: 'Your Trusted Gateway to Financial Growth',
      subheadline:
        "FinZolve is India's ultimate white-labeled multi-loan hub — access competitive interest rates across 150+ banks and NBFC partners through one seamless digital journey.",
      cta: 'Check Eligibility Instantly',
      qrCaption: 'Scan to connect with FinZolve',
      badge: "India's Premier Multi-Loan Hub",
      qrLabel: 'Secure QR Scanner',
    },
    products: {
      title: 'Our Loan Products',
      subtitle:
        'Explore our 7 loan products below. Your selection is saved in the application form above — no need to scroll back.',
      applyCta: 'Apply for this loan',
      allPurposes: 'All purposes',
      syncNote: '✓ Saved to your application form above',
    },
    why: {
      title: 'Why Choose FinZolve?',
      subtitle: 'Enterprise-grade distribution built for Indian borrowers',
      features: [
        {
          title: '150+ Bank Partners',
          description:
            'One-stop access to major banks and premium NBFCs across India.',
        },
        {
          title: '100% Secure Processing',
          description:
            'Bank-grade 256-bit data encryption ensuring absolute data privacy.',
        },
        {
          title: 'Multi-language Help',
          description:
            'Designed beautifully for Indian users to apply in their comfort language.',
        },
        {
          title: 'Doorstep Executive Assistance',
          description:
            'Fast verification and transparent process from application to disbursal.',
        },
      ],
    },
    about: {
      title: 'About FinZolve',
      body: 'FinZolve is a premium loan distribution platform connecting borrowers with India\'s leading financial institutions through a secure, multilingual digital experience.',
    },
    contact: {
      title: 'Contact Us',
      email: 'support@finzolve.in',
      serviceRegion: 'Service area: Tamil Nadu, India',
    },
    application: {
      title: 'Start Your Application',
      subtitle: 'Step 1: Choose your loan purpose above. Then complete the 3 quick steps below — your progress stays on this page.',
    },
    loans: loanTranslations.en,
    form: formEn,
    footer: {
      corporate:
        'FinZolve — Smart Loans. Simplified. Premium loan distribution for every Indian household.',
      legalHeading: 'Legal',
      privacy: 'Privacy Policy',
      disclaimer: 'Disclaimer',
      terms: 'Terms & Conditions',
      trustBadge: "In Association with India's Premier Distribution Network",
      panIndia:
        'Serving Tamil Nadu today. Planned phased expansion across India.',
      rights: 'All rights reserved.',
    },
  },
  ta: {
    brand: { name: 'FinZolve', tagline: 'ஸ்மார்ட் லோன்ஸ். எளிமையாக.' },
    nav: {
      home: 'முகப்பு',
      products: 'கடன் தயாரிப்புகள்',
      applyLoan: 'கடன் விண்ணப்பம்',
      why: 'ஏன் FinZolve?',
      about: 'எங்களை பற்றி',
      contact: 'தொடர்பு',
    },
    legal: { close: 'மூடு' },
    hero: {
      headline: 'உங்கள் பொருளாதார வளர்ச்சிக்கு நம்பகமான வழிகாட்டி!',
      subheadline:
        'FinZolve இந்தியாவின் முழுமையான வெள்ளை-லேபிள் பல-கடன் மையம் — 150+ வங்கி மற்றும் NBFC கூட்டாளர்களிடமிருந்து போட்டி வட்டி விகிதங்களை ஒரே டிஜிட்டல் பயணத்தில் பெறுங்கள்.',
      cta: 'உடனடி தகுதி சரிபார்ப்பு',
      qrCaption: 'FinZolve உடன் இணைக்க ஸ்கேன் செய்யுங்கள்',
      badge: 'இந்தியாவின் முன்னணி பல-கடன் மையம்',
      qrLabel: 'பாதுகாப்பான QR ஸ்கேனர்',
    },
    products: {
      title: 'எங்கள் கடன் தயாரிப்புகள்',
      subtitle:
        'கீழே 7 கடன் தயாரிப்புகளை ஆராயுங்கள். உங்கள் தேர்வு மேலே உள்ள விண்ணப்ப படிவத்தில் சேமிக்கப்படும் — மீண்டும் மேலே ஸ்க்ரோல் செய்ய தேவையில்லை.',
      applyCta: 'இந்த கடனுக்கு விண்ணப்பிக்கவும்',
      allPurposes: 'அனைத்து நோக்கங்கள்',
      syncNote: '✓ மேலே உள்ள விண்ணப்ப படிவத்தில் சேமிக்கப்பட்டது',
    },
    why: {
      title: 'ஏன் FinZolve?',
      subtitle: 'இந்திய கடன் வாங்குபவர்களுக்காக கட்டமைக்கப்பட்ட நிறுவன தரம்',
      features: [
        {
          title: '150+ வங்கி கூட்டாளர்கள்',
          description: 'இந்தியா முழுவதும் முக்கிய வங்கிகள் மற்றும் பிரீமியம் NBFCகள்.',
        },
        {
          title: '100% பாதுகாப்பான செயலாக்கம்',
          description: 'வங்கி-தர 256-பிட் குறியாக்கம் — முழுமையான தரவு தனியுரிமை.',
        },
        {
          title: 'பல மொழி உதவி',
          description: 'இந்திய பயனர்கள் தங்கள் வசதியான மொழியில் விண்ணப்பிக்க வடிவமைக்கப்பட்டது.',
        },
        {
          title: 'வீட்டு வாசல் நிர்வாகி உதவி',
          description: 'விண்ணப்பம் முதல் வழங்கல் வரை விரைவான சரிபார்ப்பு மற்றும் வெளிப்படைத்தன்மை.',
        },
      ],
    },
    about: {
      title: 'FinZolve பற்றி',
      body: 'FinZolve என்பது இந்தியாவின் முன்னணி நிதி நிறுவனங்களுடன் கடன் வாங்குபவர்களை இணைக்கும் பிரீமியம் பல மொழி டிஜிட்டல் தளம்.',
    },
    contact: {
      title: 'தொடர்பு கொள்ளுங்கள்',
      email: 'support@finzolve.in',
      serviceRegion: 'சேவை பிராந்தியம்: தமிழ்நாடு, இந்தியா',
    },
    application: {
      title: 'உங்கள் விண்ணப்பத்தைத் தொடங்குங்கள்',
      subtitle: 'படி 1: மேலே உங்கள் கடன் நோக்கத்தைத் தேர்ந்தெடுக்கவும். பின்னர் கீழே 3 விரைவு படிகளை முடிக்கவும் — இந்த பக்கத்திலேயே தங்கியிருப்பீர்கள்.',
    },
    loans: loanTranslations.ta,
    form: formTa,
    footer: {
      corporate:
        'FinZolve — ஸ்மார்ட் லோன்ஸ். எளிமையாக. ஒவ்வொரு இந்திய குடும்பத்திற்கும் பிரீமியம் கடன் விநியோகம்.',
      legalHeading: 'சட்டம்',
      privacy: 'தனியுரிமைக் கொள்கை',
      disclaimer: 'பொறுப்புத் துறப்பு',
      terms: 'விதிமுறைகள் & நிபந்தனைகள்',
      trustBadge: 'இந்தியாவின் முன்னணி விநியோக வலையமைப்புடன் இணைந்து',
      panIndia:
        'தமிழ்நாடு முழுவதும் சேவை. இந்தியா முழுவதும் கட்டமைக்கப்பட்ட விரிவாக்கம் திட்டமிடப்பட்டுள்ளது.',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
  hi: {
    brand: { name: 'FinZolve', tagline: 'स्मार्ट लोन। सरल।' },
    nav: {
      home: 'होम',
      products: 'हमारे लोन उत्पाद',
      applyLoan: 'लोन आवेदन',
      why: 'FinZolve क्यों?',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
    },
    legal: { close: 'बंद करें' },
    hero: {
      headline: 'आपके वित्तीय विकास का भरोसेमंद साथी',
      subheadline:
        'FinZolve भारत का अंतिम व्हाइट-लेबल्ड मल्टी-लोन हब है — 150+ बैंक और NBFC साझेदारों से प्रतिस्पर्धी ब्याज दरें, एक सहज डिजिटल यात्रा में।',
      cta: 'पात्रता की तुरंत जांच करें',
      qrCaption: 'FinZolve से जुड़ने के लिए स्कैन करें',
      badge: 'भारत का प्रमुख मल्टी-लोन हब',
      qrLabel: 'सुरक्षित QR स्कैनर',
    },
    products: {
      title: 'हमारे लोन उत्पाद',
      subtitle:
        'नीचे 7 लोन उत्पाद देखें। आपका चयन ऊपर आवेदन फ़ॉर्म में सहेजा जाता है — वापस ऊपर स्क्रॉल करने की जरूरत नहीं।',
      applyCta: 'इस लोन के लिए आवेदन करें',
      allPurposes: 'सभी उद्देश्य',
      syncNote: '✓ ऊपर आवेदन फ़ॉर्म में सहेजा गया',
    },
    why: {
      title: 'FinZolve क्यों चुनें?',
      subtitle: 'भारतीय उधारकर्ताओं के लिए एंटरप्राइज़-ग्रेड वितरण',
      features: [
        {
          title: '150+ बैंक साझेदार',
          description: 'पूरे भारत में प्रमुख बैंकों और प्रीमियम NBFC तक एक-स्टॉप पहुंच।',
        },
        {
          title: '100% सुरक्षित प्रसंस्करण',
          description: 'बैंक-ग्रेड 256-बिट एन्क्रिप्शन — पूर्ण डेटा गोपनीयता।',
        },
        {
          title: 'बहु-भाषा सहायता',
          description:
            'भारतीय उपयोगकर्ताओं के लिए उनकी सुविधाजनक भाषा में आवेदन करने हेतु सुंदर डिज़ाइन।',
        },
        {
          title: 'द्वारस्थ कार्यकारी सहायता',
          description: 'आवेदन से वितरण तक तेज़ सत्यापन और पारदर्शी प्रक्रिया।',
        },
      ],
    },
    about: {
      title: 'FinZolve के बारे में',
      body: 'FinZolve एक प्रीमियम लोन वितरण मंच है जो उधारकर्ताओं को भारत के अग्रणी वित्तीय संस्थानों से सुरक्षित, बहुभाषी डिजिटल अनुभव के माध्यम से जोड़ता है।',
    },
    contact: {
      title: 'संपर्क करें',
      email: 'support@finzolve.in',
      serviceRegion: 'सेवा क्षेत्र: तमिलनाडु, भारत',
    },
    application: {
      title: 'अपना आवेदन शुरू करें',
      subtitle: 'चरण 1: ऊपर अपना लोन उद्देश्य चुनें। फिर नीचे 3 त्वरित चरण पूरे करें — आप इसी पेज पर रहेंगे।',
    },
    loans: loanTranslations.hi,
    form: formHi,
    footer: {
      corporate:
        'FinZolve — स्मार्ट लोन। सरल। हर भारतीय परिवार के लिए प्रीमियम लोन वितरण।',
      legalHeading: 'कानूनी',
      privacy: 'गोपनीयता नीति',
      disclaimer: 'अस्वीकरण',
      terms: 'नियम और शर्तें',
      trustBadge: 'भारत के प्रमुख वितरण नेटवर्क के साथ जुड़ाव में',
      panIndia:
        'पूरे तमिलनाडु में सेवा। भारत भर में चरणबद्ध विस्तार की योजना।',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
  },
}

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  ta: 'தமிழ்',
  hi: 'हिंदी',
}
