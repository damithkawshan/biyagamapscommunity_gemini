import { useState } from 'react';
import { Building2, Calendar, DollarSign, TrendingUp, CheckCircle2, Clock, Pause, Filter, MapPin, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Separator } from '../components/ui/separator';
import { useLanguage } from '../contexts/LanguageContext';
import { projects, projectCategories, Project } from '../data/projects';

export function ProjectsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const pageTitle = {
    en: 'Ongoing Projects',
    si: 'ක්‍රියාත්මක ව්‍යාපෘති',
    tm: 'நடந்துகொண்டிருக்கும் திட்டங்கள்'
  };

  const pageDescription = {
    en: 'Track the progress of development projects in Biyagama',
    si: 'බියගම සංවර්ධන ව්‍යාපෘතිවල ප්‍රගතිය නිරීක්ෂණය කරන්න',
    tm: 'பியகம அபிவிருத்தி திட்டங்களின் முன்னேற்றத்தை கண்காணிக்கவும்'
  };

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-gray-500';
      case 'ongoing': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'on-hold': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      planning: { en: 'Planning', si: 'සැලසුම්කරණය', tm: 'திட்டமிடல்' },
      ongoing: { en: 'Ongoing', si: 'ක්‍රියාත්මක', tm: 'நடந்துகொண்டிருக்கும்' },
      completed: { en: 'Completed', si: 'සම්පූර්ණයි', tm: 'முடிந்தது' },
      'on-hold': { en: 'On Hold', si: 'තාවකාලිකව නතර', tm: 'நிறுத்தப்பட்டது' }
    };
    return getText(statusMap[status as keyof typeof statusMap] || statusMap.planning);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'planning': return Filter;
      case 'ongoing': return TrendingUp;
      case 'completed': return CheckCircle2;
      case 'on-hold': return Pause;
      default: return Clock;
    }
  };

  const getCategoryIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'Building2': Building2,
      'Route': TrendingUp,
      'Leaf': CheckCircle2,
      'Users': User
    };
    return icons[iconName] || Building2;
  };

  const formatCurrency = (amount: number) => {
    return `Rs. ${(amount / 1000000).toFixed(1)}M`;
  };

  // Calculate statistics
  const stats = {
    total: projects.length,
    ongoing: projects.filter(p => p.status === 'ongoing').length,
    completed: projects.filter(p => p.status === 'completed').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl mb-4">{getText(pageTitle)}</h1>
            <p className="text-xl text-white/90">{getText(pageDescription)}</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Total Projects' : language === 'si' ? 'මුළු ව්‍යාපෘති' : 'மொத்த திட்டங்கள்'}
                  </p>
                  <p className="text-3xl font-bold mt-1">{stats.total}</p>
                </div>
                <Building2 className="h-10 w-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Ongoing' : language === 'si' ? 'ක්‍රියාත්මක' : 'நடப்பில்'}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-blue-600">{stats.ongoing}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Completed' : language === 'si' ? 'සම්පූර්ණයි' : 'முடிந்தது'}
                  </p>
                  <p className="text-3xl font-bold mt-1 text-green-600">{stats.completed}</p>
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
                    {language === 'en' ? 'Total Budget' : language === 'si' ? 'මුළු අයවැය' : 'மொத்த பட்ஜெட்'}
                  </p>
                  <p className="text-3xl font-bold mt-1">{formatCurrency(stats.totalBudget)}</p>
                </div>
                <DollarSign className="h-10 w-10 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>
                {language === 'en' ? 'Filter Projects' : language === 'si' ? 'ව්‍යාපෘති පෙරහන් කරන්න' : 'திட்டங்களை வடிகட்டவும்'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {language === 'en' ? 'Category' : language === 'si' ? 'කාණ්ඩය' : 'வகை'}
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {language === 'en' ? 'All Categories' : language === 'si' ? 'සියලුම කාණ්ඩ' : 'அனைத்து வகைகள்'}
                      </SelectItem>
                      {projectCategories.map(cat => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {getText(cat.name)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {language === 'en' ? 'Status' : language === 'si' ? 'තත්ත්වය' : 'நிலை'}
                  </label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {language === 'en' ? 'All Statuses' : language === 'si' ? 'සියලුම තත්ත්වයන්' : 'அனைத்து நிலைகள்'}
                      </SelectItem>
                      <SelectItem value="ongoing">{getStatusText('ongoing')}</SelectItem>
                      <SelectItem value="planning">{getStatusText('planning')}</SelectItem>
                      <SelectItem value="completed">{getStatusText('completed')}</SelectItem>
                      <SelectItem value="on-hold">{getStatusText('on-hold')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="mb-4">
            <h2 className="text-2xl">
              {filteredProjects.length}{' '}
              {language === 'en' ? 'Projects' : language === 'si' ? 'ව්‍යාපෘති' : 'திட்டங்கள்'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map(project => {
              const category = projectCategories.find(c => c.id === project.category);
              const StatusIcon = getStatusIcon(project.status);
              
              return (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getStatusColor(project.status)}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {getStatusText(project.status)}
                          </Badge>
                          {category && (
                            <Badge variant="outline" style={{ borderColor: category.color, color: category.color }}>
                              {getText(category.name)}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl">{getText(project.title)}</CardTitle>
                        <CardDescription>{getText(project.description)}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {/* Progress Bar */}
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">
                                {language === 'en' ? 'Progress' : language === 'si' ? 'ප්‍රගතිය' : 'முன்னேற்றம்'}
                              </span>
                              <span className="text-sm font-medium">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            {project.ward && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{project.ward}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{project.expectedEndDate.toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <DollarSign className="h-4 w-4" />
                              <span>{formatCurrency(project.budget)}</span>
                            </div>
                            <div className="text-muted-foreground">
                              <span className="text-xs">
                                {language === 'en' ? 'Spent:' : language === 'si' ? 'වියදම්:' : 'செலவு:'}{' '}
                              </span>
                              <span className="font-medium">{formatCurrency(project.spent)}</span>
                            </div>
                          </div>

                          <Button variant="outline" className="w-full">
                            {language === 'en' ? 'View Details' : language === 'si' ? 'විස්තර බලන්න' : 'விவரங்களை பார்க்க'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <ProjectDetailsDialog project={project} />
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Details Dialog Component
function ProjectDetailsDialog({ project }: { project: Project }) {
  const { language } = useLanguage();
  const category = projectCategories.find(c => c.id === project.category);

  const getText = (obj: any) => {
    if (!obj) return '';
    return language === 'en' ? obj.en : language === 'si' ? obj.si : obj.tm;
  };

  const formatCurrency = (amount: number) => {
    return `Rs. ${(amount / 1000000).toFixed(2)}M`;
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      planning: { en: 'Planning', si: 'සැලසුම්කරණය', tm: 'திட்டமிடல்' },
      ongoing: { en: 'Ongoing', si: 'ක්‍රියාත්මක', tm: 'நடந்துகொண்டிருக்கும்' },
      completed: { en: 'Completed', si: 'සම්පූර්ණයි', tm: 'முடிந்தது' },
      'on-hold': { en: 'On Hold', si: 'තාවකාලිකව නතර', tm: 'நிறுத்தப்பட்டது' }
    };
    return getText(statusMap[status as keyof typeof statusMap] || statusMap.planning);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl pr-8">{getText(project.title)}</DialogTitle>
        <DialogDescription className="text-base">
          {getText(project.description)}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">
              {language === 'en' ? 'Project Progress' : language === 'si' ? 'ව්‍යාපෘති ප්‍රගතිය' : 'திட்ட முன்னேற்றம்'}
            </h4>
            <span className="text-2xl font-bold text-blue-600">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-3" />
        </div>

        <Separator />

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1 text-sm text-muted-foreground">
              {language === 'en' ? 'Status' : language === 'si' ? 'තත්ත්වය' : 'நிலை'}
            </h4>
            <p>{getStatusText(project.status)}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1 text-sm text-muted-foreground">
              {language === 'en' ? 'Category' : language === 'si' ? 'කාණ්ඩය' : 'வகை'}
            </h4>
            <p>{category && getText(category.name)}</p>
          </div>
          {project.ward && (
            <div>
              <h4 className="font-medium mb-1 text-sm text-muted-foreground">
                {language === 'en' ? 'Ward' : language === 'si' ? 'වාට්ටුව' : 'வார்டு'}
              </h4>
              <p>{project.ward}</p>
            </div>
          )}
          <div>
            <h4 className="font-medium mb-1 text-sm text-muted-foreground">
              {language === 'en' ? 'Start Date' : language === 'si' ? 'ආරම්භක දිනය' : 'தொடக்க தேதி'}
            </h4>
            <p>{project.startDate.toLocaleDateString()}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1 text-sm text-muted-foreground">
              {language === 'en' ? 'Expected Completion' : language === 'si' ? 'අපේක්ෂිත නිමාව' : 'எதிர்பார்க்கப்பட்ட நிறைவு'}
            </h4>
            <p>{project.expectedEndDate.toLocaleDateString()}</p>
          </div>
          {project.actualEndDate && (
            <div>
              <h4 className="font-medium mb-1 text-sm text-muted-foreground">
                {language === 'en' ? 'Actual Completion' : language === 'si' ? 'සැබෑ නිමාව' : 'உண்மையான நிறைவு'}
              </h4>
              <p>{project.actualEndDate.toLocaleDateString()}</p>
            </div>
          )}
        </div>

        <Separator />

        {/* Financial Details */}
        <div>
          <h4 className="font-medium mb-3">
            {language === 'en' ? 'Financial Details' : language === 'si' ? 'මූල්‍ය විස්තර' : 'நிதி விவரங்கள்'}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {language === 'en' ? 'Total Budget' : language === 'si' ? 'මුළු අයවැය' : 'மொத்த பட்ஜெட்'}
              </p>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(project.budget)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {language === 'en' ? 'Amount Spent' : language === 'si' ? 'වියදම් කළ මුදල' : 'செலவழித்த தொகை'}
              </p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(project.spent)}</p>
            </div>
          </div>
          <div className="mt-2">
            <Progress value={(project.spent / project.budget) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {((project.spent / project.budget) * 100).toFixed(1)}%{' '}
              {language === 'en' ? 'of budget utilized' : language === 'si' ? 'අයවැයෙන් භාවිතා කර ඇත' : 'பட்ஜெட் பயன்படுத்தப்பட்டது'}
            </p>
          </div>
        </div>

        {project.contractor && (
          <>
            <Separator />
            <div>
              <h4 className="font-medium mb-1 text-sm text-muted-foreground">
                {language === 'en' ? 'Contractor' : language === 'si' ? 'කොන්ත්‍රාත්කරු' : 'ஒப்பந்ததாரர்'}
              </h4>
              <p>{getText(project.contractor)}</p>
            </div>
          </>
        )}

        {/* Project Updates */}
        {project.updates && project.updates.length > 0 && (
          <>
            <Separator />
            <div>
              <h4 className="font-medium mb-3">
                {language === 'en' ? 'Project Updates' : language === 'si' ? 'ව්‍යාපෘති යාවත්කාලීන' : 'திட்ட புதுப்பிப்புகள்'}
              </h4>
              <div className="space-y-3">
                {project.updates.map((update, index) => (
                  <div key={update.id} className="flex gap-3">
                    <div className="relative flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      {index < project.updates!.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 absolute top-8" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {update.progress}%
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {update.date.toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm">{getText(update.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
