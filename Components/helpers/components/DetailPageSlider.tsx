import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

type Props = {
    imgsrc?: any;
}
const DetailPageSlider:React.FC<Props> = ({imgsrc}) => {
    return (
        <Swiper
            className='custom-details-slider'
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
        >
            {
                Array(3).fill(0).map((_, index) => (
                    <SwiperSlide key={index}>
                        <Image className='swiper-c-image' objectPosition='center' src={imgsrc} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default DetailPageSlider;
