import React from "react";
import Sidebar from "./navbar";
import PatientCard from "./patient_card_component_header";
import HEPCard from "./hep_card_component";
import StatsCard from "./stats_card_app";
import PatientEducationCard from "./patient_education_card";
import BillingCard from "./billing_card";
import { FaClipboardList } from "react-icons/fa";
import BackgroundShapes from "./background_shapes";

import "./index.css";

export default function App() {
  return (
    <div className="relative flex min-h-screen w-screen h-screen overflow-hidden bg-transparent ">
      {/* Background behind everything */}
      <BackgroundShapes />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 relative px-[99px] pt-[50px] z-10">
        {/* Header */}
        <div className="mb-[40px]">
          <PatientCard />
        </div>

        {/* Cards Section (Frame 24172) */}
        <div
          className="flex flex-row flex-wrap items-start gap-[49px] w-[1206px] h-[547px]"
          style={{ position: "relative" }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-[32px]">
            <HEPCard />
            <PatientEducationCard />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[32px]">
            <StatsCard />
            <BillingCard />
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-[#8E5EF2] hover:bg-[#7a4ed6] text-white p-4 rounded-2xl shadow-lg transition-all duration-300">
          <FaClipboardList className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
