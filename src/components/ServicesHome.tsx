import { Link } from "react-router-dom";
import { 
  FileText, 
  Heart, 
  Building2, 
  Trash2, 
  TreePine, 
  Calendar,
  Info,
  Lightbulb,
  MapPin,
  Users,
  DollarSign,
  MessageCircle
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

interface ServiceItem {
  icon: React.ElementType;
  label: string;
  link: string;
}

export function ServicesHome() {
  const { language } = useLanguage();
  const t = translations[language];

  const services: ServiceItem[] = [
    {
      icon: FileText,
      label: language === "en" ? "Online Services" : language === "si" ? "මාර්ගගත සේවා" : "ஆன்லைன் சேவைகள்",
      link: "/services"
    },
    {
      icon: Calendar,
      label: language === "en" ? "Book a Clean-up" : language === "si" ? "පිරිසිදු කිරීමක් වෙන් කරවා ගන්න" : "சுத்தம் செய்ய முன்பதிவு செய்யுங்கள்",
      link: "/services"
    },
    {
      icon: DollarSign,
      label: language === "en" ? "Pay my Rates" : language === "si" ? "මගේ ගාස්තු ගෙවන්න" : "என��ு கட்டணங்களை செலுத்துங்கள்",
      link: "/services"
    },
    {
      icon: MessageCircle,
      label: language === "en" ? "Have your Say" : language === "si" ? "ඔබේ අදහස දක්වන්න" : "உங்கள் கருத்தைச் சொல்லுங்கள்",
      link: "/contact"
    },
    {
      icon: Building2,
      label: language === "en" ? "Libraries and Community Hubs" : language === "si" ? "පුස්තකාල සහ ප්‍රජා මධ්‍යස්ථාන" : "நூலகங்கள் மற்றும் சமூக மையங்கள்",
      link: "/services"
    },
    {
      icon: Info,
      label: language === "en" ? "Food & Garden Organics" : language === "si" ? "ආහාර සහ වත්ත කාබනික" : "உணவு & தோட்ட கரிமம்",
      link: "/services"
    },
    {
      icon: Lightbulb,
      label: language === "en" ? "Development Applications" : language === "si" ? "සංවර්ධන අයදුම්පත්" : "மேம்பாட்டு விண்ணப்பங்கள்",
      link: "/services"
    },
    {
      icon: TreePine,
      label: language === "en" ? "Sportsground Status" : language === "si" ? "ක්‍රීඩාංගණ තත්ත්වය" : "விளையாட்டு மைதான நிலை",
      link: "/services"
    },
    {
      icon: Trash2,
      label: language === "en" ? "Bin Collection" : language === "si" ? "බඳුන් එකතු කිරීම" : "குப்பை சேகரிப்பு",
      link: "/services"
    },
    {
      icon: MapPin,
      label: language === "en" ? "Parking" : language === "si" ? "වාහන නැවැත්වීම" : "வாகன நிறுத்தம்",
      link: "/services"
    },
    {
      icon: MapPin,
      label: language === "en" ? "Places for Hire" : language === "si" ? "කුලියට ගත හැකි ස්ථාන" : "வாடகைக்கு இடங்கள்",
      link: "/services"
    },
    {
      icon: Users,
      label: language === "en" ? "Council Meetings" : language === "si" ? "සභා රැස්වීම්" : "சபை கூட்டங்கள்",
      link: "/council"
    }
  ];

  return (
    <section className="py-12 bg-[#003d5c] text-white shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#003d5c] rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group flex items-center gap-3 p-4 rounded-lg border border-white/20 hover:bg-white/10 transition-all hover:border-cyan-400"
                >
                  <div className="flex-shrink-0 p-2 rounded-full bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-colors">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <span className="text-sm leading-tight">
                    {service.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
