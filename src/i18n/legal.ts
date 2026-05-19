import type { Language } from '../types'

export type LegalDocType = 'privacy' | 'terms' | 'disclaimer'

export interface LegalDocument {
  title: string
  lastUpdated: string
  body: string[]
}

const legalEn: Record<LegalDocType, LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: May 2026',
    body: [
      'FinZolve strictly operates as a digital data router. By inputting your Mobile Number, PAN metrics, and financial markers, you provide unconditional, irrevocable consent to FinZolve to capture, archive, process, and transmit your data to our network of registered banks and NBFC lending partners.',
      'FinZolve currently serves applicants primarily across Southern India (including Tamil Nadu — Coimbatore, Trichy, Namakkal and surrounding districts), with a planned phased PAN-India digital expansion. Partner coverage in your pincode may vary during rollout.',
      'While we utilize secure industry-standard 256-bit encryption channels, the user explicitly acknowledges that no digital transmission is 100% immune to breaches. FinZolve stands completely indemnified against any unauthorized third-party hacks, data leaks, or processing errors beyond our direct structural infrastructure.',
      'You may request data correction by writing to support@finzolve.in. We retain application data only as long as required for partner matching and regulatory compliance under applicable Indian law.',
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    lastUpdated: 'Last updated: May 2026',
    body: [
      'The user affirms under penalty of perjury that all financial identity items, including PAN ownership, full names, and date of birth details, are lawful, accurate, and belonging solely to the applicant. Any entry of fraudulent, borrowed, or spoofed credentials will make the applicant personally liable for criminal and civil prosecution under the Information Technology Act of India.',
      'FinZolve functions purely as an independent distribution channel partner operating with primary focus in Southern India. We do not issue direct credit lines, we do not guarantee immediate approvals, and we exercise zero authority over final loan sanctions, loan processing timelines, or dynamic interest rate assignments tailored by individual banks.',
      'All loan agreements are strictly between you and the lending institution. FinZolve is not a party to any credit contract. PAN-India service expansion will be announced on this platform as partner networks grow.',
    ],
  },
  disclaimer: {
    title: 'Disclaimer & Regional Liability Clause',
    lastUpdated: 'Last updated: May 2026',
    body: [
      'CRITICAL NO-LIABILITY CLAUSE: Under no legal theory, contract, or tort shall FinZolve, its parent entity, founders, or channel associates be held liable to the applicant or any third-party for any direct, indirect, incidental, punitive, or consequential economic losses, credit score impacts, loan rejections, or business operational failures resulting from using this platform.',
      'FinZolve charges zero processing fees to consumers for standard matching. Current physical operations are concentrated in Southern India; digital access may be available nationally as expansion proceeds.',
      'Governing Law: This platform and all operations are strictly governed by the federal laws of the Republic of India. Any legal actions, disputes, or proceedings arising out of this platform shall be subject exclusively to the litigation jurisdiction of the competent courts where the corporate headquarters of FinZolve is registered (Tamil Nadu, India), to the absolute exclusion of all other regional or state courts.',
    ],
  },
}

