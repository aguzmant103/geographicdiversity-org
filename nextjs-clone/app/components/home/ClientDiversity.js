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

const ClientDiversity = () => {
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
        Client Diversity Is <span className="underline">Not</span> Optional
      </h1>
      <p className="font-[400] text-[15px]">
        Many know client diversity is important for a more resilient network,
        but they don&apos;t understand why or just how essential it is.
        It&apos;s not only important —{" "}
        <span className="font-[700]">it&apos;s critical.</span> If a single
        client is used by 2/3rds (66%) of validators, there&apos;s a very real
        risk this can result in disrupting the chain and monetary loss [
        <Link
          href="https://www.slashed.info/"
          target="_blank"
          className="text-blue-600 underline"
        >
          1
        </Link>
        ,{" "}
        <Link
          href="https://nitter.net/_crypto_crack/status/1504459918539120643"
          target="_blank"
          className="text-blue-600 underline"
        >
          2
        </Link>
        ] for node operators.
      </p>

      <p className="font-[400] text-[15px]">
        It takes 2/3rds of validators to reach finality. If a client with 66%+
        of marketshare has a bug and forks to its own chain, it&lsquo;ll be
        capable of finalizing. Once the fork finalizes, the{" "}
        <span className="font-[700]">
          validators cannot return to the real chain without being slashed.
        </span>{" "}
        If 66% of the chain gets slashed simultaneously, the penalty is the
        whole 32 ETH.
      </p>

      <p className="font-[400] text-[15px]">
        So why is {">"}50% marketshare still dangerous? If a minority client
        forks, the 50%+ majority client can obtain a 66%+ majority. With no
        client having a marketshare over 33%, these scenarios are avoided.
        That&lsquo;s why{" "}
        <span className="font-[700]">
          {"<"}33% marketshare is the goal for all clients.
        </span>
      </p>

      <p className="font-[400] text-[15px]">
        <span className="font-[700]">Execution clients are not immune.</span>{" "}
        The risks mentioned above apply to both consensus clients and execution
        clients equally.
      </p>

      <div className="w-full md:w-[60%] mx-auto border-[1px] border-gray-200 px-[10px]">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default ClientDiversity;
