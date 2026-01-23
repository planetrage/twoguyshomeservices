import { useState, useEffect, useRef } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

function Banner({ bannerItems }) {
  return (
    <div className="pt-[80px] pb-[80px] md:pt-32 md:pb-32 bg-white">
      <div className="custom-container">
        <div className="grid-cols-1">
          <h1 className="text-[32px] md:text-[56px] text-[#13144D] font-bold mb-[10px] md:mb-[15px] text-center leading-tight">
            Maximize Productivity with a<br />System Purpose-Built for Ticket Management
          </h1>
          <h2 className="text-[16px] md:text-[20px] font-poppins mb-[30px] md:mb-[15px] text-center leading-relaxed text-[#30373E]">
            SmartTIX is the most advanced, easy-to-use ticket management platform purpose-built to support the needs of a wide range of industries and organizations. Our user-friendly interface and automated features make it simple to handle required tasks, while providing opportunities to increase operational efficiency through versatile intercommunication tools and enhanced routing, reporting, and auditing capabilities.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
