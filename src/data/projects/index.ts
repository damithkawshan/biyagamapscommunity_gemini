export interface Project {
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
  category: string;
  ward?: string;
  status: 'planning' | 'ongoing' | 'completed' | 'on-hold';
  progress: number; // 0-100
  startDate: Date;
  expectedEndDate: Date;
  actualEndDate?: Date;
  budget: number;
  spent: number;
  contractor?: {
    en: string;
    si: string;
    tm: string;
  };
  updates?: ProjectUpdate[];
  images?: string[];
}

export interface ProjectUpdate {
  id: string;
  date: Date;
  description: {
    en: string;
    si: string;
    tm: string;
  };
  progress: number;
}

export const projectCategories = [
  {
    id: 'infrastructure',
    name: {
      en: 'Infrastructure',
      si: 'යටිතල පහසුකම්',
      tm: 'உள்கட்டமைப்பு'
    },
    icon: 'Building2',
    color: '#3b82f6'
  },
  {
    id: 'roads',
    name: {
      en: 'Roads & Drainage',
      si: 'මාර්ග සහ ජලාපවහන',
      tm: 'சாலைகள் & வடிகால்'
    },
    icon: 'Route',
    color: '#8b5cf6'
  },
  {
    id: 'environment',
    name: {
      en: 'Environmental',
      si: 'පරිසර',
      tm: 'சுற்றுச்சூழல்'
    },
    icon: 'Leaf',
    color: '#10b981'
  },
  {
    id: 'community',
    name: {
      en: 'Community Development',
      si: 'ප්‍රජා සංවර්ධනය',
      tm: 'சமூக மேம்பாடு'
    },
    icon: 'Users',
    color: '#f59e0b'
  }
];

