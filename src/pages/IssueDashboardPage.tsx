import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, TrendingUp, CheckCircle2, Clock, AlertCircle, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';
import { issueCategories } from '../data/issues';
import { wards } from '../data/wards';

interface Issue {
  id: number;
  title: string;
  issue_type_id: number | null;
  description: string;
  location_latitude: number | null;
  location_longitude: number | null;
  ward_id: number | null;
  manual_location: string;
  photo_url: string;
  reporter_name: string;
  reporter_email: string;
  reporter_phone: string;
  is_anonymous: boolean;
  status: string;
  priority: string;
  admin_notes: string;
  created_at: string;
  updated_at: string;
  resolved_at: string | null;
}

export function IssueDashboardPage() {
  const { language } = useLanguage();
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWard, setSelectedWard] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ... existing code ...

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/issues`);
        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }
        const data = await response.json();
        setIssues(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const pageTitle = {
    en: 'Public Issue Dashboard',
    si: 'මහජන ගැටළු උපකරණ පුවරුව',
    tm: 'பொது பிரச்சினை கட்டுப்பாட்டு பலகை'
  };

  const pageDescription = {
    en: 'Track all reported issues and their resolution status in your area',
    si: 'ඔබගේ ප්‍රදේශයේ වාර්තා කරන ලද සියලුම ගැටළු සහ ඒවායේ විසඳුම් තත්ත්වය නිරීක්ෂණය කරන්න',
    tm: 'உங்கள் பகுதியில் புகாரளிக்கப்பட்ட அனைத்து பிரச்சினைகளையும் அவற்றின் தீர்வு நிலையையும் கண்காணிக்கவும்'
  };

  // Filter issues
  const filteredIssues = useMemo(() => {
    return issues.filter(issue => {
      const matchesSearch = 
        issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (issue.description && issue.description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const issueCategory = issue.issue_type_id !== null 
        ? issueCategories.find(c => c.types.includes(issue.issue_type_id!.toString()))
        : undefined;
      const matchesCategory = selectedCategory === 'all' || (issueCategory && issueCategory.id === selectedCategory);
      const matchesWard = selectedWard === 'all' || (issue.ward_id && issue.ward_id.toString() === selectedWard);
      const matchesStatus = selectedStatus === 'all' || issue.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesWard && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedWard, selectedStatus, issues]);

  // Calculate statistics
  const stats = useMemo(() => {
    const total = issues.length;
    const resolved = issues.filter(i => i.status === 'resolved').length;
    const inProgress = issues.filter(i => i.status === 'in-progress').length;
    const pending = issues.filter(i => i.status === 'new').length;
    
    return { total, resolved, inProgress, pending };
  }, [issues]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-gray-500';
      case 'acknowledged': return 'bg-blue-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      case 'closed': return 'bg-gray-400';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      new: { en: 'New', si: 'අලුත්', tm: 'புதிய' },
      acknowledged: { en: 'Acknowledged', si: 'පිළිගත්තා', tm: 'ஒப்புக்கொள்ளப்பட்டது' },
      'in-progress': { en: 'In Progress', si: 'ක්‍රියාත්මක වෙමින්', tm: 'செயல்பாட்டில்' },
      resolved: { en: 'Resolved', si: 'විසඳා ඇත', tm: 'தீர்க்கப்பட்டது' },
      closed: { en: 'Closed', si: 'වසා දමා ඇත', tm: 'மூடப்பட்டது' }
    };
    return getText(statusMap[status as keyof typeof statusMap] || statusMap.new);
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

  if (loading) {
    return <div className="container mx-auto p-8 text-center">Loading issues...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-8 text-center text-red-600">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl mb-4">{getText(pageTitle)}</h1>
            <p className="text-xl text-white/90">{getText(pageDescription)}</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Total Issues' : language === 'si' ? 'මුළු ගැටළු' : 'மொத்த பிரச்சினைகள்'}
                  </p>
                  <p className="text-3xl font-bold mt-1">{stats.total}</p>
                </div>
                <AlertCircle className="h-10 w-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Resolved' : language === 'si' ? 'විසඳා ඇත' : 'தீர்க்கப்பட்டது'}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-green-600">{stats.resolved}</p>
                </div>
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'In Progress' : language === 'si' ? 'ක්‍රියාත්මක වෙමින්' : 'செயல்பாட்டில்'}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-yellow-600">{stats.inProgress}</p>
                </div>
                <Clock className="h-10 w-10 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Pending' : language === 'si' ? 'පොරොත්තු' : 'நிலுவையில்'}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-gray-600">{stats.pending}</p>
                </div>
                <Filter className="h-10 w-10 text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              {language === 'en' ? 'Filter Issues' : language === 'si' ? 'ගැටළු පෙරහන් කරන්න' : 'பிரச்சினைகளை வடிகட்டவும்'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={language === 'en' ? 'Search issues...' : language === 'si' ? 'ගැටළු සොයන්න...' : 'பிரச்சினைகளை தேடுங்கள்...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'en' ? 'All Categories' : language === 'si' ? 'සියලුම කාණ්ඩ' : 'அனைத்து வகைகள்'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === 'en' ? 'All Categories' : language === 'si' ? 'සියලුම කාණ්ඩ' : 'அனைத்து வகைகள்'}
                  </SelectItem>
                  {issueCategories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {getText(cat.name)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Ward Filter */}
              <Select value={selectedWard} onValueChange={setSelectedWard}>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'en' ? 'All Wards' : language === 'si' ? 'සියලුම වාට්ටු' : 'அனைத்து வார்டுகள்'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === 'en' ? 'All Wards' : language === 'si' ? 'සියලුම වාට්ටු' : 'அனைத்து வார்டுகள்'}
                  </SelectItem>
                  {wards.map(ward => (
                    <SelectItem key={ward.id} value={ward.id}>
                      {getText(ward.name)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder={language === 'en' ? 'All Statuses' : language === 'si' ? 'සියලුම තත්ත්වයන්' : 'அனைத்து நிலைகள்'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">
                    {language === 'en' ? 'All Statuses' : language === 'si' ? 'සියලුම තත්ත්වයන්' : 'அனைத்து நிலைகள்'}
                  </SelectItem>
                  <SelectItem value="new">{getStatusText('new')}</SelectItem>
                  <SelectItem value="acknowledged">{getStatusText('acknowledged')}</SelectItem>
                  <SelectItem value="in-progress">{getStatusText('in-progress')}</SelectItem>
                  <SelectItem value="resolved">{getStatusText('resolved')}</SelectItem>
                  <SelectItem value="closed">{getStatusText('closed')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Summary */}
            {(selectedCategory !== 'all' || selectedWard !== 'all' || selectedStatus !== 'all' || searchQuery) && (
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Active filters:' : language === 'si' ? 'සක්‍රිය පෙරහන්:' : 'செயலில் உள்ள வடிகட்டிகள்:'}
                </span>
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    {language === 'en' ? 'Search' : language === 'si' ? 'සොයන්න' : 'தேடல்'}: "{searchQuery}"
                  </Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary">
                    {getText(issueCategories.find(c => c.id === selectedCategory)?.name)}
                  </Badge>
                )}
                {selectedWard !== 'all' && (
                  <Badge variant="secondary">
                    {getText(wards.find(w => w.id === selectedWard)?.name)}
                  </Badge>
                )}
                {selectedStatus !== 'all' && (
                  <Badge variant="secondary">
                    {getStatusText(selectedStatus)}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedWard('all');
                    setSelectedStatus('all');
                  }}
                >
                  {language === 'en' ? 'Clear all' : language === 'si' ? 'සියල්ල ඉවත් කරන්න' : 'அனைத்தையும் நீக்கு'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl">
            {language === 'en' ? 'Issues' : language === 'si' ? 'ගැටළු' : 'பிரச்சினைகள்'} ({filteredIssues.length})
          </h2>
        </div>

        {/* Issues Grid */}
        {filteredIssues.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                {language === 'en' ? 'No issues found matching your filters' : language === 'si' ? 'ඔබගේ පෙරහන් වලට ගැලපෙන ගැටළු හමු නොවීය' : 'உங்கள் வடிகட்டிகளுடன் பொருந்தும் பிரச்சினைகள் இல்லை'}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredIssues.map(issue => {
              const issueCategory = issue.issue_type_id !== null
                ? issueCategories.find(c => c.types.includes(issue.issue_type_id!.toString()))
                : undefined;
              const ward = wards.find(w => issue.ward_id && w.id === issue.ward_id.toString());
              
              return (
                <Dialog key={issue.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedIssue(issue)}>
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getStatusColor(issue.status)}>
                            {getStatusText(issue.status)}
                          </Badge>
                          {getPriorityBadge(issue.priority)}
                        </div>
                        <CardTitle className="text-lg line-clamp-2">{issue.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{issue.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="truncate">{ward ? getText(ward.name) : issue.manual_location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(issue.created_at).toLocaleDateString()}</span>
                          </div>
                          {issueCategory && (
                            <div>
                              <Badge variant="outline" style={{ borderColor: issueCategory.color, color: issueCategory.color }}>
                                {getText(issueCategory.name)}
                              </Badge>
                            </div>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="w-full mt-4">
                          <Eye className="h-4 w-4 mr-2" />
                          {language === 'en' ? 'View Details' : language === 'si' ? 'විස්තර බලන්න' : 'விவரங்களை பார்க்க'}
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <IssueDetailsDialog 
                      issue={issue} 
                      getStatusColor={getStatusColor} 
                      getStatusText={getStatusText} 
                    />
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// Issue Details Dialog Component
function IssueDetailsDialog({ 
  issue, 
  getStatusColor, 
  getStatusText 
}: { 
  issue: Issue | null,
  getStatusColor: (status: string) => string,
  getStatusText: (status: string) => string
}) {
  const { language } = useLanguage();
  
  if (!issue) {
    return null;
  }

  const issueCategory = issue.issue_type_id !== null
    ? issueCategories.find(c => c.types.includes(issue.issue_type_id!.toString()))
    : undefined;
  const ward = wards.find(w => issue.ward_id && w.id === issue.ward_id.toString());

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl pr-8">{issue.title}</DialogTitle>
        <DialogDescription className="font-mono text-blue-600">
          ID: {issue.id}
        </DialogDescription>
      </DialogHeader>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">
            {language === 'en' ? 'Description' : language === 'si' ? 'විස්තරය' : 'விளக்கம்'}
          </h4>
          <p className="text-muted-foreground">{issue.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">
              {language === 'en' ? 'Status' : language === 'si' ? 'තත්ත්වය' : 'நிலை'}
            </h4>
            <Badge className={getStatusColor(issue.status)}>
              {getStatusText(issue.status)}
            </Badge>
          </div>
          <div>
            <h4 className="font-medium mb-1">
              {language === 'en' ? 'Category' : language === 'si' ? 'කාණ්ඩය' : 'வகை'}
            </h4>
            <p className="text-muted-foreground">{issueCategory && getText(issueCategory.name)}</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">
            {language === 'en' ? 'Location' : language === 'si' ? 'ස්ථානය' : 'இடம்'}
          </h4>
          <div className="space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              {issue.manual_location}
            </p>
            {ward && (
              <p className="text-muted-foreground ml-6">
                {getText(ward.name)}
              </p>
            )}
            {(issue.location_latitude && issue.location_longitude) && (
              <p className="text-xs text-muted-foreground ml-6">
                GPS: {issue.location_latitude.toFixed(6)}, {issue.location_longitude.toFixed(6)}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-1">
              {language === 'en' ? 'Submitted' : language === 'si' ? 'ඉදිරිපත් කළ' : 'சமர்ப்பிக்கப்பட்டது'}
            </h4>
            <p className="text-muted-foreground">{new Date(issue.created_at).toLocaleString()}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">
              {language === 'en' ? 'Last Updated' : language === 'si' ? 'අවසන් යාවත්කාලීනය' : 'கடைசியாக புதுப்பிக்கப்பட்டது'}
            </h4>
            <p className="text-muted-foreground">{new Date(issue.updated_at).toLocaleString()}</p>
          </div>
        </div>

        {issue.admin_notes && (
          <div>
            <h4 className="font-medium mb-2">
              {language === 'en' ? 'Administrator Notes' : language === 'si' ? 'පරිපාලක සටහන්' : 'நிர்வாகி குறிப்புகள்'}
            </h4>
            <div className="p-3 bg-gray-100 rounded-md text-sm text-muted-foreground">
              <p>{issue.admin_notes}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
