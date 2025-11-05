import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Toaster } from "./components/ui/sonner";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { CouncilStructurePage } from "./pages/CouncilStructurePage";
import { ContactPage } from "./pages/ContactPage";
import { Newsletter } from "./pages/Newsletter";
import { IssueReportingPage } from "./pages/IssueReportingPage";
import { IssueDashboardPage } from "./pages/IssueDashboardPage";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServicesPage />} />
              <Route path="/services/department/:departmentId" element={<ServicesPage />} />
              <Route path="/report-issue" element={<IssueReportingPage />} />
              <Route path="/issue-dashboard" element={<IssueDashboardPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/council" element={<CouncilStructurePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}