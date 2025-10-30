import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import { allNews } from "../data/news";

export function LatestUpdates() {
  const { language } = useLanguage();
  const t = translations[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formatted = date.toLocaleDateString(language === "en" ? "en-US" : "si-LK", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    
    if (language === "en") {
      return `Published on ${formatted}`;
    } else if (language === "si") {
      return `${formatted} ප්‍රකාශයට පත් කරන ලදී`;
    } else {
      return `${formatted} அன்று வெளியிடப்பட்டது`;
    }
  };

  const getHeading = (news: typeof allNews[0]) => {
    return language === "en" ? news.heading.en : language === "si" ? news.heading.si : news.heading.tm;
  };

  const getSummary = (news: typeof allNews[0]) => {
    return language === "en" ? news.summary.en : language === "si" ? news.summary.si : news.summary.tm;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="mb-2">
              {language === "en" ? "Latest Updates" : language === "si" ? "නවතම යාවත්කාලීන" : "சமீபத்திய புதுப்பிப்புகள்"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Stay informed about recent developments"
                : language === "si"
                ? "මෑත සංවර්ධන ගැන දැනුවත්ව සිටින්න"
                : "சமீபத்திய மேம்பாடுகள் பற்றி தெரிந்து கொள்ளுங்கள்"}
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {allNews.map((news, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={news.image}
                      alt={getHeading(news)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{getHeading(news)}</CardTitle>
                    <CardDescription className="text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(news.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {getSummary(news)}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-6">
          <Link to="/newsletter">
            <Button variant="outline" size="lg">
              {language === "en"
                ? "View All Updates"
                : language === "si"
                ? "සියලුම යාවත්කාලීන බලන්න"
                : "அனைத்து புதுப்பிப்புகளையும் பார்க்கவும்"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
