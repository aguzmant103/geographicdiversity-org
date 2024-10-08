import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const HeroSection = () => {
  const resolvedTheme = useCustomTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const btnBaseClass = "px-[24px] py-[12px] rounded-[10px] text-[18px] opacity-90";

  // Only apply theme-specific styles after mounting
  const btnThemeClass = mounted
    ? resolvedTheme === "light"
      ? "bg-black text-white"
      : "bg-white text-black"
    : "bg-black text-white";

  return (
    <div className="flex flex-col justify-center items-center gap-[1rem] h-136">
      <h1 className="text-[40px] md:text-[75px] leading-[45px] md:leading-[70px] font-[800] opacity-90 text-center">
        Diversify Now
      </h1>
      <p className="text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] font-[400] opacity-90 text-center">
        Improve Ethereum&apos;s resilience by staking in minority regions
      </p>
      <div className="flex items-center justify-center flex-wrap gap-[1rem] my-[1rem]">
        <Link href="#switch">
          <button className={`${btnBaseClass} ${btnThemeClass}`}>
            Switch Regions
          </button>
        </Link>
        <Link href="#distribution">
          <button
            className={`px-[24px] py-[10px] rounded-[10px] text-[18px] border ${btnThemeClass}`}
          >
            Dashboard
          </button>
        </Link>
      </div>
      <Link href="#diversity" className="flex items-center gap-[5px]">
        <p className="text-[18px] opacity-80 underline">Learn More</p>
        <GoArrowRight className="text-[18px] opacity-80" />
      </Link>
    </div>
  );
};

export default HeroSection;
