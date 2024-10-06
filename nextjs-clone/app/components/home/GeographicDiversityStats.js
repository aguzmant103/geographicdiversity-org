"use client";

import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import nodewatchData from "@/app/data/nodewatch.json";
import Link from "next/link";
import { useCustomTheme } from "./GetTheme";

const processJsonData = (jsonData) => {
  const totalPercentages = {};

  jsonData.data.forEach(region => {
    const regionName = region.name;
    const regionData = region.data;

    if (regionData.countries) {
      const regionTotal = Object.values(regionData.countries).reduce((sum, country) => {
        return sum + (country.perc?.countries || 0);
      }, 0);

      totalPercentages[regionName] = regionTotal.toFixed(2);
    }
  });

  return totalPercentages;
};

const RegionPercentages = ({ jsonData }) => {
  const totalPercentages = processJsonData(jsonData);

  return (
    <div>
      {Object.entries(totalPercentages).map(([regionName, percentage]) => (
        <Bar
          key={regionName}
          title={regionName}
          percentage={percentage}
          color={percentage > 50 ? "#dc3545" : percentage > 33 ? "#ffc107" : "#198754"}
        />
      ))}
    </div>
  );
};

const GeographicDiversityStats = () => {
  const [activeRadio, setActiveRadio] = useState("nodewatch");
  const [currentData, setCurrentData] = useState(nodewatchData);

  const resolvedTheme = useCustomTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerBaseClass = "opacity-80 border-[1px] border-cyan-500 rounded-[8px] flex flex-col items-center py-[10px] px-[20px]";

  // Only apply theme-specific styles after mounting
  const containerThemeClass = mounted
    ? resolvedTheme === "light"
      ? "bg-[#b6e7f1] text-black"
      : "bg-[#032830] text-cyan-300"
    : "bg-[#b6e7f1] text-black";

  useEffect(() => {
    handleToggle(activeRadio);
  }, [activeRadio]);

  const handleToggle = (type) => {
    switch (type) {
      case "nodewatch":
        setCurrentData(nodewatchData);
        break;
      default:
        setCurrentData(nodewatchData);
        break;
    }
  };

  return (
    <div className="border-[1px] border-gray-300 rounded-[8px] w-full max-w-[450px] p-[2rem]">
      <RegionPercentages jsonData={currentData} />

      <div className="my-[1rem]">
        {activeRadio === "nodewatch" && (
          <p className="text-[14px] opacity-90 text-center">
            Data provided by{" "}
            <Link
              href="https://nodewatch.io/"
              target="_blank"
              className="text-blue-600 underline"
            >
              nodewatch.io
            </Link>{" "}
            — updated daily.
          </p>
        )}

        <p className="text-[14px] opacity-90 text-center">
          Data may not be 100% accurate. (
          <Link href="/methodology" className="text-blue-600 underline">
            Read more
          </Link>
          )
        </p>
      </div>

      <div className={`${containerBaseClass} ${containerThemeClass}`}>
        <h2 className="text-[16px] font-[800]">
          Data source (
          <Link href="/methodology" className="underline">
            read more
          </Link>
          ):
        </h2>
        <div className="flex items-center flex-wrap justify-around">
          <div
            className="flex items-center gap-[5px]"
            onClick={() => setActiveRadio("nodewatch")}
          >
            <input
              type="radio"
              name="progress"
              id="nodewatch"
              value="nodewatch"
              defaultChecked={activeRadio === "nodewatch"}
            />
            <label htmlFor="nodewatch" className="text-[15px] font-[500]">
              nodewatch
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicDiversityStats;
