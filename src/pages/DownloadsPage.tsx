import { useState } from 'react';
import { Download, FileText, Scale, Briefcase, Search, Calendar, HardDrive, File } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { downloads, downloadCategories } from '../data/downloads';

export function DownloadsPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const pageTitle = {
    en: 'Downloads',
    si: 'බාගත කිරීම්',
    tm: 'பதிவிறக்கங்கள்'
  };

  const pageDescription = {
    en: 'Access important documents, reports, and official publications',
    si: 'වැදගත් ලේඛන, වාර්තා සහ නිල ප්‍රකාශන වෙත ප්‍රවේශ වන්න',
    tm: 'முக்கியமான ஆவணங்கள், அறிக்கைகள் மற்றும் அதிகாரப்பூர்வ வெளியீடுகளை அணுகவும்'
  };

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = 
      getText(item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      getText(item.description).toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'Scale': Scale,
      'FileText': FileText,
      'Briefcase': Briefcase
    };
    return icons[iconName] || FileText;
  };

  const getFileIcon = (fileType: string) => {
    return File;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Download className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl mb-4">{getText(pageTitle)}</h1>
            <p className="text-xl text-white/90">{getText(pageDescription)}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={
                      language === 'en' 
                        ? 'Search documents...' 
                        : language === 'si' 
                        ? 'ලේඛන සොයන්න...' 
                        : 'ஆவணங்களை தேடுங்கள்...'
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="all">
                {language === 'en' ? 'All' : language === 'si' ? 'සියල්ල' : 'அனைத்தும்'}
              </TabsTrigger>
              {downloadCategories.map(category => {
                const IconComponent = getCategoryIcon(category.icon);
                return (
                  <TabsTrigger key={category.id} value={category.id}>
                    <IconComponent className="h-4 w-4 mr-2" />
                    {getText(category.name)}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value={selectedCategory}>
              {/* Results count */}
              <div className="mb-4">
                <p className="text-muted-foreground">
                  {filteredDownloads.length}{' '}
                  {language === 'en' 
                    ? 'documents found' 
                    : language === 'si' 
                    ? 'ලේඛන හමු විය' 
                    : 'ஆவணங்கள் கிடைத்தன'}
                </p>
              </div>

              {/* Downloads Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDownloads.map(item => {
                  const FileIcon = getFileIcon(item.fileType);
                  
                  return (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <FileIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-1">
                                {getText(item.title)}
                              </CardTitle>
                              <CardDescription className="text-sm">
                                {getText(item.description)}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{item.uploadDate.toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <HardDrive className="h-4 w-4" />
                              <span>{item.fileSize}</span>
                            </div>
                          </div>
                          <Badge variant="outline">{item.fileType}</Badge>
                        </div>
                        <Button className="w-full" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          {language === 'en' ? 'Download' : language === 'si' ? 'බාගන්න' : 'பதிவிறக்கம்'}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Empty State */}
              {filteredDownloads.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg text-muted-foreground">
                      {language === 'en' 
                        ? 'No documents found matching your search' 
                        : language === 'si' 
                        ? 'ඔබගේ සෙවුමට ගැළපෙන ලේඛන හමු නොවීය' 
                        : 'உங்கள் தேடலுடன் பொருந்தும் ஆவணங்கள் இல்லை'}
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
