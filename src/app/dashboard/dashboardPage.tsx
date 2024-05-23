"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import TopGainers from "./topGainers";
import TopLoosers from "./topLoosers";

function DashboardPage({ projects }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    return activeTab === "tab1" ? (
      <TopGainers projects={projects?.top_gainers} />
    ) : (
      <TopLoosers projects={projects?.top_losers} />
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center flex-col p-20">
        <div>
          <button
            className={`text-black font-bold p-10 ${
              activeTab === "tab1" && `border-b-[#b45309] border-b-2`
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Top Gainers
          </button>
          <button
            className={`text-black font-bold p-10 ${
              activeTab === "tab2" && `border-b-[#b45309] border-b-2`
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Top Loosers
          </button>
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}

export default DashboardPage;
