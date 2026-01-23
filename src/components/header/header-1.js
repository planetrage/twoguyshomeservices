import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import WhiteLogo from './white-logo';

function HeaderOne() {
    const [offcanvas, setOffcanvas] = useState(false);
    const toggleOffcanvas = () => setOffcanvas(!offcanvas);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header-section');
            if (window.scrollY >= 250) {
                header.classList.add('is-sticky');
            } else {
                header.classList.remove('is-sticky');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const router = useRouter();

    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full z-10 bg-[#13144D]">
                <div className="header-section sticky-style-1">
                    <div className="custom-container">
                        <div className="grid grid-cols-12 items-center leading-[120px]">
                            <div className="lg:col-span-2 col-span-6">
                                <WhiteLogo />
                            </div>
                            <div className="lg:col-span-10 col-span-6 hidden lg:flex justify-end items-center space-x-6 text-white font-bold">
                                <Link href="/about" className="hover:underline">
                                    About
                                </Link>
                                <Link href="/posts" className="hover:underline">
                                    Business Sectors
                                </Link>
                                <Link href="/posts" className="hover:underline">
                                    Services
                                </Link>
                                <Link href="/posts" className="hover:underline">
                                    Projects
                                </Link>
                                <Link href="/contact" className="hover:underline">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default HeaderOne;
