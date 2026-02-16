import Link from 'next/link';

function DarkLogo() {
  return (
    <Link
      href="/"
      className="inline-block leading-[1] align-middle"
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: 'var(--tracking-caps)',
        color: 'var(--marble-white)',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }}
    >
      GOONZERFLOW
    </Link>
  );
}

export default DarkLogo;
