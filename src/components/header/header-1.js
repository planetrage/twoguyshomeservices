import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';

function HeaderOne() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToContact = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fragment>
      {/* Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="custom-container w-full">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="site-brand">
              Two Guys Home Services
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#contact" onClick={scrollToContact} className="nav-link">
                Services
              </a>
              <a href="#contact" onClick={scrollToContact} className="nav-link">
                Contact
              </a>
              {/* REPLACE WITH REAL PHONE NUMBER */}
              <a href="tel:+15551234567" className="btn-primary ml-4">
                Call Now
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ background: mobileOpen ? 'var(--color-heading)' : 'var(--color-heading)' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
                style={{ background: 'var(--color-heading)' }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
                style={{ background: mobileOpen ? 'var(--color-heading)' : 'var(--color-heading)' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-center gap-8">
          <a
            href="#contact"
            onClick={scrollToContact}
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
          >
            Contact
          </a>
          {/* REPLACE WITH REAL PHONE NUMBER */}
          <a href="tel:+15551234567" className="btn-primary" onClick={() => setMobileOpen(false)}>
            Call Now
          </a>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: '72px' }} />
    </Fragment>
  );
}

export default HeaderOne;
