import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const Resources = () => {
  const resolvedTheme = useCustomTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const listColor = mounted ? resolvedTheme === "light" ? "black" : "white" : "black";

  const linkThemeClass = mounted
    ? resolvedTheme === "light"
      ? "text-blue-800"
      : "text-blue-400"
    : "text-blue-800";

  return (
    <div className="py-[7rem] w-full lg:w-[80%] mx-auto">
      <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center mb-[3rem]">
        Resources
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
        <div className="">
          <h2 className="text-[20px] font-[600] opacity-90">Tools</h2>
          <ul className="flex flex-col gap-[5px]">
            <Link
              href="https://hackmd.io/@jyeAs_6oRjeDk2Mx5CZyBw/awesome-ethereum-staking"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Awesome Ethereum Staking Resources
              </li>
            </Link>
            <Link
              href="https://stereum.net/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Stereum
              </li>
            </Link>
            <Link
              href="https://eth-docker.net/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Eth-Docker
              </li>
            </Link>
            <Link
              href="https://github.com/attestantio/vouch"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Vouch
              </li>
            </Link>
            <Link
              href="https://github.com/ethereum/keymanager-APIs"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Keymanager APIs
              </li>
            </Link>
            <Link
              href="https://kotal.co/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Kotal
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h2 className="text-[20px] font-[600] opacity-90">Metrics</h2>
          <ul className="flex flex-col gap-[5px]">
            <Link
              href="https://monitoreth.io/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Miga Labs Dashboard
              </li>
            </Link>
            <Link
              href="https://nodewatch.io/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Chainsafe Nodewatch
              </li>
            </Link>
            <Link
              href="https://ethernodes.org/countries"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Ethernodes (by country)
              </li>
            </Link>
            <Link
              href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Rated.Network Validator Ratings
              </li>
            </Link>
            <Link
              href="https://etherscan.io/nodetracker"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Ethereum Node Tracker
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h2 className="text-[20px] font-[600] opacity-90">Research</h2>
          <ul className="flex flex-col gap-[5px]">
            <Link
              href="https://ethresear.ch/t/estimating-validator-decentralization-using-p2p-data/19920"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Estimating validator decentralization
              </li>
            </Link>
            <Link
              href="https://arxiv.org/pdf/2305.17771"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[8px] h-[8px] rounded-full bg-${listColor}`}
              ></div>
              <li className={`${linkThemeClass} underline hover:text-slate-500`}>
                Analyzing Geospatial Distributions in Blockchains
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
