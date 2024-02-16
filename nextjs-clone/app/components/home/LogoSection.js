import Image from "next/image";
import React from "react";
import { useCustomTheme } from "./GetTheme";

const LogoSection = () => {
  const resolvedTheme = useCustomTheme();

  return (
    <div
      className={`py-[2rem] ${
        resolvedTheme === "light" ? "bg-white" : "bg-[#16191c]"
      }`}
    >
      <div className="container grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[1.5rem] place-items-center px-[20px]">
        <Image src="/images/11.png" width={50} height={50} alt="" />
        <Image src="/images/21.svg" width={100} height={50} alt="" />
        <Image src="/images/31.png" width={100} height={100} alt="" />
        <Image src="/images/41.png" width={170} height={100} alt="" />
        <Image src="/images/51.png" width={35} height={30} alt="" />
        <Image
          src="/images/12.png"
          width={150}
          height={80}
          alt=""
          className="hidden xs:flex"
        />
        <Image
          src="/images/22.svg"
          width={70}
          height={70}
          alt=""
          className="hidden sm:flex"
        />
        <Image
          src="/images/32.png"
          width={200}
          height={100}
          alt=""
          className="hidden md:flex"
        />
        <Image
          src="/images/42.png"
          width={50}
          height={50}
          alt=""
          className="hidden md:flex"
        />
        <Image
          src="/images/52.png"
          width={170}
          height={100}
          alt=""
          className="hidden md:flex"
        />
      </div>
    </div>
  );
};

export default LogoSection;
