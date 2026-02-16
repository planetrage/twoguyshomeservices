import Link from 'next/link';

function PageBanner() {
    return (
        <div className='page-banner bg-page-banner-1 flex items-end justify-start lg:h-[950px] h-[550px] bg-fixed bg-center bg-cover relative before:absolute before:bg-black before:opacity-40 before:w-full before:h-full'>
            <div className='container'>
                <div className='banner-content pb-[80px] relative'>
                    <span className='text-[18px] leading-[29px] text-white uppercase max-w-[225px] block'>
                        Structured Intelligence
                    </span>
                    <h2 className='sm:text-[100px] text-[30px] sm:leading-[110px] text-white max-w-[320px]'>
                        About Us
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
