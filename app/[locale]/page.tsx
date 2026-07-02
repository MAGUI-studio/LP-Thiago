import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import School from "@/components/School";
import Partners from "@/components/Partners";
import WorkspaceGallery from "@/components/WorkspaceGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#FDFDFD] text-[#021422] font-sans antialiased min-h-screen flex flex-col selection:bg-[#F6AE0D] selection:text-[#021422]">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <School />
      <Partners />
      <WorkspaceGallery />
      <Testimonials />
      <FAQ />
      <ContactMap />
      <Footer />
    </div>
  );
}
