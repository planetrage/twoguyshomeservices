import Link from "next/link";

function Banner() {
    return (
        <div className='custom-container' style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-lg)' }}>
            <div className='grid grid-cols-1'>
                <p className="text-[26px] md:mb-[15px] mb-[5px] text-center" style={{ color: 'var(--marble-warm)' }}>
                    We are getting ready to launch! The live platform is coming soon. If you are interested in early access, head over and get in touch:
                    <Link href='/demo' className="pl-1" style={{ color: 'var(--gold-primary)' }}>
                        click here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Banner;
