import Link from 'next/link';

function GoldCTA({ href, children, variant = 'primary', className = '', onClick, ...props }) {
  const classMap = {
    primary: 'btn-gold-primary',
    secondary: 'btn-gold-secondary',
    ghost: 'btn-ghost',
    cta: 'btn-gold-cta',
  };

  const btnClass = `${classMap[variant] || classMap.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default GoldCTA;
