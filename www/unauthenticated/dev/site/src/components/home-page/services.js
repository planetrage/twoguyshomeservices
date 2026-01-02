export default function Services() {
  const TEXT = "text-[#094886]";

  return (
    <section className="w-full">
      {/* =========================================================
          SECTION 1: ENGINEERED SOLUTIONS (FULL-WIDTH BAND)
         ========================================================= */}
      <div className="w-full bg-[#eaf6f8]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="py-20">
            {/* Centered engineered module */}
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-[14px,1fr] gap-8 items-stretch">
                {/* FULL-HEIGHT STRUCTURAL SPINE */}
                <div className="flex justify-center">
                  <div className="w-px bg-[#094886]/40 rounded-full" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col items-center text-center">
                  {/* Headline */}
                  <h2 className={`text-[30px] sm:text-[34px] font-semibold ${TEXT} leading-tight`}>
                    Engineered Solutions for Every Property Type
                  </h2>
                  <p className={`mt-4 text-[15px] ${TEXT} leading-relaxed max-w-2xl`}>
                    Serving homeowners, developers, and municipalities with turnkey water-management expertise.
                  </p>

                  {/* CATEGORY ROW */}
                  <div className="mt-14 w-full">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
                      <CategoryItem label="Residential" />
                      <CategoryItem label="Commercial" />
                      <CategoryItem label="Municipal & Industrial" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 2: WHAT WE DO (PURE WHITE)
         ========================================================= */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="py-24">
            <h2 className={`text-center text-[34px] font-bold tracking-wide mb-20 ${TEXT}`}>
              WHAT WE DO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
              <ServiceCard
                title="Civil Design & Services"
                button="Call For A Consultation"
                paragraphs={[
                  [
                    "Comprehensive Utility Design:",
                    "Blue Trust Water Management specializes in complete civil design and permitting for water, wastewater, and stormwater systems.",
                  ],
                  [
                    "End-to-End Project Delivery:",
                    "Our engineers bring decades of experience creating utility networks that meet local and state standards while balancing constructability and cost efficiency.",
                  ],
                  [
                    "Full Permitting & Coordination:",
                    "We guide every project through the permitting process, working directly with agencies to ensure timely approvals and smooth transitions from concept to construction — delivering reliability, compliance, and value.",
                  ],
                ]}
              />

              <ServiceCard
                title="Property Management Vendor"
                button="Join Our Program"
                paragraphs={[
                  [
                    "One Partner for Every Inspection:",
                    "Managing a property shouldn't mean juggling vendors. Blue Trust consolidates all environmental and utility services under one roof to keep your site compliant and worry-free.",
                  ],
                  [
                    "Comprehensive Coverage:",
                    "We handle mandatory inspections and services — stormwater, backflow, fire systems, grease traps — plus recommended programs like lift-station care, pond spraying, and solids removal.",
                  ],
                  [
                    "Seamless Oversight:",
                    "Our team schedules, documents, and manages everything so you can focus on your business while we keep your property performing at its best.",
                  ],
                ]}
              />

              <ServiceCard
                title="Maintenance & Rehabilitation"
                button="Request A Service"
                paragraphs={[
                  [
                    "Total System Care:",
                    "Blue Trust delivers full-service stormwater and utility maintenance to keep your infrastructure clean, functional, and compliant.",
                  ],
                  [
                    "Comprehensive Solutions:",
                    "From vac-truck drain cleaning, system repairs, and pond cleanouts to pipelining, shoreline spraying, lift-station maintenance, septic pump-outs, and more — we bring engineering precision to every task.",
                  ],
                  [
                    "Protect Your Investment:",
                    "Whether restoring efficiency or extending infrastructure life, we provide proactive care that safeguards your assets and keeps water flowing exactly where it should.",
                  ],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryItem({ label }) {
  const TEXT = "text-[#094886]";

  return (
    <div className="flex flex-col items-center text-center">
      {/* ICON */}
      <div className="w-16 h-16 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center mb-5">
        <span className={`${TEXT} text-sm font-semibold`}>ICON</span>
      </div>

      {/* LABEL + CHECK (INLINE, TIGHT) */}
      <div className="flex items-center gap-2">
        <span className={`text-[18px] font-semibold ${TEXT}`}>
          {label}
        </span>
        <span className={`text-[18px] font-semibold ${TEXT}`}>✓</span>
      </div>
    </div>
  );
}

function ServiceCard({ title, paragraphs, button }) {
  const TEXT = "text-[#094886]";

  return (
    <div className="bg-white border border-black/10 rounded-2xl shadow-sm p-10 flex flex-col text-center min-h-[520px]">
      {/* ICON */}
      <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#f5f6f7] border border-black/10 shadow-sm flex items-center justify-center">
        <span className={`${TEXT} text-sm font-semibold`}>ICON</span>
      </div>

      {/* TITLE */}
      <h3 className={`text-[18px] font-semibold mb-6 ${TEXT}`}>
        {title}
      </h3>

      {/* BODY */}
      <div className={`text-left space-y-5 text-[14px] ${TEXT} mb-10 leading-relaxed`}>
        {paragraphs.map(([label, text]) => (
          <p key={label}>
            <strong>{label}</strong> {text}
          </p>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <button className="px-7 py-3 rounded-full bg-[#094886] text-white text-[14px] font-medium hover:opacity-90 transition">
          {button}
        </button>
      </div>
    </div>
  );
}

