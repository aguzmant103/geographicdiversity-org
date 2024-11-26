"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const Footer = () => {
  const resolvedTheme = useCustomTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const linkThemeClass = mounted
    ? resolvedTheme === "light"
      ? "text-blue-800"
      : "text-blue-400"
    : "text-blue-800";

  return (
    <div className="container">
      <hr />
      <p className="opacity-70 text-center my-[1rem]">
        Made by{" "}
        <Link
          href="https://ethereumcr.org/"
          target="_blank"
          className={`${linkThemeClass} underline hover:text-slate-500`}
        >
          Ethereum Costa Rica
        </Link>{" "}
        with ❤️
      </p>
    </div>
  );
};

export default Footer;
