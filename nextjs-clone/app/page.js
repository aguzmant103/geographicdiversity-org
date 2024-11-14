"use client";

import HeroSection from "./components/home/HeroSection";
import LogoSection from "./components/home/LogoSection";
import GeographicDistribution from "./components/home/GeographicDistribution";
import GeographicDiversity from "./components/home/GeographicDiversity";
import IncentivationPrograms from "./components/home/IncentivationPrograms";
import Resources from "./components/home/Resources";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Geographic Diversity | Ethereum</title>
      </Head>
      <div className="container">
        <HeroSection />
      </div>
      <LogoSection />

      <div className="container">
        <GeographicDistribution />
        <GeographicDiversity />
        <IncentivationPrograms />
        <Resources />
      </div>
    </>
  );
}
