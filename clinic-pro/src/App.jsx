import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

const Svg = ({ children, className, strokeWidth = 1.8, stroke = "currentColor", fill = "none" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill={fill}
  >
    {children}
  </svg>
);

const Icons = {
  Logo: (p) => (
    <Svg {...p}>
      <path d="M4.5 7.5A3.5 3.5 0 0 1 8 4h8a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 16 20H8a3.5 3.5 0 0 1-3.5-3.5v-9Z" />
      <path d="M12 8v8" />
      <path d="M8.5 12H15" />
    </Svg>
  ),
  Home: (p) => (
    <Svg {...p}>
      <path d="m3.5 11.5 8.5-7 8.5 7" />
      <path d="M6.5 10.5v9h5v-5.5h2v5.5h5v-9" />
    </Svg>
  ),
  Calendar: (p) => (
    <Svg {...p}>
      <rect x="4" y="4.5" width="16" height="15.5" rx="2" />
      <path d="M16 3v3" />
      <path d="M8 3v3" />
      <path d="M4 10h16" />
      <path d="m10 15 2 2 4-4" />
    </Svg>
  ),
  Folder: (p) => (
    <Svg {...p}>
      <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h5l2 2h7a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 20 20H6A2.5 2.5 0 0 1 3.5 17.5v-10Z" />
    </Svg>
  ),
  Message: (p) => (
    <Svg {...p}>
      <path d="M20.5 12a8.5 8.5 0 0 0-8.5-8.5h-1A8.5 8.5 0 0 0 2.5 12a8.5 8.5 0 0 0 2.2 5.7l-.7 4.3 4.1-1.2a8.5 8.5 0 0 0 4.9 1.5 8.5 8.5 0 0 0 7.5-4.6A8.5 8.5 0 0 0 20.5 12Z" />
    </Svg>
  ),
  CreditCard: (p) => (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10.5h18" />
      <path d="M7 15h3" />
    </Svg>
  ),
  Money: (p) => (
    <Svg {...p}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M12 9.5a2.5 2.5 0 1 0 0 5" />
      <path d="M12 14.5a2.5 2.5 0 1 0 0-5" />
    </Svg>
  ),
  Pencil: (p) => (
    <Svg {...p}>
      <path d="M12 19h9" />
      <path d="m14.5 4 3.5 3.5L8 17l-5 1 1-5L14.5 4Z" />
    </Svg>
  ),
  Logout: (p) => (
    <Svg {...p}>
      <path d="M16 17.5 21.5 12 16 6.5" />
      <path d="M21.5 12H10" />
      <path d="M12 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6" />
    </Svg>
  ),
  ChevronRight: (p) => (
    <Svg {...p}>
      <path d="m9.5 18 5-6-5-6" />
    </Svg>
  ),
  Fire: (p) => (
    <Svg {...p}>
      <path d="M12 4c1 2 4 3.5 4 7a4 4 0 1 1-8 0c0-1.5.7-2.8 1.7-3.9" />
      <path d="M12 12.5a1.5 1.5 0 1 1-2.6-1.1" />
    </Svg>
  ),
  Dot: (p) => (
    <Svg {...p} stroke="none">
      <circle cx="12" cy="12" r="6" fill="currentColor" />
    </Svg>
  ),
  Check: (p) => (
    <Svg {...p}>
      <path d="m6.5 12 4 4 6.5-7.5" />
    </Svg>
  ),
  ClipboardHeart: (p) => (
    <Svg {...p}>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <path d="M9 4V3h6v1" />
      <path d="M12 14.5s-2.5-1.7-2.5-3.5a1.75 1.75 0 0 1 3.5 0 1.75 1.75 0 0 1 3.5 0c0 1.8-2.5 3.5-2.5 3.5Z" />
    </Svg>
  ),
};

const navItems = [
  { id: "home", label: "Home", icon: Icons.Home, active: true },
  { id: "calendar", label: "Calendar", icon: Icons.Calendar },
  { id: "records", label: "Records", icon: Icons.Folder },
  { id: "messages", label: "Messages", icon: Icons.Message },
  { id: "billing", label: "Billing", icon: Icons.CreditCard },
];

const infoFields = [
  { label: "Phone:", value: "(555) 555-5555" },
  { label: "Email:", value: "wimtachclient@hotmail.com" },
  { label: "Injury Location:", value: "Right" },
  {
    label: "Diagnosis:",
    value: "Other specified malignant neoplasm of skin, unspecified - C4499",
  },
];

const statsDots = ["past", "past", "current", "upcoming", "upcoming", "upcoming", "upcoming"];

const statsDays = ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Today"];

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="sidebar__logo" aria-hidden="true">
        <Icons.Logo className="sidebar__logo-icon" />
      </div>
      <nav className="sidebar__nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={`sidebar__link${item.active ? " is-active" : ""}`}
              aria-label={item.label}
            >
              <Icon className="sidebar__icon" />
            </button>
          );
        })}
      </nav>
      <button type="button" className="sidebar__logout" aria-label="Log out">
        <Icons.Logout className="sidebar__icon" />
      </button>
    </aside>
  );
}

