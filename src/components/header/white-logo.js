import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
  return (
    <Link
      href="/"
      className="inline-block leading-[1] align-middle w-auto max-w-[140px]">

      <Image
        src="/images/logo/logo.png"
        alt="Blue Trust Water Management"
        width={140}
        height={140}
        priority
        style={{ maxWidth: '100%', height: 'auto' }}
      />

    </Link>
  );
}

export default WhiteLogo;
