import { useState, useEffect, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

function NewsBanner() {
    return (
        <div className='bg-gradient-to-r from-[#13144D] to-[#22C763] mt-[100px]'>
            <div className='container pt-24 pb-24'>
                <div className='grid grid-cols-1'>
                    <p className="text-[52px] text-white md:mb-[30px] mb-[10px] text-left">News & Events</p>
                </div>
            </div>
        </div>
    );
}

export default NewsBanner;