import Link from 'next/link';

function Breadcrumb(props) {
    const { activePage, pageTitle } = props;
    return (
        <div
            className='breadcrumb-area md:pt-155 pt-[55px]'
            style={{
                backgroundImage: 'linear-gradient(rgba(11,17,32,0.75), rgba(11,17,32,0.75)), url(/images/hero/hero-marble-gold-vein.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='container'>
                <ul className='flex text-[18px] leading-6 uppercase'>
                    <li className='relative after:pr-[15px] after:ml-[15px] after:content-["/"]' style={{ color: 'var(--marble-deep)' }}>
                        <Link href='/' style={{ color: 'var(--marble-deep)' }}>Home</Link>
                    </li>
                    <li style={{ color: 'var(--marble-white)' }}>
                        {activePage}
                    </li>
                </ul>
                <h1 className='lm:text-[60px] text-[36px] lm:leading-[60px] mt-[45px]' style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' }}>
                    {pageTitle}
                </h1>
            </div>
        </div>
    );
}

export default Breadcrumb;
