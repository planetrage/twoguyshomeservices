import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function Testimonial({ testimonialItems }) {
  return (
    <div className="testimonial-area bg-azure py-[60px] md:py-[100px]">
      <div className="custom-container">
        <div className="w-full text-center mb-[40px] md:mb-[55px]">
          <h2 className="text-[28px] md:text-[56px] font-bold text-[#13144D] leading-snug">
            Locate Us on LinkedIn
          </h2>
        </div>

        {/* 👇 Mobile: Show only the first tile */}
        <div className="grid grid-cols-1 justify-items-center sm:hidden">
          {testimonialItems?.[0] && (
            <div className="testimonial-block w-full max-w-[240px] aspect-square bg-white rounded-lg shadow-md p-4">
              <div className="inner-box relative">
                <div className="flex justify-center items-center h-full">
                  <Link href={testimonialItems[0].URLSource}>
                    <a className="block">
                      <div className="service-image w-full flex justify-center items-center">
                        <Image
                          src="/images/testimonial/linkedin.png"
                          alt="LinkedIn Icon"
                          quality={70}
                          width={75}
                          height={75}
                          objectFit="contain"
                          className="w-[75px] h-[75px]"
                          priority
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-center mt-[20px]">
                  <Link href={testimonialItems[0].URLSource}>
                    <a className="text-sm text-[#13144D] hover:underline font-medium">
                      LinkedIn
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 👇 Desktop/Tablet: Show full grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonialItems?.slice(0, 3).map((testimonialItem, i) => (
            <div key={i} className="testimonial-block w-full max-w-[240px] aspect-square bg-white rounded-lg shadow-md p-4">
              <div className="inner-box relative">
                <div className="flex justify-center items-center h-full">
                  <Link href={testimonialItem?.URLSource}>
                    <a className="block">
                      <div className="service-image w-full flex justify-center items-center">
                        <Image
                          src={testimonialItem.image}
                          alt="LinkedIn Icon"
                          quality={70}
                          width={150}
                          height={150}
                          objectFit="contain"
                          className="w-[150px] h-[150px]"
                          priority
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-center mt-[20px]">
                  <Link href={testimonialItem?.URLSource}>
                    <a className="text-sm text-[#13144D] hover:underline font-medium">
                      LinkedIn
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

export default Testimonial;
