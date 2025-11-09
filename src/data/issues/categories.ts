import { IssueCategory } from './types';

export const issueCategories: IssueCategory[] = [
  {
    id: 'roads',
    name: {
      en: 'Roads & Infrastructure',
      si: 'මාර්ග සහ යටිතල පහසුකම්',
      tm: 'சாலைகள் & உள்கட்டமைப்பு'
    },
    description: {
      en: 'Report issues related to roads, drains, street lights, and infrastructure',
      si: 'මාර්ග, කාණු, වීදි ආලෝක සහ යටිතල පහසුකම් සම්බන්ධ ගැටළු වාර්තා කරන්න',
      tm: 'சாலைகள், வடிகால்கள், தெரு விளக்குகள் மற்றும் உள்கட்டமைப்பு தொடர்பான சிக்கல்களை புகாரளிக்கவும்'
    },
    icon: 'road',
    color: '#2563EB',
    departmentId: 'engineering',
    types: ['2']
  },
  {
    id: 'waste',
    name: {
      en: 'Waste Management',
      si: 'අපද්‍රව්‍ය කළමණාකරණය',
      tm: 'கழிவு மேலாண்மை'
    },
    description: {
      en: 'Report garbage collection, waste disposal, and sanitation issues',
      si: 'කසළ එකතු කිරීම, අපද්‍රව්‍ය බැහැර කිරීම සහ සනීපාරක්ෂක ගැටළු වාර්තා කරන්න',
      tm: 'குப்பை சேகரிப்பு, கழிவு அகற்றல் மற்றும் சுகாதார சிக்கல்களை புகாரளிக்கவும்'
    },
    icon: 'trash',
    color: '#16A34A',
    departmentId: 'health',
    types: ['3']
  },
  {
    id: 'water',
    name: {
      en: 'Water & Drainage',
      si: 'ජලය සහ ජල බැස්ම',
      tm: 'நீர் & வடிகால்'
    },
    description: {
      en: 'Report water supply, drainage, and flooding issues',
      si: 'ජල සැපයුම, ජල බැස්ම සහ ගංවතුර ගැටළු වාර්තා කරන්න',
      tm: 'நீர் வழங்கல், வடிகால் மற்றும் வெள்ள சிக்கல்களை புகாரளிக்கவும்'
    },
    icon: 'droplet',
    color: '#0891B2',
    departmentId: 'engineering',
    types: ['6', '7']
  },
  {
    id: 'environment',
    name: {
      en: 'Environment & Public Health',
      si: 'පරිසරය සහ මහජන සෞඛ්‍යය',
      tm: 'சுற்றுச்சூழல் & பொது சுகாதாரம்'
    },
    description: {
      en: 'Report environmental pollution, public health hazards, and nuisances',
      si: 'පරිසර දූෂණය, මහජන සෞඛ්‍ය උපද්‍රව සහ කරදර වාර්තා කරන්න',
      tm: 'சுற்றுச்சூழல் மாசுபாடு, பொது சுகாதார அபாயங்கள் மற்றும் தொல்லைகளை புகாரளிக்கவும்'
    },
    icon: 'leaf',
    color: '#16A34A',
    departmentId: 'health',
    types: ['5']
  },
  {
    id: 'streetlights',
    name: {
      en: 'Street Lights',
      si: 'වීදි ආලෝක',
      tm: 'தெரு விளக்குகள்'
    },
    description: {
      en: 'Report non-functioning or damaged street lights',
      si: 'ක්‍රියා නොකරන හෝ හානි වූ වීදි ආලෝක වාර්තා කරන්න',
      tm: 'செயல்படாத அல்லது சேதமடைந்த தெரு விளக்குகளை புகாரளிக்கவும்'
    },
    icon: 'lightbulb',
    color: '#F59E0B',
    departmentId: 'engineering',
    types: ['1']
  },
  {
    id: 'buildings',
    name: {
      en: 'Buildings & Construction',
      si: 'ගොඩනැගිලි සහ ඉදිකිරීම්',
      tm: 'கட்டிடங்கள் & கட்டுமானம்'
    },
    description: {
      en: 'Report illegal constructions, building violations, and safety issues',
      si: 'නීති විරෝධී ඉදිකිරීම්, ගොඩනැගිලි උල්ලංඝනයන් සහ ආරක්ෂිත ගැටළු වාර්තා කරන්න',
      tm: 'சட்ட விரோத கட்டுமானங்கள், கட்டிட மீறல்கள் மற்றும் பாதுகாப்பு சிக்கல்களை புகாரளிக்கவும்'
    },
    icon: 'building',
    color: '#DC2626',
    departmentId: 'engineering',
    types: ['4']
  },
  {
    id: 'community',
    name: {
      en: 'Community Facilities',
      si: 'ප්‍රජා පහසුකම්',
      tm: 'சமூக வசதிகள்'
    },
    description: {
      en: 'Report issues with parks, playgrounds, and community centers',
      si: 'උද්‍යාන, ක්‍රීඩා ප්‍රදේශ සහ ප්‍රජා මධ්‍යස්ථාන සම්බන්ධ ගැටළු වාර්තා කරන්න',
      tm: 'பூங்காக்கள், விளையாட்டு மைதானங்கள் மற்றும் சமூக மையங்கள் சிக்கல்களை புகாரளிக்கவும்'
    },
    icon: 'users',
    color: '#9333EA',
    departmentId: 'community',
    types: []
  },
  {
    id: 'other',
    name: {
      en: 'Other Issues',
      si: 'වෙනත් ගැටළු',
      tm: 'பிற சிக்கல்கள்'
    },
    description: {
      en: 'Report any other issues not covered in the categories above',
      si: 'ඉහත කාණ්ඩවල ආවරණය නොවන වෙනත් ගැටළු වාර්තා කරන්න',
      tm: 'மேலே உள்ள வகைகளில் சேர்க்கப்படாத வேறு சிக்கல்களை புகாரளிக்கவும்'
    },
    icon: 'alert-circle',
    color: '#6B7280',
    departmentId: 'admin',
    types: ['8']
  }
];