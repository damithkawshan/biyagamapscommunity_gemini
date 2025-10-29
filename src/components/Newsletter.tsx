import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: "2025-10-15",
    category: "infrastructure",
    title: "බියගම ප්‍රාදේශීය සභා මෙහෙයුම් ශීල්ප ජයග්‍රහණ අධීක්‍ෂණ අධීක්ෂණ",
    description: "අධ්‍යාපන අග්‍රාමාත්‍ය කාර්යාල් පළාතේ අන්තර්ජාල වස්තු කෝටි පර්යේෂණ ආශ්‍රිත හා ඩිජිටල් කාර්මික බලශක්ති නිෂ්පාදන මෙන්ම කෘෂි කර්ම භූමිය තත්ව ආරක්ෂාව ප්‍රාදේශීය සභා සභා ප්‍රාදේශීය සභා සහයෝගය පෙම්වත් සංවර්ධන කොට දෙනු අර්ථ සම්පතු සතුරැ පෞද්ගලික හෙදි ජනතා අධිකාරිය තැනැත්තා විසින්.",
    image: "https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxNjUwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    date: "2025-09-17",
    category: "environment",
    title: "පළාත් පාලන සභිතල සංභාර සංක්‍ෂොධනය කළුතාරා කළ ශුභ ගැටලුව",
    description: "මියගම ප්‍රාදේශීය සභා නගර පුද්ගලික් පළාත් පාලන සභිත කමීශන දිනට වෙළද පොදු කරදරා තා සාර්ව්නක්කින්න ලබා නිවේදනය ලැව් සාමාන්ව්නක හා ශුභ ගැටලුව සුදුසු පරීක්්ෂණ.",
    image: "https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjbGVhbnVwJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjE2NjYzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    date: "2025-09-16",
    category: "health",
    title: "පළාත් පාලන සභිත සංභාර ජනසෞම් රූ්්ෂි නීති්පණ වැඩසටහන් සන්දර්ශණ සංවර්ධනය",
    description: "පළාත් පාලන සභිත සංභාර රූ්්ෂි නීති්පණ දිනට ඇතුලත වෙයි පෞද්ගලික් කෘෂිකර්ම මියගම ප්‍රාදේශීය සභා නගර විස්තර් රූ්්ෂි වටිනාකම් සමීක්සස වස්තැන්තක්, විශ්ව කර්තෘත්වයක් නිවේ නු සංවර්ධනය අධීක්් විසි.",
    image: "https://images.unsplash.com/photo-1655084131262-73cbdc46522b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBoZWFsdGglMjBzZXJ2aWNlfGVufDF8fHx8MTc2MTY2NjM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    date: "2025-09-15",
    category: "community",
    title: "ජනතා සංවර්ධන වැඩසටහන් අභීත සේවා දිනය",
    description: "බියගම ප්‍රාදේශීය සභා ප්‍රදේශයේ ජනතා සංවර්ධන සහ සමාජ සේවා වැඩසටහන් සාර්ථකව ක්‍රියාත්මක කරන ලදී.",
    image: "https://images.unsplash.com/photo-1690307792773-374e9b56b5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRldmVsb3BtZW50JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTY2NjM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    date: "2025-08-20",
    category: "infrastructure",
    title: "නව මාර්ග සංවර්ධන ව්‍යාපෘතිය ආරම්භ කිරීම",
    description: "බියගම ප්‍රාදේශීය සභාව මඟින් නව මාර්ග සංවර්ධන ව්‍යාපෘතියක් ආරම්භ කර ඇත.",
    image: "https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxNjUwMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    date: "2025-08-10",
    category: "environment",
    title: "පරිසර සංරක්ෂණ දින උත්සවය",
    description: "බියගම ප්‍රාදේශීය සභාව විසින් පරිසර සංරක්ෂණ දින උත්සවය සංවිධානය කරන ලදී.",
    image: "https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjbGVhbnVwJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NjE2NjYzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Newsletter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDateFilter, setSelectedDateFilter] = useState("all");
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    { value: "all", label: t.news.allCategories },
    { value: "infrastructure", label: t.news.infrastructure },
    { value: "environment", label: t.news.environment },
    { value: "health", label: t.news.health },
    { value: "community", label: t.news.community },
  ];

  const dateFilters = [
    { value: "all", label: t.news.allTime },
    { value: "month", label: t.news.month },
    { value: "3months", label: t.news.threeMonths },
    { value: "6months", label: t.news.sixMonths },
  ];

  const filterByDate = (dateString: string) => {
    if (selectedDateFilter === "all") return true;
    
    const newsDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - newsDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    switch (selectedDateFilter) {
      case "month":
        return diffDays <= 30;
      case "3months":
        return diffDays <= 90;
      case "6months":
        return diffDays <= 180;
      default:
        return true;
    }
  };

  const filteredNews = newsData.filter((news) => {
    const categoryMatch = selectedCategory === "all" || news.category === selectedCategory;
    const dateMatch = filterByDate(news.date);
    return categoryMatch && dateMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();
  };

  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="mb-2">{t.news.title}</h2>
          <p className="text-muted-foreground">
            {t.news.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder={t.news.filterCategory} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={selectedDateFilter} onValueChange={setSelectedDateFilter}>
              <SelectTrigger>
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder={t.news.filterDate} />
              </SelectTrigger>
              <SelectContent>
                {dateFilters.map((filter) => (
                  <SelectItem key={filter.value} value={filter.value}>
                    {filter.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs text-muted-foreground mb-3 tracking-wide">
                    {formatDate(news.date)}
                  </p>
                  <h3 className="mb-3 line-clamp-2">{news.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {news.description}
                  </p>
                  <Button variant="default" className="bg-[#6B1C1C] hover:bg-[#5A1818]">
                    {t.news.readMore}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t.news.noNews}</p>
          </div>
        )}
      </div>
    </section>
  );
}
