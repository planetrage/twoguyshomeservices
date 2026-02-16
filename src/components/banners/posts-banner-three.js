import { useState, useEffect, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
    return (
        <div className='container pt-24 pb-12'>
            <div className='grid grid-cols-1'>
                <div className='grid grid-cols-1'>
                    <div className='grid grid-cols-2'>
                        <div className='grid grid-cols-1'>
                            <div className='grid grid-cols-2'>
                                <p className="=text-[#F2EDE8] p-2 text-center"><FaClock /></p>
                                <p className="=text-[#F2EDE8] p-2 text-center">Built for Us, by Us</p>
                                <div className='grid grid-cols-1'>
                                    <p className='w-full'>text</p>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
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
                        {/*<p className="text-[26px] text-[#F2EDE8] md:mb-[15px] mb-[5px] text-center">
                            an image goes here
                        </p>*/}
                    </div>
                    <div className='grid grid-cols-1'>
                        <p className="text-[26px] text-[#F2EDE8] md:mb-[15px] mb-[5px] text-center">
                            Plans to purpose-build the system to meet the modern, real-time needs of on-site casino floor analysts, as well as the requirements of managers and business owners to optimize and maximize operational efficiency, developed into an innovative solution for their industry.  Goonzerflow leverages leading-edge tech to advance casino slot performance management, becoming the most cost-effective, time-saving slot analytics solution on the market.
                        </p>
                        <p className='border-b mt-2 pb-[2px] bg-[#C9A84C]'></p>
                    </div>
                    <div className='grid grid-cols-1 bg-[#C9A84C]'>
                        <p>asdf</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerTwo;
