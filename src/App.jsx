import { useState, useEffect } from 'react';
import { SeoHead } from './components/SeoHead';
import { SeoContentSection } from './components/SeoContentSection';

// 100% Accurate Translation Matrix (International Standard Validation Layout)
const l = {
  en: {
    brand: "FinZolve", slogan: "Smart Loans. Simplified.",
    home: "Home", products: "Types of Loan", apply: "Apply Loan", why: "Why FinZolve?", about: "About Us", contact: "Contact Us",
    heroTitle: "Your Trusted Gateway to Financial Growth", heroSub: "FinZolve is India's ultimate multi-loan hub — access competitive interest rates across 150+ banking partners through one seamless digital journey.",
    cta: "Check Eligibility Instantly", chooseLoan: "Explore Our Loan Categories", subText: "Click on any product card below to view its official structural sub-categories and eligibility descriptions.",
    step1Title: "Start Your Application", mobLabel: "Mobile Number", consent: "By continuing, you agree to our Terms and Conditions and Privacy Policy", next: "Next Step",
    personalTitle: "Step 2: Applicant Information", fname: "First Name", lname: "Last Name", email: "Personal Email ID",
    panNum: "PAN Number", amtLabel: "Required Loan Amount", pin: "Residential Pincode", city: "City / District", state: "State",
    submitText: "Verify & Submit via WhatsApp", whyTitle: "Why Choose FinZolve?", whySub: "Enterprise-grade distribution built for Indian borrowers",
    partnerText: "150+ Bank Partners", secureText: "100% Secure Processing", langText: "Multi-language Help", doorText: "Doorstep Executive Assistance",
    partnerDesc: "One-stop access to major banks and premium NBFCs across India.", secureDesc: "Bank-grade 256-bit data encryption ensuring absolute data privacy.", langDesc: "Designed beautifully for Indian users to apply in their comfort language.", doorDesc: "Fast verification and transparent process from application to disbursal.",
    footerText: "FinZolve operates as a digital loan distribution platform serving Tamil Nadu, with planned expansion across India. Governed by applicable laws of India; disputes subject to courts at our registered headquarters in Tamil Nadu.",
    close: "Close", qrText: "Scan to Apply on Mobile",
    subWindowLabel: "Official Briefing & Overview for", formSelectHeader: "Select Loan Asset Class & Allocation Purpose",
    productOverviewHeader: "Product Structural Summary:", subCatHeader: "Available Custom Purposes / Sub-Categories:",
    selectLoanLabel: "Select Loan Category", selectPurposeLabel: "Select the Purpose",
    chooseSpecificPurposePlaceholder: "-- Select the Purpose --",
    chooseLoanTypePlaceholder: "-- Choose Loan Product --",
    successHeader: "Application Redirected Successfully!",
    successMessage: "Thank you for choosing FinZolve. Your profile metrics have been captured securely in our central sheet registry and your secure encryption matrix has initiated a direct encrypted WhatsApp transmission node to our asset alignment desk.",
    successCTA: "Apply Another Loan",

    pLoanSummary: "Tailored multi-purpose personal funding designed for salaried and self-employed professionals. Features dynamic interest mapping, quick verification timelines, zero collateral structural requisites, and flexible restructuring tailored for urgent medical, familial, or educational expenses.",
    bLoanSummary: "Engineered specifically to scale corporate infrastructure, fulfill capital cash flow demands, or fund retail expansions. Accessible to micro, small, and medium enterprise operations across all trading sectors with premium banking matchers.",
    hLoanSummary: "Premium asset acquisition pathways enabling seamless home build deployments, structural construction tracking, flat purchases, or plot takeovers. Includes attractive tenure architectures spanning up to 30 years with lower interest pipelines.",
    lPropertySummary: "Unlock the underlying market equity of your commercial or residential immovable assets without losing tenure control. Maximized loan-to-value matching parameters ensuring higher monetary capital access with lower processing thresholds.",
    gLoanSummary: "Instant institutional liquidity generated through your gold assets with bank-grade safety assurance protocols. Flexible repayment choices including custom over-draft arrangements or standard term structures.",
    lSecuritiesSummary: "Capital creation executed seamlessly against your existing high-value market shares, mutual funds, or commercial bonds. Retain your core investment ownership metrics while routing immediate liquidity pipelines.",
    lPremiumSummary: "Specialized programmatic capital distribution configured to manage and settle premium corporate or individual high-value insurance policies cleanly, preventing structural premium defaults.",
    privacyFull: "FinZolve strictly operates as a digital data router. By inputting your Mobile Number, PAN metrics, and financial markers, you provide unconditional, irrevocable consent to FinZolve to capture, archive, process, and transmit your data to our network of registered banks and NBFC lending partners across India. While we utilize secure industry-standard 256-bit encryption channels, the user explicitly acknowledges that no digital transmission is 100% immune to breaches.",
    termsFull: "The user affirms under penalty of perjury that all financial identity items, including PAN ownership, full names, and date of birth details, are lawful, accurate, and belonging solely to the applicant. Any entry of fraudulent, borrowed, or spoofed credentials will make the applicant personally liable for criminal and civil prosecution under the Information Technology Act of India."
  },
  ta: {
    brand: "FinZolve", slogan: "ஸ்மார்ட் லோன்கள். எளிமையாக.",
    home: "முகப்பு", products: "லோன் வகைகள்", apply: "விண்ணப்பிக்க", why: "ஏன் FinZolve?", about: "எங்களைப் பற்றி", contact: "தொடர்புக்கு",
    heroTitle: "உங்கள் பொருளாதார வளர்ச்சிக்கு நம்பகமான வழிகாட்டி!", heroSub: "FinZolve என்பது இந்தியாவின் முதன்மையான மல்டி-லோன் மையமாகும் — 150+ வங்கி கூட்டாளர்களிடம் இருந்து போட்டித்தன்மை வாய்ந்த வட்டி விகிதங்களை ஒரே டிஜிட்டல் தளத்தில் பெற்றிடுங்கள்.",
    cta: "உடனடி தகுதி சரிபார்ப்பு", chooseLoan: "எங்கள் லோன் பிரிவுகளை ஆராயுங்கள்", subText: "அதன் உள்-பிரிவுகள் மற்றும் லோன் விவரக்குறிப்புகளைப் பார்க்க கீழே உள்ள எந்தவொரு தயாரிப்பு கார்டையும் கிளிக் செய்யவும்.",
    step1Title: "உங்கள் விண்ணப்பத்தைத் தொடங்குங்கள்", mobLabel: "மொபைல் எண்", consent: "தொடர்வதன் மூலம், எங்களது விதிமுறைகள் மற்றும் நிபந்தனைகள் மற்றும் தனியுரிமைக் கொள்கையை நீங்கள் ஒப்புக்கொள்கிறீர்கள்", next: "அடுத்த படி",
    personalTitle: "படி 2: சரிபார்ப்பு விவரங்கள்", fname: "முதல் பெயர்", lname: "இறுதிப் பெயர்", email: "மின்னஞ்சல் முகவரி",
    panNum: "பான் கார்டு எண்", amtLabel: "தேவைப்படும் லோன் தொகை", pin: "வசிப்பிட பின்கோடு", city: "நகரம் / மாவட்டம்", state: "மாநிலம்",
    submitText: "Verify & Submit via WhatsApp", whyTitle: "ஏன் FinZolve-ஐத் தேர்ந்தெடுக்க வேண்டும்?", whySub: "இந்திய கடன் வாங்குபவர்களுக்காக உருவாக்கப்பட்ட எண்டர்பிரைஸ் விநியோக கட்டமைப்பு",
    partnerText: "150+ வங்கி கூட்டாளர்கள்", secureText: "100% பாதுகாப்பான செயலாக்கம்", langText: "பல்மொழி உதவி", doorText: "நேரடி வீட்டுச் சேவை உதவி",
    partnerDesc: "இந்தியா முழுவதும் உள்ள முக்கிய வங்கிகள் மற்றும் NBFC-களை ஒரே இடத்தில் அணுகலாம்.", secureDesc: "உங்கள் தரவு தனியுரிமையை உறுதி செய்யும் வங்கி அளவிலான 256-பிட் குறியாக்கம்.", langDesc: "இந்திய பயனர்கள் தங்களுக்கு வசதியான மொழியில் விண்ணப்பிக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது.", doorDesc: "லோன் அப்ளிகேஷன் முதல் பணம் விநியோகம் வரை வேகமான சரிபார்ப்பு மற்றும் வெளிப்படையான செயல்முறை.",
    footerText: "FinZolve தமிழ்நாடு முழுவதும் சேவை செய்யும் டிஜிட்டல் கடன் விநியோக தளம்; இந்தியா முழுவதும் விரிவாக்கம் திட்டமிடப்பட்டுள்ளது. இந்திய சட்டங்களுக்கு உட்பட்டது; விவாதங்கள் தமிழ்நாடு தலைமைப் பதிவு நீதிமன்ற எல்லைக்கு உட்பட்டவை.",
    close: "மூடு", qrText: "மொபைலில் விண்ணப்பிக்க ஸ்கேன் செய்யவும்",
    subWindowLabel: "அதிகாரப்பூர்வ லோன் விளக்கம் மற்றும் கட்டமைப்பு:", formSelectHeader: "லோன் வகை மற்றும் ஒதுக்கீட்டு நோக்கத்தைத் தேர்ந்தெடுக்கவும்",
    productOverviewHeader: "தயாரிப்பு விளக்கச் சுருக்கம்:", subCatHeader: "கிடைக்கக்கூடிய லோன் உள்-பிரிவுகள் (நோக்கங்கள்):",
    selectLoanLabel: "லோன் வகையைத் தேர்ந்தெடுக்கவும்", selectPurposeLabel: "லோன் நோக்கத்தைத் தேர்ந்தெடுக்கவும்",
    chooseSpecificPurposePlaceholder: "-- லோன் நோக்கத்தைத் தேர்ந்தெடுக்கவும் --",
    chooseLoanTypePlaceholder: "-- லோன் வகையைத் தேர்ந்தெடுக்கவும் --",
    successHeader: "விண்ணப்பம் சமர்ப்பிக்கப்பட்டது!",
    successMessage: "FinZolve-ஐத் தேர்ந்தெடுத்ததற்கு நன்றி. உங்களது விவரங்கள் அனைத்தும் கூகுள் ஷீட்டில் பாதுகாப்பாகச் சேமிக்கப்பட்டு, உங்களது அசல் எண்ணை சரிபார்க்க நேரடி வாட்ஸ்அப் தளம் தற்போது உருவாக்கப்பட்டுள்ளது.",
    successCTA: "மற்றொரு லோனுக்கு விண்ணப்பிக்க",

    pLoanSummary: "மாத சம்பளம் பெறுபவர்கள் மற்றும் சுயதொழில் செய்யும் நிபுணர்களுக்காக வடிவமைக்கப்பட்ட பன்னோக்கு தனிநபர் கடன். இது எவ்வித பிணையும் (Collateral) இல்லாமல், மருத்துவச் செலவுகள், குடும்ப சுபகாரியங்கள் அல்லது கல்வித் தேவைகளுக்கான அவசர பணப்புழக்கத்தை விரைவான சரிபார்ப்பு மற்றும் நெகிழ்வான கால அளவுகளுடன் வழங்குகிறது.",
    bLoanSummary: "வணிக உள்கட்டமைப்பை மேம்படுத்த, மூலதன பணப்புழக்கத் தேவைகளைப் பூர்த்தி செய்ய அல்லது சில்லறை வணிகத்தை விரிவுபடுத்த பிரத்யேகமாக வடிவமைக்கப்பட்டது. இந்தியாவின் முன்னணி வங்கிகள் மூலம் குறு, சிறு மற்றும் நடுத்தர தொழில் நிறுவனங்களுக்கு (MSME) எளிதாகக் கடன் பொருத்தங்களை வழங்குகிறது.",
    hLoanSummary: "புதிய வீடு கட்ட, அடுக்குமாடி குடியிருப்பு வாங்க அல்லது வீட்டு மனை நிலங்களை கையகப்படுத்த உதவும் உயர்தர சொத்து வாங்குதல் லோன் பாதை. குறைவான வட்டி விகிதங்கள் மற்றும் 30 ஆண்டுகள் வரையிலான நீண்ட கால அவகாச கட்டமைப்புகளை உள்ளடக்கியது.",
    lPropertySummary: "உங்கள் வணிக அல்லது குடியிருப்பு அசையாச் சொத்துகளின் சந்தை மதிப்பை (Equity) பயன்படுத்தி பெரும் மூலதனத்தைப் பெறுங்கள். சொத்தின் மீதான உரிமையை இழக்காமல், குறைந்த செயலாக்கக் கட்டணங்களுடன் அதிக கடன் தொகையை அணுகுவதை இது உறுதி செய்கிறது.",
    gLoanSummary: "உங்களின் தங்க நகைகளுக்கு வங்கி அளவிலான பாதுகாப்பு நெறிமுறைகளுடன் உடனடி பணப்புழக்கத்தை உருவாக்குங்கள். ஓவர்-டிராஃப்ட் (OD) வசதி அல்லது நிலையான கடன் கால முறைகள் உள்ளிட்ட நெகிழ்வான திருப்பிச் செலுத்தும் தேர்வுகள் உள்ளன.",
    lSecuritiesSummary: "நீங்கள் ஏற்கனவே வைத்துள்ள உயர்தர சந்தைப் பங்குகள், பரஸ்பர நிதிகள் (Mutual Funds) அல்லது கார்ப்பரேட் பாண்டுகளுக்கு எதிராக உடனடி மூலதனத்தைப் பெற்றிடுங்கள். உங்களது முதலீடுகளை விற்காமல் அதன் உரிமையைத் தக்கவைத்துக் கொண்டே அவசர நிதியைப் பெறலாம்.",
    lPremiumSummary: "நிறுவனங்கள் அல்லது தனிநபர்களின் உயர்தர காப்பீட்டுக் கொள்கை பிரீமியங்களை (Insurance Premiums) எவ்வித தடையுமின்றி முறையாகச் செலுத்தவும், பிரீமியம் தவறுகளால் பாலிசி ரத்து செய்யப்படுவதைத் தவிர்க்கவும் உதவும் பிரத்யேக கடன் விநியோக முறை."
  },
  hi: {
    brand: "FinZolve", slogan: "स्मार्ट लोन। सरलीकृत।",
    home: "होम", products: "लोन के प्रकार", apply: "लागू करें", why: "FinZolve क्यों?", about: "हमारे बारे में", contact: "संपर्क करें",
    heroTitle: "आपके वित्तीय विकास का भरोसेमंद साथी", heroSub: "FinZolve भारत का बेहतरीन मल्टी-लोन हब है — एक ही डिजिटल यात्रा के माध्यम से 150+ banking भागीदारों में प्रतिस्पर्धी ब्याज दरों तक पहुंचें।",
    cta: "पात्रता की तुरंत जांच करें", chooseLoan: "हमारे लोन श्रेणियों का अन्वेषण करें", subText: "इसके संरचनात्मक उप-श्रेणियों और आधिकारिक विवरणों को देखने के लिए नीचे किसी भी उत्पाद कार्ड पर क्लिक करें।",
    step1Title: "अपना आवेदन शुरू करें", mobLabel: "मोबाइल नंबर", consent: "आगे बढ़कर, आप हमारे नियम और शर्तों और गोपनीयता नीति से सहमत होते हैं", next: "आगे बढ़ें",
    personalTitle: "चरण 2: सत्यापन विवरण", fname: "पहला नाम", lname: "अंतिम नाम", email: "व्यक्तिगत ईमेल आईडी",
    panNum: "पैन नंबर", amtLabel: "आवश्यक लोन राशि", pin: "पिनकोड", city: "शहर / जिला", state: "राज्य",
    submitText: "Verify & Submit via WhatsApp", whyTitle: "FinZolve क्यों चुनें?", whySub: "भारतीय उधारकर्ताओं के लिए निर्मित एंटरप्राइज-ग्रेड वितरण नेटवर्क",
    partnerText: "150+ Bank भागीदार", secureText: "100% सुरक्षित प्रसंस्करण", langText: "बहुभाषी सहायता", doorText: "घर पर कार्यकारी सहायता",
    partnerDesc: "भारत भर के प्रमुख बैंकों और प्रीमियम एनबीएफसी तक वन-स्टॉप पहुंच।", secureDesc: "पूर्ण डेटा गोपनीयता सुनिश्चित करने वाला बैंक-ग्रेड 256-बिट डेटा एन्क्रिप्शन।", langDesc: "भारतीय उपयोगकर्ताओं के लिए उनकी आरामदायक भाषा में आवेदन करने के लिए खूबसूरती से डिज़ाइन किया गया।", doorDesc: "आवेदन से लेकर वितरण तक तेजी से सत्यापन और पारदर्शी प्रक्रिया।",
    footerText: "FinZolve तमिलनाडु में सेवा करने वाला डिजिटल लोन वितरण मंच; भारत भर में विस्तार की योजना। भारतीय कानूनों के अधीन; विवाद तमिलनाडु मुख्यालय की अदालतों के अधीन।",
    close: "बंद करें", qrText: "मोबाइल पर आवेदन करने के लिए स्कैन करें",
    subWindowLabel: "इसके लिए उपलब्ध विवरण और उप-श्रेणियां:", formSelectHeader: "लोन एसेट क्लास और आवंटन उद्देश्य का चयन करें",
    productOverviewHeader: "उत्पाद संरचनात्मक सारांश:", subCatHeader: "उपलब्ध लोन उप-श्रेणियां (उद्देश्य):",
    selectLoanLabel: "लोन श्रेणी का चयन करें", selectPurposeLabel: "लोन का उद्देश्य चुनें",
    chooseSpecificPurposePlaceholder: "-- लोन का उद्देश्य चुनें --",
    chooseLoanTypePlaceholder: "-- लोन उत्पाद चुनें --",
    successHeader: "आवेदन प्रस्तुत किया गया!",
    successMessage: "FinZolve चुनने के लिए धन्यवाद। आपका विवरण सुरक्षित रूप से दर्ज कर लिया गया है और वास्तविक व्हाट्सएप सत्यापन शुरू कर दिया गया है।"
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

  useEffect(() => {
    window.scrollTo(0, 0);
    if (sessionStorage.getItem("finzolve_form_submitted") === "1") {
      setFormStep(3);
    }
  }, []);

  useEffect(() => {
    if (formStep === 3) {
      setTimeout(() => {
        document.getElementById('application-engine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [formStep]);

  const handleCardClick = (loanName) => {
    if (activeTab === loanName) {
      setActiveTab(null);
    } else {
      setActiveTab(loanName);
      setTimeout(() => {
        document.getElementById('premium-briefing-hub')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
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

  // App பங்க்ஷனுக்குள், மற்ற பங்க்ஷன்களுடன் சேர்த்து இதை வைக்கவும்:
  const captureAbandonedLead = (mobileNumber) => {
    const myGoogleAppScriptUrl = "https://script.google.com/macros/s/AKfycbxfHKPBV7UyMZvWvlqavdqRVnC2HKaHCtOEHQsiO9v4SegZhtWsQ6dFJ23_z_h7KeaE/exec";
    
    const payload = {
      timestamp: new Date().toISOString(),
      loanType: formLoanType || "",
      loanPurpose: formPurpose || "",
      clientMobile: mobileNumber,
      firstName: "N/A", lastName: "N/A", email: "N/A", panNumber: "N/A", 
      loanAmount: "0", pincode: "0", city: "N/A", state: "N/A",
      LeadStatus: "ABANDONED_LEAD" // இதுதான் மிக முக்கியம்
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

  const scrollToForm = () => {
    document.getElementById('application-engine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ boxSizing: 'border-box', backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <SeoHead lang={lang} />

      {/* 1. HEADER */}
      <header style={{ boxSizing: 'border-box', backgroundColor: '#0f172a', color: '#ffffff', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1000, width: '100%', flexWrap: 'wrap', gap: '15px' }}>
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

        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>{currentText.home}</a>
          <a href="#products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>{currentText.products}</a>
          <button onClick={scrollToForm} style={{ background: 'none', border: 'none', color: '#fbbf24', cursor: 'pointer', fontWeight: '800', fontSize: '14px', padding: 0 }}>{currentText.apply}</button>
          <a href="#why" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>{currentText.why}</a>
          <a href="#footer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>{currentText.contact}</a>
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
      <section id="products" style={{ boxSizing: 'border-box', padding: '70px 40px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px 0' }}>{currentText.chooseLoan}</h3>
          <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>{currentText.subText}</p>
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
          <div id="premium-briefing-hub" style={{ backgroundColor: '#0f172a', padding: '35px', borderRadius: '16px', border: '2px solid #fbbf24', color: '#ffffff' }}>
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
      <section id="application-engine" style={{ boxSizing: 'border-box', padding: '80px 20px', backgroundColor: '#f1f5f9', width: '100%' }}>
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
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '30px' }}>
                <input type="checkbox" id="consent" disabled={!mobile} checked={consentChecked} onChange={(e) => setConsentChecked(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                <label htmlFor="consent" style={{ fontSize: '13px', color: '#475569' }}>{currentText.consent}</label>
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
      <section id="why" style={{ boxSizing: 'border-box', padding: '80px 40px', backgroundColor: '#ffffff', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '40px', fontWeight: '800', color: '#0f172a', margin: '0 0 12px 0' }}>{currentText.whyTitle}</h3>
          <p style={{ color: '#64748b', fontSize: '16px', fontWeight: '500', marginBottom: '55px' }}>{currentText.whySub}</p>
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

      <SeoContentSection lang={lang} />

      {/* 7. FOOTER */}
      <footer id="footer" style={{ boxSizing: 'border-box', backgroundColor: '#0f172a', color: '#94a3b8', padding: '60px 40px', fontSize: '13.5px', borderTop: '2px solid #1e293b', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 450px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '900', margin: '0 0 15px 0' }}>FinZolve International Data Routing Nodes</h4>
            <p style={{ margin: '0 0 30px 0', lineHeight: 1.8, color: '#94a3b8' }}>{currentText.footerText}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: '#131e31', padding: '20px 25px', borderRadius: '12px', border: '1px solid #1e293b', maxWidth: '400px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '18px' }}>📞</span>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>Corporate Hotline</p>
                  <a href="tel:+918489555955" style={{ color: '#22c55e', textDecoration: 'none', fontSize: '15px', fontWeight: '800' }}>Connect Secure Call Line</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #1e293b', paddingTop: '12px' }}>
                <span style={{ fontSize: '18px' }}>✉</span>
                <div>
                  <p style={{ margin: 0, fontSize: '11px', color: '#64748b', fontWeight: '800', textTransform: 'uppercase' }}>Enterprise Helpdesk</p>
                  <a href="mailto:solutions@finzolve.com?subject=FinZolve%20Loan%20Query" style={{ color: '#38bdf8', fontSize: '15px', fontWeight: '800', textDecoration: 'none' }}>solutions@finzolve.com</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '30px', fontWeight: '700', paddingTop: '10px' }}>
            <span onClick={() => setLegalModal('privacy')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'underline' }}>Privacy Policy</span>
            <span onClick={() => setLegalModal('terms')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'underline' }}>Terms of Use</span>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #1e293b', margin: '40px 0 25px 0' }} />
        <p style={{ margin: 0, color: '#475569', textAlign: 'center', fontWeight: '700' }}>&copy; 2026 FinZolve. All Rights Reserved.</p>
      </footer>

      {/* 8. LEGAL OVERLAYS */}
      {legalModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(15,23,42,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100000, padding: '20px', boxSizing: 'border-box' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '14px', maxWidth: '620px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '22px', fontWeight: '850', marginBottom: '20px', textTransform: 'uppercase', color: '#0f172a', borderBottom: '2.5px solid #f1f5f9', paddingBottom: '12px', marginTop: 0 }}>{legalModal} Document</h3>
            {legalModal === 'privacy' && <p style={{ lineHeight: 1.8, fontSize: '14.5px', color: '#334155', margin: 0 }}>{currentText.privacyFull}</p>}
            {legalModal === 'terms' && <p style={{ lineHeight: 1.8, fontSize: '14.5px', color: '#334155', margin: 0 }}>{currentText.termsFull}</p>}
            <button onClick={() => setLegalModal(null)} style={{ marginTop: '30px', padding: '14px 24px', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', width: '100%' }}>{currentText.close}</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;