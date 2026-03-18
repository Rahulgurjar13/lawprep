import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CoursesSection from "@/components/landing/CoursesSection";
import ExamsSection from "@/components/landing/ExamsSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import StatsSection from "@/components/landing/StatsSection";
import ScholarshipSection from "@/components/landing/ScholarshipSection";
import CentersSection from "@/components/landing/CentersSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ParentFeatures from "@/components/landing/ParentFeatures";
import DemoCTA from "@/components/landing/DemoCTA";
import BrochureDownload from "@/components/landing/BrochureDownload";
import Footer from "@/components/landing/Footer";
import MobileBottomBar from "@/components/landing/MobileBottomBar";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen font-body pb-14 lg:pb-0">
      <header role="banner">
        <TopBar />
        <Navbar />
      </header>
      <main id="main-content" role="main">
        <HeroSection />
        <CoursesSection />
        <ExamsSection />
        <WhyChooseUs />
        <StatsSection />
        <ScholarshipSection />
        <CentersSection />
        <TestimonialsSection />
        <ParentFeatures />
        <DemoCTA />
        <BrochureDownload />
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
