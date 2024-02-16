"use client";

import React, { useEffect, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import Bar from "./Bar";
import { sigmaData, migaData, ratedData } from "@/app/data/ProgressBarData";
import Link from "next/link";
import { useCustomTheme } from "./GetTheme";

const ConsensusClients = () => {
  const [activeRadio, setActiveRadio] = useState("sigma");
  const [currentData, setCurrentData] = useState(sigmaData);

  const resolvedTheme = useCustomTheme();

  useEffect(() => {
    handleToggle(activeRadio);
  }, [activeRadio]);

  const handleToggle = (type) => {
    switch (type) {
      case "sigma":
        setCurrentData(sigmaData);
        break;
      case "miga":
        setCurrentData(migaData);
        break;
      case "rated":
        setCurrentData(ratedData);
        break;
      default:
        break;
    }
  };
  return (
    <div className="border-[1px] border-gray-300 rounded-[8px] w-full max-w-[450px] px-[2rem] py-[3rem]">
      <h1 className="text-[26px] font-[600] opacity-90 text-center mb-[2rem]">
        Consensus Clients
      </h1>
      <div
        className={`flex items-center gap-[10px] py-[9px] px-[15px] rounded-[8px] my-[2rem] ${
          resolvedTheme === "light"
            ? "bg-[#cff4fc] text-black"
            : "bg-[#032830] text-cyan-300"
        }`}
      >
        <AiFillInfoCircle className="w-[26px] h-[26px] opacity-80" />
        <p className="text-[16px] font-[400] opacity-90">
          Client diversity has improved!
        </p>
      </div>
      {currentData.map((item) => (
        <Bar
          key={item.title}
          title={item.title}
          percentage={item.percentage}
          color={item.color}
        />
      ))}

      <div className="my-[1rem]">
        {activeRadio === "sigma" && (
          <p className="text-[14px] opacity-90 text-center">
            Data provided by{" "}
            <Link
              href="https://blockprint.sigp.io/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Sigma Prime&apos;s Blockprint
            </Link>{" "}
            — updated daily.
          </p>
        )}

        {activeRadio === "miga" && (
          <p className="text-[14px] opacity-90 text-center">
            Data provided by{" "}
            <Link
              href="https://migalabs.io/"
              target="_blank"
              className="text-blue-600 underline"
            >
              Miga Labs
            </Link>{" "}
            — updated daily.
          </p>
        )}

        {activeRadio === "rated" && (
          <p className="text-[14px] opacity-90 text-center">
            Data provided by{" "}
            <Link
              href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
              target="_blank"
              className="text-blue-600 underline"
            >
              Rated.Network
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

      <div
        className={`opacity-80 border-[1px] border-cyan-500 rounded-[8px] flex flex-col items-center py-[10px] px-[20px] ${
          resolvedTheme === "light"
            ? "bg-[#b6e7f1] text-black"
            : "bg-[#032830] text-cyan-300"
        }`}
      >
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
            onClick={() => setActiveRadio("sigma")}
          >
            <input
              type="radio"
              name="progress"
              id="sigma"
              value="sigma"
              checked={activeRadio === "sigma"}
            />
            <label htmlFor="sigma" className="text-[15px] font-[500]">
              Sigma Prime&apos;s Blockprint
            </label>
          </div>
          <div
            className="flex items-center gap-[5px]"
            onClick={() => setActiveRadio("miga")}
          >
            <input
              type="radio"
              name="progress"
              id="miga"
              value="miga"
              defaultchecked={activeRadio === "miga"}
            />
            <label htmlFor="miga" className="text-[15px] font-[500]">
              Miga Labs
            </label>
          </div>
          <div
            className="flex items-center gap-[5px]"
            onClick={() => setActiveRadio("rated")}
          >
            <input
              type="radio"
              name="progress"
              id="rated"
              value="rated"
              checked={activeRadio === "rated"}
            />
            <label htmlFor="rated" className="text-[15px] font-[500]">
              Rated.Network
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsensusClients;
