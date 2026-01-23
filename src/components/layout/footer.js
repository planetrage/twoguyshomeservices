import * as AiIcons from 'react-icons/ai';
import * as FaIcons from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import WhiteLogo from './white-logo';

function Footer() {
    const TwitterIcon = FaIcons.FaTwitter;
    const FacebookIcon = FaIcons.FaFacebook;
    const InstagramIcon = FaIcons.FaInstagram;
    const YouTubeIcon = FaIcons.FaYoutube;
    const LinkedInIcon = FaIcons.FaLinkedin;
    
    return (
        <footer className='footer-area bg-[#13144D] text-white'>
            <div className="footer-top">
                <div className="custom-container">
                <div className="inner-container mt-[25px] py-9">
                    <div className="md:grid md:grid-cols-12 flex flex-col gap-6">
                    {/* Logo */}
                    <div className="md:col-span-4 order-last md:order-none flex items-center justify-center md:justify-start">
                        <WhiteLogo />
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-8 flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 flex-wrap">
                        {[
                        ['News & Events', '/posts'],
                        ['About', '/about'],
                        ['Contact Us', '/contact'],
                        ['User Log-In', 'https://youtube.com/'],
                        ['Schedule a Demo', '/demo'],
                        ].map(([label, href], i) => (
                        <Link href={href} key={i} className="text-center font-bold hover:underline">
                            {label}
                        </Link>
                        ))}

                        {/* Social Icon */}
                        <Link
                            href="https://linkedin.com/"
                            className="p-2 rounded-full bg-white inline-flex items-center justify-center">

                            <FaIcons.FaLinkedin className="text-[#22C763]" />

                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
            <div className="custom-container">
                <div className="inner-container border-t border-[#dfdfdf] mt-[50px] md:mt-[1px] py-9">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-center md:text-left text-sm">
                            © 2025 SMARTTIX
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
                            <Link href="/terms" className="hover:underline text-center">
                                Terms of Use
                            </Link>
                        <span className="hidden sm:inline">|</span>
                            <Link href="/policies" className="hover:underline text-center">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