export const projects: Project[] = [
  {
    id: 'road-expansion-1',
    title: {
      en: 'Main Street Road Expansion',
      si: 'ප්‍රධාන වීදියේ මාර්ග පුළුල් කිරීම',
      tm: 'பிரதான வீதி சாலை விரிவாக்கம்'
    },
    description: {
      en: 'Expansion of Main Street from 2 lanes to 4 lanes with improved drainage system',
      si: 'වැඩිදියුණු කළ ජලාපවහන පද්ධතියක් සහිත මංතීරු 2ක සිට මංතීරු 4ක් දක්වා ප්‍රධාන වීදිය පුළුල් කිරීම',
      tm: 'மேம்படுத்தப்பட்ட வடிகால் அமைப்புடன் பிரதான வீதியை 2 வழிகளிலிருந்து 4 வழிகளாக விரிவாக்கம்'
    },
    category: 'roads',
    ward: 'Ward 01',
    status: 'ongoing',
    progress: 65,
    startDate: new Date('2023-08-01'),
    expectedEndDate: new Date('2024-06-30'),
    budget: 45000000,
    spent: 29250000,
    contractor: {
      en: 'ABC Construction (Pvt) Ltd',
      si: 'ABC ඉදිකිරීම් (පුද්) සමාගම',
      tm: 'ABC கட்டுமான (பிரை) லிமிடெட்'
    },
    updates: [
      {
        id: 'update-1',
        date: new Date('2024-01-15'),
        description: {
          en: 'Completed drainage installation on northern section',
          si: 'උතුරු කොටසේ ජලාපවහන ස්ථාපනය සම්පූර්ණයි',
          tm: 'வடக்கு பகுதியில் வடிகால் நிறுவல் முடிந்தது'
        },
        progress: 65
      },
      {
        id: 'update-2',
        date: new Date('2023-12-10'),
        description: {
          en: 'Road widening completed for 60% of the stretch',
          si: 'දිග 60% ක මාර්ග පුළුල් කිරීම සම්පූර්ණයි',
          tm: 'நீளத்தின் 60% சாலை விரிவாக்கம் முடிந்தது'
        },
        progress: 55
      }
    ]
  },
  {
    id: 'community-center',
    title: {
      en: 'Community Center Construction - Ward 03',
      si: 'ප්‍රජා මධ්‍යස්ථාන ඉදිකිරීම - වාට්ටුව 03',
      tm: 'சமூக மையம் கட்டுமானம் - வார்டு 03'
    },
    description: {
      en: 'New multi-purpose community center with hall, library, and meeting rooms',
      si: 'ශාලාව, පුස්තකාලය සහ රැස්වීම් කාමර සහිත නව බහුකාර්ය ප්‍රජා මධ්‍යස්ථානය',
      tm: 'மண்டபம், நூலகம் மற்றும் கூட்ட அறைகளுடன் புதிய பல்நோக்கு சமூக மையம்'
    },
    category: 'community',
    ward: 'Ward 03',
    status: 'ongoing',
    progress: 45,
    startDate: new Date('2023-10-01'),
    expectedEndDate: new Date('2024-09-30'),
    budget: 28000000,
    spent: 12600000,
    contractor: {
      en: 'XYZ Builders',
      si: 'XYZ ඉදිකිරීම්කරුවන්',
      tm: 'XYZ கட்டுபவர்கள்'
    },
    updates: [
      {
        id: 'update-1',
        date: new Date('2024-01-20'),
        description: {
          en: 'Foundation and ground floor structure completed',
          si: 'අත්තිවාරම් සහ බිම් මහල ව්‍යුහය සම්පූර්ණයි',
          tm: 'அடித்தளம் மற்றும் தரைத்தள கட்டமைப்பு முடிந்தது'
        },
        progress: 45
      }
    ]
  },
  {
    id: 'waste-management',
    title: {
      en: 'Integrated Waste Management System',
      si: 'ඒකාබද්ධ අපද්‍රව්‍ය කළමනාකරණ පද්ධතිය',
      tm: 'ஒருங்கிணைந்த கழிவு மேலாண்மை அமைப்பு'
    },
    description: {
      en: 'Implementation of modern waste segregation and recycling facilities',
      si: 'නවීන අපද්‍රව්‍ය වෙන් කිරීම සහ ප්‍රතිචක්‍රීකරණ පහසුකම් ක්‍රියාත්මක කිරීම',
      tm: 'நவீன கழிவு பிரித்தல் மற்றும் மறுசுழற்சி வசதிகளை செயல்படுத்துதல்'
    },
    category: 'environment',
    status: 'ongoing',
    progress: 30,
    startDate: new Date('2023-11-15'),
    expectedEndDate: new Date('2024-08-31'),
    budget: 35000000,
    spent: 10500000,
    contractor: {
      en: 'Green Solutions Lanka',
      si: 'හරිත විසඳුම් ලංකා',
      tm: 'பச்சை தீர்வுகள் இலங்கை'
    },
    updates: [
      {
        id: 'update-1',
        date: new Date('2024-01-18'),
        description: {
          en: 'Site preparation and equipment procurement ongoing',
          si: 'ස්ථාන සූදානම සහ උපකරණ ප්‍රසම්පාදනය සිදුවෙමින් පවතී',
          tm: 'தள தயாரிப்பு மற்றும் உபகரண கொள்முதல் நடைபெறுகிறது'
        },
        progress: 30
      }
    ]
  },
  {
    id: 'streetlight-upgrade',
    title: {
      en: 'LED Street Light Upgrade Project',
      si: 'LED වීදි ලාම්පු උත්ශ්‍රේණි කිරීමේ ව්‍යාපෘතිය',
      tm: 'LED தெரு விளக்கு மேம்படுத்தல் திட்டம்'
    },
    description: {
      en: 'Replacing 800 conventional street lights with energy-efficient LED lights',
      si: 'සාම්ප්‍රදායික වීදි ලාම්පු 800ක් බලශක්ති කාර්යක්ෂම LED ලාම්පු සමඟ ප්‍රතිස්ථාපනය කිරීම',
      tm: 'வழக்கமான தெரு விளக்குகள் 800ஐ ஆற்றல்-திறனுள்ள LED விளக்குகளுடன் மாற்றுதல்'
    },
    category: 'infrastructure',
    status: 'ongoing',
    progress: 78,
    startDate: new Date('2023-09-01'),
    expectedEndDate: new Date('2024-03-31'),
    budget: 18000000,
    spent: 14040000,
    contractor: {
      en: 'Bright Light Systems',
      si: 'බ්‍රයිට් ලයිට් සිස්ටම්ස්',
      tm: 'பிரைட் லைட் சிஸ்டம்ஸ்'
    },
    updates: [
      {
        id: 'update-1',
        date: new Date('2024-01-25'),
        description: {
          en: '625 out of 800 lights have been installed and commissioned',
          si: 'ලාම්පු 800න් 625ක් ස්ථාපනය කර ක්‍රියාත්මක කර ඇත',
          tm: '800 விளக்குகளில் 625 நிறுவப்பட்டு இயக்கப்பட்டுள்ளன'
        },
        progress: 78
      }
    ]
  },
  {
    id: 'drainage-system',
    title: {
      en: 'Flood Prevention Drainage System - Ward 05',
      si: 'ගංවතුර වැළැක්වීමේ ජලාපවහන පද්ධතිය - වාට්ටුව 05',
      tm: 'வெள்ளப் பாதுகாப்பு வடிகால் அமைப்பு - வார்டு 05'
    },
    description: {
      en: 'Construction of improved drainage network to prevent seasonal flooding',
      si: 'සෘතුමය ගංවතුර වැලැක්වීම සඳහා වැඩිදියුණු කළ ජලාපවහන ජාලයක් ඉදිකිරීම',
      tm: 'பருவகால வெள்ளத்தை தடுக்க மேம்படுத்தப்பட்ட வடிகால் வலையமைப்பின் கட்டுமானம்'
    },
    category: 'roads',
    ward: 'Ward 05',
    status: 'ongoing',
    progress: 52,
    startDate: new Date('2023-07-15'),
    expectedEndDate: new Date('2024-05-31'),
    budget: 22000000,
    spent: 11440000,
    contractor: {
      en: 'Aqua Engineering Solutions',
      si: 'ඇක්වා ඉංජිනේරු විසඳුම්',
      tm: 'அக்வா பொறியியல் தீர்வுகள்'
    },
    updates: [
      {
        id: 'update-1',
        date: new Date('2024-01-12'),
        description: {
          en: 'Main drainage line completed, working on connecting drains',
          si: 'ප්‍රධාන ජලාපවහන මාර්ගය සම්පූර්ණයි, සම්බන්ධක ජලාපවහන මත වැඩ කරමින්',
          tm: 'முக்கிய வடிகால் வரி முடிந்தது, இணைக்கும் வடிகால்களில் வேலை'
        },
        progress: 52
      }
    ]
  },
  {
    id: 'park-renovation',
    title: {
      en: 'Central Park Renovation',
      si: 'මධ්‍යම උද්‍යානය ප්‍රතිසංස්කරණය',
      tm: 'மத்திய பூங்கா புதுப்பித்தல்'
    },
    description: {
      en: 'Renovation of central park with new playground, walking paths, and landscaping',
      si: 'නව ක්‍රීඩාංගනය, ඇවිදීමේ මාර්ග සහ භූමි අලංකරණය සහිත මධ්‍යම උද්‍යානය ප්‍රතිසංස්කරණය',
      tm: 'புதிய விளையாட்டு மைதானம், நடைபாதைகள் மற்றும் நிலத்தோற்றம் மாற்றத்துடன் மத்திய பூங்கா புதுப்பித்தல்'
    },
    category: 'community',
    ward: 'Ward 02',
    status: 'completed',
    progress: 100,
    startDate: new Date('2023-05-01'),
    expectedEndDate: new Date('2023-12-31'),
    actualEndDate: new Date('2023-12-28'),
    budget: 12000000,
    spent: 11800000,
    contractor: {
      en: 'Green Spaces Design',
      si: 'හරිත අවකාශ නිර්මාණය',
      tm: 'பசுமை இடங்கள் வடிவமைப்பு'
    },
    updates: [
      {
        id: 'update-1',
        date: new Date('2023-12-28'),
        description: {
          en: 'Project completed and opened to public',
          si: 'ව්‍යාපෘතිය සම්පූර්ණ කර මහජනතාවට විවෘත කරන ලදී',
          tm: 'திட்டம் முடிந்து பொதுமக்களுக்கு திறக்கப்பட்டது'
        },
        progress: 100
      }
    ]
  }
];
