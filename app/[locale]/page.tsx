import dynamic from "next/dynamic";
import Header from "@/components/Header";
import ScrollSpy from "@/components/ScrollSpy";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import School from "@/components/School";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Team = dynamic(() => import("@/components/Team"));
const WorkspaceGallery = dynamic(() => import("@/components/WorkspaceGallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Raffle = dynamic(() => import("@/components/Raffle"));
const ContactMap = dynamic(() => import("@/components/ContactMap"));

export default function Home() {
  return (
    <div className="bg-[#FDFDFD] text-[#021422] font-sans antialiased min-h-screen flex flex-col selection:bg-[#F6AE0D] selection:text-[#021422]">
      <Header />
      <ScrollSpy />
      <Hero />
      <Stats />
      <Services />
      <About />
      <School />
      <Partners />
      <Team />
      <WorkspaceGallery />
      <Testimonials />
      <FAQ />
      <Raffle />
      <ContactMap />
      <Footer />
    </div>
  );
}
