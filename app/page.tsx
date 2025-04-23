import Footer from "@/components/Site/Footer";
import Header from "@/components/Site/Header";
import Hero from "@/components/Site/Hero";
import Services from "@/components/Site/Services";
import Testimonials from "@/components/Site/Testimonials";
import HelpSection from "@/components/Site/HelpSection";
import CallAction from "@/components/Site/CallAction";
import TrustSection from "@/components/Site/TrustSection";
import AboutSection from "@/components/Site/AboutSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <TrustSection/>
      <HelpSection/>
      <AboutSection/>
      <Testimonials/>
      <CallAction/>
      <Footer />
    </>
  );
}

