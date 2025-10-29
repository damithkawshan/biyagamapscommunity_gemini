import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import logo from "figma:asset/edd9aeadcbb02e03e5d9aa2e7375ce85c2d36db3.png";
import govLogo from "figma:asset/6381f5184a28547d936c8a93e36c26c52453a204.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    return `transition-colors ${
      isActive(path)
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src={govLogo}
              alt="Government of Sri Lanka"
              className="h-14 w-auto"
            />
            <img
              src={logo}
              alt="Biyagama Pradeshiya Sabha Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="leading-tight">
                {language === "si" && "බියගම ප්‍රාදේශීය සභාව"}
                {language === "tm" && "பியகம பிரதேச சபை"}
                {language === "en" &&
                  "Biyagama Pradeshiya Sabha"}
              </h1>
              {/* {language === "en" && (
                <>
                  <p className="text-xs text-muted-foreground">
                    බියගම ප්‍රාදේශීය සභාව
                  </p>
                  <p className="text-xs text-muted-foreground">
                    பியகம பிரதேச சபை
                  </p>
                </>
              )} */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={navLinkClass("/")}>
              {t.nav.home}
            </Link>
            <Link
              to="/services"
              className={navLinkClass("/services")}
            >
              {t.nav.services}
            </Link>
            <Link
              to="/newsletter"
              className={navLinkClass("/newsletter")}
            >
              {t.nav.news}
            </Link>
            <Link
              to="/statistics"
              className={navLinkClass("/statistics")}
            >
              {t.nav.statistics}
            </Link>
            <Link
              to="/gallery"
              className={navLinkClass("/gallery")}
            >
              {t.nav.gallery}
            </Link>
            <Link
              to="/council"
              className={navLinkClass("/council")}
            >
              {t.nav.council}
            </Link>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                >
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("si")}
                >
                  සිංහල (SI)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("tm")}
                >
                  தமிழ் (TM)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact">
              <Button>{t.nav.contact}</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/")}`}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/services")}`}
            >
              {t.nav.services}
            </Link>
            <Link
              to="/newsletter"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/newsletter")}`}
            >
              {t.nav.news}
            </Link>
            <Link
              to="/statistics"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/statistics")}`}
            >
              {t.nav.statistics}
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/gallery")}`}
            >
              {t.nav.gallery}
            </Link>
            <Link
              to="/council"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/council")}`}
            >
              {t.nav.council}
            </Link>

            {/* Mobile Language Selector */}
            <div className="flex gap-2 py-2">
              <Button
                variant={
                  language === "en" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setLanguage("en")}
                className="flex-1"
              >
                EN
              </Button>
              <Button
                variant={
                  language === "si" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setLanguage("si")}
                className="flex-1"
              >
                SI
              </Button>
              <Button
                variant={
                  language === "tm" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setLanguage("tm")}
                className="flex-1"
              >
                TM
              </Button>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="mt-2 w-full">
                {t.nav.contact}
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}