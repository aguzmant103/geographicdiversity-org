import Link from "next/link";
import React, { useEffect, useState } from "react";
import GeographicDiversityStats from "./GeographicDiversityStats";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const IncentivationPrograms = () => {
  const resolvedTheme = useCustomTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only apply theme-specific styles after mounting
  const sectionHighlightBgTheme = mounted
    ? resolvedTheme === "light"
      ? "bg-gray-100"
      : "bg-gray-700"
    : "bg-gray-100";

  const sectionBgTheme = mounted
    ? resolvedTheme === "light"
      ? "bg-blue-100"
      : "bg-[#212529]"
    : "bg-blue-100";

  const highlightBgTheme = mounted
    ? resolvedTheme === "light"
      ? "bg-rose-100"
      : "bg-rose-900"
    : "bg-rose-100";

  return (
    <div className="flex flex-col gap-[1.5rem] w-full lg:w-[85%] mx-auto py-[3rem]">
      <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center">
        Promoting Geographic Diversity in Ethereum
      </h1>

      <div className="prose lg:prose-xl">
        <p className="text-md mb-6">
          Geographic decentralization is crucial for maintaining a truly
          resilient and decentralized blockchain network. Here's how you can
          contribute:
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            1. Support Local Communities with ETH
          </h2>
          <div className={`${sectionBgTheme} p-6 rounded-lg`}>
            <p className="mb-4">Invest in emerging blockchain communities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participate in local DAOs and development groups</li>
              <li>
                Support blockchain educational initiatives in developing regions
              </li>
              <li>Contribute to community funds that drive local adoption</li>
            </ul>
            <div className={`${sectionHighlightBgTheme} mt-4 p-4 rounded`}>
              <p className="font-medium">Practical Example:</p>
              <p>
                Join DAOs like ETHGlobal that organize hackathons and
                educational events across different regions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            2. Use Regional Vaults
          </h2>
          <div className={`${sectionBgTheme} p-6 rounded-lg`}>
            <p className="mb-4">
              Participate in region-specific decentralized vaults:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SEA Home Nodes: Specific nodes for Southeast Asia</li>
              <li>Regional vaults that promote local liquidity</li>
              <li>Region-specific staking protocols</li>
            </ul>
            <div className={`${sectionHighlightBgTheme} mt-4 p-4 rounded`}>
              <p className="font-medium">Benefits:</p>
              <p>
                Enhanced network resilience, improved local latency, and
                regional economic development.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            3. Geographic Decentralization Protocols
          </h2>
          <div className={`${sectionBgTheme} p-6 rounded-lg`}>
            <p className="mb-4">
              Support protocols that incentivize decentralization:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lido: Geographically distributed staking</li>
              <li>RocketPool: Globally distributed node network</li>
              <li>
                Protocols with incentives for operators in underrepresented
                regions
              </li>
            </ul>
            <div className={`${sectionHighlightBgTheme} mt-4 p-4 rounded`}>
              <p className="font-medium">Selection Criteria:</p>
              <p>
                Look for protocols that offer specific incentives for
                underrepresented regions and have a clear geographic
                decentralization strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            4. Set Up Your Own Node
          </h2>
          <div className={`${sectionBgTheme} p-6 rounded-lg`}>
            <p className="mb-4">Step-by-step guide to setting up a node:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Verify hardware requirements</li>
              <li>Choose your Ethereum client (Geth, OpenEthereum, etc.)</li>
              <li>Configure your node following official guides</li>
            </ol>
            <div className={`${sectionHighlightBgTheme} mt-4 p-4 rounded`}>
              <p className="font-medium">Useful Resources:</p>
              <p>
                Visit{" "}
                <a href="https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/" className="underline">
                  ethereum.org
                </a>{" "}
                for detailed configuration guides and best practices.
              </p>
            </div>
          </div>
        </section>

        <div className={`${highlightBgTheme} p-6 rounded-lg mt-8`}>
          <h3 className="text-xl font-semibold mb-2">Why Is This Important?</h3>
          <p>
            Geographic diversity in the Ethereum network strengthens
            decentralization, improves resistance to failures and censorship,
            and promotes more equitable adoption of blockchain technology
            globally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncentivationPrograms;
