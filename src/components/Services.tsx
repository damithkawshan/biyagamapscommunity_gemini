import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building2, FileText, Users, TreePine, Trash2, Droplet, Lightbulb, Home, Book, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: FileText,
      title: t.services.birthCertificate.title,
      description: t.services.birthCertificate.description,
      link: "#"
    },
    {
      icon: Heart,
      title: t.services.deathCertificate.title,
      description: t.services.deathCertificate.description,
      link: "#"
    },
    {
      icon: Building2,
      title: t.services.businessLicense.title,
      description: t.services.businessLicense.description,
      link: "#"
    },
    {
      icon: Trash2,
      title: t.services.wasteManagement.title,
      description: t.services.wasteManagement.description,
      link: "#"
    },
    {
      icon: Heart,
      title: t.services.healthServices.title,
      description: t.services.healthServices.description,
      link: "#"
    },
    {
      icon: TreePine,
      title: t.services.roadMaintenance.title,
      description: t.services.roadMaintenance.description,
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.location.href = service.link}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
