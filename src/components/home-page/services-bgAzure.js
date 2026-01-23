import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

function Services({ services }) {
    return (
        <div className='service-area bg-azure md:pt-160 pt-[60px] relative before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px] bg-azure'>
            <div className='container max-w-full lg:px-[70px]'>
                {/* Main Grid */}
                <div className='lg:grid lg:grid-cols-12 flex flex-col-reverse'>
                    
                    {/* Content + Image Row */}
                    <div className='lg:col-span-12 flex flex-col lg:flex-row items-stretch'>
                        
                        {/* Left Column (Title & Subtitle) */}
                        <div className='lg:w-1/2 flex items-center justify-center'>
                            <div className='service-image w-4/5 h-4/5 flex justify-center items-center'>
                                <Image
                                    src='/images/service/1.png'
                                    alt='Service Image'
                                    quality={70}
                                    width={500} // Matches left column width
                                    height={500} // Ensures proportional height
                                    objectFit='cover'
                                    className='w-full h-auto max-h-full'
                                    priority
                                />
                            </div>
                        </div>
    
                        {/* Right Column (Image) */}
                        <div className='lg:w-1/2 flex flex-col justify-center pr-10'>
                            <div className='service-content xl:w-[490px] w-full'>
                                <h2 className='title lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
                                    Most Advanced Ticket Management Platform for Utility Damage Prevention
                                </h2>
                                <span className='sub-title text-[18px] leading-[32px] mb-[25px] block font-poppins'>
                                    Built from the ground up through a collaboration of utility locators, utility owners, and industry experts, SmartTix leverages leading-edge tech to advance utility locating ticket management for every stakeholder organization.
                                </span>
                            </div>
                        </div>
                    </div>
    
                    {/* Full-Width Services Section (Below Image & Title) */}
                    <div className='lg:col-span-12 pt-10'>
                        <div className='grid grid-cols-2 gap-[25px] w-full'>
                            {services?.map((service) => {
                                const Icon = MdIcons[service?.icon];
                                return (
                                    <div className='service-box w-full' key={service?.title}>
                                        <div className='service-box-inner'>
                                            <div className='service-list flex items-start'>
                                                <div className='icon'>
                                                    <Icon />
                                                </div>
                                                <div className='content'>
                                                    <h3 className='title'>
                                                        {/*<Link href='/projects'>
                                                            <a className='hover:underline'>*/}
                                                                {service?.title}
                                                            {/*</a>
                                                        </Link>*/}
                                                    </h3>
                                                    <p className='desc'>
                                                        {service?.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    );            
}

export default Services;
