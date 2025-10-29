import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

interface Announcement {
  id: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
  image: string;
  category: string;
}

export function AnnouncementsCarousel() {
  const { language } = useLanguage();
  const t = translations[language];

  const announcements: Announcement[] = [
    {
      id: "1",
      date: { day: "15", month: language === "en" ? "NOV" : language === "si" ? "නොවැ" : "நவ" },
      title: language === "en" 
        ? "Community Health Day - Free Medical Camp"
        : language === "si"
        ? "ප්‍රජා සෞඛ්‍ය දිනය - නොමිලේ වෛද්‍ය කඳවුර"
        : "சமூக சுகாதார நாள் - இலவச மருத்துவ முகாம்",
      description: language === "en"
        ? "Join us for free health screenings and consultations."
        : language === "si"
        ? "නොමිලේ සෞඛ්‍ය පරීක්ෂණ සහ උපදේශන සඳහා අප හා එක්වන්න."
        : "இலவச சுகாதார பரிசோதனைகள் மற்றும் ஆலோசனைகளுக்கு எங்களுடன் சேரவும்.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      category: "health"
    },
    {
      id: "2",
      date: { day: "20", month: language === "en" ? "NOV" : language === "si" ? "නොවැ" : "நவ" },
      title: language === "en"
        ? "Road Development Project - Phase 2"
        : language === "si"
        ? "මාර්ග සංවර්ධන ව්‍යාපෘතිය - දෙවන අදියර"
        : "சாலை மேம்பாட்டு திட்டம் - இரண்டாம் கட்டம்",
      description: language === "en"
        ? "Major infrastructure improvements starting next month."
        : language === "si"
        ? "ප්‍රධාන යටිතල පහසුකම් වැඩිදියුණු කිරීම් ලබන මාසයේ ආරම්භ වේ."
        : "முக்கிய உள்கட்டமைப்பு மேம்பாடுகள் அடுத்த மாதம் தொடங்குகின்றன.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      category: "infrastructure"
    },
    {
      id: "3",
      date: { day: "25", month: language === "en" ? "NOV" : language === "si" ? "නොවැ" : "நவ" },
      title: language === "en"
        ? "Waste Management Awareness Program"
        : language === "si"
        ? "අපද්‍රව්‍ය කළමනාකරණ දැනුවත් කිරීමේ වැඩසටහන"
        : "கழிவு மேலாண்மை விழிப்புணர்வு திட்டம்",
      description: language === "en"
        ? "Learn about proper waste disposal and recycling practices."
        : language === "si"
        ? "නිසි අපද්‍රව්‍ය බැහැර කිරීම සහ ප්‍රතිචක්‍රීකරණ පිළිවෙත් ගැන ඉගෙන ගන්න."
        : "சரியான கழிவு அகற்றல் மற்றும் மறுசுழற்சி நடைமுறைகளைப் பற்றி அறிக.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
      category: "environment"
    },
    {
      id: "4",
      date: { day: "30", month: language === "en" ? "NOV" : language === "si" ? "නොවැ" : "நவ" },
      title: language === "en"
        ? "Business License Application Workshop"
        : language === "si"
        ? "ව්‍යාපාර බලපත්‍ර අයදුම්පත් වැඩමුළුව"
        : "வணிக உரிம விண்ணப்ப பட்டறை",
      description: language === "en"
        ? "Get guidance on business registration and licensing."
        : language === "si"
        ? "ව්‍යාපාර ලියාපදිංචිය සහ බලපත්‍ර පිළිබඳ මග පෙන්වීම ලබා ගන්න."
        : "வணிக பதிவு மற்றும் உரிமம் பற்றிய வழிகாட்டுதலைப் பெறுங்கள்.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      category: "community"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="mb-2">
              {language === "en" ? "What's On" : language === "si" ? "සිදුවීම්" : "நிகழ்வுகள்"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en" 
                ? "Upcoming events and announcements"
                : language === "si"
                ? "ඉදිරියට එන සිදුවීම් සහ නිවේදන"
                : "வரவிருக்கும் நிகழ்வுகள் மற்றும் அறிவிப்புகள்"}
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
            {announcements.map((announcement) => (
              <CarouselItem key={announcement.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-md">
                      <span className="text-2xl leading-none">{announcement.date.day}</span>
                      <span className="text-xs text-muted-foreground uppercase">
                        {announcement.date.month}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{announcement.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {announcement.description}
                    </CardDescription>
                  </CardHeader>
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
                ? "View More Events"
                : language === "si"
                ? "තවත් සිදුවීම් බලන්න"
                : "மேலும் நிகழ்வுகளைப் பார்க்கவும்"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
