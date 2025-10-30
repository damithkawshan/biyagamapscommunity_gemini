import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText, Users, Phone, Mail, Clock, DollarSign, AlertCircle, CheckCircle, Download, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useLanguage } from '../contexts/LanguageContext';
import { departments, services, serviceCategories } from '../data/services';

export function ServicesPage() {
  const { serviceId, departmentId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Get localized text helper
  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  // Find current department and service
  const currentDepartment = departmentId ? departments.find(d => d.id === departmentId) : null;
  const currentService = serviceId ? services.find(s => s.id === serviceId) : null;

  // Get services for current department
  const departmentServices = currentDepartment 
    ? services.filter(s => s.departmentId === currentDepartment.id)
    : [];

  // If no service or department selected, show overview
  if (!serviceId && !departmentId) {
    return <ServicesOverview />;
  }

  // If department selected but no service, show department page
  if (departmentId && !serviceId) {
    return <DepartmentPage department={currentDepartment!} services={departmentServices} />;
  }

  // Show service detail page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">
                  {language === 'en' ? 'Home' : language === 'si' ? 'මුල් පිටුව' : 'முகப்பு'}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li>
                <Link to="/services" className="text-white/80 hover:text-white">
                  {language === 'en' ? 'Services' : language === 'si' ? 'සේවා' : 'சேவைகள்'}
                </Link>
              </li>
              {currentDepartment && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <li>
                    <Link 
                      to={`/services/department/${currentDepartment.id}`} 
                      className="text-white/80 hover:text-white"
                    >
                      {getText(currentDepartment.name)}
                    </Link>
                  </li>
                </>
              )}
              {currentService && (
                <>
                  <ChevronRight className="h-4 w-4" />
                  <li className="text-white">
                    {getText(currentService.name)}
                  </li>
                </>
              )}
            </ol>
          </nav>
          <h1 className="text-4xl mb-2">
            {currentService ? getText(currentService.name) : getText(currentDepartment?.name)}
          </h1>
          <p className="text-xl text-white/90">
            {currentService && getText(currentService.description)}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === 'en' ? 'All Departments' : language === 'si' ? 'සියලුම දෙපාර්තමේන්තු' : 'அனைத்து துறைகள்'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {departments.map((dept) => {
                    const deptServices = services.filter(s => s.departmentId === dept.id);
                    const isActive = currentDepartment?.id === dept.id;
                    
                    return (
                      <Accordion type="single" collapsible key={dept.id} defaultValue={isActive ? dept.id : undefined}>
                        <AccordionItem value={dept.id} className="border-0">
                          <AccordionTrigger 
                            className={`px-4 py-2 hover:bg-gray-100 hover:no-underline ${
                              isActive ? 'bg-blue-50 text-blue-700' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-2 h-2 rounded-full" 
                                style={{ backgroundColor: dept.color }}
                              />
                              <span className="text-sm">{getText(dept.name)}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-0">
                            <div className="pl-8 space-y-1">
                              {deptServices.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.id}`}
                                  className={`block px-3 py-2 text-sm rounded hover:bg-gray-100 ${
                                    currentService?.id === service.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                                  }`}
                                >
                                  {getText(service.name)}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Mobile Sidebar Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden fixed bottom-4 right-4 z-50"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
          </Button>

          {/* Main Content */}
          <main className="flex-1">
            {currentService && <ServiceDetailContent service={currentService} department={currentDepartment!} />}
          </main>
        </div>
      </div>
    </div>
  );
}

// Service Detail Content Component
function ServiceDetailContent({ service, department }: { service: any; department: any }) {
  const { language } = useLanguage();
  
  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  return (
    <div className="space-y-6">
      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <Clock className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Processing Time' : language === 'si' ? 'සැකසීමේ කාලය' : 'செயலாக்க நேரம்'}
              </p>
              <p className="font-medium">{getText(service.processingTime)}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <FileText className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Online Service' : language === 'si' ? 'මාර්ගගත සේවාව' : 'ஆன்லைன் சேவை'}
              </p>
              <p className="font-medium">
                {service.onlineAvailable 
                  ? (language === 'en' ? 'Available' : language === 'si' ? 'ලබා ගත හැකිය' : 'கிடைக்கும்')
                  : (language === 'en' ? 'Not Available' : language === 'si' ? 'ලබා ගත නොහැක' : 'கிடைக்காது')
                }
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-xs text-muted-foreground">
                {language === 'en' ? 'Fee' : language === 'si' ? 'ගාස්තුව' : 'கட்டணம்'}
              </p>
              <p className="font-medium">
                {service.fees.length > 0 ? service.fees[0].amount : (language === 'en' ? 'Contact Office' : language === 'si' ? 'කාර්යාලය අමතන්න' : 'அலுவலகத்தை தொடர்பு கொள்ளுங்கள்')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Notes */}
      {service.importantNotes && service.importantNotes[language] && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>
            {language === 'en' ? 'Important Information' : language === 'si' ? 'වැදගත් තොරතුරු' : 'முக்கிய தகவல்'}
          </AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {service.importantNotes[language].map((note: string, index: number) => (
                <li key={index} className="text-sm">{note}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Step-by-Step Guide */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'How to Apply - Step by Step' : language === 'si' ? 'අයදුම් කරන්නේ කෙසේද - පියවරෙන් පියවර' : 'எவ்வாறு விண்ணப்பிப்பது - படிப்படியாக'}
          </CardTitle>
          <CardDescription>
            {language === 'en' ? 'Follow these steps to complete your application' : language === 'si' ? 'ඔබගේ අයදුම්පත සම්පූර්ණ කිරීමට මෙම පියවර අනුගමනය කරන්න' : 'உங்கள் விண்ணப்பத்தை நிறைவு செய்ய இந்த படிகளை பின்பற்றவும்'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {service.steps.map((step: any, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-1">{getText(step.title)}</h3>
                  <p className="text-sm text-muted-foreground">{getText(step.description)}</p>
                  {step.note && (
                    <p className="text-sm text-blue-600 mt-2 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {getText(step.note)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Required Documents */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Required Documents' : language === 'si' ? 'අවශ්‍ය ලියකියවිලි' : 'தேவையான ஆவணங்கள்'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {service.requiredDocuments.map((doc: any, index: number) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                <CheckCircle className={`h-5 w-5 ${doc.mandatory ? 'text-red-600' : 'text-gray-400'}`} />
                <div className="flex-1">
                  <p className="font-medium flex items-center gap-2">
                    {getText(doc.name)}
                    {doc.mandatory && (
                      <Badge variant="destructive" className="text-xs">
                        {language === 'en' ? 'Required' : language === 'si' ? 'අවශ්‍යයි' : 'அவசியம்'}
                      </Badge>
                    )}
                  </p>
                  {doc.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {getText(doc.description)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fees */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === 'en' ? 'Fees & Charges' : language === 'si' ? 'ගාස්තු සහ ශුල්ක' : 'கட்டணங்கள் & கட்டணங்கள்'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {service.fees.map((fee: any, index: number) => (
              <div key={index} className="flex justify-between items-start p-3 rounded-lg bg-gray-50">
                <div className="flex-1">
                  <p className="font-medium">{getText(fee.description)}</p>
                  {fee.note && (
                    <p className="text-xs text-muted-foreground mt-1">{getText(fee.note)}</p>
                  )}
                </div>
                <p className="font-bold text-blue-600">{fee.amount}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Person */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              {language === 'en' ? 'Contact Information' : language === 'si' ? 'සම්බන්ධ තොරතුරු' : 'தொடர்பு தகவல்'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Department' : language === 'si' ? 'දෙපාර්තමේන්තුව' : 'துறை'}
              </p>
              <p className="font-medium">{getText(department.name)}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Officer in Charge' : language === 'si' ? 'භාර නිලධාරී' : 'பொறுப்பு அதிகாரி'}
              </p>
              <p className="font-medium">{getText(department.inCharge.name)}</p>
              <p className="text-sm text-muted-foreground">{getText(department.inCharge.position)}</p>
            </div>
            {department.inCharge.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${department.inCharge.phone}`} className="text-blue-600 hover:underline">
                  {department.inCharge.phone}
                </a>
              </div>
            )}
            {department.inCharge.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${department.inCharge.email}`} className="text-blue-600 hover:underline">
                  {department.inCharge.email}
                </a>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Forms & Applications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {language === 'en' ? 'Forms & Applications' : language === 'si' ? 'පෝරම සහ අයදුම්පත්' : 'படிவங்கள் & விண்ணப்பங்கள்'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {service.formUrl && (
              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Download Application Form' : language === 'si' ? 'අයදුම්පත්‍රය බාගන්න' : 'விண்ணப்ப படிவத்தை பதிவிறக்கவும்'}
              </Button>
            )}
            {service.onlineAvailable && (
              <Button className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Apply Online' : language === 'si' ? 'මාර්ගගතව අයදුම් කරන්න' : 'ஆன்லைனில் விண்ணப்பிக்கவும்'}
              </Button>
            )}
            <Button className="w-full" variant="secondary">
              <Mail className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Email Inquiry' : language === 'si' ? 'විද්‍යුත් තැපැල් විමසීම' : 'மின்னஞ்சல் விசாரணை'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Services Overview Page
function ServicesOverview() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">
            {language === 'en' ? 'Our Services' : language === 'si' ? 'අපගේ සේවා' : 'எங்கள் சேவைகள்'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Explore the wide range of services offered by Biyagama Pradeshiya Sabha'
              : language === 'si'
              ? 'බියගම ප්‍රාදේශීය සභාව විසින් පිරිනමනු ලබන පුළුල් සේවා පරාසය ගවේෂණය කරන්න'
              : 'பியகமா பிரதேச சபையால் வழங்கப்படும் பரந்த அளவிலான சேவைகளை ஆராயுங்கள்'
            }
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Departments */}
        <div className="mb-12">
          <h2 className="text-3xl mb-6">
            {language === 'en' ? 'Departments' : language === 'si' ? 'දෙපාර්තමේන්තු' : 'துறைகள்'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card 
                key={dept.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/services/department/${dept.id}`)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: dept.color }}
                    />
                    <CardTitle>{getText(dept.name)}</CardTitle>
                  </div>
                  <CardDescription>{getText(dept.description)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {services.filter(s => s.departmentId === dept.id).length}{' '}
                      {language === 'en' ? 'services' : language === 'si' ? 'සේවා' : 'சேவைகள்'}
                    </span>
                    <Button variant="ghost" size="sm">
                      {language === 'en' ? 'View' : language === 'si' ? 'බලන්න' : 'பார்க்க'}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div>
          <h2 className="text-3xl mb-6">
            {language === 'en' ? 'Services by Category' : language === 'si' ? 'කාණ්ඩ අනුව සේවා' : 'வகை வாரியான சேவைகள்'}
          </h2>
          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle>{getText(category.name)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.services.map((serviceId) => {
                      const service = services.find(s => s.id === serviceId);
                      if (!service) return null;
                      
                      return (
                        <Button
                          key={serviceId}
                          variant="outline"
                          className="justify-start h-auto p-4"
                          onClick={() => navigate(`/services/${serviceId}`)}
                        >
                          <div className="text-left">
                            <p className="font-medium">{getText(service.name)}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {getText(service.description).substring(0, 60)}...
                            </p>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Department Page Component
function DepartmentPage({ department, services }: { department: any; services: any[] }) {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div 
        className="bg-gradient-to-r text-white py-16"
        style={{ 
          backgroundImage: `linear-gradient(to right, ${department.color}, ${department.color}dd)` 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">
                  {language === 'en' ? 'Home' : language === 'si' ? 'මුල් පිටුව' : 'முகப்பு'}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li>
                <Link to="/services" className="text-white/80 hover:text-white">
                  {language === 'en' ? 'Services' : language === 'si' ? 'සේවා' : 'சேவைகள்'}
                </Link>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-white">
                {getText(department.name)}
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl mb-4">{getText(department.name)}</h1>
          <p className="text-xl text-white/90">{getText(department.description)}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Officer in Charge */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Officer in Charge' : language === 'si' ? 'භාර නිලධාරී' : 'பொறுப்பு அதிகாரி'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-xl mb-1">{getText(department.inCharge.name)}</h3>
                <p className="text-muted-foreground mb-4">{getText(department.inCharge.position)}</p>
                <div className="space-y-2">
                  {department.inCharge.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${department.inCharge.phone}`} className="text-blue-600 hover:underline">
                        {department.inCharge.phone}
                      </a>
                    </div>
                  )}
                  {department.inCharge.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${department.inCharge.email}`} className="text-blue-600 hover:underline">
                        {department.inCharge.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <h2 className="text-3xl mb-6">
          {language === 'en' ? 'Available Services' : language === 'si' ? 'ලබා ගත හැකි සේවා' : 'கிடைக்கும் சேவைகள்'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {getText(service.name)}
                  {service.onlineAvailable && (
                    <Badge variant="secondary">
                      {language === 'en' ? 'Online' : language === 'si' ? 'මාර්ගගත' : 'ஆன்லைன்'}
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>{getText(service.description)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {getText(service.processingTime)}
                  </div>
                  <Button variant="link" className="p-0 h-auto">
                    {language === 'en' ? 'View Details' : language === 'si' ? 'විස්තර බලන්න' : 'விவரங்களைப் பார்க்க'}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
