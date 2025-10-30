import { Department } from './types';

export const departments: Department[] = [
  {
    id: "revenue",
    name: {
      en: "Revenue Division",
      si: "ආදායම් අංශය",
      tm: "வருவாய் பிரிவு"
    },
    description: {
      en: "Handles all tax assessments, collections, and revenue-related services for the Pradeshiya Sabha.",
      si: "ප්‍රාදේශීය සභාව සඳහා සියලුම බදු තක්සේරු, එකතු කිරීම් සහ ආදායම් ආශ්‍රිත සේවා හසුරුවයි.",
      tm: "பிரதேச சபைக்கான அனைத்து வரி மதிப்பீடுகள், வசூல் மற்றும் வருவாய் தொடர்பான சேவைகளை கையாளுகிறது."
    },
    inCharge: {
      name: {
        en: "Mr. K.A.S. Perera",
        si: "මයා කේ.ඒ.එස්. පෙරේරා",
        tm: "திரு. கே.ஏ.எஸ். பெரேரா"
      },
      position: {
        en: "Chief Revenue Officer",
        si: "ප්‍රධාන ආදායම් නිලධාරී",
        tm: "தலைமை வருவாய் அதிகாரி"
      },
      phone: "+94 11 2234567",
      email: "revenue@biyagama.ps.lk"
    },
    color: "#DC2626"
  },
  {
    id: "health",
    name: {
      en: "Public Health Services",
      si: "මහජන සෞඛ්‍ය සේවා",
      tm: "பொது சுகாதார சேவைகள்"
    },
    description: {
      en: "Manages public health initiatives, waste management, and environmental health services.",
      si: "මහජන සෞඛ්‍ය මුලපිරීම්, අපද්‍රව්‍ය කළමණාකරණය සහ පරිසර සෞඛ්‍ය සේවා කළමණාකරණය කරයි.",
      tm: "பொது சுகாதார முன்முயற்சிகள், கழிவு மேலாண்மை மற்றும் சுற்றுச்சூழல் சுகாதார சேவைகளை நிர்வகிக்கிறது."
    },
    inCharge: {
      name: {
        en: "Dr. N.R. Fernando",
        si: "වෛද්‍ය එන්.ආර්. ප්‍රනාන්දු",
        tm: "டாக்டர். என்.ஆர். பெர்னாண்டோ"
      },
      position: {
        en: "Chief Medical Officer of Health",
        si: "ප්‍රධාන වෛද්‍ය සෞඛ්‍ය නිලධාරී",
        tm: "தலைமை மருத்துவ சுகாதார அதிகாரி"
      },
      phone: "+94 11 2234568",
      email: "health@biyagama.ps.lk"
    },
    color: "#16A34A"
  },
  {
    id: "engineering",
    name: {
      en: "Engineering Services",
      si: "ඉංජිනේරු සේවා",
      tm: "பொறியியல் சேவைகள்"
    },
    description: {
      en: "Oversees infrastructure development, road maintenance, and building permits.",
      si: "යටිතල පහසුකම් සංවර්ධනය, මාර්ග නඩත්තුව සහ ගොඩනැගිලි අවසර අධීක්ෂණය කරයි.",
      tm: "உள்கட்டமைப்பு மேம்பாடு, சாலை பராமரிப்பு மற்றும் கட்டிட அனுமதிகளை மேற்பார்வையிடுகிறது."
    },
    inCharge: {
      name: {
        en: "Eng. S.M. Silva",
        si: "ඉංජිනේරු එස්.එම්. සිල්වා",
        tm: "பொறியாளர். எஸ்.எம். சில்வா"
      },
      position: {
        en: "Chief Engineer",
        si: "ප්‍රධාන ඉංජිනේරු",
        tm: "தலைமை பொறியாளர்"
      },
      phone: "+94 11 2234569",
      email: "engineering@biyagama.ps.lk"
    },
    color: "#2563EB"
  },
  {
    id: "community",
    name: {
      en: "Community Development",
      si: "ප්‍රජා සංවර්ධන",
      tm: "சமூக மேம்பாடு"
    },
    description: {
      en: "Manages community facilities, libraries, sports grounds, and cultural programs.",
      si: "ප්‍රජා පහසුකම්, පුස්තකාල, ක්‍රීඩාංගණ සහ සංස්කෘතික වැඩසටහන් කළමනාකරණය කරයි.",
      tm: "சமூக வசதிகள், நூலகங்கள், விளையாட்டு மைதானங்கள் மற்றும் கலாச்சார திட்டங்களை நிர்வகிக்கிறது."
    },
    inCharge: {
      name: {
        en: "Ms. R.D. Jayasinghe",
        si: "තරුණිය ආර්.ඩී. ජයසිංහ",
        tm: "திருமதி. ஆர்.டி. ஜயசிங்க"
      },
      position: {
        en: "Community Development Officer",
        si: "ප්‍රජා සංවර්ධන නිලධාරී",
        tm: "சமூக மேம்பாட்டு அதிகாரி"
      },
      phone: "+94 11 2234570",
      email: "community@biyagama.ps.lk"
    },
    color: "#9333EA"
  },
  {
    id: "admin",
    name: {
      en: "Administration",
      si: "පරිපාලන",
      tm: "நிர்வாகம்"
    },
    description: {
      en: "Handles general administrative matters, licensing, and permits.",
      si: "සාමාන්‍ය පරිපාලන කටයුතු, බලපත්‍ර සහ අවසර හසුරුවයි.",
      tm: "பொது நிர்வாக விஷயங்கள், உரிமம் மற்றும் அனுமதிகளை கையாளுகிறது."
    },
    inCharge: {
      name: {
        en: "Mr. P.L. Wickramasinghe",
        si: "මයා පී.එල්. වික්‍රමසිංහ",
        tm: "திரு. பி.எல். விக்ரமசிங்க"
      },
      position: {
        en: "Secretary",
        si: "ලේකම්",
        tm: "செயலாளர்"
      },
      phone: "+94 11 2234571",
      email: "admin@biyagama.ps.lk"
    },
    color: "#0891B2"
  }
];
