import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';

const posts = [
  {
    title: 'Best High RTP Slots for 2025',
    date: '01/02/2025',
    image: '/images/slots/slot-ace-spade-gold.png',
    link: '/post-one',
  },
  {
    title: 'How to Evaluate Casino Bonus Terms',
    date: '04/02/2025',
    image: '/images/slots/slot-crystal-gold.png',
    link: '/post-two',
  },
  {
    title: 'Understanding Slot Volatility: A Complete Guide',
    date: '04/05/2025',
    image: '/images/slots/slot-dice-gold.png',
    link: '/post-three',
  },
  {
    title: 'Top 10 Online Casinos Ranked by Payout Speed',
    date: '04/07/2025',
    image: '/images/slots/slot-cherries-gold.png',
    link: '/post-four',
  },
];

function NewsBannerOne() {
  return (
    <div className="olympus-sky" style={{ marginTop: 0 }}>
      <div className="custom-container pt-[60px] pb-[60px]">
        <h1
          className="text-[28px] md:text-[56px] font-bold text-center leading-snug mb-[30px] md:mb-[60px]"
          style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)', letterSpacing: 'var(--tracking-display)' }}
        >
          Latest Slot &amp; Casino Reviews
        </h1>
        <h2
          className="text-[18px] md:text-[26px] text-center mb-[40px]"
          style={{ color: 'var(--marble-warm)' }}
        >
          Expert reviews, RTP analysis, and gaming guides.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map(({ title, date, image, link }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-[500px]">
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              <div className="w-full max-w-[500px] mt-4 px-2 md:px-0">
                <ul className="flex items-center space-x-4 text-sm" style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)' }}>
                  <li><FaClock /></li>
                  <li>{date}</li>
                  <li className="border-l pl-[15px]" style={{ borderColor: 'var(--marble-warm)', color: 'var(--marble-white)' }}>Slot Review</li>
                </ul>
                <p className="mt-4 text-[20px] md:text-[26px] text-left" style={{ color: 'var(--marble-white)', fontFamily: 'var(--font-display)' }}>
                  {title}
                </p>
                <div className="mt-2">
                  <Link
                    href={link}
                    className="text-left hover:underline text-[16px] md:text-[18px] font-medium"
                    style={{ color: 'var(--gold-primary)' }}>

                      Read More &gt;

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
