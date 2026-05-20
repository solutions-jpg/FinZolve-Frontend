import { useState, useEffect, useRef, useCallback } from 'react';
import { SeoHead } from './components/SeoHead';
import { SeoContentSection } from './components/SeoContentSection';
import { legalDocs, SUPPORT_EMAIL, SUPPORT_PHONE, SUPPORT_PHONE_TEL } from './legal/siteLegal';

const l = {
  en: {
    brand: "FinZolve", slogan: "Smart Loans. Simplified.",
    home: "Home", products: "Loan Types", apply: "Apply Now", why: "Why FinZolve?", about: "About Us", contact: "Contact",
    heroTitle: "Your Trusted Partner for Loans in Tamil Nadu", heroSub: "FinZolve connects you with registered banks and NBFCs through one simple application — personal, business, home, gold, and more. Apply in English, Tamil, or Hindi.",
    cta: "Start Your Application", chooseLoan: "Loan Types", subText: "Choose a loan type below to view details and common purposes.",
    step1Title: "Start Your Application", mobLabel: "Mobile Number", consent: "I have read and agree to:", next: "Continue",
    trustNote: "FinZolve is a loan facilitator, not a lender. Your details are sent securely to registered lending partners.",
    personalTitle: "Step 2: Your Details", fname: "First Name", lname: "Last Name", email: "Email Address",
    panNum: "PAN Number", amtLabel: "Loan Amount Required (₹)", pin: "Pincode", city: "City / District", state: "State",
    submitText: "Submit & Continue on WhatsApp", whyTitle: "Why Choose FinZolve?", whySub: "Built for borrowers who want clarity, choice, and support",
    partnerText: "Wide Lender Network", secureText: "Secure Application", langText: "English, Tamil & Hindi", doorText: "Dedicated Support",
    partnerDesc: "Access multiple registered banks and NBFCs through one application — we help match you to suitable partners.",
    secureDesc: "Your application is transmitted over encrypted connections (HTTPS). We share data only with lending partners for processing.",
    langDesc: "Apply in the language you are most comfortable with — our team can assist in English, Tamil, and Hindi.",
    doorDesc: "Speak with our team by phone or WhatsApp for guidance from enquiry to partner handover.",
    aboutTitle: "About FinZolve", aboutBody: "FinZolve is an independent digital loan distribution platform based in Tamil Nadu, India. We help individuals and businesses submit loan enquiries to registered banks and NBFCs. We do not lend money directly and we do not charge consumers a platform fee for standard enquiries. Our goal is to make the application process simple, transparent, and accessible in your preferred language.",
    footerText: "FinZolve is a digital loan distribution platform serving Tamil Nadu, with planned expansion across India. We are not a bank or NBFC. All loans are sanctioned solely by lending partners.",
    footerLegal: "Legal", linkPrivacy: "Privacy Policy", linkTerms: "Terms & Conditions", linkDisclaimer: "Disclaimer",
    hotline: "Phone", helpdesk: "Email", close: "Close", qrText: "Scan to apply on mobile",
    subWindowLabel: "Official Briefing & Overview for", formSelectHeader: "Select Loan Asset Class & Allocation Purpose",
    productOverviewHeader: "Product Structural Summary:", subCatHeader: "Available Custom Purposes / Sub-Categories:",
    selectLoanLabel: "Select Loan Category", selectPurposeLabel: "Select the Purpose",
    chooseSpecificPurposePlaceholder: "-- Select the Purpose --",
    chooseLoanTypePlaceholder: "-- Choose Loan Product --",
    successHeader: "Application Submitted Successfully",
    successMessage: "Thank you for choosing FinZolve. Your details have been recorded and our team will review your enquiry. If you opened WhatsApp, please send the pre-filled message so we can verify your application faster.",
    successCTA: "Submit Another Application",

    pLoanSummary: "Unsecured personal loans for salaried and self-employed applicants — for medical needs, education, travel, home improvement, debt consolidation, and other approved purposes. Rates and eligibility are set by the lending partner.",
    bLoanSummary: "Working capital and business expansion loans for MSMEs and enterprises. Suitable for inventory, equipment, renovation, or cash-flow needs subject to partner policy.",
    hLoanSummary: "Home purchase, construction, plot, renovation, and balance-transfer options with tenures typically up to 30 years, as offered by partner banks and NBFCs.",
    lPropertySummary: "Loans against residential or commercial property while you continue to use the asset, subject to valuation and partner LTV norms.",
    gLoanSummary: "Quick liquidity against gold ornaments with flexible repayment structures including term loans and overdraft facilities, as per partner terms.",
    lSecuritiesSummary: "Loans against shares, mutual funds, or bonds where permitted — you may retain underlying investments subject to lender margin requirements.",
    lPremiumSummary: "Financing to pay insurance premiums on eligible policies, helping avoid lapse while terms are defined by the lending partner.",
  },
  ta: {
    brand: "FinZolve", slogan: "ஸ்மார்ட் லோன்கள். எளிமையாக.",
    home: "முகப்பு", products: "லோன் வகைகள்", apply: "விண்ணப்பிக்க", why: "ஏன் FinZolve?", about: "எங்களைப் பற்றி", contact: "தொடர்புக்கு",
    heroTitle: "தமிழ்நாட்டில் நம்பகமான கடன் வழிகாட்டி", heroSub: "FinZolve பதிவுசெய்யப்பட்ட வங்கிகள் மற்றும் NBFC-களுடன் உங்களை இணைக்கிறது — தனிநபர், வணிக, வீட்டு, தங்க கடன்கள் மற்றும் பல. தமிழ், ஆங்கிலம், இந்தியில் விண்ணப்பிக்கலாம்.",
    cta: "விண்ணப்பத்தைத் தொடங்குங்கள்", chooseLoan: "லோன் வகைகள்", subText: "கீழே லோன் வகையைத் தேர்ந்தெடுத்து விவரம் மற்றும் நோக்கங்களைப் பார்க்கவும்.",
    step1Title: "விண்ணப்பத்தைத் தொடங்குங்கள்", mobLabel: "மொபைல் எண்", consent: "நான் படித்து ஏற்கிறேன்:", next: "தொடரவும்",
    trustNote: "FinZolve கடன் வழங்குபவர் அல்ல — வசதிப்படுத்தும் தளம். உங்கள் விவரங்கள் பதிவுசெய்யப்பட்ட கடன் கூட்டாளர்களுக்கு பாதுகாப்பாக அனுப்பப்படும்.",
    personalTitle: "படி 2: உங்கள் விவரங்கள்", fname: "முதல் பெயர்", lname: "இறுதிப் பெயர்", email: "மின்னஞ்சல்",
    panNum: "பான் எண்", amtLabel: "தேவையான கடன் தொகை (₹)", pin: "பின்கோடு", city: "நகரம் / மாவட்டம்", state: "மாநிலம்",
    submitText: "சமர்ப்பித்து வாட்ஸ்அப்பில் தொடரவும்", whyTitle: "ஏன் FinZolve?", whySub: "தெளிவு, தேர்வு மற்றும் ஆதரவு — இந்திய கடன் வாங்குபவர்களுக்காக",
    partnerText: "பரந்த வங்கி வலையமைப்பு", secureText: "பாதுகாப்பான விண்ணப்பம்", langText: "தமிழ், ஆங்கிலம், இந்தி", doorText: "அர்ப்பணிப்பு ஆதரவு",
    partnerDesc: "ஒரே விண்ணப்பத்தில் பல பதிவுசெய்யப்பட்ட வங்கிகள் மற்றும் NBFC-கள் — உங்களுக்கு ஏற்ற கூட்டாளரைப் பொருத்த உதவுகிறோம்.",
    secureDesc: "HTTPS குறியாக்க வழியில் தரவு அனுப்பப்படும். செயலாக்கத்திற்கு கடன் கூட்டாளர்களுடன் மட்டுமே பகிர்வு.",
    langDesc: "உங்களுக்கு வசதியான மொழியில் விண்ணப்பிக்கவும் — எங்கள் குழு தமிழ், ஆங்கிலம், இந்தியில் உதவும்.",
    doorDesc: "விசாரணை முதல் கூட்டாளர் ஒப்பந்தம் வரை தொலைபேசி அல்லது வாட்ஸ்அப்பில் வழிகாட்டுதல்.",
    aboutTitle: "FinZolve பற்றி", aboutBody: "FinZolve தமிழ்நாட்டைத் தளமாகக் கொண்ட சுயாதீன டிஜிட்டல் கடன் விநியோக தளம். தனிநபர்கள் மற்றும் வணிகங்கள் பதிவுசெய்யப்பட்ட வங்கி/NBFC-களுக்கு விண்ணப்பம் அனுப்ப உதவுகிறோம். நாங்கள் நேரடியாக கடன் வழங்குவதில்லை; நிலையான விண்ணப்பத்திற்கு தளக் கட்டணம் வசூலிக்க மாட்டோம்.",
    footerText: "FinZolve தமிழ்நாடு முழுவதும் சேவை செய்யும் டிஜிட்டல் கடன் விநியோக தளம். வங்கி அல்ல, NBFC அல்ல. கடன் ஒப்புதல் கூட்டாளர் வங்கியின் முடிவு.",
    footerLegal: "சட்டம்", linkPrivacy: "தனியுரிமை", linkTerms: "விதிமுறைகள்", linkDisclaimer: "பொறுப்புத் துறப்பு",
    hotline: "தொலைபேசி", helpdesk: "மின்னஞ்சல்", close: "மூடு", qrText: "மொபைலில் விண்ணப்பிக்க ஸ்கேன் செய்யவும்",
    subWindowLabel: "அதிகாரப்பூர்வ லோன் விளக்கம் மற்றும் கட்டமைப்பு:", formSelectHeader: "லோன் வகை மற்றும் ஒதுக்கீட்டு நோக்கத்தைத் தேர்ந்தெடுக்கவும்",
    productOverviewHeader: "தயாரிப்பு விளக்கச் சுருக்கம்:", subCatHeader: "கிடைக்கக்கூடிய லோன் உள்-பிரிவுகள் (நோக்கங்கள்):",
    selectLoanLabel: "லோன் வகையைத் தேர்ந்தெடுக்கவும்", selectPurposeLabel: "லோன் நோக்கத்தைத் தேர்ந்தெடுக்கவும்",
    chooseSpecificPurposePlaceholder: "-- லோன் நோக்கத்தைத் தேர்ந்தெடுக்கவும் --",
    chooseLoanTypePlaceholder: "-- லோன் வகையைத் தேர்ந்தெடுக்கவும் --",
    successHeader: "விண்ணப்பம் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
    successMessage: "FinZolve-ஐத் தேர்ந்தெடுத்ததற்கு நன்றி. உங்கள் விவரங்கள் பதிவு செய்யப்பட்டுள்ளன. வாட்ஸ்அப்பைத் திறந்திருந்தால், முன்விரித்த செய்தியை அனுப்பினால் விரைவாகச் சரிபார்க்கலாம்.",
    successCTA: "மற்றொரு லோனுக்கு விண்ணப்பிக்க",

    pLoanSummary: "சம்பளம் / சுயதொழில் பெறுபவர்களுக்கான பிணையமில்லா தனிநபர் கடன் — மருத்துவம், கல்வி, பயணம், வீட்டு மேம்பாடு, கடன் ஒருங்கிணைப்பு போன்ற நோக்கங்களுக்கு. வட்டி மற்றும் தகுதி கூட்டாளர் வங்கி தீர்மானம்.",
    bLoanSummary: "MSME மற்றும் நிறுவனங்களுக்கு பணப்புழக்கம், விரிவாக்கம், உபகரணம் போன்ற வணிகக் கடன்கள் — கூட்டாளர் கொள்கையின்படி.",
    hLoanSummary: "வீடு வாங்குதல், கட்டுமானம், மனை, நவீनीकरணம், பேலன்ஸ் டிரான்ஸ்ஃபர் — பொதுவாக 30 ஆண்டுகள் வரை, கூட்டாளர் வங்கி வழங்கும்.",
    lPropertySummary: "குடியிருப்பு / வணிக சொத்துக்கு எதிரான கடன் — மதிப்பீடு மற்றும் LTV கூட்டாளர் விதிகளின்படி.",
    gLoanSummary: "தங்கத்திற்கு எதிரான உடனடி நிதி — காலக் கடன் அல்லது ஓவர் டிராஃப்ட், கூட்டாளர் விதிமுறைகளின்படி.",
    lSecuritiesSummary: "பங்கு, மியூச்சுவல் ஃபண்ட், பாண்டுக்கு எதிரான கடன் (அனுமதி உள்ள இடங்களில்).",
    lPremiumSummary: "காப்பீட்டு பிரீமியம் செலுத்த உதவும் கடன் — கூட்டாளர் விதிமுறைகளின்படி.",
  },
  hi: {
    brand: "FinZolve", slogan: "स्मार्ट लोन। सरलीकृत।",
    home: "होम", products: "लोन के प्रकार", apply: "लागू करें", why: "FinZolve क्यों?", about: "हमारे बारे में", contact: "संपर्क करें",
    heroTitle: "तमिलनाडु में भरोसेमंद लोन साथी", heroSub: "FinZolve आपको पंजीकृत बैंकों और NBFC से जोड़ता है — पर्सनल, बिज़नेस, होम, गोल्ड और अधिक। अंग्रेजी, तमिल या हिंदी में आवेदन करें।",
    cta: "आवेदन शुरू करें", chooseLoan: "लोन के प्रकार", subText: "नीचे से लोन प्रकार चुनें — विवरण और उद्देश्य देखें।",
    step1Title: "आवेदन शुरू करें", mobLabel: "मोबाइल नंबर", consent: "मैंने पढ़ा और सहमति देता/देती हूँ:", next: "जारी रखें",
    trustNote: "FinZolve ऋणदाता नहीं, सुविधा मंच है। आपका डेटा सुरक्षित रूप से पंजीकृत ऋण भागीदारों को भेजा जाता है।",
    personalTitle: "चरण 2: आपका विवरण", fname: "पहला नाम", lname: "अंतिम नाम", email: "ईमेल",
    panNum: "PAN नंबर", amtLabel: "आवश्यक राशि (₹)", pin: "पिनकोड", city: "शहर / जिला", state: "राज्य",
    submitText: "जमा करें और WhatsApp पर जारी रखें", whyTitle: "FinZolve क्यों?", whySub: "स्पष्टता, विकल्प और सहायता — भारतीय उधारकर्ताओं के लिए",
    partnerText: "व्यापक ऋणदाता नेटवर्क", secureText: "सुरक्षित आवेदन", langText: "अंग्रेजी, तमिल, हिंदी", doorText: "समर्पित सहायता",
    partnerDesc: "एक आवेदन में कई पंजीकृत बैंक और NBFC — उपयुक्त भागीदार से मिलान में मदद।",
    secureDesc: "HTTPS पर एन्क्रिप्टेड प्रसारण। डेटा केवल ऋण भागीदारों के साथ साझा।",
    langDesc: "अपनी सुविधाजनक भाषा में आवेदन करें — हमारी टीम अंग्रेजी, तमिल, हिंदी में सहायता करती है।",
    doorDesc: "पूछताछ से भागीदार हस्तांतरण तक फोन या WhatsApp पर मार्गदर्शन।",
    aboutTitle: "FinZolve के बारे में", aboutBody: "FinZolve तमिलनाडु, भारत में आधारित स्वतंत्र डिजिटल लोन वितरण मंच है। हम व्यक्तियों और व्यवसायों को पंजीकृत बैंक/NBFC को आवेदन भेजने में मदद करते हैं। हम सीधे ऋण नहीं देते; मानक पूछताछ के लिए प्लेटफ़ॉर्म शुल्क नहीं।",
    footerText: "FinZolve तमिलनाडु में सेवा करने वाला डिजिटल लोन वितरण मंच। बैंक/NBFC नहीं। ऋण केवल भागीदार द्वारा स्वीकृत।",
    footerLegal: "कानूनी", linkPrivacy: "गोपनीयता", linkTerms: "नियम", linkDisclaimer: "अस्वीकरण",
    hotline: "फोन", helpdesk: "ईमेल", close: "बंद करें", qrText: "मोबाइल पर आवेदन के लिए स्कैन करें",
    subWindowLabel: "इसके लिए उपलब्ध विवरण और उप-श्रेणियां:", formSelectHeader: "लोन एसेट क्लास और आवंटन उद्देश्य का चयन करें",
    productOverviewHeader: "उत्पाद संरचनात्मक सारांश:", subCatHeader: "उपलब्ध लोन उप-श्रेणियां (उद्देश्य):",
    selectLoanLabel: "लोन श्रेणी का चयन करें", selectPurposeLabel: "लोन का उद्देश्य चुनें",
    chooseSpecificPurposePlaceholder: "-- लोन का उद्देश्य चुनें --",
    chooseLoanTypePlaceholder: "-- लोन उत्पाद चुनें --",
    successHeader: "आवेदन सफलतापूर्वक जमा हुआ",
    successMessage: "FinZolve चुनने के लिए धन्यवाद। आपका विवरण दर्ज हो गया है। यदि WhatsApp खुला है, तो पूर्व-भरी संदेश भेजें ताकि हम तेज़ी से सत्यापित कर सकें।",
    successCTA: "दूसरा आवेदन करें",

    pLoanSummary: "वेतनभोगी और स्व-रोजगार के लिए अनसिक्योर्ड पर्सनल लोन — चिकित्सा, शिक्षा, यात्रा, घर सुधार आदि। दरें ऋणदाता तय करते हैं।",
    bLoanSummary: "MSME और उद्यमों के लिए कार्यशील पूंजी और विस्तार ऋण।",
    hLoanSummary: "घर खरीद, निर्माण, प्लॉट, नवीनीकरण — अक्सर 30 वर्ष तक की अवधि, भागीदार के अनुसार।",
    lPropertySummary: "आवासीय या व्यावसायिक संपत्ति पर ऋण, भागीदार मूल्यांकन के अनुसार।",
    gLoanSummary: "सोने पर त्वरित तरलता, भागीदार शर्तों के अनुसार चुकौती विकल्प।",
    lSecuritiesSummary: "शेयर, म्यूचुअल फंड या बॉन्ड पर ऋण, जहाँ अनुमत हो।",
    lPremiumSummary: "बीमा प्रीमियम भुगतान के लिए वित्तपोषण, भागीदार शर्तों पर।",
  }
};

