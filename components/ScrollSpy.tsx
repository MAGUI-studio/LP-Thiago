"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ScrollSpy() {
  const t = useTranslations();

  useEffect(() => {
    const sections = [
      t("Header.anchorAbout"),
      t("Header.anchorServices"),
      t("Header.anchorSchool"),
      t("Header.anchorContact"),
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [t]);

  return null;
}
