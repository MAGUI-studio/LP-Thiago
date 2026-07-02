import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default async function CursosPage() {
  const t = await getTranslations();

  const courses = [
    { id: "01", title: t("School.course1Title"), desc: t("School.course1Desc") },
    { id: "02", title: t("School.course2Title"), desc: t("School.course2Desc") },
    { id: "03", title: t("School.course3Title"), desc: t("School.course3Desc") },
    { id: "04", title: t("School.course4Title"), desc: t("School.course4Desc") },
    { id: "05", title: t("School.course5Title"), desc: t("School.course5Desc") },
    { id: "06", title: t("School.course6Title"), desc: t("School.course6Desc") },
  ];

  return (
    <>
      <Header />
      
      <main className="bg-[#FDFDFD] min-h-screen py-20 px-6 sm:px-12 lg:px-20 font-sans text-[#021422]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Back button */}
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#021422] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" weight="bold" />
              {t("Cursos.back")}
            </Link>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none font-title text-[#021422]">
              {t("Cursos.title")}
            </h1>
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
              {t("Cursos.description")}
            </p>
            <div className="w-20 h-1.5 bg-[#F6AE0D]"></div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="bg-white border border-gray-200/80 p-8 rounded-3xl flex flex-col justify-between h-[300px] shadow-sm hover:shadow-md hover:border-[#F6AE0D]/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#021422] tracking-tight leading-snug font-title">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                <a 
                  href="https://api.whatsapp.com/message/XAS6W42TZQO4N1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F6AE0D] uppercase tracking-wider hover:text-[#021422] transition-colors pt-4"
                >
                  {t("School.cta")}
                  <ArrowUpRight className="w-3.5 h-3.5" weight="bold" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
