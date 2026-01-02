import Link from "next/link";

export default function CivilServicesIncluded() {
  return (
    /* SECTION BACKGROUND — very light blue */
    <section className="w-full py-24 bg-[#F3F7FB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* PANEL — pure white, floating */}
        <div className="bg-white rounded-3xl px-8 sm:px-12 lg:px-20 py-16">

          {/* TITLE */}
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#13144D] text-center leading-snug">
            Services Included in Civil Design
            <br />
            &amp; Utility Engineering
          </h2>

          {/* DIVIDER */}
          <div className="w-16 h-[3px] bg-[#13144D] mx-auto mt-4 mb-14" />

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[#13144D]">

            {/* LEFT COLUMN */}
            <div>
              {/* GROUP 1 */}
              <div className="mb-12">
                <h3 className="text-[16px] font-semibold mb-4">
                  Utility &amp; Infrastructure Design
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed">
                  <li>Water system &amp; potable water design</li>
                  <li>Sewer &amp; force main design</li>
                  <li>Lift station engineering and capacity evaluation</li>
                  <li>Stormwater conveyance &amp; pipe system layout</li>
                  <li>Utility relocation &amp; conflict resolution</li>
                </ul>
              </div>

              {/* GROUP 2 */}
              <div>
                <h3 className="text-[16px] font-semibold mb-4">
                  Engineering Calculations &amp; Analysis
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed">
                  <li>Hydraulic modeling</li>
                  <li>Sewer loading &amp; flow projections</li>
                  <li>Fire flow &amp; water demand calculations</li>
                  <li>Capacity analysis (County, City, SWFWMD)</li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              {/* GROUP 3 */}
              <div className="mb-12">
                <h3 className="text-[16px] font-semibold mb-4">
                  Permitting &amp; Approvals
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed">
                  <li>City utility permitting</li>
                  <li>County utility permitting</li>
                  <li>SWFWMD permitting</li>
                  <li>FDEP water/sewer permitting</li>
                  <li>Construction plan production</li>
                  <li>As-builts &amp; final acceptance</li>
                </ul>
              </div>

              {/* GROUP 4 */}
              <div>
                <h3 className="text-[16px] font-semibold mb-4">
                  Construction Support
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed">
                  <li>Utility coordination</li>
                  <li>Contractor communication</li>
                  <li>RFIs, revisions, and inspection guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#4FB7E3] text-white font-semibold text-[14px]"
            >
              Schedule A Design Review
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