const legalTa: Record<LegalDocType, LegalDocument> = {
  privacy: {
    title: 'தரவு தனியுரிமைக் கொள்கை',
    lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது: மே 2026',
    body: [
      'FinZolve ஒரு டிஜிட்டல் தரவு பரிமாற்ற தளமாக மட்டுமே செயல்படுகிறது. உங்கள் விவரங்களை உள்ளிடுவதன் மூலம், பதிவுசெய்யப்பட்ட வங்கி மற்றும் NBFC கூட்டாளர்களுக்கு உங்கள் தரவைச் சேகரித்து அனுப்ப FinZolve-க்கு நிபந்தனையற்ற அங்கீகாரத்தை வழங்குகிறீர்கள்.',
      'தற்போது FinZolve தென்னிந்தியாவில் (தமிழ்நாடு — கோயம்புத்தூர், திருச்சி, நாமக்கல் மற்றும் சுற்றுப்புற மாவட்டங்கள் உட்பட) முதன்மையாக சேவை செய்கிறது. இந்தியா முழுவதும் கட்டமைக்கப்பட்ட டிஜிட்டல் விரிவாக்கம் திட்டமிடப்பட்டுள்ளது. உங்கள் பின்கோடில் கூட்டாளர் கவரேஜ் விரிவாக்கத்தின் போது மாறுபடலாம்.',
      'தரவுப் பாதுகாப்பிற்கு நாங்கள் முன்னுரிமை அளித்தாலும், இணையத்தில் நடக்கும் எந்தவொரு அங்கீகரிக்கப்படாத தரவுக் கசிவு அல்லது ஹேக்கிங்கிற்கு FinZolve சட்டரீதியாகப் பொறுப்பேற்காது.',
      'தரவு திருத்தம் support@finzolve.in மூலம் கோரலாம். விண்ணப்ப தரவு கூட்டாளர் பொருத்தம் மற்றும் இந்திய சட்ட விதிமுறைகளுக்கு தேவையான காலம் மட்டுமே வைக்கப்படும்.',
    ],
  },
  terms: {
    title: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
    lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது: மே 2026',
    body: [
      'பயனர் உள்ளிடும் பான் கார்டு, பெயர் மற்றும் அனைத்து நிதி விவரங்களும் இந்திய சட்டங்களின்படி உண்மையானவை என்று விண்ணப்பதாரர் உறுதியளிக்கிறார். போலியான ஆவணங்களை உள்ளிட்டால் அதற்கு விண்ணப்பதாரரே சிவில் மற்றும் கிரிமினல் நடவடிக்கைகளுக்கு முழுப் பொறுப்பு.',
      'FinZolve என்பது தென்னிந்தியாவில் முதன்மை செயல்பாட்டு கவனத்துடன் செயல்படும் சுயாதீன விநியோகஸ்தர் மட்டுமே. இறுதி லோன் ஒப்புதல் அல்லது வட்டி விகிதங்களில் எங்களுக்கு எந்தவொரு அதிகாரமும் இல்லை.',
      'அனைத்து கடன் ஒப்பந்தங்களும் உங்களுக்கும் வங்கிக்கும் இடையே மட்டுமே. FinZolve எந்த கடன் ஒப்பந்தத்திலும் தரப்பு அல்ல. இந்தியா முழுவதும் சேவை விரிவாக்கம் இந்த தளத்தில் அறிவிக்கப்படும்.',
    ],
  },
  disclaimer: {
    title: 'பொறுப்புத் துறப்பு மற்றும் சட்ட எல்லை',
    lastUpdated: 'கடைசியாக புதுப்பிக்கப்பட்டது: மே 2026',
    body: [
      'முக்கிய பொறுப்புத் துறப்பு விதி: இந்தத் தளத்தைப் பயன்படுத்துவதால் ஏற்படும் லோன் நிராகரிப்புகள், கிரெடிட் ஸ்கோர் பாதிப்புகள் அல்லது எந்தவொரு பொருளாதார இழப்புகளுக்கும் FinZolve, அதன் நிறுவனர்கள் அல்லது கூட்டாளர்கள் சட்டரீதியாகப் பொறுப்பாக மாட்டார்கள்.',
      'வழங்கல் பொருத்தத்திற்கு நுகர்வோரிடம் FinZolve செயலாக்க கட்டணம் வசூலிக்காது. தற்போதைய உடல் செயல்பாடுகள் தென்னிந்தியாவில் குவிப்படுத்தப்பட்டுள்ளன; விரிவாக்கத்துடன் டிஜிட்டல் அணுகல் தேசிய அளவில் கிடைக்கலாம்.',
      'அனைத்து சட்டரீதியான கோரிக்கைகள் மற்றும் நீதிமன்ற விவாதங்கள் FinZolve நிறுவனத்தின் தலைமைப் பதிவு அலுவலகம் அமைந்துள்ள தமிழ்நாடு நீதிமன்ற எல்லைக்கு மட்டுமே உட்பட்டவை.',
    ],
  },
}

