import { useState, useEffect, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

function Banner() {
    return (
      <div className="custom-container pt-[60px] pb-[60px] md:pt-24 md:pb-12">
        <div>
          <h1 className="text-[28px] md:text-[56px] text-[#13144D] font-bold text-center leading-snug mb-[30px] md:mb-[60px]">
            Built for Us, by Us
          </h1>
  
          <h2 className="text-[16px] md:text-[26px] text-black text-center mb-[20px] md:mb-[30px] leading-relaxed font-poppins">
            Built from the ground up through a collaboration of utility locators, utility owners, and industry experts, SmartTIX started as an idea to improve the in-house ticket management of an established commercial engineering and land surveying organization in the southeast.
          </h2>
  
          <h2 className="text-[16px] md:text-[26px] text-black text-center mb-[30px] leading-relaxed font-poppins">
            Plans to purpose-build the system to meet the modern, real-time needs of on-site field technicians, as well as the requirements of managers and business owners to optimize and maximize operational efficiency, developed into an innovative solution for their industry. SmartTIX leverages leading-edge tech to advance utility locating ticket management, becoming the most cost-effective, time-saving ticket management solution on the market.
          </h2>
  
          <div className="mt-[60px] border-b-2 border-[#22C763] w-full rounded-lg" />
        </div>
      </div>
    );
  }
  
export default Banner;  
