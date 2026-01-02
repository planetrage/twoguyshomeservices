import Link from "next/link";

export default function HeaderThree() {
  return (
    /* HEADER — matches Civil Utility Overview section background */
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F3F7FB] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-[96px]">
          
          {/* BRAND (TEXT LOGO PLACEHOLDER) */}
          <div className="flex flex-col leading-tight">
            <span className="text-[20px] font-bold tracking-wide text-[#13144D] uppercase">
              Blue Trust
            </span>
            <span className="text-[12px] tracking-[2px] uppercase text-black/60">
              Water Management
            </span>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Blue Trust Report", "/blue-trust-report"],
              ["Counties We Serve", "/counties"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
              ["FAQs", "/faqs"],
              ["Blog", "/blog"],
              ["Florida Land Ledger", "/florida-land-ledger"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] font-medium tracking-wide text-[#13144D] hover:text-black transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
