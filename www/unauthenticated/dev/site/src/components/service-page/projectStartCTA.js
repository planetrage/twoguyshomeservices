import Link from "next/link";

export default function ProjectStartCTA() {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* PANEL */}
        <div className="bg-[#F7F9FB] rounded-3xl px-8 sm:px-12 lg:px-20 py-16 text-[#13144D]">

          {/* CONTENT */}
          <div className="max-w-3xl mx-auto">
            {/* HEADLINE */}
            <h2 className="text-[28px] md:text-[32px] font-semibold mb-3">
              Ready to Start Your Project?
            </h2>

            {/* SUBHEADLINE */}
            <p className="text-[18px] font-medium mb-6">
              We Handle Everything from Design to Permitting.
            </p>

            {/* BODY COPY */}
            <p className="text-[15px] leading-relaxed mb-12">
              Blue Trust provides end-to-end civil and utility engineering
              support, guiding projects from early planning through final
              approvals. Our designs are built to last, engineered for
              constructability, and developed to meet permitting requirements
              on the first submission—whether you’re planning a small commercial
              site, a large land development, or public infrastructure.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#4FB7E3] text-white font-semibold text-[14px]"
              >
                Schedule A Civil Design Consultation
              </Link>

              <Link
                href="/blue-trust-report"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-[#4FB7E3] text-white font-medium text-[14px]"
              >
                Get The Land Developer: The Blue Trust Report
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
