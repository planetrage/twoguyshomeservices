import Link from "next/link";

function Banner() {
    return (
        <div className='container pt-24 pb-12'>
            <div className='grid grid-cols-1'>
                <p className="text-[26px] text-black md:mb-[15px] mb-[5px] text-center">
                    Wow! We love your enthusiasm but we are just a little longer away from going live.  The live link is coming soon.  Thanks for your patience.  If you're interested in a demo please head to over and schedule some time with us: 
                    <Link href='/demo' className="pl-1">
                        
                            click here
                        
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Banner;
