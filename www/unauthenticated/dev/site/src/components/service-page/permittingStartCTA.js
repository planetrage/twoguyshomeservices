import Link from "next/link";

export default function PermittingStartCTA() {
  return (
    /* FULL-WIDTH SECTION — VERY SUBTLE LIGHT BLUE (MATCHES OTHER SECTIONS) */
    <section className="w-full py-28 bg-[#F5FAFF]">
      <div className="max-w-5xl mx-auto px-6">

        {/* FLOATING CARD */}
        <div className="bg-white rounded-3xl px-12 sm:px-16 lg:px-24 py-20 text-[#13144D] text-center">

          {/* HEADING */}
          <h2 className="text-[30px] md:text-[34px] font-semibold mb-6">
            Start the Permitting Process With Confidence
          </h2>

          {/* SUPPORTING TEXT */}
          <p className="text-[16px] leading-relaxed max-w-3xl mx-auto mb-10">
            Let Blue Trust manage the regulatory side of your project — so you can focus on ownership, operations, and results.
          </p>

          {/* DIVIDER */}
          <div className="w-14 h-[2px] bg-[#13144D] mx-auto mb-12" />

          {/* CTA BUTTON GROUP */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* LEFT BUTTON */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#4FB7E3] text-white font-semibold text-[15px] hover:opacity-90 transition text-center min-w-[260px]"
            >
              Request Permitting 
              <br />
              Assistance
            </Link>

            {/* RIGHT BUTTON */}
            <Link
              href="/land-developer-master-report"
              className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#4FB7E3] text-white font-semibold text-[15px] hover:opacity-90 transition text-center min-w-[260px]"
            >
              <span>
                Get The Land Developer:
                <br />
                The Blue Trust Report
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
