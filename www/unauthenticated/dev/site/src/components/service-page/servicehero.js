import Image from "next/image";
import Link from "next/link";

export default function ServiceHero({
  title,
  imageSrc,

  paragraph1Bold,
  paragraph1Rest,

  paragraph2Bold,
  paragraph2Rest,

  paragraph3,
  paragraph2, // fallback

  primaryCta,
  secondaryCta,

  audiences,
}) {
  const body = paragraph3 || paragraph2;

  return (
    <section className="relative w-full bg-white pt-[140px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT COLUMN */}
          <div className="max-w-xl">
            <h1 className="text-[36px] lg:text-[40px] font-semibold text-[#13144D] mb-6">
              {title}
            </h1>

            {(paragraph1Bold || paragraph1Rest) && (
              <p className="text-[16px] leading-relaxed text-[#13144D] mb-4">
                {paragraph1Bold && <strong>{paragraph1Bold}</strong>}
                {paragraph1Rest && <span>{paragraph1Rest}</span>}
              </p>
            )}

            {(paragraph2Bold || paragraph2Rest) && (
              <p className="text-[16px] leading-relaxed text-[#13144D] mb-4">
                {paragraph2Bold && <strong>{paragraph2Bold}</strong>}
                {paragraph2Rest && <span>{paragraph2Rest}</span>}
              </p>
            )}

            {body && (
              <p className="text-[16px] leading-relaxed text-[#13144D] mb-10">
                {body}
              </p>
            )}

            {/* CTA + AUDIENCE GROUP */}
            <div className="flex flex-col gap-6">

              {/* CTA ROW */}
              <div className="flex gap-6 flex-wrap">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="w-[260px] h-[64px] rounded-md bg-[#4FB7E3] border-2 border-[#13144D] text-white font-semibold text-[14px] flex flex-col items-center justify-center hover:opacity-90 transition text-center"
                  >
                    {(primaryCta.labelLines || []).map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="w-[260px] h-[64px] rounded-md bg-[#4FB7E3] border-2 border-[#13144D] text-white font-medium text-[14px] flex flex-col items-center justify-center hover:opacity-90 transition text-center"
                  >
                    {(secondaryCta.labelLines || []).map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </Link>
                )}
              </div>

              {/* AUDIENCE ROW — BELONGS TO HERO */}
              {audiences?.length && (
                <div className="flex gap-8">
                  {audiences.map((audience) => (
                    <div
                      key={audience}
                      className="flex flex-col items-center text-[#13144D]"
                    >
                      {/* ICON PLACEHOLDER */}
                      <div className="w-10 h-10 rounded-full border-2 border-[#13144D] flex items-center justify-center mb-2">
                        {/* Replace later with real icon */}
                        <span className="text-[12px] font-bold">ICON</span>
                      </div>

                      {/* LABEL + CHECK */}
                      <div className="flex items-center gap-1 text-[13px] font-medium">
                        <span>{audience}</span>
                        <span>✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full h-[360px] lg:h-[420px] border-2 border-[#13144D] rounded-tr-2xl rounded-br-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[10px] bg-[#13144D]" />
    </section>
  );
}
