import Link from "next/link";

export default function InfrastructureMaintenanceChooseService() {
  return (
    <section className="w-full py-24 bg-white text-[#13144D]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[28px] font-semibold text-center mb-4">
          Choose Your Service
        </h2>

        <div className="w-14 h-[2px] bg-[#13144D] mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/stormwater-pond-cleanouts"
            className="bg-[#F7F9FB] rounded-3xl px-10 py-10 hover:opacity-95 transition"
          >
            <h3 className="text-[18px] font-semibold mb-3">
              Stormwater Pond Cleanouts
            </h3>
            <p className="text-[15px] leading-relaxed">
              Placeholder description.
            </p>
          </Link>

          <Link
            href="/stormwater-system-repairs"
            className="bg-[#F7F9FB] rounded-3xl px-10 py-10 hover:opacity-95 transition"
          >
            <h3 className="text-[18px] font-semibold mb-3">
              Stormwater System Repairs
            </h3>
            <p className="text-[15px] leading-relaxed">
              Placeholder description.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
