import { IssueCategory, IssueType } from './types';

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
    departmentId: 'engineering'
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
    departmentId: 'health'
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
    departmentId: 'engineering'
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
    departmentId: 'health'
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
    departmentId: 'engineering'
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
    departmentId: 'engineering'
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
    departmentId: 'community'
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
    departmentId: 'admin'
  }
];

export const issueTypes: IssueType[] = [
  // Roads & Infrastructure
  { id: 'pothole', categoryId: 'roads', name: { en: 'Potholes', si: 'වළවල්', tm: 'குழிகள்' } },
  { id: 'road-damage', categoryId: 'roads', name: { en: 'Road Damage', si: 'මාර්ග හානි', tm: 'சாலை சேதம்' } },
  { id: 'drain-block', categoryId: 'roads', name: { en: 'Blocked Drain', si: 'අවහිර වූ කාණුව', tm: 'அடைக்கப்பட்ட வடிகால்' } },
  { id: 'drain-damage', categoryId: 'roads', name: { en: 'Damaged Drain', si: 'හානි වූ කාණුව', tm: 'சேதமடைந்த வடிகால்' } },
  
  // Waste Management
  { id: 'missed-collection', categoryId: 'waste', name: { en: 'Missed Collection', si: 'එකතු කිරීම මග හැරුණි', tm: 'தவறிய சேகரிப்பு' } },
  { id: 'illegal-dump', categoryId: 'waste', name: { en: 'Illegal Dumping', si: 'නීති විරෝධී බැහැර කිරීම', tm: 'சட்டவிரோத குப்பை கொட்டுதல்' } },
  { id: 'bin-damage', categoryId: 'waste', name: { en: 'Damaged Bin', si: 'හානි වූ බඳුන', tm: 'சேதமடைந்த தொட்டி' } },
  { id: 'overflowing-bin', categoryId: 'waste', name: { en: 'Overflowing Bin', si: 'පිටාර යන බඳුන', tm: 'நிரம்பி வழியும் தொட்டி' } },
  
  // Water & Drainage
  { id: 'water-leak', categoryId: 'water', name: { en: 'Water Leak', si: 'ජල කාන්දුවීම', tm: 'நீர் கசிவு' } },
  { id: 'no-water', categoryId: 'water', name: { en: 'No Water Supply', si: 'ජල සැපයුමක් නැත', tm: 'நீர் வழங்கல் இல்லை' } },
  { id: 'flooding', categoryId: 'water', name: { en: 'Flooding', si: 'ගංවතුර', tm: 'வெள்ளம்' } },
  { id: 'stagnant-water', categoryId: 'water', name: { en: 'Stagnant Water', si: 'රැඳී පවතින ජලය', tm: 'தேங்கி நிற்கும் நீர்' } },
  
  // Environment
  { id: 'pollution', categoryId: 'environment', name: { en: 'Pollution', si: 'දූෂණය', tm: 'மாசுபாடு' } },
  { id: 'pest-control', categoryId: 'environment', name: { en: 'Pest Control Needed', si: 'පළිබෝධ පාලනය අවශ්‍යයි', tm: 'பூச்சி கட்டுப்பாடு தேவை' } },
  { id: 'stray-animals', categoryId: 'environment', name: { en: 'Stray Animals', si: 'අයාලේ යන සතුන්', tm: 'தெரு விலங்குகள்' } },
  { id: 'noise-pollution', categoryId: 'environment', name: { en: 'Noise Pollution', si: 'ශබ්ද දූෂණය', tm: 'ஒலி மாசுபாடு' } },
  
  // Street Lights
  { id: 'light-not-working', categoryId: 'streetlights', name: { en: 'Not Working', si: 'ක්‍රියා නොකරයි', tm: 'வேலை செய்யவில்லை' } },
  { id: 'light-damaged', categoryId: 'streetlights', name: { en: 'Damaged', si: 'හානි වී ඇත', tm: 'சேதமடைந்தது' } },
  { id: 'light-daytime', categoryId: 'streetlights', name: { en: 'On During Daytime', si: 'දිවා කාලයේ දැල්වී ඇත', tm: 'பகல் நேரத்தில் எரிகிறது' } },
  
  // Buildings
  { id: 'illegal-construction', categoryId: 'buildings', name: { en: 'Illegal Construction', si: 'නීති විරෝධී ඉදිකිරීම', tm: 'சட்டவிரோத கட்டுமானம்' } },
  { id: 'building-safety', categoryId: 'buildings', name: { en: 'Safety Hazard', si: 'ආරක්ෂිත උපද්‍රවය', tm: 'பாதுகாப்பு ஆபத்து' } },
  { id: 'abandoned-building', categoryId: 'buildings', name: { en: 'Abandoned Building', si: 'අතහැර දමන ලද ගොඩනැගිල්ල', tm: 'கைவிடப்பட்ட கட்டிடம்' } },
  
  // Community
  { id: 'park-maintenance', categoryId: 'community', name: { en: 'Park Maintenance', si: 'උද්‍යාන නඩත්තුව', tm: 'பூங்கா பராமரிப்பு' } },
  { id: 'playground-damage', categoryId: 'community', name: { en: 'Playground Damage', si: 'ක්‍රීඩා ප්‍රදේශ හානි', tm: 'விளையாட்டு மைதான சேதம்' } },
  { id: 'facility-closed', categoryId: 'community', name: { en: 'Facility Closed', si: 'පහසුකම වසා ඇත', tm: 'வசதி மூடப்பட்டுள்ளது' } },
  
  // Other
  { id: 'other', categoryId: 'other', name: { en: 'Other', si: 'වෙනත්', tm: 'பிற' } }
];
