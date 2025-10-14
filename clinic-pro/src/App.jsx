import React from "react";
import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";

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
  Calendar: (p) => (
    <Svg {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="m9 14 2 2 4-4" />
    </Svg>
  ),
  Folder: (p) => (
    <Svg {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </Svg>
  ),
  Message: (p) => (
    <Svg {...p}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8.5Z" />
    </Svg>
  ),
  Refresh: (p) => (
    <Svg {...p}>
      <path d="M21 12a9 9 0 0 0-9-9" />
      <path d="m3 12 3 3 3-3" />
      <path d="M12 21a9 9 0 0 0 9-9" />
      <path d="M3 12a9 9 0 0 1 9-9v3" />
    </Svg>
  ),
  ArrowRight: (p) => (
    <Svg {...p}>
      <path d="m9 18 6-6-6-6" />
    </Svg>
  ),
};

const navItems = [
  { id: "dashboard", icon: Icons.LayoutDashboard, label: "Dashboard", active: true },
  { id: "calendar", icon: Icons.Calendar, label: "Calendar" },
  { id: "records", icon: Icons.Folder, label: "Records" },
  { id: "messages", icon: Icons.Message, label: "Messages" },
  { id: "billing", icon: Icons.CreditCard, label: "Billing" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo" aria-label="Clinic Pro">
        <Icons.LayoutDashboard className="sidebar__logo-icon" />
      </div>
      <nav className="sidebar__nav" aria-label="Primary">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to="#"
              className={`sidebar__link${item.active ? " is-active" : ""}`}
              aria-label={item.label}
            >
              <Icon className="sidebar__icon" />
            </Link>
          );
        })}
      </nav>
      <button type="button" className="sidebar__support" aria-label="Support">
        <Icons.Refresh className="sidebar__support-icon" />
      </button>
    </aside>
  );
}

function InfoCardHeader() {
  // Static contact details mirrored from provided mockup.
  const info = [
    { label: "Phone", value: "(555) 555-5555" },
    { label: "Email", value: "wimtachclient@hotmail.com" },
    { label: "Injury Location", value: "Right" },
    { label: "Diagnosis", value: "Other specified malignant neoplasm of skin, unspecified - C4499" },
  ];

  return (
    <div className="info-card">
      <div className="info-card__grid">
        {info.map((item) => (
          <div key={item.label} className="info-card__item">
            <span className="info-card__label">{item.label}</span>
            <span className="info-card__value">{item.value}</span>
          </div>
        ))}
      </div>
      <button type="button" className="info-card__edit" aria-label="Edit contact details">
        <Icons.Pencil className="sidebar__icon" />
      </button>
    </div>
  );
}

function TopPanel() {
  return (
    <div className="top-panel">
      <span className="breadcrumb">Dashboard / Wimtach Client</span>
      <div className="top-panel__row">
        <div className="profile">
          <div className="profile__avatar">WI</div>
          <div>
            <h1 className="profile__name">Wimtach Client</h1>
            <p className="profile__meta">Last Active: Mar 20, 2019 23:14</p>
          </div>
          <button type="button" className="profile__cta">Discharge Patient</button>
        </div>
        <InfoCardHeader />
      </div>
    </div>
  );
}

function HEPSummaryCard() {
  return (
    <section className="card">
      <div className="hep-card__inner">
        <div className="hep-card__main">
          <div className="hep-card__title">
            <h2>New HEP for Wimtach Client</h2>
            <span className="hep-card__subtitle">Edited 16 hours ago</span>
          </div>
          <div className="hep-card__metrics">
            <div className="metric-card">
              <span>Sessions per Day</span>
              <strong>5</strong>
            </div>
            <div className="metric-card">
              <span>Total Reps</span>
              <strong>254</strong>
            </div>
          </div>
        </div>
        <button type="button" className="hep-card__cta">Edit HEP</button>
      </div>
    </section>
  );
}

function StatsCard() {
  return (
    <section className="card">
      <div className="stats-card__inner">
        <div className="stats-card__main">
          <div className="stats-card__top">
            <h3 className="stats-card__title">Stats for Period 3</h3>
            <div className="stats-card__streak">
              <span role="img" aria-label="Fire">
                🔥
              </span>
              Streaks 1
            </div>
          </div>
          <div className="stats-card__dots">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className={`stats-card__dot${index === 4 ? " is-active" : ""}`}
              />
            ))}
          </div>
          <div className="stats-card__footer">
            <div>
              Weeks Enrolled
              <strong>9</strong>
            </div>
            <div>
              Compliance
              <strong>16/30</strong>
            </div>
          </div>
        </div>
        <button type="button" className="stats-card__cta">View Stats</button>
      </div>
    </section>
  );
}

function BillingCard() {
  return (
    <button type="button" className="billing-card">
      <span className="billing-card__left">
        <span className="billing-card__icon">
          <Icons.CreditCard className="sidebar__icon" />
        </span>
        View Billing Details
      </span>
      <span className="billing-card__chevron">›</span>
    </button>
  );
}

function PatientEducation() {
  return (
    <section className="card patient-education">
      <h3>Patient Education</h3>
      <p>Coming soon</p>
      <div className="patient-education__media">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Map_placeholder.png"
          alt="Map placeholder"
        />
      </div>
    </section>
  );
}

function HealthChecker() {
  return (
    <button type="button" className="health-checker" aria-label="Open Health Checker">
      <Icons.ClipboardHeart className="sidebar__icon" />
    </button>
  );
}

function PatientPage() {
  return (
    <div className="patient-page">
      <Sidebar />
      <main className="main-content">
        <TopPanel />
        <div className="main-grid">
          <div className="stack">
            <HEPSummaryCard />
            <PatientEducation />
          </div>
          <div className="stack">
            <StatsCard />
            <BillingCard />
          </div>
        </div>
      </main>
      <HealthChecker />
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
