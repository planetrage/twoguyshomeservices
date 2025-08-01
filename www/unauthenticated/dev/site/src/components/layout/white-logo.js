import Link from 'next/link';
import Image from 'next/image';

function WhiteLogo() {
    return (
        <Link href='/'>
            <a className='inline-block align-middle leading-[1]'>
                <Image
                    src='/images/logo/footer-logo.png'
                    alt='Logo'
                    width={140}
                    height={140}
                />
            </a>
        </Link>
    );
}

export default WhiteLogo;
