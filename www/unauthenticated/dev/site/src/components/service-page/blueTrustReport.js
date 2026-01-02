import Image from "next/image";
import Link from "next/link";

export default function BlueTrustReport() {
  return (
    <section className="w-full py-28 bg-gradient-to-b from-[#1FB6E3] to-[#0B2C3D]">
      <div className="max-w-6xl mx-auto px-6">
        {/* BLACK PANEL */}
        <div className="bg-black rounded-3xl px-8 sm:px-12 lg:px-20 py-16 text-white relative overflow-hidden">

          {/* EYEBROW */}
          <span className="inline-block bg-[#4FB7E3] text-white text-[12px] font-medium tracking-widest px-4 py-1 rounded-full mb-6">
            CIVIL ENGINEERING SPECIAL SERVICE:
          </span>

          {/* HEADLINE */}
          <h2 className="text-center text-[30px] md:text-[40px] font-semibold tracking-wide mb-14">
            <span className="block text-white">
              LAND DEVELOPER:
            </span>
            <span className="block text-[#4FB7E3]">
              THE BLUE TRUST REPORT
            </span>
          </h2>

          {/* MID SPLIT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* LEFT */}
            <div className="flex">
              <div className="w-[3px] bg-white mr-6" />
              <p className="text-[14px] font-semibold tracking-wide leading-snug">
                NOT SURE WHAT CAN BE
                <br />
                DEVELOPED ON YOUR SITE?
              </p>
            </div>

            {/* RIGHT — REPORT IMAGE */}
            <div className="relative w-full max-w-xs h-[260px] mx-auto">
              <Image
                src="/images/placeholder/blue-trust-report-cover.png"
                alt="Land Developer Blue Trust Report"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* PROPERTY TYPES */}
          <div className="flex justify-center gap-24 mb-20">
            {/* Residential */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#4FB7E3] flex items-center justify-center mb-2">
                <span className="text-white text-lg">🏠</span>
              </div>
              <p className="text-[14px] mb-1">Residential</p>
              <span className="text-lg">✓</span>
            </div>

            {/* Commercial */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#4FB7E3] flex items-center justify-center mb-2">
                <span className="text-white text-lg">🏢</span>
              </div>
              <p className="text-[14px] mb-1">Commercial</p>
              <span className="text-lg">✓</span>
            </div>
          </div>

          {/* CONTENT + GRAPHIC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <div className="max-w-md">
              <h3 className="text-[18px] font-semibold mb-2">
                DUE DILIGENCE REPORT
              </h3>

              <p className="text-[15px] font-medium mb-4">
                Florida’s Statewide Land Development Due Diligence Report
              </p>

              <p className="text-[15px] leading-relaxed mb-6">
                The Blue Trust Report is designed to give landowners, developers,
                and investors clarity before design begins. It identifies
                constraints, opportunities, and risks early—before costly
                decisions are made.
              </p>

              <p className="text-[15px] font-medium mb-4">
                Before you begin design, you need to understand:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed mb-6">
                <li>What your property is zoned for</li>
                <li>What utilities are available</li>
                <li>Whether the site can support your vision</li>
                <li>What permitting will be required</li>
                <li>Capacity constraints for water, sewer, &amp; storm</li>
                <li>Environmental or drainage red flags</li>
                <li>Estimated costs and feasibility</li>
              </ul>

              <p className="text-[15px] leading-relaxed">
                The Blue Trust Report has become the gold standard for early-stage
                land development due diligence in Florida—helping clients move
                forward with confidence and clarity.
              </p>
            </div>

            {/* RIGHT GRAPHIC */}
            <div className="relative w-full h-[360px]">
              <Image
                src="/images/placeholder/florida-digital-map.png"
                alt="Florida statewide coverage"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-20 flex justify-center gap-6">
            <Link
              href="/blue-trust-report"
              className="px-8 py-3 rounded-md bg-[#4FB7E3] text-white font-semibold text-[14px]"
            >
              Request the Blue Trust Report
            </Link>

            <Link
              href="/blue-trust-report/sample"
              className="px-8 py-3 rounded-md bg-[#4FB7E3] text-white font-semibold text-[14px]"
            >
              See A Sample Report
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
