"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  //   console.log(genre);

  const tabs = [
    { name: "Most Popular", url: "popular" },
    { name: "Top Rated", url: "top_rated" },
    { name: "Upcoming", url: "upcoming" },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-950 flex items-center justify-center gap-8 ">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8 text-[#ffc20a]"
              : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
