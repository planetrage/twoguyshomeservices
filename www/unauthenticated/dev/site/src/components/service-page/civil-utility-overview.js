import Link from "next/link";

export default function CivilUtilityOverview() {
  return (
    /* SECTION BACKGROUND — very light blue */
    <section className="w-full py-24 bg-[#F3F7FB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* PANEL — pure white, floating */}
        <div className="bg-white rounded-3xl px-8 sm:px-12 lg:px-20 py-16">

          {/* TITLE */}
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#13144D] text-center">
            What Is Civil Utility Design?
          </h2>

          {/* DIVIDER */}
          <div className="w-16 h-[3px] bg-[#13144D] mx-auto mt-4 mb-10" />

          {/* CONTENT COLUMN */}
          <div className="max-w-3xl mx-auto text-[#13144D]">

            {/* INTRO PARAGRAPH */}
            <p className="text-[16px] leading-relaxed text-center mb-8">
              Civil utility design is the engineering discipline responsible for
              planning, designing, and coordinating the infrastructure systems
              that deliver water, manage wastewater, and control stormwater for
              developed land. These systems must function reliably, meet strict
              regulatory requirements, and integrate seamlessly with surrounding
              development.
            </p>

            {/* SUBHEADING */}
            <p className="text-[16px] font-medium mb-6">
              At Blue Trust, we specialize in:
            </p>

            {/* BULLET LIST */}
            <ul className="list-disc pl-6 space-y-3 mb-10">
              <li>Water Utility Design</li>
              <li>Sewer &amp; Force Main Design</li>
              <li>Lift Station Design</li>
              <li>Stormwater Infrastructure Design</li>
              <li>Pipe networks, structures, and conveyance systems</li>
              <li>Modeling, capacity calculations, and hydraulic analysis</li>
              <li>Utility coordination with cities, counties, and FDOT</li>
              <li>
                Environmental and stormwater integration with SWFWMD
              </li>
            </ul>

            {/* EMPHASIS STATEMENT */}
            <p className="text-[16px] mb-12">
              <span className="font-medium">Our goal is simple:</span>{" "}
              <span className="font-semibold">
                design systems that pass permitting, function for decades, and
                keep your site compliant with every governing agency.
              </span>
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#4FB7E3] text-white font-semibold text-[14px] hover:opacity-90 transition"
              >
                Schedule A Design Review
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
