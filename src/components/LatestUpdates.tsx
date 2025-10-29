import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

interface Update {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

export function LatestUpdates() {
  const { language } = useLanguage();
  const t = translations[language];

  const updates: Update[] = [
    {
      id: "1",
      title: language === "en"
        ? "New Public Library Opens in Biyagama"
        : language === "si"
        ? "බියගමේ නව මහජන පුස්තකාලය විවෘත වේ"
        : "பியகமாவில் புதிய பொது நூலகம் திறக்கப்பட்டது",
      description: language === "en"
        ? "State-of-the-art library facility now available for residents with digital resources and study spaces."
        : language === "si"
        ? "ඩිජිටල් සම්පත් සහ අධ්‍යයන අවකාශයන් සහිත නවීන පුස්තකාල පහසුකම දැන් පදිංචිකරුවන්ට ලබා ගත හැක."
        : "டிஜிட்டல் வளங்கள் மற்றும் படிப்பு இடங்களுடன் அதிநவீன நூலக வசதி இப்போது குடியிருப்பாளர்களுக்கு கிடைக்கிறது.",
      date: language === "en" ? "Published on 28 October 2025" : language === "si" ? "2025 ඔක්තෝබර් 28 ප්‍රකාශයට පත් කරන ලදී" : "28 அக்டோபர் 2025 அன்று வெளியிடப்பட்டது",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
      category: "community"
    },
    {
      id: "2",
      title: language === "en"
        ? "Council Announces New Environmental Initiative"
        : language === "si"
        ? "සභාව නව පරිසර ව්‍යාපාරයක් ප්‍රකාශයට පත් කරයි"
        : "சபை புதிய சுற்றுச்சூழல் முன்முயற்சியை அறிவிக்கிறது",
      description: language === "en"
        ? "Comprehensive plan to increase green spaces and promote sustainable practices across the region."
        : language === "si"
        ? "කලාපය පුරා හරිත අවකාශයන් වැඩි කිරීමට සහ තිරසාර භාවිතයන් ප්‍රවර්ධනය කිරීමට සවිස්තරාත්මක සැලැස්ම."
        : "பகுதி முழுவதும் பசுமையான இடங்களை அதிகரிக்க மற்றும் நிலையான நடைமுறைகளை ஊக்குவிக்க விரிவான திட்டம்.",
      date: language === "en" ? "Published on 27 October 2025" : language === "si" ? "2025 ඔක්තෝබර් 27 ප්‍රකාශයට පත් කරන ලදී" : "27 அக்டோபர் 2025 அன்று வெளியிடப்பட்டது",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      category: "environment"
    },
    {
      id: "3",
      title: language === "en"
        ? "Record Numbers Attend Community Festival"
        : language === "si"
        ? "වාර්තාගත සංඛ්‍යාවක් ප්‍රජා උත්සවයට සහභාගී වේ"
        : "சமூக திருவிழாவில் சாதனை எண்ணிக்கையில் கலந்துகொண்டனர்",
      description: language === "en"
        ? "Annual cultural celebration brings together thousands of residents in a vibrant display of local traditions."
        : language === "si"
        ? "වාර්ෂික සංස්කෘතික සැමරුම දේශීය සම්ප්‍රදායන්ගේ විචිත්‍රවත් ප්‍රදර්ශනයක දහස් ගණන් පදිංචිකරුවන් එක්රැස් කරයි."
        : "வருடாந்திர கலாச்சார கொண்டாட்டம் உள்ளூர் பாரம்பரியங்களின் துடிப்பான காட்சியில் ஆயிரக்கணக்கான குடியிருப்பாளர்களை ஒன்றிணைக்கிறது.",
      date: language === "en" ? "Published on 27 October 2025" : language === "si" ? "2025 ඔක්තෝබර් 27 ප්‍රකාශයට පත් කරන ලදී" : "27 அக்டோபர் 2025 அன்று வெளியிடப்பட்டது",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      category: "community"
    },
    {
      id: "4",
      title: language === "en"
        ? "Digital Services Portal Now Available"
        : language === "si"
        ? "ඩිජිටල් සේවා ද්වාරය දැන් ලබා ගත හැකිය"
        : "டிஜிட்டல் சேவைகள் போர்ட்டல் இப்போது கிடைக்கிறது",
      description: language === "en"
        ? "Apply for permits, pay taxes, and access services online through our new digital platform."
        : language === "si"
        ? "අපගේ නව ඩිජිටල් වේදිකාව හරහා අවසර සඳහා අයදුම් කරන්න, බදු ගෙවන්න සහ සේවා සඳහා ප්‍රවේශ වන්න."
        : "எங்கள் புதிய டிஜிட்டல் தளத்தின் மூலம் அனுமதிகளுக்கு விண்ணப்பிக்கவும், வரிகளை செலுத்தவும் மற்றும் சேவைகளை அணுகவும்.",
      date: language === "en" ? "Published on 26 October 2025" : language === "si" ? "2025 ඔක්තෝබර් 26 ප්‍රකාශයට පත් කරන ලදී" : "26 அக்டோபர் 2025 அன்று வெளியிடப்பட்டது",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "infrastructure"
    }
  ];

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
            {updates.map((update) => (
              <CarouselItem key={update.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{update.title}</CardTitle>
                    <CardDescription className="text-xs flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {update.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {update.description}
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
