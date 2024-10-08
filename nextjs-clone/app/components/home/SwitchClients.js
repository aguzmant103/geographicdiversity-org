import Link from "next/link";
import React from "react";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const SwitchClients = () => {
  const resolvedTheme = useCustomTheme();

  return (
    <div
      className="w-full lg:w-[50%] flex flex-col justify-center items-center mx-auto gap-[1rem] pt-[3rem]"
      id="switch"
    >
      <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center">
        Switch Clients
      </h1>
      <p className="text-[15px] text-center mt-[1rem]">
        For an automated tool (with a GUI) to switch execution clients, see
        Accidental-Green&apos;s{" "}
        <Link
          href="https://github.com/accidental-green/client-switcher"
          target="_blank"
          className="text-blue-600 underline"
        >
          Ethereum Client Switcher
        </Link>
      </p>

      <Link
        href="https://github.com/etheralpha/clientdiversity-org"
        target="_blank"
      >
        <button
          className={`text-[14px] font-[400] border px-[1.5rem] py-[6px] rounded-[5px] w-fit ${
            resolvedTheme === "light"
              ? "border-black text-black"
              : "border-white text-white"
          }`}
        >
          Submit guide
        </button>
      </Link>

      <div className="w-full flex items-center border border-gray-300">
        <label htmlFor="" className="w-fit p-[10px] border-r border-r-gray-300">
          Type
        </label>
        <select className="p-[12px] w-[90%] outline-none">
          <option value="">Consensus Client</option>
          <option value="">Execution Client</option>
        </select>
      </div>

      <div className="w-full flex items-center border border-gray-300">
        <label htmlFor="" className="w-fit p-[10px] border-r border-r-gray-300">
          From
        </label>
        <select className="p-[12px] w-[90%] outline-none">
          <option value="">Choose</option>
          <option value="">Fresh Install</option>
          <option value="">Lighthouse</option>
          <option value="">Lodestar</option>
          <option value="">Nimbus</option>
          <option value="">Prysm</option>
          <option value="">Teku</option>
          <option value="">Grandine</option>
        </select>
      </div>

      <div className="w-full flex items-center border border-gray-300">
        <label htmlFor="" className="w-fit p-[10px] border-r border-r-gray-300">
          To
        </label>
        <select className="p-[12px] w-[95%] outline-none">
          <option value="">Choose</option>
          <option value="">Lighthouse</option>
          <option value="">Lodestar</option>
          <option value="">Nimbus</option>
          <option value="">Prysm</option>
          <option value="">Teku</option>
          <option value="">Grandine</option>
        </select>
      </div>

      <button
        className={`text-[18px] font-[500] px-[25px] py-[12px] rounded-[5px] opacity-90 mt-[1rem] ${
          resolvedTheme === "light"
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        Search Guides
      </button>
    </div>
  );
};

export default SwitchClients;
