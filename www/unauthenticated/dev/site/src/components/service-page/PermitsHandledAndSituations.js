import Link from "next/link";

export default function PermitsHandledAndSituations() {
  const permitItems = [
    "Stormwater system permits",
    "ERP permits and modifications",
    "Permit transfers",
    "As-built certifications",
    "Stormwater system inspections and compliance documentation",
    "Lift station permits and coordination",
    "Backflow and fire line approvals",
    "NPDES permits and SWPPP plans",
    "Environmental compliance documentation",
    "Utility-related permits",
  ];

  return (
    /* FULL-WIDTH SECTION — PURE WHITE */
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* CARD PAIR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT CARD — NEUTRAL */}
          <div className="bg-[#F6F6F6] rounded-3xl px-10 py-12 text-[#13144D]">
            <h3 className="text-[22px] font-semibold text-center">
              Permits We Commonly Handle
            </h3>

            <div className="w-12 h-[2px] bg-[#13144D] mx-auto mt-3 mb-8" />

            <p className="text-[16px] mb-6">
              Our team supports permitting for:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[16px] leading-relaxed mb-8">
              {permitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="text-[16px] font-medium">
              If your project touches water, drainage, or utilities — we handle the permitting.
            </p>
          </div>

          {/* RIGHT CARD — ACCENT (GOLD) */}
          <div className="bg-[#E6C46A] rounded-3xl px-10 py-12 text-[#13144D]">
            <h3 className="text-[22px] font-semibold text-center">
              Common Situations We Help Resolve
            </h3>

            <div className="w-12 h-[2px] bg-[#13144D] mx-auto mt-3 mb-8" />

            <p className="text-[16px] mb-6">
              Our team supports permitting for:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[16px] leading-relaxed mb-8">
              {permitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="text-[16px] font-medium">
              If your project touches water, drainage, or utilities — we handle the permitting.
            </p>
          </div>
        </div>

        {/* CTA — OUTSIDE CARDS */}
        <div className="flex justify-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#4FB7E3] text-white font-semibold text-[15px] hover:opacity-90 transition"
          >
            Schedule A Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
