"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineSun } from "react-icons/ai";
import { useTheme } from "next-themes";

const Theme = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const tehmeMode = theme === "system" ? systemTheme : theme;
  // console.log(tehmeMode, "system theme");

  return (
    <div>
      {mounted &&
        (tehmeMode === "dark" ? (
          <AiOutlineSun
            className="cursor-pointer"
            size={30}
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdOutlineDarkMode
            className="cursor-pointer"
            size={30}
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default Theme;
