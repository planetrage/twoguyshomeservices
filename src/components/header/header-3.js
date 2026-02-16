import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import WhiteLogo from './white-logo';

function HeaderThree() {
  const [offcanvas, setOffcanvas] = useState(false);
  const toggleOffcanvas = () => setOffcanvas(!offcanvas);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-section');
      if (window.scrollY >= 250) {
        header?.classList.add('is-sticky');
      } else {
        header?.classList.remove('is-sticky');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter();

  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <div className="header-section sticky-style-1">
          <div className="custom-container">
            <div className="grid grid-cols-12 items-center py-4">
              {/* Logo */}
              <div className="col-span-6 lg:col-span-2">
                <WhiteLogo />
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex col-span-6 lg:col-span-10 justify-end items-center space-x-6 text-[#F2EDE8] font-bold">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
                <Link href="/posts" className="hover:underline">
                  Business Sectors
                </Link>
                <Link href="/posts" className="hover:underline">
                  Services
                </Link>
                <Link href="/posts" className="hover:underline">
                  Projects
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
                {/*<Link href="/login">
                  <a className="text-[#D4B85A] hover:underline">User Log-in</a>
                </Link>
                <Link href="/demo">
                  <a className="bg-[#D4B85A] text-[#0B1120] px-4 py-2 rounded-md hover:bg-[#C9A84C] transition">
                    Schedule a demo &gt;
                  </a>
                </Link>*/}
              </div>

              {/* Mobile Hamburger Button */}
              {/* Mobile Hamburger Button */}
              <div className="lg:hidden col-span-6 flex justify-end z-50">
                <button
                    onClick={toggleOffcanvas}
                    aria-label="Toggle menu"
                    className="p-2 bg-[#D4B85A] rounded text-[#0B1120] hover:bg-[#C9A84C] transition"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Offcanvas Mobile Menu */}
        <div
          className={`lg:hidden bg-white text-white font-bold fixed top-[80px] left-0 w-full z-40 transition-all duration-300 ease-in-out ${
            offcanvas ? 'block' : 'hidden'
          }`}
        >
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/posts" onClick={toggleOffcanvas} className="hover:underline">
              Slots
            </Link>
            <Link href="/about" onClick={toggleOffcanvas} className="hover:underline">
              About
            </Link>
            <Link href="/contact" onClick={toggleOffcanvas} className="hover:underline">
              Contact Us
            </Link>
            <Link
              href="/login"
              onClick={toggleOffcanvas}
              className="text-[#D4B85A] hover:underline">
              User Log-in
            </Link>
            <Link
              href="/demo"
              onClick={toggleOffcanvas}
              className="bg-[#D4B85A] text-[#0B1120] px-4 py-2 rounded-md hover:bg-[#C9A84C] transition text-center">
              
                Schedule a demo &gt;
              
            </Link>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default HeaderThree;
