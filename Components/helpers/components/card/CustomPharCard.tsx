import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phoneicon from "@assets/icon/home-page/phone.svg"
import mapIcon from "@assets/icon/home-page/map.svg"
import location from "@assets/icon/home-page/location.svg"
import Image from 'next/image';
import { PharmacyList } from 'Components/constant/cardummy';

type Props = {
    category?: string;
    className?: string
};

const CustomPharCard: React.FC<Props> = ({ category, className }) => {
    return (
        <Container className='my-8 mb-20'>
            <div data-aos="fade-up" className='my-12 '>
                <Link href='/medical-institutions/pharmacy' className={`text-default-blue fs-16px ${className} fw-normal text-normal hover-underline-animation`}>
                    {category}
                </Link>
            </div>
            <Row>
                {
                    PharmacyList.map((item, index) => (
                        <Col className='mb-5 ps-3 ps-md-0' data-aos="fade-up" key={index} xs={12} md={6} lg={4}>
                            <Link href={`/medical-institutions/pharmacy/${item.id}`}>
                                <Row className='custom-phar-card rounded-3 overflow-hidden m-0 m-lg-3 ms-0'>
                                    <Col className='pt-4 ps-4 ' xs={7}>
                                        <div>
                                            <p className='fs-16px fw-bold text-black-44'>{item.name}</p>
                                            <div className='d-flex mt-5 fs-12px'>
                                                <Image className='me-2' width={15} src={phoneicon} alt="phoneicon" />
                                                <div>
                                                    {
                                                        item.phone.map((phone: string, index: number) => (
                                                            <p key={index} className='me-2 mb-0 text-black-40'>{phone}</p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-3 mt-5  text-default-blue fs-12px'>
                                            <p className='text-nowrap'>
                                                <Image width={15} height={15} src={location} alt="Card location" />
                                                <span className='ms-2'>{item.location}</span>
                                            </p>
                                            <p className='text-nowrap'>
                                                <Image width={15} height={15} src={mapIcon} alt="Card location" />
                                                <span className='ms-2'>{item.distance}គីឡូម៉ែត្រ</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={5} className='custom-img-shadow p-0' >
                                        <Image objectFit='cover' src={item.pic} alt="Card image" className='w-100 h-100 img-hover-effect' />
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default CustomPharCard