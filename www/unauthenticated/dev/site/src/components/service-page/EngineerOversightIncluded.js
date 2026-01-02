export default function EngineerOversightIncluded() {
  return (
    /* FULL-WIDTH SECTION — PURE WHITE (FLIPPED) */
    <section className="w-full py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* FLOATING CONTENT CARD — VERY SUBTLE LIGHT BLUE */}
        <div className="bg-[#F5FAFF] rounded-3xl px-12 sm:px-16 lg:px-24 py-20 text-[#13144D]">

          {/* TITLE */}
          <h2 className="text-[30px] md:text-[34px] font-semibold text-center mb-5">
            Engineer Oversight Included
          </h2>

          {/* DIVIDER */}
          <div className="w-14 h-[2px] bg-[#13144D] mx-auto mb-12" />

          {/* INTRO LINE */}
          <p className="text-[16px] leading-relaxed text-center mb-10">
            Blue Trust has in-house engineering oversight, which means:
          </p>

          {/* BULLET LIST */}
          <ul className="list-disc mx-auto max-w-3xl pl-6 space-y-4 text-[16px] leading-relaxed mb-12">
            <li>Technical responses are accurate</li>
            <li>Submittals meet engineering standards</li>
            <li>Agency questions are addressed correctly the first time</li>
            <li>
              Issues discovered during inspections or maintenance can be resolved immediately
            </li>
          </ul>

          {/* CLOSING EMPHASIS */}
          <p className="text-[16px] font-semibold text-center">
            This level of expertise is rarely available through maintenance-only providers.
          </p>

        </div>
      </div>
    </section>
  );
}
