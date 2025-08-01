import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="container pt-24 pb-12">
      {/* Metadata section */}
      <div className="flex items-center space-x-4 text-black text-[16px] mb-4">
        <FaClock />
        <span>04/07/2025</span>
        <span className="border-l border-black pl-4">News &amp; Events</span>
      </div>

      {/* Intro paragraph */}
      <p className="text-[20px] text-black mb-6">
        GeoPoint, a leader in geomatics, geospatial and subsurface utility locating services, is proud to announce the creation of a new company, SmartTIX — an innovative, AI-powered ticket management platform designed to maximize productivity, streamline workflows, and improve compliance across the utility damage prevention industry.
      </p>

      {/* Optional image block */}
      {/* 
      <div className="rounded-lg mb-8">
        <Image
          src="/images/posts/3.png"
          alt="SmartTIX Launch Image"
          width={375}
          height={375}
          className="rounded-lg"
          priority
        />
      </div>
      */}

      {/* Body content */}
      <div className="space-y-6 text-black text-[20px] font-poppins">
        <p>
          Developed in collaboration with utility locators, utility owners, and industry experts, SmartTIX leverages leading-edge technology to enhance ticket processing, reduce response times, and centralize management. From field technicians and supervisors to business leaders, SmartTIX empowers users with a cost-effective and time-saving solution.
        </p>
        <p>
          <strong>
            “The initial launch of SmartTIX is focused on addressing the unique needs of key stakeholders in the industry,”
          </strong>{' '}
          said David Williams, President of GeoPoint and CEO of SmartTIX. “From streamlining ticket processing and improving oversight to automating distribution and enhancing compliance, SmartTIX is built to drive efficiency and innovation for utility locating companies, public and private utilities, municipalities and one-call centers.”
        </p>
        <p>
          Built with interactive AI features, SmartTIX automates workflows, streamlines decision-making, and adapts in real time to meet critical operational needs. The platform enhances efficiency by optimizing efforts and automating routine tasks.
        </p>

        <h2 className="text-[24px] font-bold mt-8">About SmartTIX</h2>
        <p>
          Originally conceived to enhance in-house ticket management at GeoPoint, SmartTIX evolved into a revolutionary, purpose-built solution to meet the modern, real-time needs of field technicians, managers, and business owners.
        </p>
        <p>
          <strong>
            “As we started to design a ticket management system for GeoPoint, we quickly realized the broader utility industry was in need of an AI-based solution,”
          </strong>{' '}
          said Elga Azofeifa, President of SmartTIX.
        </p>

        <h2 className="text-[24px] font-bold mt-8">About GeoPoint</h2>
        <p>
          GeoPoint is the largest privately owned land surveying company in Florida, offering industry-leading geomatics, geospatial, and subsurface utility locating services. Licensed in Florida, Texas, South Carolina, Alabama, Georgia, and Kentucky, GeoPoint has ten offices across the Southeast.
        </p>

        <p>
          Learn more at{' '}
          <Link href="/demo">
            <a className="text-[#3754ED] underline">SmartTIX.com</a>
          </Link>
        </p>

        <p>
          Read the full press release:{' '}
          <Link href="https://www.businesswire.com/news/home/20250404071112/en/GeoPoint-Launches-SmartTIX-The-Most-Advanced-AI-Powered-Ticket-Management-Platform-for-Utility-Damage-Prevention">
            <a className="text-[#3754ED] underline">
              Business Wire - SmartTIX Press Release
            </a>
          </Link>
        </p>

        <div className="mt-6">
          <h3 className="font-bold">Media Contact:</h3>
          <ul className="list-none text-[18px] mt-2">
            <li>Xiara Perez</li>
            <li>SmartTIX</li>
            <li>Mobile: (813) 474-8478</li>
            <li>Office: (813) 248-8888</li>
            <li>marketing@smarttix.com</li>
            <li>smarttix.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
