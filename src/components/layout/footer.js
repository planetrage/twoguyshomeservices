import Link from 'next/link';
import LightningDivider from '../ui/LightningDivider';

const SLOT_LINKS = [
  { label: 'Top Rated Slots', href: '/posts' },
  { label: 'High RTP Slots', href: '/posts' },
  { label: 'New Releases', href: '/posts' },
  { label: 'Slot Guides', href: '/blog' },
];

const CASINO_LINKS = [
  { label: 'Casino Reviews', href: '/reviews' },
  { label: 'Best Bonuses', href: '/best-sweepstakes-casino-bonuses' },
  { label: 'Crypto Casinos', href: '/crypto-casinos' },
  { label: 'Comparison Tool', href: '/projects' },
];

const RESOURCE_LINKS = [
  { label: 'RTP Calculator', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Join Discord', href: '#' },
  { label: 'Privacy Policy', href: '/policies' },
];

function Footer() {
  return (
    <footer className="olympus-footer">
      {/* Lightning divider top border */}
      <LightningDivider />

      {/* Main footer content */}
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Column 1: Logo + Tagline */}
          <div>
            <Link href="/" className="olympus-brand block mb-4" style={{ color: 'var(--marble-white)' }}>
              GOONZERFLOW
            </Link>
            <p style={{ color: 'var(--marble-deep)', fontSize: 'var(--text-small)', lineHeight: '1.6' }}>
              Structured intelligence for gaming. RTP-verified reviews, data-driven guides, and analytical tools for the informed player.
            </p>
          </div>

          {/* Column 2: Slots */}
          <div>
            <h4 className="olympus-footer-heading">Slots</h4>
            <ul className="space-y-2">
              {SLOT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} style={{ fontSize: 'var(--text-small)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Casinos */}
          <div>
            <h4 className="olympus-footer-heading">Casinos</h4>
            <ul className="space-y-2">
              {CASINO_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} style={{ fontSize: 'var(--text-small)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tools & Resources */}
          <div>
            <h4 className="olympus-footer-heading">Resources</h4>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} style={{ fontSize: 'var(--text-small)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(201, 168, 76, 0.08)' }}>
        <div className="custom-container">
          <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
            <p style={{ color: 'var(--marble-deep)', fontSize: 'var(--text-tiny)' }}>
              &copy; {new Date().getFullYear()} Goonzerflow. All rights reserved.
            </p>
            <div className="flex items-center gap-4" style={{ fontSize: 'var(--text-tiny)' }}>
              <Link href="/affiliate-disclosure" style={{ color: 'var(--marble-deep)' }}>
                Affiliate Disclosure
              </Link>
              <span style={{ color: 'var(--gold-muted)' }}>|</span>
              <Link href="/policies" style={{ color: 'var(--marble-deep)' }}>
                Privacy Policy
              </Link>
              <span style={{ color: 'var(--gold-muted)' }}>|</span>
              <Link href="/terms" style={{ color: 'var(--marble-deep)' }}>
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
