import Link from 'next/link';
import Image from 'next/image';
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as GoIcons from "react-icons/go";
import * as RiIcons from "react-icons/ri";

const ICON_LIBRARIES = {
  Md: MdIcons,
  Ai: AiIcons,
  Tb: TbIcons,
  Lu: LuIcons,
  Pi: PiIcons,
  Go: GoIcons,
  Ri: RiIcons,
};

function ServicesTwo({ features }) {
  return (
    <div className="service-area relative pt-[60px] md:pt-[160px] before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px] bg-azure">
      <div className="custom-container pb-12">
        <div className="lg:grid lg:grid-cols-12 flex flex-col">
          {/* Heading */}
          <div className="lg:col-span-12 flex flex-col items-center justify-center">
            <div className="w-full">
              <h1 className="text-[28px] md:text-[56px] leading-snug md:leading-[70px] font-bold text-[#13144D] mb-[40px] md:mb-[60px] text-center">
                Work Smarter with Features that<br />
                Optimize Efforts & Automate Tasks
              </h1>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="lg:col-span-12 pt-6 md:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] w-full">
              {features?.map((feature, index) => {
                const iconName = feature?.icon;
                const prefix = iconName?.substring(0, 2);
                const IconLibrary = ICON_LIBRARIES[prefix];
                const Icon = IconLibrary ? IconLibrary[iconName] : null;

                return (
                  <div className="service-box2 w-full group" key={feature?.title || index}>
                    <div className="service-box-inner2">
                      <div className="service-list grid grid-cols-3 items-center gap-2 p-3">
                        <div className="col-span-2 content">
                          <h3 className="title font-poppins text-[18px] md:text-[26px] text-black group-hover:text-[#3754ED] transition duration-300">
                            {feature?.title}
                          </h3>
                        </div>
                        <div className="col-span-1 icon flex items-center justify-end">
                          {Icon && (
                            <Icon
                              className={`text-[#22C763] group-hover:text-[#3754ED] transition duration-300 text-2xl md:text-3xl ${
                                index === 0 ? 'rotate-90' : ''
                              }`}
                            />
                          )}
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

export default ServicesTwo;
