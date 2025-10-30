import { Service, ServiceCategory } from './types';

export const services: Service[] = [
  // Revenue Division Services
  {
    id: 'assessment-tax',
    departmentId: 'revenue',
    name: {
      en: 'Assessment Tax',
      si: 'තක්සේරු බද්ද',
      tm: 'மதிப்பீட்டு வரி'
    },
    description: {
      en: 'Property assessment tax payment and related services for residential and commercial properties.',
      si: 'නේවාසික සහ වාණිජ දේපල සඳහා දේපල තක්සේරු බදු ගෙවීම සහ අදාළ සේවා.',
      tm: 'குடியிருப்பு மற்றும் வணிக சொத்துகளுக்கான சொத்து மதிப்பீட்டு வரி செலுத்துதல் மற்றும் தொடர்புடைய சேவைகள்.'
    },
    category: {
      en: 'Tax Services',
      si: 'බදු සේවා',
      tm: 'வரி சேவைகள்'
    },
    steps: [
      {
        title: {
          en: 'Obtain Assessment Number',
          si: 'තක්සේරු අංකය ලබා ගන්න',
          tm: 'மதிப்பீட்டு எண்ணைப் பெறுங்கள்'
        },
        description: {
          en: 'Visit the Revenue Division office or check your previous tax receipts to obtain your property assessment number.',
          si: 'ඔබේ දේපල තක්සේරු අංකය ලබා ගැනීමට ආදායම් අංශ කාර්යාලයට පැමිණෙන්න හෝ ඔබේ පෙර බදු ලදුපත් පරීක්ෂා කරන්න.',
          tm: 'உங்கள் சொத்து மதிப்பீட்டு எண்ணைப் பெற வருவாய் பிரிவு அலுவலகத்தைப் பார்வையிடவும் அல்லது உங்கள் முந்தைய வரி ரசீதுகளைச் சரிபார்க்கவும்.'
        }
      },
      {
        title: {
          en: 'Calculate Tax Amount',
          si: 'බදු මුදල ගණනය කරන්න',
          tm: 'வரி தொகையைக் கணக்கிடுங்கள்'
        },
        description: {
          en: 'Use the online calculator or visit the office to determine your tax amount based on property value and usage.',
          si: 'දේපල වටිනාකම සහ භාවිතය මත පදනම්ව ඔබේ බදු මුදල තීරණය කිරීම සඳහා මාර්ගගත කැල්කියුලේටරය භාවිතා කරන්න හෝ කාර්යාලයට පැමිණෙන්න.',
          tm: 'சொத்து மதிப்பு மற்றும் பயன்பாட்டின் அடிப்படையில் உங்கள் வரி தொகையை தீர்மானிக்க ஆன்லைன் கால்குலேட்டரைப் பயன்படுத்தவும் அல்லது அலுவலகத்தைப் பார்வையிடவும்.'
        }
      },
      {
        title: {
          en: 'Make Payment',
          si: 'ගෙවීම කරන්න',
          tm: 'பணம் செலுத்துங்கள்'
        },
        description: {
          en: 'Pay online through the portal, at the office counter, or at any authorized bank branch.',
          si: 'ද්වාරය හරහා මාර්ගගතව, කාර්යාල කවුන්ටරයේ හෝ ඕනෑම බලයලත් බැංකු ශාඛාවක ගෙවන්න.',
          tm: 'போர்ட்டல் மூலம் ஆன்லைனில், அலுவலக கவுன்டரில் அல்லது எந்த அங்கீகரிக்கப்பட்ட வங்கி கிளையிலும் பணம் செலுத்துங்கள்.'
        },
        note: {
          en: 'Keep the receipt for your records.',
          si: 'ඔබගේ වාර්තා සඳහා ලදුපත තබා ගන්න.',
          tm: 'உங்கள் பதிவுகளுக்காக ரசீதை வைத்திருங்கள்.'
        }
      },
      {
        title: {
          en: 'Obtain Receipt',
          si: 'ලදුපත ලබා ගන්න',
          tm: 'ரசீதைப் பெறுங்கள்'
        },
        description: {
          en: 'Collect your official payment receipt. Online payments will receive digital receipts via email.',
          si: 'ඔබගේ නිල ගෙවීම් ලදුපත එකතු කරන්න. මාර්ගගත ගෙවීම් විද්‍යුත් තැපෑල හරහා ඩිජිටල් ලදුපත් ලබා ගනී.',
          tm: 'உங்கள் அதிகாரப்பூர்வ கட்டண ரசீதை சேகரிக்கவும். ஆன்லைன் கட்டணங்கள் மின்னஞ்சல் வழியாக டிஜிட்டல் ரசீதுகளைப் பெறும்.'
        }
      }
    ],
    requiredDocuments: [
      {
        name: {
          en: 'National Identity Card',
          si: 'ජාතික හැඳුනුම්පත',
          tm: 'தேசிய அடையாள அட்டை'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Property Deed or Title',
          si: 'දේපල ඔප්පුව හෝ හිමිකම',
          tm: 'சொத்து பத்திரம் அல்லது உரிமை'
        },
        description: {
          en: 'For new registrations only',
          si: 'නව ලියාපදිංචි කිරීම් සඳහා පමණයි',
          tm: 'புதிய பதிவுகளுக்கு மட்டும்'
        },
        mandatory: false
      },
      {
        name: {
          en: 'Previous Tax Receipt',
          si: 'පෙර බදු ලදුපත',
          tm: 'முந்தைய வரி ரசீது'
        },
        description: {
          en: 'If available',
          si: 'තිබේ නම්',
          tm: 'கிடைக்கும் பட்சத்தில்'
        },
        mandatory: false
      }
    ],
    fees: [
      {
        description: {
          en: 'Annual Assessment Tax',
          si: 'වාර්ෂික තක්සේරු බද්ද',
          tm: 'ஆண்டு மதிப்பீட்டு வரி'
        },
        amount: 'Based on property value',
        note: {
          en: 'Calculated as a percentage of annual rental value',
          si: 'වාර්ෂික කුලී වටිනාකමේ ප්‍රතිශතයක් ලෙස ගණනය කෙරේ',
          tm: 'ஆண்டு வாடகை மதிப்பின் சதவீதமாக கணக்கிடப்படுகிறது'
        }
      },
      {
        description: {
          en: 'Late Payment Penalty',
          si: 'ප්‍රමාද ගෙවීම් දඩ',
          tm: 'தாமத கட்டணத் தண்டம்'
        },
        amount: '10% per month',
        note: {
          en: 'Applied to overdue amounts',
          si: 'කල් ඉකුත් වූ මුදල් සඳහා අදාළ වේ',
          tm: 'காலாவதியான தொகைகளுக்கு பயன்படுத்தப்படுகிறது'
        }
      }
    ],
    processingTime: {
      en: 'Immediate (for payments)',
      si: 'ක්ෂණික (ගෙවීම් සඳහා)',
      tm: 'உடனடி (கட்டணங்களுக்கு)'
    },
    formUrl: '/forms/assessment-tax.pdf',
    onlineAvailable: true,
    importantNotes: {
      en: [
        'Tax payments are due annually on or before March 31st',
        'Discounts available for early payment',
        'Online payment portal available 24/7',
        'For property value disputes, file an appeal within 30 days'
      ],
      si: [
        'බදු ගෙවීම් වාර්ෂිකව මාර්තු 31 දින හෝ ඊට පෙර ගෙවිය යුතුය',
        'ඉක්මන් ගෙවීම සඳහා වට්ටම් ලබා ගත හැකිය',
        'මාර්ගගත ගෙවීම් ද්වාරය 24/7 ලබා ගත හැකිය',
        'දේපල වටිනාකම් ආරවුල් සඳහා, දින 30ක් ඇතුළත අභියාචනයක් ගොනු කරන්න'
      ],
      tm: [
        'வரி செலுத்துதல்கள் ஆண்டுதோறும் மார்ச் 31 அன்று அல்லது அதற்கு முன் செலுத்த வேண்டும்',
        'முன்கூட்டியே செலுத்துவதற்கு தள்ளுபடிகள் கிடைக்கும்',
        'ஆன்லைன் கட்டண போர்ட்டல் 24/7 கிடைக்கிறது',
        'சொத்து மதிப்பு தகராறுகளுக்கு, 30 நாட்களுக்குள் மேல்முறையீடு செய்யுங்கள்'
      ]
    }
  },
  {
    id: 'acreage-tax',
    departmentId: 'revenue',
    name: {
      en: 'Acreage Tax',
      si: 'ඉඩම් බද්ද',
      tm: 'நில வரி'
    },
    description: {
      en: 'Land tax for agricultural and non-agricultural land holdings.',
      si: 'කෘෂිකාර්මික සහ කෘෂිකාර්මික නොවන ඉඩම් හිමිකම් සඳහා ඉඩම් බද්ද.',
      tm: 'விவசாய மற்றும் விவசாயம் அல்லாத நில உடைமைகளுக்கான நில வரி.'
    },
    category: {
      en: 'Tax Services',
      si: 'බදු සේවා',
      tm: 'வரி சேவைகள்'
    },
    steps: [
      {
        title: {
          en: 'Register Land',
          si: 'ඉඩම ලියාපදිංචි කරන්න',
          tm: 'நிலத்தை பதிவு செய்யுங்கள்'
        },
        description: {
          en: 'Submit land ownership documents to the Revenue Division for registration.',
          si: 'ලියාපදිංචිය සඳහා ඉඩම් හිමිකාරිත්ව ලියකියවිලි ආදායම් අංශයට ඉදිරිපත් කරන්න.',
          tm: 'பதிவுக்காக நில உரிமை ஆவணங்களை வருவாய் பிரிவுக்கு சமர்ப்பிக்கவும்.'
        }
      },
      {
        title: {
          en: 'Verify Land Details',
          si: 'ඉඩම් විස්තර සත්‍යාපනය කරන්න',
          tm: 'நில விவரங்களை சரிபார்க்கவும்'
        },
        description: {
          en: 'Officer will verify land extent, location, and usage for accurate tax calculation.',
          si: 'නිලධාරියා නිවැරදි බදු ගණනය කිරීම සඳහා ඉඩම් ප්‍රමාණය, ස්ථානය සහ භාවිතය සත්‍යාපනය කරනු ඇත.',
          tm: 'துல்லியமான வரி கணக்கீட்டுக்காக அதிகாரி நில அளவு, இடம் மற்றும் பயன்பாட்டை சரிபார்ப்பார்.'
        }
      },
      {
        title: {
          en: 'Receive Tax Notice',
          si: 'බදු නිවේදනය ලබා ගන්න',
          tm: 'வரி அறிவிப்பைப் பெறுங்கள்'
        },
        description: {
          en: 'You will receive an annual tax notice with payment details.',
          si: 'ඔබට ගෙවීම් විස්තර සහිත වාර්ෂික බදු නිවේදනයක් ලැබෙනු ඇත.',
          tm: 'நீங்கள் கட்டண விவரங்களுடன் ஆண்டு வரி அறிவிப்பைப் பெறுவீர்கள்.'
        }
      },
      {
        title: {
          en: 'Make Payment',
          si: 'ගෙවීම කරන්න',
          tm: 'பணம் செலுத்துங்கள்'
        },
        description: {
          en: 'Pay the tax amount at the office or through authorized payment channels.',
          si: 'කාර්යාලයේ හෝ බලයලත් ගෙවීම් නාලිකා හරහා බදු මුදල ගෙවන්න.',
          tm: 'அலுவலகத்தில் அல்லது அங்கீகரிக்கப்பட்ட கட்டண சேனல்கள் மூலம் வரி தொகையை செலுத்துங்கள்.'
        }
      }
    ],
    requiredDocuments: [
      {
        name: {
          en: 'Land Deed/Title',
          si: 'ඉඩම් ඔප්පුව/හිමිකම',
          tm: 'நில பத்திரம்/உரிமை'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Survey Plan',
          si: 'මිනින්දෝරු සැලැස්ම',
          tm: 'அளவீட்டு திட்டம்'
        },
        mandatory: true
      },
      {
        name: {
          en: 'National Identity Card',
          si: 'ජාතික හැඳුනුම්පත',
          tm: 'தேசிய அடையாள அட்டை'
        },
        mandatory: true
      }
    ],
    fees: [
      {
        description: {
          en: 'Agricultural Land (per acre)',
          si: 'කෘෂිකාර්මික ඉඩම (අක්කරයකට)',
          tm: 'விவசாய நிலம் (ஒரு ஏக்கருக்கு)'
        },
        amount: 'Rs. 500'
      },
      {
        description: {
          en: 'Non-Agricultural Land (per acre)',
          si: 'කෘෂිකාර්මික නොවන ඉඩම (අක්කරයකට)',
          tm: 'விவசாயம் அல்லாத நிலம் (ஒரு ஏக்கருக்கு)'
        },
        amount: 'Rs. 2,000'
      }
    ],
    processingTime: {
      en: '5-7 working days for registration',
      si: 'ලියාපදිංචිය සඳහා වැඩ කරන දින 5-7',
      tm: 'பதிவுக்கு 5-7 வேலை நாட்கள்'
    },
    formUrl: '/forms/acreage-tax.pdf',
    onlineAvailable: false
  },
  {
    id: 'business-tax',
    departmentId: 'revenue',
    name: {
      en: 'Business Tax',
      si: 'ව්‍යාපාර බද්ද',
      tm: 'வணிக வரி'
    },
    description: {
      en: 'Annual tax for businesses operating within the Pradeshiya Sabha area.',
      si: 'ප්‍රාදේශීය සභා ප්‍රදේශය තුළ ක්‍රියාත්මක වන ව්‍යාපාර සඳහා වාර්ෂික බද්ද.',
      tm: 'பிரதேச சபை பகுதியில் செயல்படும் வணிகங்களுக்கான ஆண்டு வரி.'
    },
    category: {
      en: 'Tax Services',
      si: 'බදු සේවා',
      tm: 'வரி சேவைகள்'
    },
    steps: [
      {
        title: {
          en: 'Register Business',
          si: 'ව්‍යාපාරය ලියාපදිංචි කරන්න',
          tm: 'வணிகத்தை பதிவு செய்யுங்கள்'
        },
        description: {
          en: 'Submit business registration documents and obtain a business license.',
          si: 'ව්‍යාපාර ලියාපදිංචි ලියකියවිලි ඉදිරිපත් කර ව්‍යාපාර බලපත්‍රයක් ලබා ගන්න.',
          tm: 'வணிக பதிவு ஆவணங்களை சமர்ப்பித்து வணிக உரிமம் பெறுங்கள்.'
        }
      },
      {
        title: {
          en: 'Assessment',
          si: 'තක්සේරුව',
          tm: 'மதிப்பீடு'
        },
        description: {
          en: 'Tax amount will be determined based on business type, size, and location.',
          si: 'ව්‍යාපාර වර්ගය, ප්‍රමාණය සහ ස්ථානය මත පදනම්ව බදු මුදල තීරණය කෙරේ.',
          tm: 'வணிக வகை, அளவு மற்றும் இருப்பிடத்தின் அடிப்படையில் வரி தொகை தீர்மானிக்கப்படும்.'
        }
      },
      {
        title: {
          en: 'Pay Annual Tax',
          si: 'වාර්ෂික බද්ද ගෙවන්න',
          tm: 'ஆண்டு வரியை செலுத்துங்கள்'
        },
        description: {
          en: 'Make annual business tax payment before the due date to avoid penalties.',
          si: 'දඩ මුදල් වළක්වා ගැනීමට නියමිත දිනට පෙර වාර්ෂික ව්‍යාපාර බදු ගෙවීම කරන්න.',
          tm: 'அபராதங்களைத் தவிர்க்க நிர்ணயித்த தேதிக்கு முன் ஆண்டு வணிக வரியை செலுத்துங்கள்.'
        }
      }
    ],
    requiredDocuments: [
      {
        name: {
          en: 'Business Registration Certificate',
          si: 'ව්‍යාපාර ලියාපදිංචි සහතිකය',
          tm: 'வணிக பதிவு சான்றிதழ்'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Shop/Office Rental Agreement',
          si: 'වෙළඳසැල/කාර්යාල කුලී ගිවිසුම',
          tm: 'கடை/அலுவலக வாடகை ஒப்பந்தம்'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Owner\'s NIC',
          si: 'හිමිකරුගේ ජා.හැ.ප',
          tm: 'உரிமையாளரின் தே.அ.அ'
        },
        mandatory: true
      }
    ],
    fees: [
      {
        description: {
          en: 'Small Business (< 500 sq ft)',
          si: 'කුඩා ව්‍යාපාර (< 500 වර්ග අඩි)',
          tm: 'சிறு வணிகம் (< 500 சதுர அடி)'
        },
        amount: 'Rs. 5,000 per year'
      },
      {
        description: {
          en: 'Medium Business (500-2000 sq ft)',
          si: 'මධ්‍යම ව්‍යාපාර (500-2000 වර්ග අඩි)',
          tm: 'நடுத்தர வணிகம் (500-2000 சதுர அடி)'
        },
        amount: 'Rs. 15,000 per year'
      },
      {
        description: {
          en: 'Large Business (> 2000 sq ft)',
          si: 'විශාල ව්‍යාපාර (> 2000 වර්ග අඩි)',
          tm: 'பெரிய வணிகம் (> 2000 சதுர அடி)'
        },
        amount: 'Rs. 30,000 per year'
      }
    ],
    processingTime: {
      en: 'Immediate upon payment',
      si: 'ගෙවීමෙන් පසු ක්ෂණිකව',
      tm: 'கட்டணத்திற்கு பின் உடனடியாக'
    },
    formUrl: '/forms/business-tax.pdf',
    onlineAvailable: true
  },
  
  // Health Services
  {
    id: 'waste-collection',
    departmentId: 'health',
    name: {
      en: 'Waste Collection Service',
      si: 'අපද්‍රව්‍ය එකතු කිරීමේ සේවාව',
      tm: 'கழிவு சேகரிப்பு சேவை'
    },
    description: {
      en: 'Regular garbage collection service for residential and commercial properties.',
      si: 'නේවාසික සහ වාණිජ දේපල සඳහා නිතිපතා කසළ එකතු කිරීමේ සේවාව.',
      tm: 'குடியிருப்பு மற்றும் வணிக சொத்துகளுக்கான வழக்கமான குப்பை சேகரிப்பு சேவை.'
    },
    category: {
      en: 'Health & Sanitation',
      si: 'සෞඛ්‍ය සහ සනීපාරක්ෂාව',
      tm: 'சுகாதாரம் & சுகாதாரம்'
    },
    steps: [
      {
        title: {
          en: 'Register for Service',
          si: 'සේවාව සඳහා ලියාපදිංචි වන්න',
          tm: 'சேவைக்கு பதிவு செய்யுங்கள்'
        },
        description: {
          en: 'Fill out the waste collection registration form with your property details.',
          si: 'ඔබගේ දේපල විස්තර සහිත අපද්‍රව්‍ය එකතු කිරීමේ ලියාපදිංචි පෝරමය පුරවන්න.',
          tm: 'உங்கள் சொத்து விவரங்களுடன் கழிவு சேகரிப்பு பதிவு படிவத்தை பூர்த்தி செய்யுங்கள்.'
        }
      },
      {
        title: {
          en: 'Receive Schedule',
          si: 'කාලසටහන ලබා ගන්න',
          tm: 'அட்டவணையைப் பெறுங்கள்'
        },
        description: {
          en: 'You will be informed of the collection days and times for your area.',
          si: 'ඔබගේ ප්‍රදේශය සඳහා එකතු කරන දින සහ වේලාවන් ඔබට දැනුම් දෙනු ඇත.',
          tm: 'உங்கள் பகுதிக்கான சேகரிப்பு நாட்கள் மற்றும் நேரங்கள் உங்களுக்கு தெரிவிக்கப்படும்.'
        }
      },
      {
        title: {
          en: 'Prepare Waste',
          si: 'අපද්‍රව්‍ය සූදානම් කරන්න',
          tm: 'கழிவுகளை தயார் செய்யுங்கள்'
        },
        description: {
          en: 'Separate biodegradable and non-biodegradable waste. Place waste bins outside before collection time.',
          si: 'ජෛව හායනයට ලක්විය හැකි සහ ජෛව හායනයට ලක්විය නොහැකි අපද්‍රව්‍ය වෙන් කරන්න. එකතු කිරීමේ වේලාවට පෙර අපද්‍රව්‍ය බඳුන් පිටත තබන්න.',
          tm: 'உயிரியல் சிதைவடையக்கூடிய மற்றும் சிதைவடையாத கழிவுகளை பிரிக்கவும். சேகரிப்பு நேரத்திற்கு முன் கழிவு தொட்டிகளை வெளியே வைக்கவும்.'
        }
      },
      {
        title: {
          en: 'Collection',
          si: 'එකතු කිරීම',
          tm: 'சேகரிப்பு'
        },
        description: {
          en: 'Municipal workers will collect the waste according to the schedule.',
          si: 'නාගරික සේවකයින් කාලසටහනට අනුව අපද්‍රව්‍ය එකතු කරනු ඇත.',
          tm: 'நகராட்சி பணியாளர்கள் அட்டவணைக்கு ஏற்ப கழிவுகளை சேகரிப்பார்கள்.'
        }
      }
    ],
    requiredDocuments: [
      {
        name: {
          en: 'Property Assessment Number',
          si: 'දේපල තක්සේරු අංකය',
          tm: 'சொத்து மதிப்பீட்டு எண்'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Contact Details',
          si: 'සම්බන්ධ විස්තර',
          tm: 'தொடர்பு விவரங்கள்'
        },
        mandatory: true
      }
    ],
    fees: [
      {
        description: {
          en: 'Residential (monthly)',
          si: 'නේවාසික (මාසික)',
          tm: 'குடியிருப்பு (மாதாந்திர)'
        },
        amount: 'Rs. 200'
      },
      {
        description: {
          en: 'Commercial (monthly)',
          si: 'වාණිජ (මාසික)',
          tm: 'வணிக (மாதாந்திர)'
        },
        amount: 'Rs. 500-2000',
        note: {
          en: 'Based on waste volume',
          si: 'අපද්‍රව්‍ය පරිමාව මත පදනම්ව',
          tm: 'கழிவு அளவின் அடிப்படையில்'
        }
      }
    ],
    processingTime: {
      en: '3 working days',
      si: 'වැඩ කරන දින 3',
      tm: '3 வேலை நாட்கள்'
    },
    formUrl: '/forms/waste-collection.pdf',
    onlineAvailable: true,
    importantNotes: {
      en: [
        'Separate organic and inorganic waste',
        'Do not dispose of hazardous materials',
        'Bins should be placed outside by 6:00 AM on collection day',
        'Contact office for special waste disposal'
      ],
      si: [
        'කාබනික සහ අකාබනික අපද්‍රව්‍ය වෙන් කරන්න',
        'භයානක ද්‍රව්‍ය බැහැර නොකරන්න',
        'එකතු කරන දින උදෑසන 6:00 වන විට බඳුන් පිටත තැබිය යුතුය',
        'විශේෂ අපද්‍රව්‍ය බැහැර කිරීම සඳහා කාර්යාලය සම්බන්ධ කර ගන්න'
      ],
      tm: [
        'கரிம மற்றும் கனிம கழிவுகளை பிரிக்கவும்',
        'ஆபத்தான பொருட்களை அகற்ற வேண்டாம்',
        'சேகரிப்பு நாளில் காலை 6:00 மணிக்குள் தொட்டிகள் வெளியே வைக்கப்பட வேண்டும்',
        'சிறப்பு கழிவு அகற்றலுக்கு அலுவலகத்தை தொடர்பு கொள்ளுங்கள்'
      ]
    }
  },
  
  // Engineering Services
  {
    id: 'building-permit',
    departmentId: 'engineering',
    name: {
      en: 'Building Permit',
      si: 'ගොඩනැගිලි අවසරය',
      tm: 'கட்டிட அனுமதி'
    },
    description: {
      en: 'Approval for new construction, renovation, or structural modifications.',
      si: 'නව ඉදිකිරීම්, ප්‍රතිසංස්කරණය හෝ ව්‍යුහාත්මක වෙනස් කිරීම් සඳහා අනුමැතිය.',
      tm: 'புதிய கட்டுமானம், புதுப்பித்தல் அல்லது கட்டமைப்பு மாற்றங்களுக்கான ஒப்புதல்.'
    },
    category: {
      en: 'Development & Construction',
      si: 'සංවර්ධන සහ ඉදිකිරීම්',
      tm: 'மேம்பாடு & கட்டுமானம்'
    },
    steps: [
      {
        title: {
          en: 'Submit Application',
          si: 'අයදුම්පත ඉදිරිපත් කරන්න',
          tm: 'விண்ணப்பத்தை சமர்ப்பிக்கவும்'
        },
        description: {
          en: 'Fill the building permit application form with all required details and architectural plans.',
          si: 'සියලුම අවශ්‍ය විස්තර සහ වාස්තුවිද්‍යා සැලසුම් සමඟ ගොඩනැගිලි අවසර අයදුම්පත් පෝරමය පුරවන්න.',
          tm: 'தேவையான அனைத்து விவரங்கள் மற்றும் கட்டிடக்கலை திட்டங்களுடன் கட்டிட அனுமதி விண்ணப்ப படிவத்தை பூர்த்தி செய்யுங்கள்.'
        }
      },
      {
        title: {
          en: 'Site Inspection',
          si: 'භූමි පරීක්ෂණය',
          tm: 'தள ஆய்வு'
        },
        description: {
          en: 'Engineering team will visit the site to verify plans and assess suitability.',
          si: 'ඉංජිනේරු කණ්ඩායම සැලසුම් සත්‍යාපනය කිරීමට සහ යෝග්‍යතාව තක්සේරු කිරීමට භූමියට පැමිණෙනු ඇත.',
          tm: 'பொறியியல் குழு திட்டங்களை சரிபார்க்கவும் பொருத்தத்தை மதிப்பிடவும் தளத்தை பார்வையிடும்.'
        }
      },
      {
        title: {
          en: 'Technical Approval',
          si: 'තාක්ෂණික අනුමැතිය',
          tm: 'தொழில்நுட்ப ஒப்புதல்'
        },
        description: {
          en: 'Plans will be reviewed by the technical committee for compliance with building codes.',
          si: 'ගොඩනැගිලි නීති වලට අනුකූල වීම සඳහා සැලසුම් තාක්ෂණික කමිටුව විසින් සමාලෝචනය කෙරේ.',
          tm: 'திட்டங்கள் கட்டிட விதிகளுக்கு இணங்குவதற்காக தொழில்நுட்ப குழுவால் மதிப்பாய்வு செய்யப்படும்.'
        }
      },
      {
        title: {
          en: 'Pay Fees',
          si: 'ගාස්තු ගෙවන්න',
          tm: 'கட்டணங்களை செலுத்துங்கள்'
        },
        description: {
          en: 'Pay the applicable permit fees and obtain the payment receipt.',
          si: 'අදාළ අවසර ගාස්තු ගෙවා ගෙවීම් ලදුපත ලබා ගන්න.',
          tm: 'பொருந்தும் அனுமதி கட்டணங்களை செலுத்தி கட்டண ரசீதைப் பெறுங்கள்.'
        }
      },
      {
        title: {
          en: 'Receive Permit',
          si: 'අවසරය ලබා ගන්න',
          tm: 'அனுமதியைப் பெறுங்கள்'
        },
        description: {
          en: 'Collect your approved building permit and commence construction.',
          si: 'ඔබගේ අනුමත ගොඩනැගිලි අවසරය එකතු කර ඉදිකිරීම ආරම්භ කරන්න.',
          tm: 'உங்கள் அங்கீகரிக்கப்பட்ட கட்டிட அனுமதியை சேகரித்து கட்டுமானத்தை தொடங்குங்கள்.'
        }
      }
    ],
    requiredDocuments: [
      {
        name: {
          en: 'Land Deed',
          si: 'ඉඩම් ඔප්පුව',
          tm: 'நில பத்திரம்'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Architectural Plans (3 copies)',
          si: 'වාස්තුවිද්‍යා සැලසුම් (පිටපත් 3)',
          tm: 'கட்டிடக்கலை திட்டங்கள் (3 நகல்கள்)'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Survey Plan',
          si: 'මිනින්දෝරු සැලැස්ම',
          tm: 'அளவீட்டு திட்டம்'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Owner\'s NIC',
          si: 'හිමිකරුගේ ජා.හැ.ප',
          tm: 'உரிமையாளரின் தே.அ.அ'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Structural Engineer\'s Certificate',
          si: 'ව්‍යුහ ඉංජිනේරුගේ සහතිකය',
          tm: 'கட்டமைப்பு பொறியாளர் சான்றிதழ்'
        },
        description: {
          en: 'For buildings over 2 floors',
          si: 'මහල් 2කට වැඩි ගොඩනැගිලි සඳහා',
          tm: '2 மாடிக்கு மேல் கட்டிடங்களுக்கு'
        },
        mandatory: false
      }
    ],
    fees: [
      {
        description: {
          en: 'Single Story Building',
          si: 'තනි මහල් ගොඩනැගිල්ල',
          tm: 'ஒற்றை மாடி கட்டிடம்'
        },
        amount: 'Rs. 10,000'
      },
      {
        description: {
          en: 'Two Story Building',
          si: 'මහල් දෙකේ ගොඩනැගිල්ල',
          tm: 'இரண்டு மாடி கட்டிடம்'
        },
        amount: 'Rs. 20,000'
      },
      {
        description: {
          en: 'Three or More Stories',
          si: 'මහල් තුනක් හෝ වැඩි',
          tm: 'மூன்று அல்லது அதற்கு மேற்பட்ட மாடிகள்'
        },
        amount: 'Rs. 35,000+'
      }
    ],
    processingTime: {
      en: '14-21 working days',
      si: 'වැඩ කරන දින 14-21',
      tm: '14-21 வேலை நாட்கள்'
    },
    formUrl: '/forms/building-permit.pdf',
    onlineAvailable: false,
    importantNotes: {
      en: [
        'Construction must comply with national building codes',
        'Setback requirements must be maintained',
        'Regular inspections will be conducted during construction',
        'Permit is valid for 2 years from date of issue'
      ],
      si: [
        'ඉදිකිරීම් ජාතික ගොඩනැගිලි නීති වලට අනුකූල විය යුතුය',
        'පසුබැසීමේ අවශ්‍යතා පවත්වා ගත යුතුය',
        'ඉදිකිරීම් අතරතුර නිතිපතා පරීක්ෂණ පවත්වනු ලැබේ',
        'අවසරය නිකුත් කළ දින සිට වසර 2ක් සඳහා වලංගු වේ'
      ],
      tm: [
        'கட்டுமானம் தேசிய கட்டிட விதிகளுக்கு இணங்க வேண்டும்',
        'பின்னடைவு தேவைகள் பராமரிக்கப்பட வேண்டும்',
        'கட்டுமானத்தின் போது வழக்கமான ஆய்வுகள் நடத்தப்படும்',
        'அனுமதி வழங்கப்பட்ட தேதியிலிருந்து 2 ஆண்டுகளுக்கு செல்லுபடியாகும்'
      ]
    }
  },
  
  // Community Development Services
  {
    id: 'hall-booking',
    departmentId: 'community',
    name: {
      en: 'Community Hall Booking',
      si: 'ප්‍රජා ශාලා වෙන්කිරීම',
      tm: 'சமூக மண்டப முன்பதிவு'
    },
    description: {
      en: 'Reservation of community halls for events, meetings, and functions.',
      si: 'උත්සව, රැස්වීම් සහ උත්සව සඳහා ප්‍රජා ශාලා වෙන්කිරීම.',
      tm: 'நிகழ்வுகள், கூட்டங்கள் மற்றும் நிகழ்ச்சிகளுக்கான சமூக மண்டபங்களின் இடஒதுக்கீடு.'
    },
    category: {
      en: 'Community Facilities',
      si: 'ප්‍රජා පහසුකම්',
      tm: 'சமூக வசதிகள்'
    },
    steps: [
      {
        title: {
          en: 'Check Availability',
          si: 'ලබා ගත හැකි බව පරීක්ෂා කරන්න',
          tm: 'கிடைக்கும் தன்மையை சரிபார்க்கவும்'
        },
        description: {
          en: 'Visit the office or call to check hall availability for your preferred date.',
          si: 'ඔබගේ කැමති දිනය සඳහා ශාලාව ලබා ගත හැකි දැයි පරීක්ෂා කිරීමට කාර්යාලයට පැමිණෙන්න හෝ අමතන්න.',
          tm: 'உங்கள் விருப்பமான தேதிக்கு மண்டபம் கிடைக்குமா என்பதை சரிபார்க்க அலுவலகத்தை பார்வையிடவும் அல்லது அழைக்கவும்.'
        }
      },
      {
        title: {
          en: 'Submit Application',
          si: 'අයදුම්පත ඉදිරිපත් කරන්න',
          tm: 'விண்ணப்பத்தை சமர்ப்பிக்கவும்'
        },
        description: {
          en: 'Fill the hall booking form with event details and attach required documents.',
          si: 'උත්සව විස්තර සමඟ ශාලා වෙන්කිරීමේ පෝරමය පුරවා අවශ්‍ය ලියකියවිලි අමුණන්න.',
          tm: 'நிகழ்வு விவரங்களுடன் மண்டப முன்பதிவு படிவத்தை பூர்த்தி செய்து தேவையான ஆவணங்களை இணைக்கவும்.'
        }
      },
      {
        title: {
          en: 'Pay Deposit',
          si: 'තැන්පතුව ගෙවන්න',
          tm: 'வைப்புத்தொகை செலுத்துங்கள்'
        },
        description: {
          en: 'Pay the booking deposit and rental fees at the office counter.',
          si: 'කාර්යාල කවුන්ටරයේ වෙන්කිරීමේ තැන්පතුව සහ කුලී ගාස්තු ගෙවන්න.',
          tm: 'அலுவலக கவுன்டரில் முன்பதிவு வைப்புத்தொகை மற்றும் வாடகை கட்டணங்களை செலுத்துங்கள்.'
        }
      },
      {
        title: {
          en: 'Receive Confirmation',
          si: 'තහවුරු කිරීම ලබා ගන්න',
          tm: 'உறுதிப்படுத்தலைப் பெறுங்கள்'
        },
        description: {
          en: 'Get booking confirmation letter with hall keys collection details.',
          si: 'ශාලා යතුරු එකතු කිරීමේ විස්තර සහිත වෙන්කිරීමේ තහවුරු කිරීමේ ලිපිය ලබා ගන්න.',
          tm: 'மண்டப சாவிகள் சேகரிப்பு விவரங்களுடன் முன்பதிவு உறுதிப்படுத்தல் கடிதத்தைப் பெறுங்கள்.'
        }
      },
      {
        title: {
          en: 'Return Hall & Get Refund',
          si: 'ශාලාව ආපසු දී මුදල් ආපසු ගන්න',
          tm: 'மண்டபத்தை திருப்பி பணம் திரும்ப பெறுங்கள்'
        },
        description: {
          en: 'Return the hall in good condition to receive your deposit refund.',
          si: 'ඔබගේ තැන්පතු මුදල් ආපසු ලබා ගැනීමට ශාලාව හොඳ තත්ත්වයේ ආපසු දෙන්න.',
          tm: 'உங்கள் வைப்புத்தொகை திரும்பப் பெற மண்டபத்தை நல்ல நிலையில் திருப்பி அளிக்கவும்.'
        }
      }
    ],
    requiredDocuments: [
      {
        name: {
          en: 'Applicant\'s NIC',
          si: 'අයදුම්කරුගේ ජා.හැ.ප',
          tm: 'விண்ணப்பதாரர் தே.அ.அ'
        },
        mandatory: true
      },
      {
        name: {
          en: 'Event Details',
          si: 'උත්සව විස්තර',
          tm: 'நிகழ்வு விவரங்கள்'
        },
        mandatory: true
      }
    ],
    fees: [
      {
        description: {
          en: 'Hall Rental (per day)',
          si: 'ශාලා කුලිය (දිනකට)',
          tm: 'மண்டப வாடகை (ஒரு நாளுக்கு)'
        },
        amount: 'Rs. 5,000'
      },
      {
        description: {
          en: 'Refundable Deposit',
          si: 'ආපසු ගත හැකි තැන්පතුව',
          tm: 'திரும்பப்பெறக்கூடிய வைப்புத்தொகை'
        },
        amount: 'Rs. 10,000'
      },
      {
        description: {
          en: 'Electricity Charges',
          si: 'විදුලි ගාස්තු',
          tm: 'மின்சார கட்டணங்கள்'
        },
        amount: 'As per usage'
      }
    ],
    processingTime: {
      en: '1 working day',
      si: 'වැඩ කරන දින 1',
      tm: '1 வேலை நாள்'
    },
    formUrl: '/forms/hall-booking.pdf',
    onlineAvailable: true,
    importantNotes: {
      en: [
        'Book at least 7 days in advance',
        'No smoking or alcohol allowed in premises',
        'Hall must be vacated by 11:00 PM',
        'Organizer responsible for any damages'
      ],
      si: [
        'අවම වශයෙන් දින 7කට පෙර වෙන් කරවා ගන්න',
        'පරිශ්‍රයේ දුම්පානය හෝ මත්පැන් අවසර නැත',
        'රාත්‍රී 11:00 වන විට ශාලාව හිස් කළ යුතුය',
        'ඕනෑම හානියක් සඳහා සංවිධායකයා වගකියයුතුය'
      ],
      tm: [
        'குறைந்தது 7 நாட்களுக்கு முன்பதிவு செய்யுங்கள்',
        'வளாகத்தில் புகைபிடித்தல் அல்லது மது அனுமதி இல்லை',
        'மண்டபம் இரவு 11:00 மணிக்குள் காலி செய்யப்பட வேண்டும்',
        'எந்த சேதத்திற்கும் ஏற்பாட்டாளர் பொறுப்பு'
      ]
    }
  }
];

// Service Categories for organization
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'tax-services',
    name: {
      en: 'Tax Services',
      si: 'බදු සේවා',
      tm: 'வரி சேவைகள்'
    },
    services: ['assessment-tax', 'acreage-tax', 'business-tax']
  },
  {
    id: 'health-sanitation',
    name: {
      en: 'Health & Sanitation',
      si: 'සෞඛ්‍ය සහ සනීපාරක්ෂාව',
      tm: 'சுகாதாரம் & சுகாதாரம்'
    },
    services: ['waste-collection']
  },
  {
    id: 'development-construction',
    name: {
      en: 'Development & Construction',
      si: 'සංවර්ධන සහ ඉදිකිරීම්',
      tm: 'மேம்பாடு & கட்டுமானம்'
    },
    services: ['building-permit']
  },
  {
    id: 'community-facilities',
    name: {
      en: 'Community Facilities',
      si: 'ප්‍රජා පහසුකම්',
      tm: 'சமூக வசதிகள்'
    },
    services: ['hall-booking']
  }
];