const legalHi: Record<LegalDocType, LegalDocument> = {
  privacy: {
    title: 'गोपनीयता नीति',
    lastUpdated: 'अंतिम अपडेट: मई 2026',
    body: [
      'FinZolve विशुद्ध रूप से एक डिजिटल डेटा राउटर के रूप में संचालित होता है। अपना मोबाइल नंबर, PAN विवरण और वित्तीय जानकारी दर्ज करके, आप FinZolve को पंजीकृत बैंकों और NBFC साझेदारों को आपका डेटा एकत्र, संग्रहीत, संसाधित और प्रसारित करने के लिए बिना शर्त, अपरिवर्तनीय सहमति प्रदान करते हैं।',
      'वर्तमान में FinZolve मुख्य रूप से दक्षिण भारत (तमिलनाडु — कोयंबटूर, तिरुचिरापल्ली, नामक्कल और आसपास के जिलों सहित) में सेवा करता है। चरणबद्ध PAN-India डिजिटल विस्तार की योजना है।',
      'हालांकि हम उद्योग-मानक 256-बिट एन्क्रिप्शन का उपयोग करते हैं, उपयोगकर्ता स्वीकार करता है कि कोई भी डिजिटल प्रसारण 100% सुरक्षित नहीं है। अनधिकृत तीसरे पक्ष के हैक, डेटा लीक या हमारे बुनियादी ढांचे से परे प्रसंस्करण त्रुटियों के लिए FinZolve पूर्णतः क्षतिपूर्ति योग्य है।',
      'डेटा सुधार के लिए support@finzolve.in पर लिखें।',
    ],
  },
  terms: {
    title: 'नियम और शर्तें',
    lastUpdated: 'अंतिम अपडेट: मई 2026',
    body: [
      'उपयोगकर्ता शपथपूर्वक पुष्टि करता है कि PAN स्वामित्व, पूरा नाम और जन्म तिथि सहित सभी वित्तीय पहचान विवरण वैध, सटीक हैं और केवल आवेदक के हैं। धोखाधड़ी, उधार या नकली प्रमाण पत्र दर्ज करने पर आवेदक भारत की सूचना प्रौद्योगिकी अधिनियम के तहत आपराधिक और नागरिक मुकदमे के लिए व्यक्तिगत रूप से उत्तरदायी होगा।',
      'FinZolve विशुद्ध रूप से दक्षिण भारत में प्राथमिक संचालन के साथ एक स्वतंत्र वितरण चैनल साझेदार के रूप में कार्य करता है। हम सीधी क्रेडिट लाइन जारी नहीं करते और अंतिम ऋण स्वीकृति पर कोई अधिकार नहीं रखते।',
      'सभी ऋण समझौते विशेष रूप से आपके और ऋण संस्थान के बीच हैं। PAN-India विस्तार इस प्लेटफ़ॉर्म पर घोषित किया जाएगा।',
    ],
  },
  disclaimer: {
    title: 'अस्वीकरण और कानूनी अधिकार क्षेत्र',
    lastUpdated: 'अंतिम अपडेट: मई 2026',
    body: [
      'महत्वपूर्ण दायित्व-मुक्त खंड: इस प्लेटफ़ॉर्म के उपयोग से उत्पन्न किसी भी आर्थिक हानि, क्रेडिट स्कोर प्रभाव, ऋण अस्वीकृति या व्यावसायिक विफलता के लिए FinZolve, इसकी मूल इकाई, संस्थापकों या चैनल सहयोगियों को उत्तरदायी नहीं ठहराया जाएगा।',
      'मानक मिलान के लिए FinZolve उपभोक्ताओं से शून्य प्रसंस्करण शुल्क लेता है। वर्तमान भौतिक संचालन दक्षिण भारत में केंद्रित है।',
      'शासी कानून: भारत गणराज्य के संघीय कानून। सभी विवाद तमिलनाडु, भारत में FinZolve के पंजीकृत मुख्यालय की अधिकार क्षेत्र अदालतों के अधीन होंगे।',
    ],
  },
}

export const legalContent: Record<Language, Record<LegalDocType, LegalDocument>> = {
  en: legalEn,
  ta: legalTa,
  hi: legalHi,
}

export const SUPPORT_EMAIL = 'support@finzolve.in'
export const WHATSAPP_NUMBER = '919876543210'
export const WHATSAPP_MESSAGE = 'Hello FinZolve, I need assistance with my loan application.'
