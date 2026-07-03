import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#FDFDFD] text-[#021422] font-sans antialiased min-h-screen flex flex-col selection:bg-[#F6AE0D] selection:text-[#021422]">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
