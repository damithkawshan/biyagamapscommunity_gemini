import { useState } from 'react';
import { AlertCircle, CheckCircle2, Upload, Search, MapPin, Phone, Mail, User, FileText, Camera, Clock, AlertTriangle, Loader2 } from 'lucide-react';
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
import { useLanguage } from '../contexts/LanguageContext';
import { issueCategories, issueTypes } from '../data/issues';
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
  
  // Form data
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const filteredTypes = issueTypes.filter(type => type.categoryId === selectedCategory);
  const selectedCategoryObj = issueCategories.find(cat => cat.id === selectedCategory);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles].slice(0, 3)); // Max 3 files
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
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
  const canProceedToStep3 = address && name && phone;

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
                <li>
                  {language === 'en' 
                    ? 'You will receive updates via SMS/Email' 
                    : language === 'si' 
                    ? 'ඔබට SMS/විද්‍යුත් තැපැල් හරහා යාවත්කාලීන කිරීම් ලැබෙනු ඇත' 
                    : 'உங்களுக்கு SMS/மின்னஞ்சல் மூலம் புதுப்பிப்புகள் கிடைக்கும்'}
                </li>
                <li>
                  {language === 'en' 
                    ? 'Track your issue status using the reference number' 
                    : language === 'si' 
                    ? 'යොමු අංකය භාවිතා කර ඔබගේ ගැටළු තත්ත්වය නිරීක්ෂණය කරන්න' 
                    : 'குறிப்பு எண்ணைப் பயன்படுத்தி உங்கள் பிரச்சினை நிலையை கண்காணிக்கவும்'}
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
                setAddress('');
                setLandmark('');
                setName('');
                setPhone('');
                setEmail('');
                setFiles([]);
              }}
            >
              {language === 'en' ? 'Report Another Issue' : language === 'si' ? 'වෙනත් ගැටළුවක් වාර්තා කරන්න' : 'மற்றொரு பிரச்சினை புகாரளிக்க'}
            </Button>
            <Button onClick={() => window.location.href = '/'}>
              {language === 'en' ? 'Go to Home' : language === 'si' ? 'මුල් පිටුවට යන්න' : 'முகப்புக்கு செல்'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
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

      {/* Step 1: Issue Details */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'What type of issue would you like to report?' : language === 'si' ? 'ඔබ වාර්තා කිරීමට කැමති ගැටළුව කුමන වර්ගයකින්ද?' : 'நீங்கள் எந்த வகையான பிரச்சினையை புகாரளிக்க விரும்புகிறீர்கள்?'}
            </CardTitle>
            <CardDescription>
              {language === 'en' ? 'Select a category and provide details about the issue' : language === 'si' ? 'කාණ්ඩයක් තෝරා ගැටළුව පිළිබඳ විස්තර සපයන්න' : 'ஒரு வகையைத் தேர்ந்தெடுத்து பிரச்சினை பற்றிய விவரங்களை வழங்கவும்'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Category Selection */}
            <div className="space-y-2">
              <Label>
                {language === 'en' ? 'Issue Category' : language === 'si' ? 'ගැටළු කාණ්ඩය' : 'பிரச்சினை வகை'} *
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {issueCategories.map((category) => {
                  const IconComponent = getCategoryIcon(category.icon);
                  return (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedCategory === category.id ? 'ring-2 ring-blue-600 bg-blue-50' : ''
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSelectedType('');
                      }}
                    >
                      <CardContent className="p-4 flex items-start gap-3">
                        <div 
                          className="p-2 rounded-lg" 
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: category.color }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{getText(category.name)}</h4>
                          <p className="text-xs text-muted-foreground">{getText(category.description)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Issue Type */}
            {selectedCategory && (
              <div className="space-y-2">
                <Label htmlFor="issue-type">
                  {language === 'en' ? 'Specific Issue' : language === 'si' ? 'විශේෂිත ගැටළුව' : 'குறிப்பிட்ட பிரச்சினை'} *
                </Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="issue-type">
                    <SelectValue placeholder={language === 'en' ? 'Select issue type' : language === 'si' ? 'ගැටළු වර්ගය තෝරන්න' : 'பிரச்சினை வகையைத் தேர்ந்தெடுக்கவும்'} />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {getText(type.name)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">
                {language === 'en' ? 'Issue Title' : language === 'si' ? 'ගැටළු මාතෘකාව' : 'பிரச்சினை தலைப்பு'} *
              </Label>
              <Input
                id="title"
                placeholder={language === 'en' ? 'Brief summary of the issue' : language === 'si' ? 'ගැටළුවේ කෙටි සාරාංශයක්' : 'பிரச்சினையின் சுருக்கம்'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">
                {language === 'en' ? 'Detailed Description' : language === 'si' ? 'විස්තරාත්මක විස්තරය' : 'விரிவான விளக்கம்'} *
              </Label>
              <Textarea
                id="description"
                rows={5}
                placeholder={language === 'en' 
                  ? 'Describe the issue in detail. Include when it started, how often it occurs, and its impact...' 
                  : language === 'si' 
                  ? 'ගැටළුව විස්තරාත්මකව විස්තර කරන්න. එය ආරම්භ වූ කාලය, එය සිදුවන වාර ගණන සහ එහි බලපෑම ඇතුළත් කරන්න...' 
                  : 'பிரச்சினையை விரிவாக விவரிக்கவும். அது எப்போது தொடங்கியது, எத்தனை முறை நிகழ்கிறது மற்றும் அதன் தாக்கம்...'}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Photos */}
            <div className="space-y-2">
              <Label>
                {language === 'en' ? 'Upload Photos' : language === 'si' ? 'ඡායාරූප උඩුගත කරන්න' : 'புகைப்படங்களை பதிவேற்றவும்'}{' '}
                <span className="text-muted-foreground">
                  ({language === 'en' ? 'Optional, max 3' : language === 'si' ? 'විකල්ප, උපරිම 3' : 'விருப்பமானது, அதிகபட்சம் 3'})
                </span>
              </Label>
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
                <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Choose Files' : language === 'si' ? 'ගොනු තෝරන්න' : 'கோப்புகளைத் தேர்ந்தெடுக்கவும்'}
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  {language === 'en' ? 'PNG, JPG up to 5MB each' : language === 'si' ? 'PNG, JPG එක් එක් 5MB දක්වා' : 'PNG, JPG ஒவ்வொன்றும் 5MB வரை'}
                </p>
              </div>

              {files.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {files.map((file, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFile(index)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!canProceedToStep2}
              >
                {language === 'en' ? 'Next: Location' : language === 'si' ? 'ඊළඟ: ස්ථානය' : 'அடுத்து: இடம்'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Location */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Where is this issue located?' : language === 'si' ? 'මෙම ගැටළුව පිහිටා ඇත්තේ කොහේද?' : 'இந்த பிரச்சினை எங்கு அமைந்துள்ளது?'}
            </CardTitle>
            <CardDescription>
              {language === 'en' ? 'Provide the location details to help us locate and resolve the issue' : language === 'si' ? 'ගැටළුව සොයා ගැනීමට සහ විසඳීමට අපට උදව් කිරීම සඳහා ස්ථාන විස්තර සපයන්න' : 'பிரச்சினையை கண்டுபிடித்து தீர்க்க எங்களுக்கு உதவ இருப்பிட விவரங்களை வழங்கவும்'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <MapPin className="h-4 w-4" />
              <AlertTitle>
                {language === 'en' ? 'Accurate Location Important' : language === 'si' ? 'නිවැරදි ස්ථානය වැදගත්' : 'துல்லியமான இடம் முக்கியம்'}
              </AlertTitle>
              <AlertDescription>
                {language === 'en' 
                  ? 'Please provide the most accurate address and landmark to help our team locate the issue quickly.' 
                  : language === 'si' 
                  ? 'අපගේ කණ්ඩායමට ගැටළුව ඉක්මනින් සොයා ගැනීමට උදව් කිරීම සඳහා වඩාත් නිවැරදි ලිපිනය සහ සලකුණු සලකුණු සපයන්න.' 
                  : 'எங்கள் குழு பிரச்சினையை விரைவாக கண்டுபிடிக்க உதவ மிகவும் துல்லியமான முகவரி மற்றும் அடையாளத்தை வழங்கவும்.'}
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="address">
                {language === 'en' ? 'Street Address' : language === 'si' ? 'වීදි ලිපිනය' : 'தெரு முகவரி'} *
              </Label>
              <Input
                id="address"
                placeholder={language === 'en' ? '123 Main Street, Biyagama' : language === 'si' ? '123 ප්‍රධාන වීදිය, බියගම' : '123 பிரதான தெரு, பியகமா'}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="landmark">
                {language === 'en' ? 'Nearby Landmark' : language === 'si' ? 'ආසන්න සලකුණු සලකුණ' : 'அருகிலுள்ள அடையாளம்'}
              </Label>
              <Input
                id="landmark"
                placeholder={language === 'en' ? 'Near Post Office, Opposite Bank' : language === 'si' ? 'තැපැල් කාර්යාලය අසල, බැංකුවට විරුද්ධව' : 'தபால் அலுவலகம் அருகில், வங்கி எதிரில்'}
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'This helps our team locate the issue more easily' : language === 'si' ? 'මෙය අපගේ කණ්ඩායමට ගැටළුව වඩාත් පහසුවෙන් සොයා ගැනීමට උපකාරී වේ' : 'இது எங்கள் குழுவிற்கு பிரச்சினையை எளிதாக கண்டுபிடிக்க உதவுகிறது'}
              </p>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                {language === 'en' ? 'Back' : language === 'si' ? 'ආපසු' : 'பின்னால்'}
              </Button>
              <Button onClick={() => setStep(3)} disabled={!address}>
                {language === 'en' ? 'Next: Contact Info' : language === 'si' ? 'ඊළඟ: සම්බන්ධතා තොරතුරු' : 'அடுத்து: தொடர்பு தகவல்'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Contact Information */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'How can we contact you?' : language === 'si' ? 'අපට ඔබව අමතන්නේ කෙසේද?' : 'நாங்கள் உங்களை எவ்வாறு தொடர்பு கொள்ளலாம்?'}
            </CardTitle>
            <CardDescription>
              {language === 'en' ? 'We will send you updates about your issue via SMS and email' : language === 'si' ? 'SMS සහ විද්‍යුත් තැපෑල හරහා ඔබගේ ගැටළුව පිළිබඳ යාවත්කාලීන කිරීම් අපි ඔබට එවන්නෙමු' : 'உங்கள் பிரச்சினை பற்றிய புதுப்பிப்புகளை SMS மற்றும் மின்னஞ்சல் வழியாக அனுப்புவோம்'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>
                {language === 'en' ? 'Privacy Notice' : language === 'si' ? 'රහස්‍යතා දැනුම්දීම' : 'தனியுரிமை அறிவிப்பு'}
              </AlertTitle>
              <AlertDescription>
                {language === 'en' 
                  ? 'Your contact information will only be used for updates about this issue and will not be shared with third parties.' 
                  : language === 'si' 
                  ? 'ඔබගේ සම්බන්ධතා තොරතුරු මෙම ගැටළුව පිළිබඳ යාවත්කාලීන කිරීම් සඳහා පමණක් භාවිතා කෙරෙන අතර තෙවන පාර්ශව සමඟ බෙදා නොගනු ලැබේ.' 
                  : 'உங்கள் தொடர்பு தகவல் இந்த பிரச்சினை பற்றிய புதுப்பிப்புகளுக்கு மட்டுமே பயன்படுத்தப்படும் மற்றும் மூன்றாம் தரப்பினருடன் பகிரப்படாது.'}
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="name">
                {language === 'en' ? 'Full Name' : language === 'si' ? 'සම්පූර්ණ නම' : 'முழு பெயர்'} *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  className="pl-10"
                  placeholder={language === 'en' ? 'John Doe' : language === 'si' ? 'ජෝන් ඩෝ' : 'ஜான் டோ'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                {language === 'en' ? 'Mobile Number' : language === 'si' ? 'ජංගම දුරකථන අංකය' : 'மொபைல் எண்'} *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-10"
                  placeholder="+94 77 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'We will send SMS updates to this number' : language === 'si' ? 'අපි මෙම අංකයට SMS යාවත්කාලීන කිරීම් එවන්නෙමු' : 'இந்த எண்ணுக்கு SMS புதுப்பிப்புகளை அனுப்புவோம்'}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                {language === 'en' ? 'Email Address' : language === 'si' ? 'විද්‍යුත් තැපැල් ලිපිනය' : 'மின்னஞ்சல் முகவரி'}{' '}
                <span className="text-muted-foreground">
                  ({language === 'en' ? 'Optional' : language === 'si' ? 'විකල්ප' : 'விருப்பமானது'})
                </span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  placeholder="john.doe@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <Separator />

            {/* Review Summary */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium mb-3">
                {language === 'en' ? 'Review Your Report' : language === 'si' ? 'ඔබගේ වාර්තාව සමාලෝචනය කරන්න' : 'உங்கள் அறிக்கையை மதிப்பாய்வு செய்யுங்கள்'}
              </h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Category:' : language === 'si' ? 'කාණ්ඩය:' : 'வகை:'}
                  </span>{' '}
                  <span className="font-medium">{selectedCategoryObj && getText(selectedCategoryObj.name)}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Title:' : language === 'si' ? 'මාතෘකාව:' : 'தலைப்பு:'}
                  </span>{' '}
                  <span className="font-medium">{title}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">
                    {language === 'en' ? 'Location:' : language === 'si' ? 'ස්ථානය:' : 'இடம்:'}
                  </span>{' '}
                  <span className="font-medium">{address}</span>
                </div>
                {files.length > 0 && (
                  <div>
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Photos:' : language === 'si' ? 'ඡායාරූප:' : 'புகைப்படங்கள்:'}
                    </span>{' '}
                    <span className="font-medium">{files.length}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                {language === 'en' ? 'Back' : language === 'si' ? 'ආපසු' : 'பின்னால்'}
              </Button>
              <Button onClick={handleSubmit} disabled={!canProceedToStep3 || loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {language === 'en' ? 'Submit Report' : language === 'si' ? 'වාර්තාව ඉදිරිපත් කරන්න' : 'அறிக்கையை சமர்ப்பிக்கவும்'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Track Issue Form Component
function TrackIssueForm() {
  const { language } = useLanguage();
  const [referenceNumber, setReferenceNumber] = useState('');
  const [searching, setSearching] = useState(false);
  const [issue, setIssue] = useState<any>(null);

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const handleSearch = async () => {
    if (!referenceNumber) return;
    
    setSearching(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock issue data
    setIssue({
      referenceNumber: referenceNumber,
      category: 'Roads & Infrastructure',
      type: 'Pothole',
      title: 'Large pothole on Main Street',
      description: 'There is a large pothole causing problems for vehicles.',
      address: '123 Main Street, Biyagama',
      status: 'in-progress',
      priority: 'high',
      submittedDate: new Date('2024-01-15'),
      updatedDate: new Date('2024-01-18'),
      updates: [
        {
          id: '1',
          date: new Date('2024-01-15'),
          status: 'submitted',
          comment: 'Issue reported and logged in the system',
          updatedBy: 'System'
        },
        {
          id: '2',
          date: new Date('2024-01-16'),
          status: 'acknowledged',
          comment: 'Issue acknowledged by Engineering Department',
          updatedBy: 'Eng. S.M. Silva'
        },
        {
          id: '3',
          date: new Date('2024-01-18'),
          status: 'in-progress',
          comment: 'Repair team assigned and scheduled for next week',
          updatedBy: 'Engineering Team'
        }
      ]
    });
    
    setSearching(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-gray-500';
      case 'acknowledged': return 'bg-blue-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      case 'closed': return 'bg-gray-400';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      submitted: { en: 'Submitted', si: 'ඉදිරිපත් කළා', tm: 'சமர்ப்பிக்கப்பட்டது' },
      acknowledged: { en: 'Acknowledged', si: 'පිළිගත්තා', tm: 'ஒப்புக்கொள்ளப்பட்டது' },
      'in-progress': { en: 'In Progress', si: 'ක්‍රියාත්මක වෙමින්', tm: 'செயல்பாட்டில்' },
      resolved: { en: 'Resolved', si: 'විසඳා ඇත', tm: 'தீர்க்கப்பட்டது' },
      closed: { en: 'Closed', si: 'වසා දමා ඇත', tm: 'மூடப்பட்டது' }
    };
    return getText(statusMap[status as keyof typeof statusMap] || statusMap.submitted);
  };

  const getPriorityBadge = (priority: string) => {
    const priorityMap = {
      low: { en: 'Low', si: 'අඩු', tm: 'குறைந்த', variant: 'secondary' as const },
      medium: { en: 'Medium', si: 'මධ්‍යම', tm: 'நடுத்தர', variant: 'default' as const },
      high: { en: 'High', si: 'ඉහළ', tm: 'உயர்', variant: 'destructive' as const },
      urgent: { en: 'Urgent', si: 'හදිසි', tm: 'அவசரம்', variant: 'destructive' as const }
    };
    const p = priorityMap[priority as keyof typeof priorityMap] || priorityMap.medium;
    return <Badge variant={p.variant}>{getText(p)}</Badge>;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Track Your Issue' : language === 'si' ? 'ඔබගේ ගැටළුව නිරීක්ෂණය කරන්න' : 'உங்கள் பிரச்சினையை கண்காணிக்கவும்'}
          </CardTitle>
          <CardDescription>
            {language === 'en' ? 'Enter your reference number to check the status of your reported issue' : language === 'si' ? 'ඔබගේ වාර්තා කළ ගැටළුවේ තත්ත්වය පරීක්ෂා කිරීමට ඔබගේ යොමු අංකය ඇතුළත් කරන්න' : 'உங்கள் புகாரளிக்கப்பட்ட பிரச்சினையின் நிலையை சரிபார்க்க உங்கள் குறிப்பு எண்ணை உள்ளிடவும்'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                placeholder={language === 'en' ? 'Enter reference number (e.g., BPS12345678)' : language === 'si' ? 'යොමු අංකය ඇතුළත් කරන්න (උදා., BPS12345678)' : 'குறிப்பு எண்ணை உள்ளிடவும் (எ.கா., BPS12345678)'}
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} disabled={!referenceNumber || searching}>
              {searching ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Track' : language === 'si' ? 'නිරීක්ෂණය' : 'கண்காணி'}
                </>
              )}
            </Button>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {language === 'en' 
                ? 'The reference number was provided when you submitted your issue. Check your SMS or email for this number.' 
                : language === 'si' 
                ? 'ඔබ ඔබගේ ගැටළුව ඉදිරිපත් කළ විට යොමු අංකය සපයන ලදී. මෙම අංකය සඳහා ඔබගේ SMS හෝ විද්‍යුත් තැපෑල පරීක්ෂා කරන්න.' 
                : 'நீங்கள் உங்கள் பிரச்சினையை சமர்ப்பித்தபோது குறிப்பு எண் வழங்கப்பட்டது. இந்த எண்ணுக்காக உங்கள் SMS அல்லது மின்னஞ்சலை சரிபார்க்கவும்.'}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Issue Details */}
      {issue && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{issue.title}</CardTitle>
                  <CardDescription className="mt-2">
                    <span className="font-mono text-blue-600">{issue.referenceNumber}</span>
                  </CardDescription>
                </div>
                {getPriorityBadge(issue.priority)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Category' : language === 'si' ? 'කාණ්ඩය' : 'வகை'}
                  </p>
                  <p className="font-medium">{issue.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Type' : language === 'si' ? 'වර්ගය' : 'வகை'}
                  </p>
                  <p className="font-medium">{issue.type}</p>
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {language === 'en' ? 'Description' : language === 'si' ? 'විස්තරය' : 'விளக்கம்'}
                </p>
                <p>{issue.description}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {language === 'en' ? 'Location' : language === 'si' ? 'ස්ථානය' : 'இடம்'}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {issue.address}
                </p>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Submitted' : language === 'si' ? 'ඉදිරිපත් කළ' : 'சமர்ப்பிக்கப்பட்டது'}
                  </p>
                  <p>{issue.submittedDate.toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    {language === 'en' ? 'Last Updated' : language === 'si' ? 'අවසන් යාවත්කාලීනය' : 'கடைசியாக புதுப்பிக்கப்பட்டது'}
                  </p>
                  <p>{issue.updatedDate.toLocaleDateString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Status Timeline' : language === 'si' ? 'තත්ත්ව කාලරේඛාව' : 'நிலை காலவரிசை'}
              </CardTitle>
              <CardDescription>
                {language === 'en' ? 'Track the progress of your issue' : language === 'si' ? 'ඔබගේ ගැටළුවේ ප්‍රගතිය නිරීක්ෂණය කරන්න' : 'உங்கள் பிரச்சினையின் முன்னேற்றத்தை கண்காணிக்கவும்'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {issue.updates.map((update: any, index: number) => (
                  <div key={update.id} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full ${getStatusColor(update.status)} flex items-center justify-center text-white`}>
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      {index < issue.updates.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 absolute top-10" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getStatusColor(update.status)}>
                          {getStatusText(update.status)}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {update.date.toLocaleDateString()} {update.date.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm">{update.comment}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === 'en' ? 'by' : language === 'si' ? 'විසින්' : 'மூலம்'} {update.updatedBy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Call for Update' : language === 'si' ? 'යාවත්කාලීන සඳහා අමතන්න' : 'புதுப்பிப்புக்கு அழை'}
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Send Email' : language === 'si' ? 'විද්‍යුත් තැපෑල එවන්න' : 'மின்னஞ்சல் அனுப்பவும்'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

// Helper function to get icon component
function getCategoryIcon(iconName: string) {
  const icons: Record<string, any> = {
    road: () => <div className="w-full h-full">🛣️</div>,
    trash: () => <div className="w-full h-full">🗑️</div>,
    droplet: () => <div className="w-full h-full">💧</div>,
    leaf: () => <div className="w-full h-full">🌿</div>,
    lightbulb: () => <div className="w-full h-full">💡</div>,
    building: () => <div className="w-full h-full">🏢</div>,
    users: () => <div className="w-full h-full">👥</div>,
    'alert-circle': AlertCircle
  };
  return icons[iconName] || AlertCircle;
}
