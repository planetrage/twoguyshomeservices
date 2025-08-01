import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';

const posts = [
  {
    title: 'Meet the SmartTIX Team at CGA 2025',
    date: '01/02/2025',
    image: '1.png',
    link: '/post-one',
  },
  {
    title: 'Three Reasons Why You Need to Upgrade Your Ticket Management Software',
    date: '04/02/2025',
    image: '2.png',
    link: '/post-two',
  },
  {
    title: 'The Top 5 Features of an Advanced Locate Ticket Management System',
    date: '04/05/2025',
    image: '3.png',
    link: '/post-three',
  },
  {
    title: 'SmartTIX Launches its Innovative Ticket Management Platform',
    date: '04/07/2025',
    image: '4.png',
    link: '/post-four',
  },
];

function NewsBannerOne() {
  return (
    <div className="bg-white pt-[60px] md:pt-[100px]">
      <div className="custom-container">
        <h1 className="text-[28px] md:text-[56px] text-[#13144D] font-bold text-center leading-snug mb-[30px] md:mb-[60px]">
          What’s Happening at SmartTIX
        </h1>
        <h2 className="text-[18px] md:text-[26px] text-center text-black mb-[40px]">
          Explore SmartTIX announcements and scheduled events, as well as industry resources.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map(({ title, date, image, link }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-[500px]">
                <Image
                  src={`/images/posts/${image}`}
                  alt={title}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <div className="w-full max-w-[500px] mt-4 px-2 md:px-0">
                <ul className="flex items-center space-x-4 font-poppins text-sm text-[#22C763]">
                  <li><FaClock /></li>
                  <li>{date}</li>
                  <li className="border-l border-black pl-[15px] text-[#13144D]">News &amp; Events</li>
                </ul>
                <p className="mt-4 font-poppins text-[20px] md:text-[26px] text-left text-[#13144D]">
                  {title}
                </p>
                <div className="mt-2">
                  <Link href={link}>
                    <a className="text-left text-[#3754ED] hover:underline text-[16px] md:text-[18px] font-medium">
                      Read More &gt;
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsBannerOne;