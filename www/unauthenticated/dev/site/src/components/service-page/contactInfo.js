import Image from "next/image";
import Link from "next/link";

export default function ContactInfo() {
  return (
    /* FOOTER SECTION — brighter-than-page white */
    <footer className="w-full bg-[#FDFEFF] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* BRAND HEADER — centered group, logo LEFT */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
            {/* LOGO */}
            <div className="relative w-14 h-14">
              <Image
                src="/images/placeholder/blue-trust-circle-logo.png"
                alt="Blue Trust Water Management"
                fill
                className="object-contain"
              />
            </div>

            {/* BRAND TEXT */}
            <div className="leading-none text-center">
              <div className="text-[34px] font-semibold tracking-wide text-[#6EC1E4]">
                BLUE TRUST
              </div>
              <div className="text-[22px] font-medium tracking-wide text-[#6EC1E4]">
                WATER MANAGEMENT
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-[#13144D]">

          {/* SERVICES */}
          <div>
            <h4 className="text-[14px] font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link href="/civil-engineering">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/property-management">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/infrastructure-maintenance">
                  Infrastructure Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h4 className="text-[14px] font-semibold mb-4">
              Industries
            </h4>
            <ul className="space-y-2 text-[14px]">
              <li>Property Owners, HOA’s, CDD’s</li>
              <li>Land Developers</li>
              <li>Municipalities</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[14px] font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-[14px]">
              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#13144D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6.18 6.18l1.72-1.72a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(000) 000-0000</span>
              </li>

              <li className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#13144D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@bluetrustwm.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#13144D]/20 mb-6" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[13px] text-[#13144D]/70 gap-4">
          <div>
            © 2024. Blue Trust Water Management. All Rights Reserved.
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#13144D">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>

            <a href="#" aria-label="X" className="opacity-80 hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#13144D">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.209 0-.42-.016-.63.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
