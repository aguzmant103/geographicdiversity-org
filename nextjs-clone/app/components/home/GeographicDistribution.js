import Link from "next/link";
import React, { useEffect, useState } from "react";
import GeographicDiversityStats from "./GeographicDiversityStats";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const GeographicDistribution = () => {
  const resolvedTheme = useCustomTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const btnBaseClass = "px-[15px] py-[8px] rounded-[8px] text-[15px] opacity-90";

  // Only apply theme-specific styles after mounting
  const btnThemeClass = mounted
    ? resolvedTheme === "light"
      ? "bg-black text-white"
      : "bg-white text-black"
    : "bg-black text-white";

  return (
    <div
      className="flex flex-col items-center py-[3rem] md:py-[7rem]"
      id="distribution"
    >
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center">
          Geographic Distribution
        </h1>
        <Link
          href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
          target="_blank"
        >
          <button className={`${btnBaseClass} ${btnThemeClass}`}>
            View Staking Pool Diversity
          </button>
        </Link>
        <h2 className="text-[20px] font-[300] opacity-70 mt-[5px]">
          Goal: {"<"}33% | Danger: {">"}50%
        </h2>
      </div>

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-stretch justify-evenly gap-[2rem] mt-[3rem]">
        <GeographicDiversityStats />
      </div>
    </div>
  );
};

export default GeographicDistribution;
