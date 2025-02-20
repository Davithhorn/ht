import {FC, useState} from "react";
import Image from "next/image";
import {Container, Modal} from "react-bootstrap";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Virtual} from "swiper/modules";
// import {card4} from "../../../constant/card";
import YouTubeModal from "../modal/YouTubeModal";

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
    delay?: string;
};

const ScrollCard2: FC<Props> = ({
                                    category,
                                    link,
                                    className,
                                    delay,
                                    effect,
                                }) => {
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <Container>
            <div className="my-8" data-aos={effect} data-aos-delay={delay}>
                <div className="my-12">
                    {category && (
                        <Link href={link ?? "/"} className="hover-underline-animation">
                            <h2 className={`text-default-blue ${className} fw-normal text-normal`}>
                                {category}
                            </h2>
                        </Link>
                    )}
                </div>
                <Swiper
                    modules={[Pagination, Virtual]}
                    onSwiper={setSwiperRef}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    spaceBetween={64}
                    slidesPerView={4}
                    virtual
                >
                    {/*{card4.map((item, index) => (*/}
                    {/*    <SwiperSlide key={index} virtualIndex={index}>*/}
                    {/*        <div onClick={handleOpenModal} className="cursor-pointer">*/}
                    {/*            <div className="card card-hover-back bg-transparent">*/}
                    {/*                <div className="position-relative">*/}
                    {/*                    <Image*/}
                    {/*                        src={item.featureImage}*/}
                    {/*                        layout="responsive"*/}
                    {/*                        width={601}*/}
                    {/*                        height={318}*/}
                    {/*                        alt="portrait"*/}
                    {/*                    />*/}
                    {/*                    <div className="overlay"></div>*/}
                    {/*                    /!* Add overlay here *!/*/}
                    {/*                    <Image*/}
                    {/*                        src={PLay}*/}
                    {/*                        alt="play"*/}
                    {/*                        className="position-absolute bottom-6px end-6px"*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </SwiperSlide>*/}
                    {/*))}*/}

                </Swiper>
                <div className=" my-8 d-flex justify-content-between align-items-center">
                    <div className="card-line"/>
                    <div className="d-flex align-items-center gap-5">
                        <button
                            onClick={() => swiperRef.slidePrev()}
                            className="d-flex align-items-center p-5 rounded-circle bg-white border-0 border slider-button-shadow "
                        >
                            <Image src={PrevIcon} alt="Prev"/>
                        </button>
                        <button
                            onClick={() => swiperRef.slideNext()}
                            className="d-flex align-items-center p-5 rounded-circle bg-white border-0 border slider-button-shadow"
                        >
                            <Image src={NextIcon} alt="Next"/>
                        </button>
                    </div>
                </div>
            </div>
            <Modal show={isOpenModal} onHide={handleCloseModal} backdrop={true}>
                <YouTubeModal id={null} onClose={handleCloseModal}/>
            </Modal>
        </Container>
    );
};

export default ScrollCard2;
