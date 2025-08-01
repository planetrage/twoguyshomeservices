import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function ServicesOne({ features }) {
  return (
    <div className="service-area bg-azure relative pt-[60px] md:pt-[100px] before:absolute before:h-[336px] before:w-[336px] before:top-[170px]">
      <div className="custom-container">
        <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse items-stretch">
          <div className="lg:col-span-12 flex flex-col lg:flex-row items-stretch gap-6">
            
            {/* Left Column (Text) */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center pr-0 lg:pr-10 px-2">
              <div className="service-content w-full max-w-[490px] mx-auto">
                <h2 className="text-[28px] md:text-[42px] text-[#13144D] font-bold mb-[30px] md:mb-[60px] leading-snug text-center lg:text-left">
                  Schedule a Demo of SmartTIX
                </h2>
                <p className="text-[16px] md:text-[22px] font-poppins mb-[30px] md:mb-[60px] leading-relaxed text-[#30373E] text-center lg:text-left">
                  Connect with our ticket management experts for a demo of the SmartTIX platform today.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/demo">
                    <a className="boxed-btn text-[16px] md:text-[18px] leading-[30px] py-2 px-4 font-poppins font-bold">
                      Schedule a demo &gt;
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column (Image) */}
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
