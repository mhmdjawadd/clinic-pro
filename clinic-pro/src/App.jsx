import React from "react";
import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";

// Inline SVG icons to avoid dependency issues
const Svg = ({ children, className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);
const Icons = {
  LayoutDashboard: (p) => (
    <Svg {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="4" rx="1" />
      <rect x="14" y="9" width="7" height="12" rx="1" />
      <rect x="3" y="12" width="7" height="9" rx="1" />
    </Svg>
  ),
  Pencil: (p) => (
    <Svg {...p}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
    </Svg>
  ),
  CreditCard: (p) => (
    <Svg {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 10h20" />
    </Svg>
  ),
  ClipboardHeart: (p) => (
    <Svg {...p}>
      <rect x="4" y="4" width="16" height="18" rx="2" />
      <path d="M9 4V2h6v2" />
      <path d="M12 14s-3-2-3-4a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 2-3 4-3 4Z" />
    </Svg>
  ),
};

const { LayoutDashboard, Pencil, CreditCard, ClipboardHeart } = Icons;

function Sidebar() {
  return (
    <aside className="w-16 shrink-0 bg-[#6A1B9A] h-screen sticky top-0 flex flex-col justify-between">
      <div>
        <div className="flex justify-center py-6">
          <div className="bg-white rounded-full p-2">
            <LayoutDashboard className="h-6 w-6 text-[#6A1B9A]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button className="bg-white p-2 rounded-full">
          <Pencil className="h-5 w-5 text-[#6A1B9A]" />
        </button>
      </div>
    </aside>
  );
}

function InfoCardHeader() {
  const info = [
    { label: "Phone", value: "(555) 555-5555" },
    { label: "Email", value: "wimtachclient@hotmail.com" },
    { label: "Injury Location", value: "Right" },
    { label: "Diagnosis", value: "Other specified malignant neoplasm of skin, unspecified - C4499" },
  ];

  return (
    <div className="relative bg-white border rounded-lg px-6 py-4 shadow-sm w-[520px]">
      <div className="grid grid-cols-2 gap-y-2 text-sm">
        {info.map((i, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <span className="text-gray-500 w-28">{i.label}:</span>
            <span className="text-gray-800 font-medium leading-snug">{i.value}</span>
          </div>
        ))}
      </div>
      <button className="absolute top-3 right-3 bg-gray-100 p-2 rounded-md hover:bg-gray-200">
        <Pencil className="h-4 w-4 text-gray-600" />
      </button>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-5 border-b">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 grid place-items-center font-semibold text-gray-600">WI</div>
          <div>
            <div className="text-lg font-semibold text-gray-800">Wimtach Client</div>
            <div className="text-xs text-gray-500">Last Active: Mar 20, 2019 23:14</div>
          </div>
        </div>
        <button className="ml-4 px-4 py-1 bg-[#6A1B9A] text-white rounded-md text-sm">Discharge Patient</button>
      </div>
      <InfoCardHeader />
    </header>
  );
}

function HEPSummaryCard() {
  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-gray-800">New HEP for Wimtach Client</h2>
          <p className="text-xs text-gray-400">Edited 16 hours ago</p>
        </div>
        <button className="bg-[#CE93D8] text-white px-4 py-2 rounded-md font-medium">Edit HEP</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded-md text-center">
          <p className="text-sm text-gray-500">Sessions per Day</p>
          <p className="text-xl font-bold text-gray-800">5</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md text-center">
          <p className="text-sm text-gray-500">Total Reps</p>
          <p className="text-xl font-bold text-gray-800">254</p>
        </div>
      </div>
    </div>
  );
}

function StatsCard() {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="flex justify-between">
        <div className="p-4 flex-1">
          <p className="text-sm text-gray-600">Stats for Period 3</p>
          <div className="flex space-x-2 mt-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className={`h-4 w-4 rounded-full border ${i === 5 ? 'border-[#6A1B9A] bg-[#6A1B9A]' : 'border-gray-300'}`} />
            ))}
          </div>
          <div className="flex justify-between mt-3 text-sm text-gray-700">
            <div>
              <p>Weeks Enrolled</p>
              <p className="text-lg font-bold">9</p>
            </div>
            <div>
              <p>Compliance</p>
              <p className="text-lg font-bold">16/30</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBB03B] text-white w-32 flex items-center justify-center font-semibold">View Stats</div>
      </div>
    </div>
  );
}

function BillingCard() {
  return (
    <button className="bg-[#007BFF] text-white font-medium rounded-xl flex items-center justify-center py-4 w-full">
      <CreditCard className="h-5 w-5 mr-2" /> View Billing Details
    </button>
  );
}

function PatientEducation() {
  return (
    <div className="bg-white border rounded-xl p-4">
      <h3 className="font-semibold text-gray-800 mb-2">Patient Education</h3>
      <p className="text-sm text-gray-500 mb-3">Coming soon</p>
      <div className="bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden" style={{ height: '200px' }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Map_placeholder.png" alt="Map Placeholder" className="object-contain opacity-90" />
      </div>
    </div>
  );
}

function HealthChecker() {
  return (
    <button className="fixed bottom-6 right-6 bg-[#6A1B9A] hover:bg-[#7E57C2] text-white p-4 rounded-full shadow-lg">
      <ClipboardHeart className="h-6 w-6" />
    </button>
  );
}

function PatientPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[220px] bg-gradient-to-t from-[#F3E5F5] via-[#EDE7F6] to-[#FFF]" />
      <Sidebar />
      <main className="flex-1 flex flex-col relative z-10">
        <Header />
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <HEPSummaryCard />
            <PatientEducation />
          </div>
          <div className="space-y-4">
            <StatsCard />
            <BillingCard />
          </div>
        </div>
        <HealthChecker />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/patients/:id" element={<PatientPage />} />
        <Route path="/" element={<Navigate to="/patients/123" replace />} />
      </Routes>
    </HashRouter>
  );
}
