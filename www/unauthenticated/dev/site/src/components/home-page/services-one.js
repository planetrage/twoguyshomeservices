import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function ServicesOne({ features }) {
  return (
    <div className="service-area relative pt-[40px] md:pt-[115px] before:absolute before:h-[336px] before:w-[336px] before:top-[170px]">
      <div className="custom-container">
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse items-stretch">
          {/* Text Left, Image Right */}
          <div className="lg:col-span-12 flex flex-col lg:flex-row items-stretch gap-6">
            {/* Text */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center pr-0 lg:pr-4 px-2">
              <div className="service-content w-full max-w-[490px] mx-auto">
                <h2 className="text-[32px] md:text-[56px] font-bold text-[#13144D] mb-[20px] md:mb-[30px] leading-snug text-center lg:text-left">
                  Schedule a Demo of SmartTIX
                </h2>
                <p className="text-[16px] md:text-[24px] font-poppins mb-[20px] md:mb-[30px] leading-relaxed text-center lg:text-left text-[#30373E]">
                  Connect with our ticket management experts for a demo of the SmartTIX platform today.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/demo">
                    <a className="boxed-btn text-[16px] md:text-[18px] leading-[33px] py-2 px-4 font-poppins font-bold">
                      Schedule a demo &gt;
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full flex justify-center items-center px-2">
              <div className="w-full max-w-[500px]">
                <Image
                  src="/images/service/Multiple Device Screenshots_updated[13].png"
                  alt="Service Image"
                  quality={70}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOne;
