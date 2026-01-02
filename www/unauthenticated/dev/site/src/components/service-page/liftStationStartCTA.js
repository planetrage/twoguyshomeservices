export default function LiftStationStartCTA() {
  return (
    <section className="w-full py-28 bg-[#F5FAFF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl px-12 py-16 text-center text-[#13144D]">
          <h2 className="text-[28px] md:text-[32px] font-semibold mb-4">
            Get Your Lift Station Inspected or Serviced Today
          </h2>

          <div className="w-14 h-[2px] bg-[#13144D] mx-auto mb-6" />

          <p className="text-[16px] leading-relaxed max-w-2xl mx-auto mb-10">
            Blue Trust provides proactive inspections and responsive maintenance to keep systems running.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center w-[320px] h-[64px] rounded-md bg-[#4FB7E3] border-2 border-[#13144D] text-white font-semibold text-[15px] hover:opacity-90 transition"
          >
            Schedule Lift Station Service
          </a>
        </div>
      </div>
    </section>
  );
}
