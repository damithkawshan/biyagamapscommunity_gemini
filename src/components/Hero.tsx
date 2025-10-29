import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import aerialView from "figma:asset/f5fdd1b35bad522e2d178bdf6e79e09f3ca96a82.png";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aerialView}
          alt="Biyagama Aerial View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="mb-6 max-w-4xl mx-auto">
          {t.hero.title}
        </h1>
        <p className="mb-2 text-xl text-white/95">
          {t.hero.subtitle}
        </p>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-white/90">
          {t.hero.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/services">
            <Button size="lg">
              {t.hero.cta}
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
            >
              {t.nav.contact}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}