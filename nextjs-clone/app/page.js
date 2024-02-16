"use client";

import HeroSection from "./components/home/HeroSection";
import LogoSection from "./components/home/LogoSection";
import ClientDistribution from "./components/home/ClientDistribution";
import ClientDiversity from "./components/home/ClientDiversity";
import ClientResources from "./components/home/ClientResources";
import SwitchClients from "./components/home/SwitchClients";
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
        <ClientDistribution />
        <ClientDiversity />
        <ClientResources />
        <SwitchClients />
        <Resources />
      </div>
    </>
  );
}
