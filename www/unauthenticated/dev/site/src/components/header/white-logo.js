import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
  return (
    <Link href="/">
      <a className="inline-block leading-[1] align-middle w-auto max-w-[140px]">
        <Image
          src="/images/logo/logo.png"
          alt="SmartTIX Logo"
          width={140}
          height={140}
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </a>
    </Link>
  );
}

export default WhiteLogo;
