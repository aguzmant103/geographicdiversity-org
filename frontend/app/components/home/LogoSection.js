import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const LogoSection = () => {
  const resolvedTheme = useCustomTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconThemeClass = mounted ? resolvedTheme  === "dark" ? 'white-icon' : '' : '';
  const containerThemeClass = mounted ? resolvedTheme === "dark" ? "bg-[#212529]" : "bg-[#f8f9fa]" : "bg-[#f8f9fa]";

  const continents = [
    { src: "/images/continents/africa.svg", alt: "Africa" },
    { src: "/images/continents/asia.svg", alt: "Asia" },
    { src: "/images/continents/europe.svg", alt: "Europe" },
    { src: "/images/continents/antarctica.svg", alt: "Antarctica" },
    { src: "/images/continents/north-america.svg", alt: "North America" },
    { src: "/images/continents/latin-america.svg", alt: "Latin America" },
    { src: "/images/continents/south-america.svg", alt: "South America" },
  ]

  return (
    <div
      className={`py-[2rem] ${containerThemeClass}`}
    >
      <div className="container my-5">
        <div className="flex flex-wrap -mx-2 justify-center">
          {
            continents.map((image, index) => (
              <div key={index} className="w-1/3 md:w-1/3 lg:w-1/4 px-2 mb-4 flex justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className={`my-1 client-logos ${iconThemeClass}`}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
