import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-sky-100">
      {/* SAFE CONTENT FRAME */}
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16">
        <div className="py-20 lg:py-28">
          
          {/* HERO GRID — HEAVIER LEFT COLUMN */}
          <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-16 items-center">
            
            {/* LEFT COLUMN — STRONG LOGO ANCHOR */}
            <div className="flex justify-center lg:justify-start">
              <div className="h-64 w-64 rounded-full bg-white/80 flex items-center justify-center">
                <img
                  src="/images/logo-placeholder.png"
                  alt="Environmental Haus Logo"
                  className="h-44 w-44 object-contain"
                />
              </div>
            </div>

            {/* RIGHT COLUMN — TEXT (NOW FORCED FURTHER RIGHT) */}
            <div className="text-left">
              <div className="space-y-2">
                <div className="uppercase text-orange-500 font-semibold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl">
                  Florida’s Premier
                </div>
                <div className="uppercase text-orange-500 font-semibold tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl">
                  Environmental Haus
                </div>
              </div>

              <p className="mt-6 uppercase text-orange-500 text-sm sm:text-base tracking-wide">
                CIVIL DESIGN - PROPERTY MANAGEMENT - INFRASTRUCTURE MAINTENANCE
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