const loanMatrix = {
  "Personal Loan": ["Marriage", "Family Function", "Purchase Of Appliance", "Furniture", "Electronics", "Medical Emergency", "Travel / Vacation", "Home Renovation", "Education", "Balance Transfer", "Top Up", "Others"],
  "Business Loan": ["Business Improvement", "Working Capital", "Debt Consolidation", "Balance Transfer", "Top Up", "Others"],
  "Home Loan": ["Buy Ready-To-Occupy Home", "Buy Under-construction Home", "Buy A Plot Of Land", "Balance Transfer", "Repair & Renovate Own Home", "Others"],
  "Loan Against Property": ["Business Expansion", "Debt Consolidation", "Balance Transfer + Top Up", "Personal Use"],
  "Gold Loan": ["Term Loan", "OD (Overdraft)"],
  "Loan Against Securities": ["Re-investment", "Personal Use", "Business Flow"],
  "Loan For Premium": ["Insurance Premium Payout"]
};

function App() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState(null);
  const [legalModal, setLegalModal] = useState(null);

  const [formLoanType, setFormLoanType] = useState('');
  const [formPurpose, setFormPurpose] = useState('');
  const [mobile, setMobile] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '', middleName: 'N/A', lastName: '', gender: 'Male', email: '',
    panNumber: '', panName: 'Verified Node', dob: '01/01/1990',
    loanAmount: '', tenure: '60', pincode: '', city: '', state: ''
  });
  const [pincodeLoading, setPincodeLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [headerOffset, setHeaderOffset] = useState(72);
  const headerRef = useRef(null);

  const measureHeader = useCallback(() => {
    const h = headerRef.current?.offsetHeight ?? 72;
    const offset = h + 8;
    setHeaderOffset(offset);
    document.documentElement.style.setProperty('--fz-header-offset', `${offset}px`);
  }, []);

  const scrollToAnchor = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    setActiveNav(id === 'footer' ? 'contact' : id);
  }, [headerOffset]);

  const scrollToForm = () => scrollToAnchor('application-engine');

  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveNav('home');
      return;
    }
    scrollToAnchor(target);
  };

  const navLinkStyle = (key) => ({
    color: activeNav === key ? '#ffffff' : '#94a3b8',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: activeNav === key ? '700' : '600',
    transition: 'color 0.2s ease',
  });

  useEffect(() => {
    measureHeader();
    window.addEventListener('resize', measureHeader);
    return () => window.removeEventListener('resize', measureHeader);
  }, [measureHeader]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sessionStorage.getItem("finzolve_form_submitted") === "1") {
      setFormStep(3);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ['products', 'application-engine', 'why', 'about', 'footer'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveNav(id === 'footer' ? 'contact' : id);
        }
      },
      { rootMargin: `-${headerOffset}px 0px -62% 0px`, threshold: [0.12, 0.35] },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScrollHome = () => {
      if (window.scrollY < 120) setActiveNav('home');
    };
    window.addEventListener('scroll', onScrollHome, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScrollHome);
    };
  }, [headerOffset]);

  useEffect(() => {
    if (formStep === 3) {
      setTimeout(() => scrollToAnchor('application-engine'), 150);
    }
  }, [formStep]);

  const handleCardClick = (loanName) => {
    if (activeTab === loanName) {
      setActiveTab(null);
    } else {
      setActiveTab(loanName);
      setTimeout(() => scrollToAnchor('premium-briefing-hub'), 100);
    }
  };

  useEffect(() => {
    setFormPurpose('');
  }, [formLoanType]);

  useEffect(() => {
    if (formData.pincode.length === 6) {
      setPincodeLoading(true);
      fetch(`https://api.postalpincode.in/pincode/${formData.pincode}`)
        .then(res => res.json())
        .then(data => {
          if (data[0] && data[0].Status === "Success" && data[0].PostOffice) {
            const district = data[0].PostOffice[0].District;
            const stateName = data[0].PostOffice[0].State;
            setFormData(prev => ({ ...prev, city: district, state: stateName }));
          }
          setPincodeLoading(false);
        })
        .catch(() => setPincodeLoading(false));
    }
  }, [formData.pincode]);

  const captureAbandonedLead = (mobileNumber) => {
    const myGoogleAppScriptUrl = "https://script.google.com/macros/s/AKfycbxfHKPBV7UyMZvWvlqavdqRVnC2HKaHCtOEHQsiO9v4SegZhtWsQ6dFJ23_z_h7KeaE/exec";
    
    const payload = {
      timestamp: new Date().toISOString(),
      loanType: formLoanType || "",
      loanPurpose: formPurpose || "",
      clientMobile: mobileNumber,
      firstName: "N/A", lastName: "N/A", email: "N/A", panNumber: "N/A", 
      loanAmount: "0", pincode: "0", city: "N/A", state: "N/A",
      LeadStatus: "ABANDONED_LEAD"
    };
  
    fetch(myGoogleAppScriptUrl, {
      method: "POST", mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(err => console.error("Capture failed", err));
  };

  const buildWhatsAppUrl = (payload) => {
    const cityLine =
      payload.city && payload.state && payload.city !== "Pending"
        ? `${payload.city}, ${payload.state} - ${payload.pincode}`
        : payload.pincode;

    const text = encodeURIComponent(
      `Hi FinZolve, I would like to apply for a loan.\n\n` +
        `Loan: ${payload.loanType} (${payload.loanPurpose})\n` +
        `Name: ${payload.firstName} ${payload.lastName}\n` +
        `Mobile: ${payload.clientMobile}\n` +
        `Email: ${payload.email}\n` +
        `PAN: ${payload.panNumber}\n` +
        `Amount: ₹${payload.loanAmount}\n` +
        `Location: ${cityLine}\n\n` +
        `Please assist me.`,
    );

    return `https://wa.me/918489555955?text=${text}`;
  };

  const openWhatsAppChat = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleInternationalVerificationSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const myGoogleAppScriptUrl = "https://script.google.com/macros/s/AKfycbxfHKPBV7UyMZvWvlqavdqRVnC2HKaHCtOEHQsiO9v4SegZhtWsQ6dFJ23_z_h7KeaE/exec";

    const finalLeadPayload = {
      timestamp: new Date().toISOString(),
      loanType: formLoanType,
      loanPurpose: formPurpose,
      clientMobile: mobile,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      panNumber: formData.panNumber,
      loanAmount: formData.loanAmount,
      pincode: formData.pincode,
      city: formData.city || "Pending",
      state: formData.state || "Pending",
      LeadStatus: "WHATSAPP_VERIFIED",
    };

    const whatsappUrl = buildWhatsAppUrl(finalLeadPayload);

    // 1) Open WhatsApp first (same button click — site tab stays open)
    openWhatsAppChat(whatsappUrl);

    // 2) Show success step on this page (stays here when user comes back from WhatsApp app)
    setIsSubmitting(false);
    sessionStorage.setItem("finzolve_form_submitted", "1");
    setFormStep(3);

    // 3) Google Sheet in background
    const sheetBody = JSON.stringify(finalLeadPayload);
    fetch(myGoogleAppScriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: sheetBody,
    }).catch((err) => console.error("Sheet sync failed", err));

    try {
      navigator.sendBeacon(
        myGoogleAppScriptUrl,
        new Blob([sheetBody], { type: "application/json" }),
      );
    } catch {
      /* ignore */
    }
  };

  const resetWholeFormPipeline = () => {
    sessionStorage.removeItem("finzolve_form_submitted");
    setFormLoanType('');
    setFormPurpose('');
    setMobile('');
    setConsentChecked(false);
    setFormData({
      firstName: '', middleName: 'N/A', lastName: '', gender: 'Male', email: '',
      panNumber: '', panName: 'Verified Node', dob: '01/01/1990',
      loanAmount: '', tenure: '60', pincode: '', city: '', state: ''
    });
    setFormStep(1);
  };

  const currentText = l[lang] || l['en'];
  const currentLegal = legalDocs[lang] || legalDocs.en;

  const getTabSummary = (tab) => {
    if (tab === "Personal Loan") return currentText.pLoanSummary;
    if (tab === "Business Loan") return currentText.bLoanSummary;
    if (tab === "Home Loan") return currentText.hLoanSummary;
    if (tab === "Loan Against Property") return currentText.lPropertySummary;
    if (tab === "Gold Loan") return currentText.gLoanSummary;
    if (tab === "Loan Against Securities") return currentText.lSecuritiesSummary;
    if (tab === "Loan For Premium") return currentText.lPremiumSummary;
    return "";
  };

  return (
    <div style={{ boxSizing: 'border-box', backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <SeoHead lang={lang} />

      {/* 1. HEADER */}
      <header ref={headerRef} style={{ boxSizing: 'border-box', backgroundColor: '#0f172a', color: '#ffffff', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1000, width: '100%', flexWrap: 'wrap', gap: '12px', boxShadow: '0 1px 0 rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5L15 20V50c0 25 35 45 35 45s35-20 35-45V20L50 5z" fill="#1e293b" stroke="#fbbf24" strokeWidth="4.5" />
            <path d="M35 35h30L45 55h20" stroke="#ffffff" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 35l-15 35" stroke="#fbbf24" strokeWidth="6.5" strokeLinecap="round" />
          </svg>
          <div>
            <h1 style={{ fontSize: '26px', margin: 0, fontWeight: '900', color: '#ffffff', lineHeight: '1.1' }}>{currentText.brand}</h1>
            <p style={{ fontSize: '11px', margin: 0, color: '#fbbf24', fontWeight: '700' }}>{currentText.slogan}</p>
          </div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '26px', flexWrap: 'wrap' }}>
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} style={navLinkStyle('home')}>{currentText.home}</a>
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')} style={navLinkStyle('products')}>{currentText.products}</a>
          <button type="button" onClick={scrollToForm} style={{ background: 'none', border: 'none', color: activeNav === 'application-engine' ? '#fde68a' : '#fbbf24', cursor: 'pointer', fontWeight: '800', fontSize: '14px', padding: 0 }}>{currentText.apply}</button>
          <a href="#why" onClick={(e) => handleNavClick(e, 'why')} style={navLinkStyle('why')}>{currentText.why}</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={navLinkStyle('about')}>{currentText.about}</a>
          <a href="#footer" onClick={(e) => handleNavClick(e, 'footer')} style={navLinkStyle('contact')}>{currentText.contact}</a>
        </nav>

        <div>
          <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ backgroundColor: '#1e293b', color: '#ffffff', border: '2px solid #475569', padding: '8px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      </header>

      {/* 2. FLOATING PLATFORM ACTION WIDGETS */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 99999, display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a href="https://wa.me/918489555955?text=Hello%20FinZolve%20Team,%20I%20want%20to%20enquire%20about%20a%20loan%20application." target="_blank" rel="noreferrer" title="Chat on WhatsApp" style={{ width: '56px', height: '56px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 24px rgba(34,197,94,0.45)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M12.004 2c-5.518 0-10 4.482-10 10 0 1.761.462 3.415 1.267 4.864L2 22l5.314-1.233c1.4.73 2.973 1.14 4.69 1.14 5.518 0 10-4.482 10-10s-4.482-10-10-10zm5.95 14.126c-.245.688-1.22 1.253-1.683 1.296-.45.04-1.042.062-1.683-.142-.4-.127-.935-.316-1.575-.595-2.73-1.19-4.505-3.95-4.64-4.133-.137-.184-1.112-1.478-1.112-2.82 0-1.34.702-2 .955-2.26.252-.262.553-.327.738-.327.185 0 .37 0 .532.008.17.008.397-.065.623.473.23.548.784 1.91.85 2.044.068.134.113.292.023.474-.09.182-.135.292-.27.45-.136.157-.285.35-.407.47-.135.132-.278.275-.12.548.158.273.702 1.156 1.503 1.868.1.09.184.144.275.187.955.753 1.666.953 1.954.83.287-.123.633-.55.8-.935.168-.382.337-.32.553-.242.217.078 1.37.646 1.606.76.236.115.394.172.45.27.057.097.057.564-.188 1.252z" /></svg>
        </a>
        <a href="mailto:solutions@finzolve.com?subject=FinZolve%20Loan%20Query" title="Send Email Alert" style={{ width: '56px', height: '56px', backgroundColor: '#1e293b', border: '2px solid #fbbf24', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
        </a>
      </div>

      {/* 3. HERO INTERFACE */}
      <section style={{ display: 'flex', width: '100%', padding: '80px 50px', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', alignItems: 'center', justifyContent: 'space-between', gap: '50px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '800', lineHeight: '1.25', margin: '0 0 25px 0', color: '#ffffff' }}>{currentText.heroTitle}</h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: '1.65', margin: '0 0 35px 0' }}>{currentText.heroSub}</p>
          <button onClick={scrollToForm} style={{ backgroundColor: '#fbbf24', color: '#0f172a', padding: '16px 36px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}>{currentText.cta}</button>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '25px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', margin: '0 auto' }}>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Ffinzolve.com%2F%23application-engine&ecc=M&margin=0" width="160" height="160" alt="QR Code" />
          <span style={{ color: '#0f172a', fontSize: '12px', fontWeight: '700' }}>{currentText.qrText}</span>
        </div>
      </section>

      {/* 4. PREMIUM DISCOVERY HUB */}
      <section id="products" className="section-block page-anchor" style={{ padding: '56px 40px 64px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-intro">
          <div className="section-accent" aria-hidden="true" />
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 32px)' }}>{currentText.chooseLoan}</h2>
          <p>{currentText.subText}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '35px' }}>
          {Object.keys(loanMatrix).map((loan) => (
            <div key={loan} onClick={() => handleCardClick(loan)} style={{ backgroundColor: activeTab === loan ? '#0f172a' : '#ffffff', padding: '24px', borderRadius: '14px', border: activeTab === loan ? '3px solid #fbbf24' : '1px solid #e2e8f0', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: activeTab === loan ? '#ffffff' : '#0f172a' }}>{loan}</h4>
                <span style={{ fontSize: '12px', color: activeTab === loan ? '#fbbf24' : '#94a3b8', fontWeight: '800' }}>{activeTab === loan ? '● Close' : 'Read'}</span>
              </div>
            </div>
          ))}
        </div>

        {activeTab && (
          <div id="premium-briefing-hub" className="page-anchor" style={{ backgroundColor: '#0f172a', padding: '35px', borderRadius: '16px', border: '2px solid #fbbf24', color: '#ffffff' }}>
            <h5 style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff', margin: '0 0 20px 0', borderBottom: '1px solid #1e293b', paddingBottom: '14px' }}>
              ✦ {currentText.subWindowLabel} <span style={{ color: '#fbbf24' }}>{activeTab}</span>
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div>
                <p style={{ fontSize: '12.5px', fontWeight: '800', color: '#94a3b8', margin: '0 0 10px 0' }}>{currentText.productOverviewHeader}</p>
                <p style={{ fontSize: '15.5px', color: '#cbd5e1', lineHeight: '1.75', margin: 0, backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #fbbf24' }}>
                  {getTabSummary(activeTab)}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '12.5px', fontWeight: '800', color: '#94a3b8', margin: '0 0 14px 0' }}>{currentText.subCatHeader}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {loanMatrix[activeTab].map((sub) => (
                    <span key={sub} style={{ padding: '10px 20px', backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '8px', fontSize: '13px', fontWeight: '800' }}>
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 5. APPLICATION ENGINE */}
      <section id="application-engine" className="section-block page-anchor" style={{ padding: '56px 20px 64px', backgroundColor: '#f1f5f9' }}>
        <p style={{ maxWidth: '580px', margin: '0 auto 16px', padding: '14px 18px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', fontSize: '13px', lineHeight: 1.65, color: '#1e40af', textAlign: 'center', boxSizing: 'border-box' }}>
          {currentText.trustNote}
        </p>
        <div style={{ maxWidth: '580px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
          {formStep === 1 && (
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '25px', marginTop: 0 }}>{currentText.step1Title}</h3>

              {/* Loan Category Selection */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>{currentText.selectLoanLabel}</label>
                <select value={formLoanType} onChange={(e) => setFormLoanType(e.target.value)} style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', backgroundColor: '#ffffff' }}>
                  <option value="">{currentText.chooseLoanTypePlaceholder}</option>
                  {Object.keys(loanMatrix).map((loan) => (
                    <option key={loan} value={loan}>{loan}</option>
                  ))}
                </select>
              </div>

              {/* Purpose Selection */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>{currentText.selectPurposeLabel}</label>
                <select disabled={!formLoanType} value={formPurpose} onChange={(e) => setFormPurpose(e.target.value)} style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', backgroundColor: formLoanType ? '#ffffff' : '#f1f5f9' }}>
                  <option value="">{formLoanType ? currentText.chooseSpecificPurposePlaceholder : `-- ${currentText.selectPurposeLabel} --`}</option>
                  {formLoanType && loanMatrix[formLoanType].map((sub) => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
              </div>

              {/* Mobile Input with Auto-Capture Feature */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>{currentText.mobLabel}</label>
                <input
                  type="text"
                  maxLength={10}
                  disabled={!formPurpose}
                  value={mobile}
                  placeholder="9876543210"
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setMobile(val);

                    if (val.length === 10) {
                      captureAbandonedLead(val);
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '16px',
                    backgroundColor: !formPurpose ? '#f1f5f9' : '#ffffff'
                  }}
                />
              </div>

              {/* Consent Checkbox */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '30px' }}>
                <input type="checkbox" id="consent" disabled={!mobile} checked={consentChecked} onChange={(e) => setConsentChecked(e.target.checked)} style={{ width: '18px', height: '18px', marginTop: '2px', flexShrink: 0 }} />
                <label htmlFor="consent" style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55 }}>
                  {currentText.consent}{' '}
                  (<button type="button" onClick={() => setLegalModal('terms')} style={{ background: 'none', border: 'none', padding: 0, color: '#0f172a', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline', fontSize: 'inherit' }}>{currentText.linkTerms}</button>
                  {' · '}
                  <button type="button" onClick={() => setLegalModal('privacy')} style={{ background: 'none', border: 'none', padding: 0, color: '#0f172a', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline', fontSize: 'inherit' }}>{currentText.linkPrivacy}</button>)
                </label>
              </div>

              {/* Next Button */}
              <button disabled={mobile.length !== 10 || !consentChecked} onClick={() => setFormStep(2)} style={{ width: '100%', padding: '18px', backgroundColor: (mobile.length === 10 && consentChecked) ? '#0f172a' : '#94a3b8', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '800', cursor: 'pointer', transition: 'all 0.3s' }}>
                {currentText.next}
              </button>
            </div>
          )}

          {formStep === 2 && (
            <form onSubmit={handleInternationalVerificationSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <style>{`
                  .no-spinner::-webkit-outer-spin-button, .no-spinner::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
                  .no-spinner { -moz-appearance: textfield; }
                `}</style>

              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>{currentText.personalTitle}</h3>

              {/* Layout: Changed grid gap to 48px to give clear left-right breathing room */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '48px', rowGap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.fname}</label>
                  <input required type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.lname}</label>
                  <input required type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.email}</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.panNum}</label>
                  <input required type="text" maxLength={10} placeholder="ABCDE1234F" value={formData.panNumber}
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    onInput={(e) => e.target.value = e.target.value.toUpperCase()}
                    onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                    style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', textTransform: 'uppercase' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.amtLabel}</label>
                  <input required type="number" className="no-spinner" min="1000" step="1000" value={formData.loanAmount} onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.pin}</label>
                  <input required type="text" maxLength={6} value={formData.pincode} onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })} style={{ width: '100%', padding: '14px', border: '1.5px solid #cbd5e1', borderRadius: '8px', fontSize: '15px' }} />
                </div>

                {formData.city && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.city}</label>
                      <input disabled value={formData.city} style={{ width: '100%', padding: '14px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', color: '#475569' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '13px', fontWeight: '700', color: '#475569' }}>{currentText.state}</label>
                      <input disabled value={formData.state} style={{ width: '100%', padding: '14px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '15px', color: '#475569' }} />
                    </div>
                  </>
                )}
              </div>

              <button type="submit"
                disabled={isSubmitting || formData.pincode.length !== 6}
                style={{ width: '100%', padding: '20px', backgroundColor: formData.pincode.length === 6 ? '#22c55e' : '#94a3b8', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '17px', fontWeight: '900', cursor: isSubmitting ? 'wait' : 'pointer' }}>
                {isSubmitting ? "Syncing..." : currentText.submitText}
              </button>
              {formData.pincode.length === 6 && !formData.city && !pincodeLoading && (
                <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
                  {lang === 'ta' ? 'பின்கோடு சரிபார்க்கப்படுகிறது — நீங்கள் இன்னும் விண்ணப்பிக்கலாம்.' : lang === 'hi' ? 'पिनकोड जाँच हो रही है — आप अभी भी आवेदन कर सकते हैं।' : 'Pincode lookup pending — you can still submit.'}
                </p>
              )}
            </form>
          )}

          {formStep === 3 && (
            <div style={{ textAlign: 'center', padding: '20px 10px' }}>
              <div style={{ width: '70px', height: '70px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '32px', margin: '0 auto 25px auto' }}>✓</div>
              <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a', margin: '0 0 15px 0' }}>{currentText.successHeader}</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', margin: '0 0 20px 0' }}>{currentText.successMessage}</p>
              <a
                href={`https://wa.me/918489555955?text=${encodeURIComponent('Hello FinZolve, I submitted my loan application and need assistance.')}`}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-block', marginBottom: '20px', padding: '14px 28px', backgroundColor: '#22c55e', color: '#ffffff', borderRadius: '8px', fontSize: '15px', fontWeight: '700', textDecoration: 'none' }}
              >
                {lang === 'ta' ? 'வாட்ஸ்அப்பில் தொடரவும்' : lang === 'hi' ? 'WhatsApp पर जारी रखें' : 'Continue on WhatsApp'}
              </a>
              <br />
              <button onClick={resetWholeFormPipeline} style={{ padding: '14px 30px', backgroundColor: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>{currentText.successCTA}</button>
            </div>
          )}

        </div>
      </section>

      {/* 6. WHY CHOOSE FINZOLVE */}
      <section id="why" className="section-block page-anchor" style={{ padding: '56px 40px 64px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-intro">
            <div className="section-accent" aria-hidden="true" />
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>{currentText.whyTitle}</h2>
            <p style={{ marginBottom: '8px' }}>{currentText.whySub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', textAlign: 'left' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ color: '#0f172a', fontSize: '19px', fontWeight: '800', margin: '0 0 12px 0' }}>{currentText.partnerText}</h4>
              <p style={{ color: '#64748b', fontSize: '14.5px', margin: 0 }}>{currentText.partnerDesc}</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ color: '#0f172a', fontSize: '19px', fontWeight: '800', margin: '0 0 12px 0' }}>{currentText.secureText}</h4>
              <p style={{ color: '#64748b', fontSize: '14.5px', margin: 0 }}>{currentText.secureDesc}</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ color: '#0f172a', fontSize: '19px', fontWeight: '800', margin: '0 0 12px 0' }}>{currentText.langText}</h4>
              <p style={{ color: '#64748b', fontSize: '14.5px', margin: 0 }}>{currentText.langDesc}</p>
            </div>
            <div style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
              <h4 style={{ color: '#0f172a', fontSize: '19px', fontWeight: '800', margin: '0 0 12px 0' }}>{currentText.doorText}</h4>
              <p style={{ color: '#64748b', fontSize: '14.5px', margin: 0 }}>{currentText.doorDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-block page-anchor" style={{ padding: '56px 40px 64px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="section-intro" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-accent" aria-hidden="true" />
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 32px)' }}>{currentText.aboutTitle}</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569' }}>{currentText.aboutBody}</p>
        </div>
      </section>

      <SeoContentSection lang={lang} />

      {/* 7. FOOTER */}
      <footer id="footer" className="section-block page-anchor" style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '56px 40px 48px', fontSize: '13.5px', borderTop: '2px solid #1e293b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 450px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '900', margin: '0 0 15px 0' }}>FinZolve</h4>
            <p style={{ margin: '0 0 30px 0', lineHeight: 1.8, color: '#94a3b8' }}>{currentText.footerText}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: '#131e31', padding: '20px 25px', borderRadius: '12px', border: '1px solid #1e293b', maxWidth: '400px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '18px' }}>📞</span>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>{currentText.hotline}</p>
                  <a href={`tel:${SUPPORT_PHONE_TEL}`} style={{ color: '#22c55e', textDecoration: 'none', fontSize: '15px', fontWeight: '800' }}>{SUPPORT_PHONE}</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #1e293b', paddingTop: '12px' }}>
                <span style={{ fontSize: '18px' }}>✉</span>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>{currentText.helpdesk}</p>
                  <a href={`mailto:${SUPPORT_EMAIL}?subject=FinZolve%20Loan%20Query`} style={{ color: '#38bdf8', fontSize: '15px', fontWeight: '800', textDecoration: 'none' }}>{SUPPORT_EMAIL}</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '0 1 220px' }}>
            <p style={{ margin: '0 0 14px 0', fontSize: '12px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>{currentText.footerLegal}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontWeight: '700' }}>
              <span onClick={() => setLegalModal('privacy')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'underline' }}>{currentText.linkPrivacy}</span>
              <span onClick={() => setLegalModal('terms')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'underline' }}>{currentText.linkTerms}</span>
              <span onClick={() => setLegalModal('disclaimer')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'underline' }}>{currentText.linkDisclaimer}</span>
            </div>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #1e293b', margin: '40px 0 25px 0' }} />
        <p style={{ margin: '0 0 8px 0', color: '#64748b', textAlign: 'center', fontSize: '12px', lineHeight: 1.6 }}>
          {lang === 'ta' ? 'வங்கி அல்ல · NBFC அல்ல · கடன் ஒப்புதல் கூட்டாளர் வங்கியின் முடிவு' : lang === 'hi' ? 'बैंक नहीं · NBFC नहीं · ऋण स्वीकृति ऋणदाता का निर्णय' : 'Not a bank · Not an NBFC · Loan approval is solely at the lender\'s discretion'}
        </p>
        <p style={{ margin: 0, color: '#475569', textAlign: 'center', fontWeight: '700' }}>&copy; 2026 FinZolve. All Rights Reserved.</p>
      </footer>

      {/* 8. LEGAL OVERLAYS */}
      {legalModal && currentLegal[legalModal] && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15,23,42,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100000, padding: '20px', boxSizing: 'border-box' }} role="dialog" aria-modal="true">
          <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '14px', maxWidth: '680px', width: '100%', maxHeight: '85vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '850', marginBottom: '8px', color: '#0f172a', marginTop: 0 }}>{currentLegal[legalModal].title}</h3>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 24px 0' }}>{currentLegal[legalModal].lastUpdated}</p>
            {currentLegal[legalModal].sections.map((section) => (
              <div key={section.heading} style={{ marginBottom: '22px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' }}>{section.heading}</h4>
                {section.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)} style={{ lineHeight: 1.75, fontSize: '14px', color: '#334155', margin: '0 0 10px 0' }}>{para}</p>
                ))}
              </div>
            ))}
            <button type="button" onClick={() => setLegalModal(null)} style={{ marginTop: '16px', padding: '14px 24px', backgroundColor: '#0f172a', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', width: '100%' }}>{currentText.close}</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;