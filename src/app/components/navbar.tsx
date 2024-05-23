"use client";

import Link from "next/link";
import { useState } from "react";
import SearchComponent from "../components/searchList";

function Navbar() {
  const [searchText, setSearchText] = useState("");

  return (
    <nav className="bg-[#b45309] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard">GrowwwStonks</Link>
        <div>
          {/* <input
            className="text-black"
            type="text"
            placeholder="Serach..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          /> */}
          {<SearchComponent />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
