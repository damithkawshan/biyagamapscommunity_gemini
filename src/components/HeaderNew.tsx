import { Button } from "./ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import logo from "figma:asset/edd9aeadcbb02e03e5d9aa2e7375ce85c2d36db3.png";
import govLogo from "figma:asset/6381f5184a28547d936c8a93e36c26c52453a204.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
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
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className={navLinkClass("/")}>
              {t.nav.home}
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navLinkClass("/services")}>
                    {t.nav.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "All Services" : language === "si" ? "සියලුම සේවා" : "அனைத்து சேவைகள்"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services#fees"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "Fees & Charges" : language === "si" ? "ගාස්තු සහ ගෙවීම්" : "கட்டணங்கள் & செலவுகள்"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Issues Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navLinkClass("/report-issue")}>
                    {language === "en" ? "Issues" : language === "si" ? "ගැටළු" : "பிரச்சினைகள்"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/report-issue"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "Report Issue" : language === "si" ? "ගැටළුව වාර්තා කරන්න" : "பிரச்சினை புகார்"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/issue-dashboard"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "Issue Dashboard" : language === "si" ? "ගැටළු උපකරණ පුවරුව" : "பிரச்சினை கட்டுப்பாடு"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* About Area Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={navLinkClass("/about-area")}>
                    {language === "en" ? "About Area" : language === "si" ? "ප්‍රදේශය ගැන" : "பகுதி பற்றி"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about-area"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "Statistics" : language === "si" ? "සංඛ්‍යාලේඛන" : "புள்ளிவிவரங்கள்"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about-area#history"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "History" : language === "si" ? "ඉතිහාසය" : "வரலாறு"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about-area#map"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {language === "en" ? "Map" : language === "si" ? "සිතියම" : "வரைபடம்"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/downloads" className={navLinkClass("/downloads")}>
              {language === "en" ? "Downloads" : language === "si" ? "බාගත කිරීම්" : "பதிவிறக்கங்கள்"}
            </Link>

            <Link to="/projects" className={navLinkClass("/projects")}>
              {language === "en" ? "Projects" : language === "si" ? "ව්‍යාපෘති" : "திட்டங்கள்"}
            </Link>

            <Link to="/gallery" className={navLinkClass("/gallery")}>
              {t.nav.gallery}
            </Link>

            <Link to="/council" className={navLinkClass("/council")}>
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
            className="lg:hidden p-2"
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
          <nav className="lg:hidden pb-4 pt-2 flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/")}`}
            >
              {t.nav.home}
            </Link>
            
            <div className="text-left py-2">
              <div className="font-medium text-sm text-muted-foreground mb-2">
                {t.nav.services}
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "All Services" : language === "si" ? "සියලුම සේවා" : "அனைத்து சேவைகள்"}
                </Link>
                <Link
                  to="/services#fees"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "Fees & Charges" : language === "si" ? "ගාස්තු සහ ගෙවීම්" : "கட்டணங்கள் & செலவுகள்"}
                </Link>
              </div>
            </div>

            <div className="text-left py-2">
              <div className="font-medium text-sm text-muted-foreground mb-2">
                {language === "en" ? "Issues" : language === "si" ? "ගැටළු" : "பிரச்சினைகள்"}
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/report-issue"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "Report Issue" : language === "si" ? "ගැටළුව වාර්තා කරන්න" : "பிரச்சினை புகார்"}
                </Link>
                <Link
                  to="/issue-dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "Issue Dashboard" : language === "si" ? "ගැටළු උපකරණ පුවරුව" : "பிரச்சினை கட்டுப்பாடு"}
                </Link>
              </div>
            </div>

            <div className="text-left py-2">
              <div className="font-medium text-sm text-muted-foreground mb-2">
                {language === "en" ? "About Area" : language === "si" ? "ප්‍රදේශය ගැන" : "பகுதி பற்றி"}
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/about-area"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "Statistics" : language === "si" ? "සංඛ්‍යාලේඛන" : "புள்ளிவிவரங்கள்"}
                </Link>
                <Link
                  to="/about-area#history"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "History" : language === "si" ? "ඉතිහාසය" : "வரலாறு"}
                </Link>
                <Link
                  to="/about-area#map"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  {language === "en" ? "Map" : language === "si" ? "සිතියම" : "வரைபடம்"}
                </Link>
              </div>
            </div>

            <Link
              to="/downloads"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/downloads")}`}
            >
              {language === "en" ? "Downloads" : language === "si" ? "බාගත කිරීම්" : "பதிவிறக்கங்கள்"}
            </Link>

            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/projects")}`}
            >
              {language === "en" ? "Projects" : language === "si" ? "ව්‍යාපෘති" : "திட்டங்கள்"}
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

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 ${navLinkClass("/contact")}`}
            >
              {t.nav.contact}
            </Link>

            {/* Language Selector Mobile */}
            <div className="pt-2 border-t">
              <div className="text-sm text-muted-foreground mb-2">
                {language === "en" ? "Language" : language === "si" ? "භාෂාව" : "மொழி"}
              </div>
              <div className="flex gap-2">
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setLanguage("en");
                    setIsMenuOpen(false);
                  }}
                >
                  EN
                </Button>
                <Button
                  variant={language === "si" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setLanguage("si");
                    setIsMenuOpen(false);
                  }}
                >
                  සිං
                </Button>
                <Button
                  variant={language === "tm" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setLanguage("tm");
                    setIsMenuOpen(false);
                  }}
                >
                  த
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
