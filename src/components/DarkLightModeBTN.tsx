"use client";

import { useEffect, useState } from "react";
import { BsMoonStarsFill as DarkIcon } from "react-icons/bs";
import { IoMdSunny as LightIcon } from "react-icons/io";

const DARKCLASSNAME = "dark" as const;
const STORAGEKEY = "darkMode" as const;

export default function DarkLightModeBTN() {
  const [isDark, setIsDark] = useState<boolean>(
    () => localStorage.getItem(STORAGEKEY) === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARKCLASSNAME);
      localStorage.setItem(STORAGEKEY, "dark");
    } else {
      document.documentElement.classList.remove(DARKCLASSNAME);
      localStorage.setItem(STORAGEKEY, "light");
    }
  }, [isDark]);

  return (
    <button
      className="text-xl -ml-2 mobile-sm:-ml-0 mobile-sm:text-lg"
      onClick={() => setIsDark((prev) => !prev)}
    >
      {isDark ? <DarkIcon /> : <LightIcon />}
    </button>
  );
}
