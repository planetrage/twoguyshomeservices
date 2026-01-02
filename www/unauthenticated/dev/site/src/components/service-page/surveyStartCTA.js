import Link from "next/link";

export default function SurveyStartCTA() {
  return (
    <section className="w-full py-28 bg-[#F5FAFF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl px-12 py-20 text-[#13144D] text-center">
          <h2 className="text-[30px] md:text-[34px] font-semibold mb-6">
            Start Your Project With an Accurate Survey
          </h2>

          <div className="w-14 h-[2px] bg-[#13144D] mx-auto mb-10" />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#4FB7E3] text-white font-semibold text-[14px]"
          >
            Schedule a Survey Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
