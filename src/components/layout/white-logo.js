import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
    return (
        <Link href='/' className='inline-block align-middle leading-[1]'>

            <Image
                src='/images/logo/footer-logo.png'
                alt='Logo'
                width={140}
                height={140}
            />

        </Link>
    );
}

export default WhiteLogo;
