import React, {FC} from "react";
import {Container} from "react-bootstrap";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";

// Import Image
import PlaceHolder from "@assets/kilo-health-image/place-holder/no-thumbnail.jpg";

type Props = {
    category?: string;
    link?: string;
    title?: string;
    subTitle?: string;
    featureImage?: string | StaticImageData;
    effect?: string;
    delay?: string;
};

const CustomCard1: FC<Props> = ({link, featureImage, subTitle, title, effect, delay}) => {
    return (
        <Container>
            <Link href={link ?? "/"}>
                <div
                    className={`card hover-card-shadow p-0 overflow-hidden bg-transparent`}
                    data-aos={effect}
                    data-aos-delay={delay}
                >
                    <div className='card-body overflow-hidden d-flex flex-column p-0 justify-content-between '>
                        <div className="row ">
                            <div className="col-md-6">
                                <div className="overflow-hidden h-100 w-100">
                                    <Image className="w-100 h-100 "
                                           alt="Pic"
                                           src={featureImage ?? PlaceHolder}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 d-flex flex-column mt-5 mt-md-0">
                                <div className="d-flex flex-column gap-3 px-5px">
                                    <p className='text-normal mt-2 text-black-44 fw-bolder max-line-1'>
                                        {title}
                                    </p>
                                    <div
                                        className='text-black-77 text-normal max-line-2'>{subTitle}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </Container>
    );
};

export default CustomCard1;
