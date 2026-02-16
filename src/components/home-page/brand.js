import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Pagination, Autoplay]);
function Brand({ brandItems }) {
  return (
    <div style={{ background: 'var(--olympus-navy)', borderBottom: '1px solid rgba(201, 168, 76, 0.1)' }}>
      <div className="custom-container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
        <Swiper
          pagination={false}
          spaceBetween={30}
          loop={false}
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            576: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
          }}
        >
          {brandItems?.map((brandItem, i) => (
            <SwiperSlide key={i}>
              <div className="opacity-40 grayscale transition duration-500 hover:grayscale-0 hover:opacity-100">
                <Link href="#">
                  <Image
                    src={brandItem?.clientimage}
                    alt={brandItem?.title}
                    width={210}
                    height={90}
                    layout="responsive"
                    quality={70}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Brand;
