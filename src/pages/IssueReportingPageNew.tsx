import { useState } from 'react';
import { AlertCircle, CheckCircle2, Upload, Search, MapPin, Phone, Mail, User, FileText, Camera, Clock, Loader2, Navigation, Shield, EyeOff, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
import { Separator } from '../components/ui/separator';
import { Switch } from '../components/ui/switch';
import { useLanguage } from '../contexts/LanguageContext';
import { issueCategories, issueTypes } from '../data/issues';
import { wards } from '../data/wards';
import { toast } from 'sonner@2.0.3';

export function IssueReportingPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'report' | 'track'>('report');

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const pageTitle = {
    en: 'Issue Reporting System',
    si: 'ගැටළු වාර්තා කිරීමේ පද්ධතිය',
    tm: 'பிரச்சினை அறிக்கை அமைப்பு'
  };

  const pageDescription = {
    en: 'Report issues in your area and track their resolution status',
    si: 'ඔබගේ ප්‍රදේශයේ ගැටළු වාර්තා කර ඒවායේ විසඳුම් තත්ත්වය නිරීක්ෂණය කරන්න',
    tm: 'உங்கள் பகுதியில் உள்ள சிக்கல்களை புகாரளித்து அவற்றின் தீர்வு நிலையை கண்காணிக்கவும்'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AlertCircle className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl mb-4">{getText(pageTitle)}</h1>
            <p className="text-xl text-white/90">{getText(pageDescription)}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="report" className="text-lg py-3">
              <FileText className="h-5 w-5 mr-2" />
              {language === 'en' ? 'Report Issue' : language === 'si' ? 'ගැටළුව වාර්තා කරන්න' : 'பிரச்சினை புகாரளிக்க'}
            </TabsTrigger>
            <TabsTrigger value="track" className="text-lg py-3">
              <Search className="h-5 w-5 mr-2" />
              {language === 'en' ? 'Track Issue' : language === 'si' ? 'ගැටළුව නිරීක්ෂණය කරන්න' : 'பிரச்சினை கண்காணிக்க'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="report">
            <ReportIssueForm />
          </TabsContent>

          <TabsContent value="track">
            <TrackIssueForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Report Issue Form Component
function ReportIssueForm() {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [gpsLoading, setGpsLoading] = useState(false);
  
  // Form data
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  // Location data
  const [selectedWard, setSelectedWard] = useState('');
  const [selectedGN, setSelectedGN] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [gpsCoords, setGpsCoords] = useState<{lat: number; lng: number; accuracy: number} | null>(null);
  
  // Identifiers
  const [poleNumber, setPoleNumber] = useState('');
  const [binNumber, setBinNumber] = useState('');
  const [buildingNumber, setBuildingNumber] = useState('');
  const [plotNumber, setPlotNumber] = useState('');
  
  // Contact data
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const filteredTypes = issueTypes.filter(type => type.categoryId === selectedCategory);
  const selectedCategoryObj = issueCategories.find(cat => cat.id === selectedCategory);
  const selectedWardObj = wards.find(w => w.id === selectedWard);
  const gnDivisions = selectedWardObj?.gnDivisions || [];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 3)); // Max 3 files
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const captureGPS = () => {
    setGpsLoading(true);
    
    if (!navigator.geolocation) {
      toast.error(
        language === 'en' 
          ? 'Geolocation is not supported by your browser' 
          : language === 'si'
          ? 'ඔබගේ බ්‍රවුසරය GPS සහාය නොදක්වයි'
          : 'உங்கள் உலாவியில் புவி இருப்பிடம் ஆதரிக்கப்படவில்லை'
      );
      setGpsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGpsCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: Math.round(position.coords.accuracy)
        });
        toast.success(
          language === 'en'
            ? `GPS location captured (±${Math.round(position.coords.accuracy)}m accuracy)`
            : language === 'si'
            ? `GPS ස්ථානය ග්‍රහණය කර ගන්නා ලදී (±${Math.round(position.coords.accuracy)}m නිරවද්‍යතාව)`
            : `GPS இருப்பிடம் பதிவு செய்யப்பட்டது (±${Math.round(position.coords.accuracy)}m துல்லியம்)`
        );
        setGpsLoading(false);
      },
      (error) => {
        let errorMsg = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMsg = language === 'en' 
              ? 'Please allow location access to use GPS' 
              : language === 'si'
              ? 'GPS භාවිතා කිරීමට කරුණාකර ස්ථාන ප්‍රවේශය ඉඩ දෙන්න'
              : 'GPS ஐ பயன்படுத்த இருப்பிட அணுகலை அனுமதிக்கவும்';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg = language === 'en' 
              ? 'Location information unavailable' 
              : language === 'si'
              ? 'ස්ථාන තොරතුරු ලබා ගත නොහැක'
              : 'இருப்பிட தகவல் கிடைக்கவில்லை';
            break;
          case error.TIMEOUT:
            errorMsg = language === 'en' 
              ? 'Location request timed out' 
              : language === 'si'
              ? 'ස්ථාන ඉල්ලීම කල් ඉකුත් විය'
              : 'இருப்பிட கோரிக்கை காலாவதியானது';
            break;
        }
        toast.error(errorMsg);
        setGpsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate reference number
    const ref = `BPS${Date.now().toString().slice(-8)}`;
    setReferenceNumber(ref);
    setSubmitted(true);
    setLoading(false);
    
    toast.success(
      language === 'en' 
        ? 'Issue reported successfully!' 
        : language === 'si' 
        ? 'ගැටළුව සාර්ථකව වාර්තා කරන ලදී!' 
        : 'பிரச்சினை வெற்றிகரமாக புகாரளிக்கப்பட்டது!'
    );
  };

  const canProceedToStep2 = selectedCategory && selectedType && title && description;
  const canProceedToStep3 = selectedWard && address;
  const canSubmit = isAnonymous || (name && phone);

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl mb-2">
            {language === 'en' ? 'Issue Reported Successfully!' : language === 'si' ? 'ගැටළුව සාර්ථකව වාර්තා කරන ලදී!' : 'பிரச்சினை வெற்றிகரமாக புகாரளிக்கப்பட்டது!'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'en' 
              ? 'Your issue has been recorded and assigned a reference number.' 
              : language === 'si' 
              ? 'ඔබගේ ගැටළුව වාර්තා කර ඇති අතර යොමු අංකයක් ලබා දී ඇත.' 
              : 'உங்கள் பிரச்சினை பதிவு செய்யப்பட்டு குறிப்பு எண் ஒதுக்கப்பட்டுள்ளது.'}
          </p>
          
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-sm text-muted-foreground mb-2">
              {language === 'en' ? 'Your Reference Number' : language === 'si' ? 'ඔබගේ යොමු අංකය' : 'உங்கள் குறிப்பு எண்'}
            </p>
            <p className="text-3xl font-mono text-blue-600 mb-2">{referenceNumber}</p>
            <p className="text-xs text-muted-foreground">
              {language === 'en' 
                ? 'Save this number to track your issue' 
                : language === 'si' 
                ? 'ඔබගේ ගැටළුව නිරීක්ෂණය කිරීමට මෙම අංකය සුරකින්න' 
                : 'உங்கள் பிரச்சினையை கண்காணிக்க இந்த எண்ணை சேமிக்கவும்'}
            </p>
          </div>

          {isAnonymous && (
            <Alert className="mb-6 text-left">
              <Shield className="h-4 w-4" />
              <AlertTitle>
                {language === 'en' ? 'Anonymous Report' : language === 'si' ? 'නිර්නාමික වාර්තාව' : 'அநாமதேய அறிக்கை'}
              </AlertTitle>
              <AlertDescription>
                {language === 'en' 
                  ? 'This issue was reported anonymously. Your personal information has not been stored.' 
                  : language === 'si' 
                  ? 'මෙම ගැටළුව නිර්නාමිකව වාර්තා කර ඇත. ඔබගේ පුද්ගලික තොරතුරු ගබඩා කර නැත.' 
                  : 'இந்த பிரச்சினை அநாமதேயமாக புகாரளிக்கப்பட்டது. உங்கள் தனிப்பட்ட தகவல் சேமிக்கப்படவில்லை.'}
              </AlertDescription>
            </Alert>
          )}

          <Alert className="mb-6 text-left">
            <Clock className="h-4 w-4" />
            <AlertTitle>
              {language === 'en' ? 'What happens next?' : language === 'si' ? 'ඊළඟට සිදුවන්නේ කුමක්ද?' : 'அடுத்து என்ன நடக்கும்?'}
            </AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  {language === 'en' 
                    ? 'Your issue will be reviewed within 24 hours' 
                    : language === 'si' 
                    ? 'ඔබගේ ගැටළුව පැය 24ක් ඇතුළත සමාලෝචනය කෙරේ' 
                    : 'உங்கள் பிரச்சினை 24 மணி நேரத்திற்குள் மதிப்பாய்வு செய்யப்படும்'}
                </li>
                {!isAnonymous && (
                  <li>
                    {language === 'en' 
                      ? 'You will receive updates via SMS/Email' 
                      : language === 'si' 
                      ? 'ඔබට SMS/විද්‍යුත් තැපැල් හරහා යාවත්කාලීන කිරීම් ලැබෙනු ඇත' 
                      : 'உங்களுக்கு SMS/மின்னஞ்சல் மூலம் புதுப்பிப்புகள் கிடைக்கும்'}
                  </li>
                )}
                <li>
                  {language === 'en' 
                    ? 'Track your issue status using the reference number' 
                    : language === 'si' 
                    ? 'යොමු අංකය භාවිතා කර ඔබගේ ගැටළු තත්ත්වය නිරීක්ෂණය කරන්න' 
                    : 'குறிப்பு எண்ணைப் பயன்படுத்தி உங்கள் பிரச்சினை நிலையை கண்காணிக்கவும்'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'View your issue on the public dashboard' 
                    : language === 'si' 
                    ? 'මහජන උපකරණ පුවරුවේ ඔබගේ ගැටළුව බලන්න' 
                    : 'பொது கட்டுப்பாட்டு பலகையில் உங்கள் பிரச்சினையை பார்க்கவும்'}
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setSelectedCategory('');
                setSelectedType('');
                setTitle('');
                setDescription('');
                setSelectedWard('');
                setSelectedGN('');
                setAddress('');
                setLandmark('');
                setGpsCoords(null);
                setPoleNumber('');
                setBinNumber('');
                setBuildingNumber('');
                setPlotNumber('');
                setName('');
                setPhone('');
                setEmail('');
                setIsAnonymous(false);
                setFiles([]);
              }}
            >
              {language === 'en' ? 'Report Another Issue' : language === 'si' ? 'වෙනත් ගැටළුවක් වාර්තා කරන්න' : 'மற்றொரு பிரச்சினை புகாரளிக்க'}
            </Button>
            <Button onClick={() => window.location.href = '/issue-dashboard'}>
              {language === 'en' ? 'View Dashboard' : language === 'si' ? 'උපකරණ පුවරුව බලන්න' : 'கட்டுப்பாட்டு பலகையை பார்க்க'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Security Notice */}
      <Alert>
        <Lock className="h-4 w-4" />
        <AlertTitle>
          {language === 'en' ? 'Privacy & Security' : language === 'si' ? 'රහස්‍යතාව සහ ආරක්ෂාව' : 'தனியுரிமை & பாதுகாப்பு'}
        </AlertTitle>
        <AlertDescription>
          {language === 'en' 
            ? 'Your personal information is encrypted and secured. You can report anonymously if you prefer.' 
            : language === 'si' 
            ? 'ඔබගේ පුද්ගලික තොරතුරු සංකේතනය කර ආරක්ෂිතව තබා ඇත. ඔබ කැමති නම් නිර්නාමිකව වාර්තා කළ හැකිය.' 
            : 'உங்கள் தனிப்பட்ட தகவல் குறியாக்கம் செய்யப்பட்டு பாதுகாக்கப்பட்டுள்ளது. நீங்கள் விரும்பினால் அநாமதேயமாக புகாரளிக்கலாம்.'}
        </AlertDescription>
      </Alert>

      {/* Progress */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm">
              {language === 'en' ? 'Step' : language === 'si' ? 'පියවර' : 'படி'} {step} {language === 'en' ? 'of' : language === 'si' ? 'න්' : 'இல்'} 3
            </span>
            <span className="text-sm text-muted-foreground">{Math.round((step / 3) * 100)}%</span>
          </div>
          <Progress value={(step / 3) * 100} />
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className={`text-center ${step >= 1 ? 'text-blue-600' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <p className="text-xs">
                {language === 'en' ? 'Issue Details' : language === 'si' ? 'ගැටළු විස්තර' : 'பிரச்சினை விவரங்கள்'}
              </p>
            </div>
            <div className={`text-center ${step >= 2 ? 'text-blue-600' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <p className="text-xs">
                {language === 'en' ? 'Location' : language === 'si' ? 'ස්ථානය' : 'இடம்'}
              </p>
            </div>
            <div className={`text-center ${step >= 3 ? 'text-blue-600' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <p className="text-xs">
                {language === 'en' ? 'Contact Info' : language === 'si' ? 'සම්බන්ධතා තොරතුරු' : 'தொடர்பு விவரம்'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Step 1: Issue Details - continues in next part... */}
