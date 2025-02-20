import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import CustomSearch from "./CustomSearch";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
    banner: any
    search?: boolean

}

const CustomHeaderSlide: React.FC<Props> = ({banner, search = true}) => {
    const banners = Array(3).fill(banner.src);

    return (
        <Swiper
            spaceBetween={30}
            pagination={{clickable: true}}
            modules={[Pagination]}
            loop={true}
            autoplay={{
                delay: 15000,
                disableOnInteraction: false,
            }}
            className="mySwiper custom-bullet-slider"
        >
            {banners.map((bannerSrc, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="slide-background slider-container-full slider-gradient d-flex justify-content-sm-end justify-content-center pe-sm-5 me-sm-5 pb-5 align-items-end"
                        style={{
                            backgroundImage: `url(${bannerSrc})`,
                        }}
                    >
                        {
                            search &&
                            <div className="pb-5">
                                <CustomSearch/>
                            </div>
                        }
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CustomHeaderSlide;
