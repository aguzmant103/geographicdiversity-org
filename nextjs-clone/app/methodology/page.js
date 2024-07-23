"use client";

import Link from "next/link";
import Head from "next/head";

export default function Methodology() {
  return (
    <>
      <Head>
        <title>Data Methodology | Geographic Diversity | Ethereum</title>
      </Head>
      <div className="container opacity-90">
        <div className="w-full sm:w-[65%] flex-col mx-auto py-[4rem]">
          <div className="">
            <h1 className="text-[28px] md:text-[38px] font-[700] text-center mb-[4rem] mt-[3rem] md:mt-0">
              Data Methodology
            </h1>
            <p className="">
              There’s no inherent way to know exactly what client a validator is
              running. Researchers use other metrics to make deductions on which
              client a validator is most likely operating. The problem is they
              cannot distinguish with 100% certainty which client a validator is
              running.
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] mt-[2rem]">
            <h2 className="text-[24px] md:text-[30px] font-[600] mb-[12px]">
              Consensus Client Data
            </h2>
            <p className="">
              <Link
                href="https://blockprint.sigp.io/"
                className="text-blue-600 underline"
              >
                Blockprint
              </Link>{" "}
              - Developed by Sigma Prime’s Michael Sproul, Blockprint analyzes
              each client’s block proposal style as described in{" "}
              <Link
                href="https://twitter.com/sproulM_/status/1440512518242197516"
                className="text-blue-600 underline"
              >
                this Twitter thread
              </Link>{" "}
              <Link
                href="https://nitter.net/sproulM_/status/1440512518242197516"
                className="text-blue-600 underline"
              >
                (Nitter).
              </Link>
            </p>
            <p className="">
              <Link
                href="https://migalabs.io/"
                className="text-blue-600 underline"
              >
                Miga Labs
              </Link>{" "}
              - A crawler is used to count beacon nodes and their self-reported
              identity. However, this means that validators sharing a node are
              counted only once and nodes with fewer validators have a greater
              influence on the estimate.
            </p>
            <p className="">
              <Link
                href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
                className="text-blue-600 underline"
              >
                Rated
              </Link>{" "}
              - Methodology unknown.
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] mt-[2rem]">
            <h2 className="text-[24px] md:text-[30px] font-[600] mb-[12px]">
              Execution Client Data
            </h2>
            <p className="">
              <Link
                href="https://ethernodes.org/"
                className="text-blue-600 underline"
              >
                Ethernodes
              </Link>{" "}
              - Methodology unknown.
            </p>
            <p className="">
              <Link
                href="https://supermajority.info/"
                className="text-blue-600 underline"
              >
                supermajority.info
              </Link>
              - Through social effort, supermajority.info (lead by Sonic)
              gathers
              <span className="font-[800]"> self-reported</span> client
              breakdown data and weighted against how many validators each
              entity has. While this doesn’t capture data on the entire network,
              the marketshare from the entities involved is substantial enough
              to be considered representative.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
