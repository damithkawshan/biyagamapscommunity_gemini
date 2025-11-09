import { MapPin, BarChart3, History as HistoryIcon, Users, Building2, Leaf, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { StatisticsPage } from './StatisticsPage';

export function AboutAreaPage() {
  const { language } = useLanguage();

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const pageTitle = {
    en: 'About Biyagama Area',
    si: 'බියගම ප්‍රදේශය ගැන',
    tm: 'பியகம பகுதி பற்றி'
  };

  const pageDescription = {
    en: 'Learn about our area - statistics, history, and geographic information',
    si: 'අපගේ ප්‍රදේශය ගැන දැන ගන්න - සංඛ්‍යාලේඛන, ඉතිහාසය සහ භූගෝලීය තොරතුරු',
    tm: 'எங்கள் பகுதி பற்றி அறியுங்கள் - புள்ளிவிவரங்கள், வரலாறு மற்றும் புவியியல் தகவல்'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl mb-4">{getText(pageTitle)}</h1>
            <p className="text-xl text-white/90">{getText(pageDescription)}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="statistics" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="statistics">
              <BarChart3 className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Statistics' : language === 'si' ? 'සංඛ්‍යාලේඛන' : 'புள்ளிவிவரங்கள்'}
            </TabsTrigger>
            <TabsTrigger value="history">
              <HistoryIcon className="h-4 w-4 mr-2" />
              {language === 'en' ? 'History' : language === 'si' ? 'ඉතිහාසය' : 'வரலாறு'}
            </TabsTrigger>
            <TabsTrigger value="map">
              <MapPin className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Map' : language === 'si' ? 'සිතියම' : 'வரைபடம்'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="statistics">
            <StatisticsContent />
          </TabsContent>

          <TabsContent value="history">
            <HistoryContent />
          </TabsContent>

          <TabsContent value="map">
            <MapContent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatisticsContent() {
  const { language } = useLanguage();

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const statistics = [
    {
      title: { en: 'Population', si: 'ජනගහනය', tm: 'மக்கள் தொகை' },
      value: '84,573',
      icon: Users,
      description: { en: 'Total residents (2023)', si: 'මුළු පදිංචිකරුවන් (2023)', tm: 'மொத்த குடியிருப்பாளர்கள் (2023)' },
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: { en: 'Area', si: 'ප්‍රදේශය', tm: 'பரப்பளவு' },
      value: '42.3 km²',
      icon: MapPin,
      description: { en: 'Total land area', si: 'මුළු ඉඩම් ප්‍රදේශය', tm: 'மொத்த நில பரப்பு' },
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: { en: 'Wards', si: 'වාට්ටු', tm: 'வார்டுகள்' },
      value: '8',
      icon: Building2,
      description: { en: 'Administrative divisions', si: 'පරිපාලන කොට්ඨාශ', tm: 'நிர்வாக பிரிவுகள்' },
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: { en: 'Households', si: 'පවුල්', tm: 'குடும்பங்கள்' },
      value: '21,143',
      icon: Users,
      description: { en: 'Total households', si: 'මුළු පවුල්', tm: 'மொத்த குடும்பங்கள்' },
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: { en: 'Industrial Zones', si: 'කාර්මික කලාප', tm: 'தொழிற்சாலை மண்டலங்கள்' },
      value: '3',
      icon: Building2,
      description: { en: 'Major industrial estates', si: 'ප්‍රධාන කාර්මික වත්ත', tm: 'முக்கிய தொழிற்சாலை மண்டலங்கள்' },
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      title: { en: 'Green Cover', si: 'හරිත ආවරණය', tm: 'பசுமை பரப்பு' },
      value: '32%',
      icon: Leaf,
      description: { en: 'Forest and park areas', si: 'වන සහ උද්‍යාන ප්‍රදේශ', tm: 'காடு மற்றும் பூங்கா பகுதிகள்' },
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  const demographics = [
    { label: { en: 'Male', si: 'පිරිමි', tm: 'ஆண்' }, value: 42187, percentage: 49.9 },
    { label: { en: 'Female', si: 'ගැහැණු', tm: 'பெண்' }, value: 42386, percentage: 50.1 }
  ];

  const ageGroups = [
    { label: { en: 'Under 18', si: '18 න් අඩු', tm: '18 க்கு கீழ்' }, value: 21143, percentage: 25 },
    { label: { en: '18-35', si: '18-35', tm: '18-35' }, value: 28305, percentage: 33.5 },
    { label: { en: '36-60', si: '36-60', tm: '36-60' }, value: 25372, percentage: 30 },
    { label: { en: 'Over 60', si: '60 න් වැඩි', tm: '60 க்கு மேல்' }, value: 9753, percentage: 11.5 }
  ];

  return (
    <div className="space-y-8">
      {/* Key Statistics */}
      <div>
        <h2 className="text-2xl mb-6">
          {language === 'en' ? 'Key Statistics' : language === 'si' ? 'ප්‍රධාන සංඛ්‍යාලේඛන' : 'முக்கிய புள்ளிவிவரங்கள்'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {getText(stat.title)}
                      </p>
                      <p className={`text-3xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {getText(stat.description)}
                      </p>
                    </div>
                    <div className={`${stat.bgColor} p-3 rounded-lg`}>
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Gender Distribution' : language === 'si' ? 'ස්ත්‍රී පුරුෂ බෙදීම' : 'பாலின விநியோகம்'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demographics.map((demo, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{getText(demo.label)}</span>
                    <span className="font-medium">{demo.value.toLocaleString()} ({demo.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${demo.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Age Distribution' : language === 'si' ? 'වයස් බෙදීම' : 'வயது விநியோகம்'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ageGroups.map((group, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{getText(group.label)}</span>
                    <span className="font-medium">{group.value.toLocaleString()} ({group.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${group.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function HistoryContent() {
  const { language } = useLanguage();

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const historyTimeline = [
    {
      year: '1987',
      title: { 
        en: 'Establishment of Pradeshiya Sabha', 
        si: 'ප්‍රාදේශීය සභාව ස්ථාපිත කිරීම', 
        tm: 'பிரதேச சபை நிறுவப்பட்டது' 
      },
      description: { 
        en: 'Biyagama Pradeshiya Sabha was officially established under the Pradeshiya Sabha Act No. 15 of 1987', 
        si: '1987 අංක 15 දරණ ප්‍රාදේශීය සභා පනත යටතේ බියගම ප්‍රාදේශීය සභාව නිල වශයෙන් ස්ථාපිත කරන ලදී', 
        tm: '1987 இன் 15 ஆம் இலக்க பிரதேச சபை சட்டத்தின் கீழ் பியகம பிரதேச சபை அதிகாரப்பூர்வமாக நிறுவப்பட்டது' 
      }
    },
    {
      year: '1978',
      title: { 
        en: 'Biyagama Export Processing Zone', 
        si: 'බියගම අපනයන සැකසුම් කලාපය', 
        tm: 'பியகம ஏற்றுமதி பதப்படுத்தும் மண்டலம்' 
      },
      description: { 
        en: 'Establishment of the Biyagama EPZ, transforming the area into an industrial hub', 
        si: 'බියගම EPZ ස්ථාපිත කිරීම, ප්‍රදේශය කාර්මික මධ්‍යස්ථානයක් බවට පරිවර්තනය කිරීම', 
        tm: 'பியகம EPZ நிறுவப்பட்டது, பகுதியை தொழில்துறை மையமாக மாற்றியது' 
      }
    },
    {
      year: '1950s',
      title: { 
        en: 'Agricultural Era', 
        si: 'කෘෂිකාර්මික යුගය', 
        tm: 'விவசாய காலம்' 
      },
      description: { 
        en: 'Biyagama was primarily known for its paddy fields and coconut plantations', 
        si: 'බියගම මූලික වශයෙන් එහි වී කෙත් සහ පොල් වතු සඳහා ප්‍රසිද්ධ විය', 
        tm: 'பியகம முதன்மையாக அதன் நெல் வயல்கள் மற்றும் தென்னை தோட்டங்களுக்கு பெயர் பெற்றது' 
      }
    },
    {
      year: 'Pre-Colonial',
      title: { 
        en: 'Historical Significance', 
        si: 'ඓතිහාසික වැදගත්කම', 
        tm: 'வரலாற்று முக்கியத்துவம்' 
      },
      description: { 
        en: 'The area has historical importance dating back to ancient Sri Lankan kingdoms', 
        si: 'මෙම ප්‍රදේශය පුරාණ ශ්‍රී ලාංකික රාජධානි දක්වා දිවෙන ඓතිහාසික වැදගත්කමක් ඇත', 
        tm: 'இப்பகுதி பழங்கால இலங்கை இராச்சியங்கள் வரை செல்லும் வரலாற்று முக்கியத்துவம் கொண்டது' 
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl mb-6">
          {language === 'en' ? 'Historical Timeline' : language === 'si' ? 'ඓතිහාසික කාලරේඛාව' : 'வரலாற்று காலவரிசை'}
        </h2>
        
        <div className="space-y-6">
          {historyTimeline.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{getText(item.title)}</CardTitle>
                    <CardDescription className="text-base">
                      {getText(item.description)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Heritage Sites */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Heritage & Culture' : language === 'si' ? 'උරුමය සහ සංස්කෘතිය' : 'பாரம்பரியம் & கலாச்சாரம்'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Biyagama has evolved from a predominantly agricultural area to a thriving industrial and residential zone while maintaining its cultural heritage. The area is home to several Buddhist temples, churches, and kovils that serve as important community centers.' 
                : language === 'si' 
                ? 'බියගම එහි සංස්කෘතික උරුමය පවත්වා ගනිමින් ප්‍රධාන වශයෙන් කෘෂිකාර්මික ප්‍රදේශයකින් සාර්ථක කාර්මික සහ නේවාසික කලාපයක් දක්වා පරිණාමය වී ඇත. මෙම ප්‍රදේශය වැදගත් ප්‍රජා මධ්‍යස්ථාන ලෙස සේවය කරන බෞද්ධ විහාරස්ථාන, පල්ලි සහ කෝවිල් කිහිපයකට නිවහන වේ.'
                : 'பியகம அதன் கலாச்சார பாரம்பரியத்தை பராமரிக்கும் அதே வேளையில் முதன்மையாக விவசாய பகுதியிலிருந்து செழிப்பான தொழில்துறை மற்றும் குடியிருப்பு மண்டலமாக உருவாகியுள்ளது. இப்பகுதி முக்கியமான சமூக மையங்களாக செயல்படும் பல புத்த கோயில்கள், தேவாலயங்கள் மற்றும் கோவில்களுக்கு தாயகமாக உள்ளது.'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MapContent() {
  const { language } = useLanguage();

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const wards = [
    { id: 1, name: { en: 'Ward 01 - Biyagama Central', si: 'වාට්ටුව 01 - බියගම මධ්‍යම', tm: 'வார்டு 01 - பியகம மத்திய' }, area: '5.2 km²' },
    { id: 2, name: { en: 'Ward 02 - Kochchikade', si: 'වාට්ටුව 02 - කොච්චිකඩේ', tm: 'வார்டு 02 - கொச்சிகடே' }, area: '5.5 km²' },
    { id: 3, name: { en: 'Ward 03 - Walgama', si: 'වාට්ටුව 03 - වල්ගම', tm: 'வார்டு 03 - வல்கம' }, area: '4.8 km²' },
    { id: 4, name: { en: 'Ward 04 - Hunupitiya', si: 'වාට්ටුව 04 - හුණුපිටිය', tm: 'வார்டு 04 - ஹுனுபிட்டிய' }, area: '5.1 km²' },
    { id: 5, name: { en: 'Ward 05 - Udugampola', si: 'වාට්ටුව 05 - උඩුගම්පොල', tm: 'வார்டு 05 - உடுகம்போல' }, area: '5.4 km²' },
    { id: 6, name: { en: 'Ward 06 - Malwana', si: 'වාට්ටුව 06 - මල්වාන', tm: 'வார்டு 06 - மல்வான' }, area: '5.3 km²' },
    { id: 7, name: { en: 'Ward 07 - Kirindiwela', si: 'වාට්ටුව 07 - කිරිඳිවෙල', tm: 'வார்டு 07 - கிரிந்திவெல' }, area: '5.6 km²' },
    { id: 8, name: { en: 'Ward 08 - Gonawala', si: 'වාට්ටුව 08 - ගෝනාවල', tm: 'வார்டு 08 - கோனாவல' }, area: '5.4 km²' }
  ];

  const boundaries = [
    { direction: { en: 'North', si: 'උතුර', tm: 'வடக்கு' }, border: { en: 'Gampaha', si: 'ගම්පහ', tm: 'கம்பஹா' } },
    { direction: { en: 'South', si: 'දකුණ', tm: 'தெற்கு' }, border: { en: 'Kelaniya', si: 'කැළණිය', tm: 'களனி' } },
    { direction: { en: 'East', si: 'නැගෙනහිර', tm: 'கிழக்கு' }, border: { en: 'Kaduwela', si: 'කඩුවෙල', tm: 'கடுவெல' } },
    { direction: { en: 'West', si: 'බටහිර', tm: 'மேற்கு' }, border: { en: 'Wattala', si: 'වත්තල', tm: 'வட்டல' } }
  ];

  return (
    <div className="space-y-8">
      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Geographic Location' : language === 'si' ? 'භූගෝලීය ස්ථානය' : 'புவியியல் இடம்'}
          </CardTitle>
          <CardDescription>
            {language === 'en' 
              ? 'Biyagama Pradeshiya Sabha area - 42.3 km² in Gampaha District' 
              : language === 'si' 
              ? 'බියගම ප්‍රාදේශීය සභා ප්‍රදේශය - ගම්පහ දිස්ත්‍රික්කයේ කි.මී. 42.3' 
              : 'பியகம பிரதேச சபை பகுதி - கம்பஹா மாவட்டத்தில் 42.3 km²'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Interactive map would be displayed here' 
                  : language === 'si' 
                  ? 'අන්තර්ක්‍රියාකාරී සිතියම මෙහි පෙන්වනු ඇත' 
                  : 'ஊடாடும் வரைபடம் இங்கே காட்டப்படும்'}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Coordinates: 6.9497° N, 79.9779° E
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Boundaries */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Boundaries' : language === 'si' ? 'මායිම්' : 'எல்லைகள்'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {boundaries.map((boundary, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">{getText(boundary.direction)}</p>
                <p className="font-medium">{getText(boundary.border)}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Wards List */}
      <div>
        <h3 className="text-2xl mb-4">
          {language === 'en' ? 'Administrative Wards' : language === 'si' ? 'පරිපාලන වාට්ටු' : 'நிர்வாக வார்டுகள்'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wards.map((ward) => (
            <Card key={ward.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{getText(ward.name)}</p>
                    <p className="text-sm text-muted-foreground">{ward.area}</p>
                  </div>
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
