import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import skill images
import skil1 from "../../../assets/icon/image/skill/icons8-html-5.svg";
import skil2 from "../../../assets/icon/image/skill/icons8-css-logo.svg";
import skil3 from "../../../assets/icon/image/skill/icons8-javascript.svg";
import skil4 from "../../../assets/icon/image/skill/icons8-react.svg";
import skil5 from "../../../assets/icon/image/skill/icons8-typescript.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

export default function MySwapper() {
    const skills = [
        { img: skil1, title: "HTML", desc: "HTML is the standard markup language for creating web pages." },
        { img: skil2, title: "CSS", desc: "Used to style and format web pages, defining colors, fonts, and layouts." },
        { img: skil3, title: "JavaScript", desc: "A programming language for web development, enabling interactivity." },
        { img: skil4, title: "React", desc: "A JavaScript library for building user interfaces efficiently with components." },
        { img: skil5, title: "TypeScript", desc: "A superset of JavaScript adding static types for better development." },
    ];

    return (
        <div className="main-swapper">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3} // Show 3 slides at a time
                coverflowEffect={{
                    rotate: 48,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false, // Removes shadow effects
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    750: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <div className="skill-card">
                            <Image src={skill.img} alt={skill.title} width={50} height={50} />
                            <p className="skill-title">{skill.title}</p>
                            <span className="skill-desc">{skill.desc}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom CSS Styles */}
            <style jsx>{`
                .main-swapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: auto;
                    background: transparent; /* Removes any background */
                    padding: 0;
                    margin: 0;
                }

                .mySwiper {
                    background: transparent !important; /* Ensures Swiper has no background */
                    padding: 0;
                    margin: 0;
                }

                .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .skill-card {
                    max-width: 339px;
                    height: 180px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 15px;
                    border-radius: 10px;
                    border: 2px solid gray;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .skill-title {
                    font-size: 20px;
                    font-weight: bold;
                    margin-top: 10px;
                }

                .skill-desc {
                    font-size: 14px;
                    margin-top: 5px;
                }
                
                @media screen and (max-width: 800px){
                  //width: 200px;
                }
                
            `}</style>
        </div>
    );
}
