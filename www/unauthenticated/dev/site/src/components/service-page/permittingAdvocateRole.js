export default function PermittingAdvocateRole() {
  return (
    /* FULL-WIDTH SECTION — VERY LIGHT BLUE (FLIPPED CORRECTLY) */
    <section className="w-full py-24 bg-[#F5FAFF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* CARD PAIR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT CARD — OUR ROLE AS YOUR ADVOCATE */}
          <div className="bg-[#F6F6F6] rounded-3xl px-10 py-12 text-[#13144D]">
            <h3 className="text-[22px] font-semibold text-center mb-3">
              Our Role As Your Advocate
            </h3>

            <div className="w-12 h-[2px] bg-[#13144D] mx-auto mb-8" />

            <p className="text-[16px] mb-5">
              Blue Trust doesn’t just submit paperwork. We actively:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[16px] leading-relaxed mb-8">
              <li>Communicate with agency reviewers</li>
              <li>Clarify requirements before submittal</li>
              <li>Resolve comments efficiently</li>
              <li>Coordinate revisions across disciplines</li>
              <li>Prevent unnecessary resubmittals</li>
              <li>Keep projects moving forward</li>
            </ul>

            <p className="text-[16px] leading-relaxed">
              You don’t have to chase agencies, interpret letters, or guess what comes next — we manage it all.
            </p>
          </div>

          {/* RIGHT CARD — HOW THIS FITS INTO YOUR PROJECT */}
          <div className="bg-[#F6F6F6] rounded-3xl px-10 py-12 text-[#13144D]">
            <h3 className="text-[22px] font-semibold text-center mb-3">
              How This Fits Into Your Project
            </h3>

            <div className="w-12 h-[2px] bg-[#13144D] mx-auto mb-8" />

            <p className="text-[16px] mb-5">
              Permitting &amp; Agency Coordination integrates seamlessly with:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-[16px] leading-relaxed mb-8">
              <li>Civil design and utility planning</li>
              <li>Environmental and utility inspections</li>
              <li>Stormwater system repairs</li>
              <li>Pond restoration and maintenance</li>
              <li>Infrastructure rehabilitation</li>
              <li>Compliance management</li>
            </ul>

            <p className="text-[16px] leading-relaxed">
              Whether you are planning, repairing, maintaining, or correcting a violation — permitting is handled as part of the process.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
