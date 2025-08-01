import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { useState, useEffect, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Banner({ bannerItems }) {
    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            console.log('Swiper instance:', swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);
    return (
        <div className='testimonial-area bg-azure'>
            <div className='container'>
                <div className='grid-cols-1'>
                    <p>Maximize Productivity with a Purpose-Built Ticket Management System</p>
                    <p>SmartTix is the most advanced, easy-to-use ticket management platform purpose-built to support the needs of a wide range of industries and organizations.  Our user-friendly interface and automated features make it simple to handle required tasks, while providing opportunities to increase operational efficiency through versatile intercommunication tools and enhanced routing, reporting, and auditing capabilities.</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
