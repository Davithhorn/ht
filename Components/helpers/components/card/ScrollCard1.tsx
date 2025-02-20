import {FC, useState} from "react";
import Image from "next/image";
import {Container} from "react-bootstrap";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Virtual} from "swiper/modules";
import {card3} from "../../../constant/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Navigation Icons
import NextIcon from "@assets/icon/social/next.svg";
import PrevIcon from "@assets/icon/social/prev.svg";
import PLay from "@assets/icon/home-page/play.svg";

type Props = {
    category?: string;
    link?: string;
    className?: string;
    effect?: string;
    delay?: string
};

const CustomCard1: FC<Props> = ({category, link, className, delay, effect}) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <Container>
            <div className="my-8" data-aos={effect} data-aos-delay={delay}>
                <div className="my-12 d-flex justify-content-between align-items-center">
                    {
                        category && <Link href={link ?? "/"} className="hover-underline-animation">
                            <h2 className={`text-default-blue ${className} fw-normal text-normal`}>{category}</h2>
                        </Link>
                    }
                    <div className="d-flex align-items-center gap-5">
                        <button onClick={() => swiperRef.slidePrev()}
                                className="d-flex align-items-center p-5 rounded-circle bg-white border-0 border slider-button-shadow">
                            <Image src={PrevIcon} alt="Prev"/>
                        </button>
                        <button onClick={() => swiperRef.slideNext()}
                                className="d-flex align-items-center p-5 rounded-circle bg-white border-0 border slider-button-shadow">
                            <Image src={NextIcon} alt="Next"/>
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Pagination, Virtual]}
                    onSwiper={setSwiperRef}
                    spaceBetween={36}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    slidesPerView={3}
                    virtual
                >
                    {card3.map((item, index) => (
                        <SwiperSlide key={index} virtualIndex={index} className="p-1">
                            <Link href={item.link ?? ""} passHref>
                                <div className="card card-hover-back bg-transparent">
                                    <div className="card-image-container position-relative">
                                        <Image
                                            src={item.featureImage}
                                            alt={item.title}
                                            layout="responsive"
                                            width={601}
                                            height={318}
                                        />
                                        <div className="overlay"></div>
                                        <Image
                                            src={PLay}
                                            alt="play"
                                            className="position-absolute bottom-6px end-6px"
                                        />
                                    </div>
                                    <div className="card-body card-body-back card-body-padding-scroll">
                                        <h1 className="text-black-44 text-normal lh-lg max-line-1">{item.title}</h1>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Container>
    );
};

export default CustomCard1;
