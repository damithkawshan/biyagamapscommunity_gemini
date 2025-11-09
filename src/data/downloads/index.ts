export interface DownloadItem {
  id: string;
  title: {
    en: string;
    si: string;
    tm: string;
  };
  description: {
    en: string;
    si: string;
    tm: string;
  };
  category: 'legal' | 'reports' | 'procurement' | 'other';
  fileUrl: string;
  fileSize: string;
  fileType: 'PDF' | 'DOC' | 'XLS';
  uploadDate: Date;
  icon: string;
}

export const downloadCategories = [
  {
    id: 'legal',
    name: {
      en: 'Legal Documents',
      si: 'නීතිමය ලේඛන',
      tm: 'சட்ட ஆவணங்கள்'
    },
    icon: 'Scale'
  },
  {
    id: 'reports',
    name: {
      en: 'Reports & Budget',
      si: 'වාර්තා සහ අයවැය',
      tm: 'அறிக்கைகள் & பட்ஜெட்'
    },
    icon: 'FileText'
  },
  {
    id: 'procurement',
    name: {
      en: 'Procurement & Tenders',
      si: 'ප්‍රසම්පාදන සහ ටෙන්ඩර්',
      tm: 'கொள்முதல் & டெண்டர்கள்'
    },
    icon: 'Briefcase'
  }
];

export const downloads: DownloadItem[] = [
  {
    id: 'citizens-charter',
    title: {
      en: "Citizen's Charter",
      si: "පුරවැසි ප්‍රඥප්තිය",
      tm: "குடிமக்கள் சாசனம்"
    },
    description: {
      en: 'Service standards and commitments to citizens',
      si: 'පුරවැසියන්ට සේවා ප්‍රමිති සහ කැපවීම්',
      tm: 'குடிமக்களுக்கான சேவை தரநிலைகள் மற்றும் உறுதிமொழிகள்'
    },
    category: 'legal',
    fileUrl: '/downloads/citizens-charter.pdf',
    fileSize: '2.5 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-15'),
    icon: 'FileText'
  },
  {
    id: 'acts',
    title: {
      en: 'Acts & Regulations',
      si: 'පනත්',
      tm: 'சட்டங்கள்'
    },
    description: {
      en: 'Local government acts and regulations',
      si: 'පළාත් පාලන පනත් සහ රෙගුලාසි',
      tm: 'உள்ளாட்சி சட்டங்கள் மற்றும் விதிமுறைகள்'
    },
    category: 'legal',
    fileUrl: '/downloads/acts.pdf',
    fileSize: '5.8 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-10'),
    icon: 'Scale'
  },
  {
    id: 'circulars',
    title: {
      en: 'Circulars',
      si: 'චක්‍රලේඛ',
      tm: 'சுற்றறிக்கைகள்'
    },
    description: {
      en: 'Official circulars and notifications',
      si: 'නිල චක්‍රලේඛ සහ දැනුම්දීම්',
      tm: 'அதிகாரப்பூர்வ சுற்றறிக்கைகள்'
    },
    category: 'legal',
    fileUrl: '/downloads/circulars.pdf',
    fileSize: '3.2 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-20'),
    icon: 'FileText'
  },
  {
    id: 'gazette',
    title: {
      en: 'Gazette Notifications',
      si: 'ගැසට් පත්',
      tm: 'வர்த்தமானி அறிவிப்புகள்'
    },
    description: {
      en: 'Government gazette publications',
      si: 'රජයේ ගැසට් ප්‍රකාශන',
      tm: 'அரசு வர்த்தமானி வெளியீடுகள்'
    },
    category: 'legal',
    fileUrl: '/downloads/gazette.pdf',
    fileSize: '4.1 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-18'),
    icon: 'Newspaper'
  },
  {
    id: 'council-reports',
    title: {
      en: 'Council Reports',
      si: 'සභා වාර්තා',
      tm: 'சபை அறிக்கைகள்'
    },
    description: {
      en: 'Annual and periodic council activity reports',
      si: 'වාර්ෂික සහ කාලීන සභා ක්‍රියාකාරකම් වාර්තා',
      tm: 'ஆண்டு மற்றும் காலமுறை சபை செயல்பாட்டு அறிக்கைகள்'
    },
    category: 'reports',
    fileUrl: '/downloads/council-reports-2023.pdf',
    fileSize: '6.7 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-05'),
    icon: 'FileBarChart'
  },
  {
    id: 'budget',
    title: {
      en: 'Budget & Financial Reports',
      si: 'අයවැය සහ මූල්‍ය විවරණ',
      tm: 'பட்ஜெட் & நிதி அறிக்கைகள்'
    },
    description: {
      en: 'Annual budget and financial statements',
      si: 'වාර්ෂික අයවැය සහ මූල්‍ය ප්‍රකාශන',
      tm: 'ஆண்டு பட்ஜெட் மற்றும் நிதி அறிக்கைகள்'
    },
    category: 'reports',
    fileUrl: '/downloads/budget-2024.pdf',
    fileSize: '8.3 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-01'),
    icon: 'DollarSign'
  },
  {
    id: 'procurement',
    title: {
      en: 'Procurement Applications',
      si: 'ප්‍රසම්පාදන අයදුම්පත්',
      tm: 'கொள்முதல் விண்ணப்பங்கள்'
    },
    description: {
      en: 'Current procurement opportunities and applications',
      si: 'වත්මන් ප්‍රසම්පාදන අවස්ථා සහ අයදුම්පත්',
      tm: 'தற்போதைய கொள்முதல் வாய்ப்புகள் மற்றும் விண்ணப்பங்கள்'
    },
    category: 'procurement',
    fileUrl: '/downloads/procurement-2024.pdf',
    fileSize: '1.9 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-22'),
    icon: 'Briefcase'
  },
  {
    id: 'newspaper-ads',
    title: {
      en: 'Newspaper Advertisements',
      si: 'පුවත්පත් අයදුම්පත්',
      tm: 'செய்தித்தாள் விளம்பரங்கள்'
    },
    description: {
      en: 'Public notices and advertisements',
      si: 'මහජන දැන්වීම් සහ ප්‍රචාරණ',
      tm: 'பொது அறிவிப்புகள் மற்றும் விளம்பரங்கள்'
    },
    category: 'procurement',
    fileUrl: '/downloads/newspaper-ads.pdf',
    fileSize: '3.5 MB',
    fileType: 'PDF',
    uploadDate: new Date('2024-01-25'),
    icon: 'Newspaper'
  }
];
