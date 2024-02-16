import Link from "next/link";
import React from "react";
import { GoLinkExternal } from "react-icons/go";

const links = [
  {
    id: 1,
    title: "Client Diversity On Ethereum’s Consensus Layer",
    link: "https://mirror.xyz/jmcook.eth/S7ONEka_0RgtKTZ3-dakPmAHQNPvuj15nh0YGKPFriA",
  },
  {
    id: 2,
    title: "Prysm: Statement On Client Diversity",
    link: "https://medium.com/prysmatic-labs/prysmatic-labs-statement-on-client-diversity-c0e3c2f05671",
  },
  {
    id: 3,
    title: "Nimbus: The Importance Of Client Diversity",
    link: "https://our.status.im/the-importance-of-client-diversity/",
  },
  {
    id: 4,
    title: "Lighthouse: Why You Should Switch To Lighthouse",
    link: "https://lighthouse.sigmaprime.io/switch-to-lighthouse.html",
  },
  {
    id: 5,
    title: "Chainsafe: Client Diversity In Decentralized Networks",
    link: "https://medium.com/chainsafe-systems/on-client-diversity-in-decentralized-networks-848aeedfb49d",
  },
  {
    id: 6,
    title: "The Financial Incentive To Run A Minority Client",
    link: "https://www.reddit.com/r/ethstaker/comments/ptm04i/the_financial_incentive_to_run_a_minority_client/?rdt=55163",
  },
  {
    id: 7,
    title: "What Happens If Beacon Chain Consensus Fails?",
    link: "https://www.symphonious.net/2021/09/23/what-happens-if-beacon-chain-consensus-fails/",
  },
  {
    id: 8,
    title: "Ben Edgington On Diversity, Scenarios, And Penalties",
    link: "https://eth2book.info/altair/part2/incentives/diversity/",
  },
];

const FaqContent = () => {
  return (
    <div>
      {links.map((item) => (
        <Link href={item.link} key={item.id} target="_blank">
          <div className="flex items-center mb-2">
            <p className="text-blue-600 text-[15px] font-[400] underline">
              {item.title}
            </p>
            <GoLinkExternal className="text-black text-[14px] opacity-70" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FaqContent;
