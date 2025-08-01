import { useState, useEffect, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#13144D] to-[#22C763]">
      <div className="custom-container pt-[80px] pb-[80px] md:pt-24 md:pb-24">
        <div className="grid grid-cols-1">
          <h1 className="text-[32px] md:text-[56px] text-[#6AEF5B] mb-[10px] md:mb-[30px] text-center font-poppins leading-tight">
            SmartTIX Empowers Every Stakeholder
          </h1>
          <p className="text-[16px] md:text-[24px] font-poppins text-white mb-[10px] md:mb-[30px] text-center leading-relaxed">
            From field technicians and supervisors to leaders managing the business, SmartTix empowers every stakeholder to work smarter using the most effective ticket management system on the market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