function InfoSummary() {
  return (
    <div className="info-summary">
      <button type="button" className="info-summary__edit" aria-label="Edit contact details">
        <Icons.Pencil className="info-summary__edit-icon" />
      </button>
      <dl className="info-summary__grid">
        {infoFields.map((field) => (
          <div key={field.label} className="info-summary__item">
            <dt>{field.label}</dt>
            <dd>{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function HeaderCard() {
  return (
    <section className="header-card">
      <span className="breadcrumb">Dashboard / Wimtach Client</span>
      <div className="header-card__content">
        <div className="identity">
          <div className="identity__avatar">WI</div>
          <div className="identity__details">
            <h1>Wimtach Client</h1>
            <p>Last Active: Mar 20, 2019 23:14</p>
          </div>
          <button type="button" className="identity__cta">Discharge Patient</button>
        </div>
        <InfoSummary />
      </div>
    </section>
  );
}

function HEPCard() {
  return (
    <section className="card hep-card">
      <div className="hep-card__badge">Edit HEP</div>
      <div className="hep-card__body">
        <header className="hep-card__header">
          <h2>New HEP for Wimtach Client</h2>
          <span>Edited 16 hours ago</span>
        </header>
        <div className="hep-card__metrics">
          <div className="hep-card__metric">
            <span>Sessions per Day</span>
            <strong>5</strong>
          </div>
          <div className="hep-card__metric">
            <span>Total Reps</span>
            <strong>254</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard() {
  return (
    <section className="card stats-card">
      <div className="stats-card__panel">
        <header className="stats-card__header">
          <div className="stats-card__heading">
            <h3>Stats</h3>
            <span>for Period 3</span>
          </div>
          <div className="stats-card__streak">
            <span>Streaks</span>
            <strong>1</strong>
            <Icons.Fire className="stats-card__streak-icon" />
          </div>
        </header>
        <div className="stats-card__activity">
          {statsDots.map((state, index) => (
            <span
              key={index}
              className={`stats-card__activity-dot stats-card__activity-dot--${state}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="stats-card__days">
          {statsDays.map((day, index) => (
            <span key={day} className={`stats-card__day stats-card__day--${statsDots[index]}`}>
              {day}
            </span>
          ))}
        </div>
        <div className="stats-card__metrics">
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
      <button type="button" className="stats-card__cta-panel">
        View Stats
      </button>
    </section>
  );
}

function PatientEducation() {
  return (
    <section className="card education-card">
      <header>
        <h3>Patient Education</h3>
        <p>Coming soon</p>
      </header>
      <div className="education-card__media" role="presentation" />
    </section>
  );
}

function BillingCard() {
  return (
    <button type="button" className="billing-card">
      <span className="billing-card__copy">
        <span className="billing-card__icon">
          <Icons.Money className="billing-card__icon-svg" />
        </span>
        View Billing Details
      </span>
      <Icons.ChevronRight className="billing-card__chevron" />
    </button>
  );
}

function QuickAction() {
  return (
    <button type="button" className="quick-action" aria-label="Open health checker">
      <Icons.ClipboardHeart className="quick-action__icon" />
    </button>
  );
}

function BackgroundDecor() {
  return (
    <div className="background-decor" aria-hidden="true">
      <div className="background-decor__shape background-decor__shape--one" />
      <div className="background-decor__shape background-decor__shape--two" />
      <div className="background-decor__shape background-decor__shape--three" />
    </div>
  );
}

function PatientPage() {
  return (
    <div className="patient-layout">
      <BackgroundDecor />
      <Sidebar />
      <main className="page-body">
        <HeaderCard />
        <section className="content-grid">
          <div className="content-column">
            <HEPCard />
            <PatientEducation />
          </div>
          <div className="content-column">
            <StatsCard />
            <BillingCard />
          </div>
        </section>
      </main>
      <QuickAction />
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
