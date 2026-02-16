import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import GoldCTA from '../ui/GoldCTA';

const NAV_LINKS = [
  { label: 'Slots', href: '/posts' },
  { label: 'Casinos', href: '/reviews' },
  { label: 'Guides', href: '/blog' },
  { label: 'Tools', href: '/projects' },
  { label: 'About', href: '/about' },
];

function HeaderOne() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <Fragment>
      {/* Header */}
      <header className={`olympus-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="custom-container w-full">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="olympus-brand">
              GOONZERFLOW
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`olympus-nav-link ${router.pathname.startsWith(href) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              ))}
              <GoldCTA href="/posts" variant="secondary" className="ml-4">
                Explore Top Slots
              </GoldCTA>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block w-6 h-0.5 bg-[var(--marble-white)] transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--marble-white)] transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[var(--marble-white)] transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`olympus-mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={router.pathname.startsWith(href) ? 'gold-text' : ''}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <GoldCTA href="/posts" variant="primary" onClick={() => setMobileOpen(false)}>
            Explore Top Slots
          </GoldCTA>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div style={{ height: '72px' }} />
    </Fragment>
  );
}

export default HeaderOne;
