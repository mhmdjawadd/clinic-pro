import React from "react";
import Sidebar from "./navbar.jsx";
import PatientCard from "./patient_card_component_header.jsx";
import HEPCard from "./hep_card_component.jsx";
import StatsCard from "./stats_card_app.jsx";
import PatientEducationCard from "./patient_education_card.jsx";
import MoneyCard from "./billing_card.jsx";
import "./index.css";

export default function App() {
  return (
    <div className="flex bg-[#F4F5FF] font-inter min-h-screen overflow-x-hidden">
      {/* Sidebar (fixed, 70px wide) */}
      <Sidebar />

      {/* Content area */}
      <main className="flex flex-col flex-1 ml-[70px] p-8 gap-8 min-h-screen">
        {/* Patient Header */}
        <PatientCard />

        {/* Row 1 */}
        <div className="flex flex-wrap gap-8 justify-between">
          <HEPCard />
          <StatsCard />
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-8 justify-between">
          <PatientEducationCard />
          <MoneyCard />
        </div>
      </main>
    </div>
  );
}
