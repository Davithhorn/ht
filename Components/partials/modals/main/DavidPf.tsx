import React from 'react';
import Image from 'next/image';
import {Button, Container} from "react-bootstrap";

// Import Slide library
import {Autoplay, Navigation, Pagination, Parallax} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// Import Image banner
import ImageSliceIcon3 from '../../../assets/icon/image/david-3.png';

const Slider: React.FC = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                simulateTouch={false}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 15000,
                    disableOnInteraction: false,
                }}
                modules={[Parallax, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="slide-background d-flex flex-column-reverse flex-md-row slider-container-full justify-content-between"
                        style={{backgroundImage: `url("https://i.pinimg.com/736x/57/46/8d/57468d8387042651790a73ade6a0d224.jpg")`}}
                    >
                        <Container>
                            <div
                                className="d-flex vh-100 mb-1 mb-md-0 flex-column-reverse flex-md-column-reverse flex-lg-row align-items-center justify-content-evenly justify-content-md-evenly justify-content-lg-between">
                                <div className="content">
                                    <div className="title-shape fw-bolder lh-lg">HELLO !  <br/> I AM HORN DAVID                                    </div>
                                    <div className="text-start mt-8 mt-md-12 subtitle-shape slider-text-wrapper">
                                      I'm front END developer,  I completed train web development 6 months at kilo it ,And, I have 1 year experience web system Build React Js ,And , I have opportunity join product adventure at KILO IT
                                    </div>
                                </div>
                                <Image src={ImageSliceIcon3} className="img-fluid slide-image-responsive custom-photo" alt="imag"/>
                            </div>
                        </Container>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
