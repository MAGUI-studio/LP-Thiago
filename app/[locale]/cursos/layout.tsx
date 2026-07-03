import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FDFDFD] text-[#021422] font-sans antialiased min-h-screen flex flex-col selection:bg-[#F6AE0D] selection:text-[#021422]">
      <Hero  />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
