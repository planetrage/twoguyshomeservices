import Link from 'next/link';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';

function BannerTwo() {
  return (
    <div className="custom-container pt-24 pb-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          {/* Date + Category */}
          <div className="flex items-center gap-2 text-black text-sm">
            <FaClock />
            <span>01/02/2025</span>
            <span className="border-l border-black pl-2">News &amp; Events</span>
          </div>

          {/* Intro Paragraphs */}
          <p className="text-[18px] text-black">
            We are thrilled to announce that SmartTIX will be exhibiting at the
            <Link
              href="https://www.cgaconference.com"
              className="px-2 text-[#3754ED] font-medium">
              
                2025 CGA Conference & Expo
              
            </Link>
            taking place from April 7 to 10 at the Orlando World Center Marriott in Orlando, Florida.
          </p>
          <p className="text-[18px] text-black">
            At this premier event for damage prevention professionals, SmartTIX will unveil its groundbreaking ticket management platform, purpose-built to support the needs of the utility damage prevention industry. Our innovative solution streamlines the ticketing process and leverages leading-edge technology to advance utility locating ticket management for every stakeholder organization — enhancing efficiency and safety at every turn.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/images/posts/1.png"
            alt="Service Image"
            width={500}
            height={375}
            className="rounded-lg w-full h-auto"
            quality={70}
            priority
          />
        </div>
      </div>
      {/* Additional Paragraphs */}
      <div className="mt-10 space-y-6 text-[18px] text-black">
        <p>
          The SmartTIX team will be on-site to connect with attendees, provide tours of our platform and schedule personal demos for prospective users. We invite you to visit our booth to discover how our technology can transform your operations and contribute to safer utility practices.
        </p>
        <p>
          The
          <Link
            href="https://www.cgaconference.com"
            className="px-2 text-[#3754ED] font-medium">
            
              CGA Conference & Expo
            
          </Link>
          is renowned for bringing together leading experts, innovators, and professionals to discuss the latest trends, research, and advancements in damage prevention. With over 100,000 square feet of exhibit space, the event offers rich educational content, workshops, and panel discussions aimed at inspiring new ideas and providing fresh perspectives.
        </p>
        <p>
          Don't miss this opportunity to engage with industry leaders and explore cutting-edge solutions. We look forward to meeting you in Orlando and demonstrating how SmartTIX can support your commitment to damage prevention excellence.
        </p>
        <p>
          For more information about the conference, including registration details and the full schedule, please visit the official
          <Link
            href="https://www.cgaconference.com"
            className="px-2 text-[#3754ED] font-medium">
            
              CGA Conference & Expo website
            
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BannerTwo;
