import { useState } from 'react';
import Link from 'next/link';

function MobileStickyCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div
        className="mobile-sticky-cta"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: 'linear-gradient(135deg, var(--gold-dark) 0%, var(--gold-primary) 45%, var(--gold-light) 100%)',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <Link
          href="/reviews"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--olympus-navy)',
            textDecoration: 'none',
            flex: 1,
            textAlign: 'center',
          }}
        >
          View Top Casino Bonuses &rarr;
        </Link>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          style={{
            background: 'rgba(11, 17, 32, 0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--olympus-navy)',
            fontSize: '16px',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          &#10005;
        </button>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-sticky-cta {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default MobileStickyCTA;
