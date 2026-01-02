import Link from "next/link";

export default function GeotechnicalStartCTA() {
  return (
    <section className="w-full py-28 bg-[#F5FAFF]">
      <div className="max-w-5xl mx-auto px-6 text-center text-[#13144D]">
        <h2 className="text-[32px] font-semibold mb-6">
          Need a Geotechnical or Drainage Report?
        </h2>
        <p className="text-[16px] mb-10">
          Blue Trust handles everything from field work to final approval.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-[#4FB7E3] text-white font-semibold"
        >
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
