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
            Our data methodology is designed to provide accurate and insightful analysis of client distribution and 
            geographic information. We source our data from{' '}
            <Link
                href="https://nodewatch.io/"
                className="text-blue-600 underline"
              >
                Nodewatch.io
              </Link>
            , a platform specializing in detailed network metrics. Here&apos;s an overview of our approach:
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] mt-[2rem]">
            <h2 className="text-[24px] md:text-[30px] font-[600] mb-[12px]">
              Data Collection
            </h2>
            <p className="">
              We gather data from Nodewatch.io, which offers comprehensive details about client types, countries, and geographic coordinates (latitude and longitude).
            </p>
          </div>

          <div className="flex flex-col gap-[1rem] mt-[2rem]">
            <h2 className="text-[24px] md:text-[30px] font-[600] mb-[12px]">
              Data Processing
            </h2>
            <p className="">
              The raw data is processed through several steps to generate valuable insights:
            </p>
            <h3 className="text-[20px] md:text-[24px] font-[600] mb-[12px]">
              Geographic Categorization:
            </h3>
            <p className="">
              Each entry in the dataset is categorized by continent based on its latitude and longitude. This classification helps us organize the data regionally for more targeted analysis.
            </p>
            <h3 className="text-[20px] md:text-[24px] font-[600] mb-[12px]">
              Data Aggregation:
            </h3>
            <p className="">
              We aggregate the data to provide a summary of clients and their distribution across continents and countries. This involves calculating the total number of nodes for each client and continent, and then determining the percentage of each client relative to the total.
            </p>
            <h3 className="text-[20px] md:text-[24px] font-[600] mb-[12px]">
              Summary and Output:
            </h3>
            <p className="">
              The processed data is compiled into a structured summary that includes total counts, percentage distributions, and detailed breakdowns by continent and country.
            </p>
          </div>
          <p className="mt-[2rem]">
            By following this methodology, we ensure that our data is collected, stored, and processed effectively to deliver accurate and actionable insights into client distribution and geographic patterns.
          </p>
        </div>
      </div>
    </>
  );
}
