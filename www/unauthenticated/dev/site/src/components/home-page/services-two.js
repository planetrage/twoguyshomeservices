import React from "react";

export default function ServicesTwo() {
  // Brand colors (per your rules)
  const DARK_BLUE = "#094886"; // headings / titles (outside cards)
  const TEAL = "#00c4cc"; // icon badge background
  const OVERLAY = "rgba(9, 72, 134, 0.72)"; // consistent dark blue overlay on images

  // Placeholder images — swap these paths to your real assets later
  // Keep them as real images (not layout images), text remains editable JSX.
  const coreServices = [
    {
      title: "Civil Engineering &\nField Services",
      bg: "/images/choose-service/core-1.jpg",
      icon: "🛠️",
    },
    {
      title: "Environmental &\nUtility Inspections",
      bg: "/images/choose-service/core-2.jpg",
      icon: "🧪",
    },
    {
      title: "Infrastructure Maintenance &\nRehabilitation",
      bg: "/images/choose-service/core-3.jpg",
      icon: "🏗️",
    },
  ];

  const specialServices = [
    {
      title: "Project Land\nDevelopment",
      bg: "/images/choose-service/special-1.jpg",
      icon: "📍",
    },
    {
      title: "White Glove\nPartner",
      bg: "/images/choose-service/special-2.jpg",
      icon: "🤝",
    },
    {
      title: "Land Developer:\nThe Blue Trust Report",
      bg: "/images/choose-service/special-3.jpg",
      icon: "📰",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-8">
        {/* OUTER PANEL */}
        <div className="rounded-3xl bg-[#f6f7f8] px-10 sm:px-12 lg:px-16 py-16 shadow-sm border border-black/5">
          {/* MAIN TITLE */}
          <h2
            className="text-center font-semibold tracking-wide uppercase text-[28px] sm:text-[30px]"
            style={{ color: DARK_BLUE }}
          >
            Choose Your Service
          </h2>

          {/* spacing below title */}
          <div className="h-12" />

          {/* CORE SERVICES */}
          <div className="mb-16">
            <h3
              className="font-semibold text-[18px] sm:text-[20px]"
              style={{ color: DARK_BLUE }}
            >
              Core Services
            </h3>

            <div className="h-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {coreServices.map((card) => (
                <ChooseServiceCard
                  key={card.title}
                  title={card.title}
                  bg={card.bg}
                  icon={card.icon}
                  teal={TEAL}
                  overlay={OVERLAY}
                />
              ))}
            </div>
          </div>

          {/* SPECIAL SERVICES */}
          <div>
            <h3
              className="font-semibold text-[18px] sm:text-[20px]"
              style={{ color: DARK_BLUE }}
            >
              Special Services
            </h3>

            <div className="h-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {specialServices.map((card) => (
                <ChooseServiceCard
                  key={card.title}
                  title={card.title}
                  bg={card.bg}
                  icon={card.icon}
                  teal={TEAL}
                  overlay={OVERLAY}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChooseServiceCard({ title, bg, icon, teal, overlay }) {
  // Enforce equal height + consistent stack positioning
  return (
    <div className="group relative overflow-hidden rounded-2xl min-h-[240px] shadow-sm transition hover:shadow-md">
      {/* Background image */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Solid overlay (no gradient) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlay }}
      />

      {/* Content stack (centered) */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-6">
          {/* Icon badge */}
          <div
            className="h-16 w-16 rounded-full flex items-center justify-center mb-5"
            style={{ backgroundColor: teal }}
          >
            <span className="text-white text-2xl leading-none">{icon}</span>
          </div>

          {/* Title (multi-line, balanced breaks via \n) */}
          <div className="text-white font-semibold text-[16px] sm:text-[17px] leading-snug whitespace-pre-line">
            {title}
          </div>
        </div>
      </div>

      {/* Subtle hover polish (no scale distortion) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute inset-0 bg-white/5" />
      </div>
    </div>
  );
}
