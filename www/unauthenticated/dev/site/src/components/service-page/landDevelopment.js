import Image from "next/image";
import Link from "next/link";

export default function LandDevelopment() {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* PANEL */}
        <div className="bg-[#F7F9FB] rounded-3xl px-8 sm:px-12 lg:px-20 py-16 text-[#13144D]">

          {/* EYEBROW */}
          <p className="text-[13px] tracking-widest font-medium text-center mb-4">
            CIVIL ENGINEERING SPECIAL SERVICE:
          </p>

          {/* MAIN HEADLINE */}
          <h2 className="text-[32px] md:text-[40px] font-semibold text-center tracking-wide mb-14">
            PROJECT LAND DEVELOPMENT
          </h2>

          {/* MID HEADER SPLIT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* LEFT */}
            <div className="flex">
              <div className="w-[3px] bg-[#13144D] mr-6" />
              <p className="text-[14px] font-semibold tracking-wide leading-snug">
                NEED MORE THAN
                <br />
                UTILITY DESIGN?
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full max-w-sm h-[220px] mx-auto">
              <Image
                src="/images/placeholder/site-plan.jpg"
                alt="Project land development site plan"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>

          {/* PROPERTY TYPE ROW */}
          <div className="flex justify-center gap-24 mb-20">
            {/* Residential */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 mb-2 bg-[#13144D] rounded-sm" />
              <p className="text-[14px] font-medium mb-1">Residential</p>
              <span className="text-[18px] font-semibold">✓</span>
            </div>

            {/* Commercial */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 mb-2 bg-[#13144D] rounded-sm" />
              <p className="text-[14px] font-medium mb-1">Commercial</p>
              <span className="text-[18px] font-semibold">✓</span>
            </div>
          </div>

          {/* CONTENT BLOCK */}
          <div className="max-w-3xl mx-auto">
            {/* SUBHEADING */}
            <h3 className="text-[16px] font-semibold mb-6">
              Our Role vs. Traditions Engineering
            </h3>

            {/* PARAGRAPHS */}
            <p className="text-[15px] leading-relaxed mb-4">
              Blue Trust provides civil utility engineering focused on water,
              sewer, stormwater, and regulatory coordination for land
              development projects of all sizes.
            </p>

            <p className="text-[15px] leading-relaxed font-medium mb-4">
              Our role is to ensure utility systems are engineered clearly,
              coordinated properly, and approved efficiently.
            </p>

            <p className="text-[15px] leading-relaxed mb-6">
              For full site development, we partner with Traditions Engineering
              to deliver comprehensive civil design services that extend beyond
              utilities into complete land planning and infrastructure.
            </p>

            {/* BULLET LIST */}
            <ul className="list-disc pl-6 space-y-3 text-[15px] leading-relaxed mb-8">
              <li>Residential subdivisions</li>
              <li>Commercial projects</li>
              <li>Site development</li>
              <li>Roadway &amp; drainage design</li>
              <li>Large-scale permitting</li>
            </ul>

            {/* CLOSING LINE */}
            <p className="text-[15px] leading-relaxed mb-12">
              Together, Blue Trust and Traditions Engineering provide a seamless
              land development solution that balances regulatory clarity,
              constructability, and long-term performance.
            </p>
          </div>

          {/* LOGOS ROW */}
          <div className="flex justify-center items-center gap-16 mb-16">
            <div className="relative w-[160px] h-[60px]">
              <Image
                src="/images/placeholder/blue-trust-logo.png"
                alt="Blue Trust Water Management"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-[160px] h-[60px]">
              <Image
                src="/images/placeholder/traditions-engineering-logo.png"
                alt="Traditions Engineering"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
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
