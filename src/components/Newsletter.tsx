import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import { allNews } from "../data/news";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export function Newsletter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDateFilter, setSelectedDateFilter] = useState("all");
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedNews, setSelectedNews] = useState<typeof allNews[0] | null>(null);

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

  const filteredNews = allNews.filter((news) => {
    const dateMatch = filterByDate(news.date);
    return dateMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).toUpperCase();
  };

  const getNewsHeading = (news: typeof allNews[0]) => {
    return language === "en" ? news.heading.en : language === "si" ? news.heading.si : news.heading.tm;
  };

  const getNewsSummary = (news: typeof allNews[0]) => {
    return language === "en" ? news.summary.en : language === "si" ? news.summary.si : news.summary.tm;
  };

  const getNewsContent = (news: typeof allNews[0]) => {
    return language === "en" ? news.content.en : language === "si" ? news.content.si : news.content.tm;
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
            {filteredNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={news.image}
                    alt={getNewsHeading(news)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs text-muted-foreground mb-3 tracking-wide">
                    {formatDate(news.date)}
                  </p>
                  <h3 className="mb-3 line-clamp-2">{getNewsHeading(news)}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {getNewsSummary(news)}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="default" 
                        className="bg-[#6B1C1C] hover:bg-[#5A1818]"
                        onClick={() => setSelectedNews(news)}
                      >
                        {t.news.readMore}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-4">{getNewsHeading(news)}</DialogTitle>
                        <DialogDescription className="text-xs mb-4">
                          {formatDate(news.date)}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-[16/9] overflow-hidden rounded-lg mb-6">
                        <img
                          src={news.image}
                          alt={getNewsHeading(news)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none">
                        {getNewsContent(news).split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-4 text-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
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
