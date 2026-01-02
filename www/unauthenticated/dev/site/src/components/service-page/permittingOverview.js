import Link from "next/link";

export default function PermittingOverview() {
  return (
    /* FULL-WIDTH SECTION — extremely light blue */
    <section className="w-full py-24 bg-[#F4F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* INNER CONTAINER — pure white, floating */}
        <div className="bg-white rounded-3xl px-8 sm:px-12 lg:px-20 py-16">

          {/* SECTION TITLE */}
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#13144D] text-center">
            What Is Permitting &amp; Agency Coordination?
          </h2>

          {/* TITLE DIVIDER */}
          <div className="w-16 h-[2px] bg-[#13144D] mx-auto mt-4 mb-12" />

          {/* CONTENT BLOCK */}
          <div className="max-w-3xl mx-auto text-[#13144D]">

            {/* SUBHEADING */}
            <h3 className="text-[18px] font-semibold mb-4">
              Understanding the Permitting Process for Utilities, Stormwater, &amp; Development
            </h3>

            {/* BODY PARAGRAPH 1 */}
            <p className="text-[16px] leading-relaxed mb-6">
              Permitting &amp; Agency Coordination is the process of navigating local, regional,
              and state regulatory requirements to secure approvals for utility, stormwater,
              and infrastructure projects. This process applies to new development, system
              upgrades, redevelopment, and compliance-driven improvements.
            </p>

            {/* BODY PARAGRAPH 2 */}
            <p className="text-[16px] leading-relaxed mb-6">
              Blue Trust handles the entire process from start to finish, including:
            </p>

            {/* BULLET LIST */}
            <ul className="list-disc pl-6 space-y-3 text-[16px] leading-relaxed mb-8">
              <li>Determining which permits are required</li>
              <li>Preparing all engineering documents</li>
              <li>Coordinating with municipalities</li>
              <li>Submitting plans and responding to comments</li>
              <li>Navigating local and state requirements</li>
              <li>Managing revisions until approval is issued</li>
            </ul>

            {/* CLOSING STATEMENT */}
            <p className="text-[16px] leading-relaxed">
              Blue Trust serves as the single point of contact between you and every regulatory
              agency involved.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
