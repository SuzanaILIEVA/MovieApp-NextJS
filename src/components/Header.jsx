"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import MenuItem from "./MenuItem";
import Theme from "./Theme";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menus = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Login",
      url: "/login",
    },
  ];

  const searchFunction = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-10 h-20 justify-between p-5">
      <div className="flex items-end gap-3">
        <img
          src="/images/clapboard.png"
          alt="movie"
          width={40}
          height={40}
          className=""
        />
        <p className="font-semibold text-2xl flex mr-8">
          <span className="text-[#ffc20a]">M</span> ovie{" "}
          <span className="text-[#ffc20a]">A</span>pp
        </p>
      </div>

      <div className="flex flex-1 items-center border justify-between bg-transparet rounded-md p-1 gap-2">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={searchFunction}
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent p-1 "
        />
        <IoMdSearch size={30} />
      </div>
      <Theme />
      {menus.map((menu, i) => (
        <MenuItem key={i} menu={menu} />
      ))}
    </div>
  );
};

export default Header;

// #ffc20a
