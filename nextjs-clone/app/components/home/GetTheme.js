import React, { useEffect } from "react";
import { useTheme } from "next-themes";

export const useCustomTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && resolvedTheme !== storedTheme) {
      setTheme(storedTheme);
    }
  }, [resolvedTheme, setTheme]);

  return resolvedTheme;
};
