import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';
import * as TiIcons from 'react-icons/ti';
import * as TbIcons from 'react-icons/tb';
import * as RiIcons from 'react-icons/ri';

const ICON_LIBRARIES = {
  Ai: AiIcons,
  Md: MdIcons,
  Pi: PiIcons,
  Ti: TiIcons,
  Tb: TbIcons,
  Ri: RiIcons,
};

function Services({ services }) {
  return (
    <div className="service-area relative pt-[35px] bg-[#F4F5F7] before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]">
      <div className="custom-container">
        <div className="lg:grid lg:grid-cols-12 flex flex-col">
          {/* Top Row: Image + Text */}
          <div className="lg:col-span-12 flex flex-col lg:flex-row items-stretch">
            {/* Left (Image) */}
            <div className="lg:w-1/2 w-full flex items-center justify-center mb-8 lg:mb-0">
              <div className="w-full max-w-[572px]">
                <Image
                  src="/images/service/Hardhat_guy_homepage[54].png"
                  alt="Service Image"
                  quality={70}
                  width={572}
                  height={555}
                  objectFit="cover"
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right (Text) */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center px-2">
              <div className="w-full max-w-[600px] mx-auto">
                <h2 className="text-[32px] md:text-[56px] md:leading-[64px] text-[#13144D] mb-[30px] mt-[20px] text-center lg:text-left">
                  Most Advanced,<br /> Easy-to-Use<br /> Ticket Management<br /> Platform for Utility<br /> Damage Prevention
                </h2>
                <span className="text-[16px] md:text-[24px] leading-6 md:leading-[32px] mb-[35px] block font-poppins text-center lg:text-left text-[#30373E]">
                  Built from the ground up through a collaboration of utility locators, utility owners, and industry experts, SmartTIX leverages leading-edge tech to advance utility locating ticket management for every stakeholder organization.
                </span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-12 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] w-full">
              {services?.map((service, index) => {
                const iconName = service?.icon;
                const prefix = iconName?.substring(0, 2);
                const IconLibrary = ICON_LIBRARIES[prefix];
                const Icon = IconLibrary ? IconLibrary[iconName] : null;

                return (
                  <div className="service-box w-full" key={service?.title || index}>
                    <div className="service-box-inner">
                      <div className="service-list flex items-start">
                        <div className="icon text-[#22C763] text-[32px] mr-3">
                          {Icon && <Icon />}
                        </div>
                        <div className="content">
                          <h3 className="title">{service?.title}</h3>
                          <p className="desc">{service?.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
