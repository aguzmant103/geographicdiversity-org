"use client";

import Link from "next/link";
import React from "react";
import Faq from "react-faq-component";
import FaqContent from "./FaqContent";
import { useCustomTheme } from "./GetTheme";

const data = {
  rows: [
    {
      title: "Further reading...",
      content: <FaqContent />,
    },
  ],
};

const GeographicDiversity = () => {
  const resolvedTheme = useCustomTheme();
  const bgColor = resolvedTheme === "light" ? "#ffffff" : "#121212";
  const textColor = resolvedTheme === "light" ? "#000000" : "#ffffff";

  const styles = {
    rowTitleColor: textColor,
    rowContentColor: textColor,
    bgColor: bgColor,
    arrowColor: textColor,
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  return (
    <div
      className="flex flex-col gap-[1.5rem] w-full lg:w-[85%] mx-auto py-[3rem]"
      id="diversity"
    >
      <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center">
        Geographic Diversity Is <span className="underline">Not</span> Optional
      </h1>
      <p className="font-[400] text-[15px]">
        Many know geographic diversity is important for a more resilient network,
        but they don&apos;t understand why or just how essential it is.
        It&apos;s not only important —{" "}
        <span className="font-[700]">it&apos;s critical.</span> In the event of a geopolitical crisis
          or natural disaster, nodes concentrated in a specific region face a heightened risk 
          of compromise, potentially jeopardizing the security and availability of the network's data. [
        <Link
          href="https://medium.com/archethic/from-china-to-antarctica-the-importance-of-geographical-diversity-in-blockchain-node-distribution-a6d4a366155b"
          target="_blank"
          className="text-blue-600 underline"
        >
          1
        </Link>
        ].
      </p>

      <p className="font-[400] text-[15px]">
      The Ethereum network is designed to operate continuously, every hour of every day, throughout 
      the year. Blockchain networks can maintain exceptionally high uptime levels due to their 
      decentralized nature. Any move towards greater centralization in significant aspects heightens 
      the risk of network disruptions and potential devaluation of ETH. [
        <Link
          href="https://www.hivemind.capital/content/the-importance-of-ethereum-staking-diversity"
          target="_blank"
          className="text-blue-600 underline"
        >
          2
        </Link>
        ].
      </p>

      <p className="font-[400] text-[15px]">
        ~35% of
        <Link
          href="https://ethernodes.org/countries"
          target="_blank"
          className="underline"
        >
          {' '}all Ethereum nodes{' '}
        </Link>
        are operated in the United States. Another 14% of Ethereum nodes operate in Germany. 
        <span className="font-[700]">{' '}Having this kind of geographic concentration 
          poses significant risks.</span>
      </p>

      <p className="font-[400] text-[15px]">
        While it may seem unlikely for those regions to go offline, these scenarios highlight 
        the trade-offs that blockchain network developers must carefully evaluate 
        when scaling their networks.
      </p>

      <div className="w-full md:w-[60%] mx-auto border-[1px] border-gray-200 px-[10px]">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default GeographicDiversity;
