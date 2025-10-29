import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="mb-4 text-primary-foreground">{t.councilName}</h4>
            <p className="text-sm text-primary-foreground/80">
              {t.hero.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-primary-foreground">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/council" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  {t.nav.council}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-primary-foreground">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {t.footer.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">{t.footer.email}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-primary-foreground">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {t.councilName}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
