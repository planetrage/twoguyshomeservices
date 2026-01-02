import Link from "next/link";

export default function StormwaterCompliance() {
  return (
    <section className="w-full py-28 bg-[#F5FAFF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl px-12 py-16 text-center text-[#13144D]">

          <h2 className="text-[30px] font-semibold mb-6">
            Be Confident Your Stormwater System Is Fully Compliant
          </h2>

          <p className="text-[16px] leading-relaxed mb-10">
            Whether you’ve received a compliance letter or want to stay ahead of
            future inspections, Blue Trust helps ensure your stormwater system
            meets all current requirements.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#4FB7E3] border-2 border-[#13144D] text-white font-semibold text-[14px] px-10 py-4 hover:opacity-90 transition"
          >
            Fix Your Stormwater Compliance Today
          </Link>

        </div>
      </div>
    </section>
  );
}
