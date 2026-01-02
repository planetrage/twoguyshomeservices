import Link from "next/link";

export default function FloodplainStartCTA() {
  return (
    <section className="w-full py-28 bg-[#F5FAFF]">
      <div className="max-w-5xl mx-auto px-6 text-center text-[#13144D]">
        <h2 className="text-[30px] font-semibold mb-6">
          Protect Your Property & Ensure Compliance
        </h2>
        <p className="text-[16px] mb-10">
          Expert floodplain analysis and hydrologic modeling from concept to approval.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-10 py-4 rounded-md bg-[#4FB7E3] text-white font-semibold"
        >
          Schedule A Consultation
        </Link>
      </div>
    </section>
  );
}
