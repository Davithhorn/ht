import React from 'react';
import {Col, Row} from "react-bootstrap";
import next from "../../../assets/icon/image/next.png";
import Image from "next/image";




const AboutDavid = () => {
    return (
        <Row>
            <Col lg={6}>
                <p className=' fs-24px'> / About Me</p>
                <div className="fs-24px">
                    <p>I’ve been developing </p>
                    <p>
                        websites since 2024
                    </p>

                    <span className='mt-5 fs-14px'>
                        My collaborative approach involves working with cross-functional teams, adhering to best coding practices, conducting thorough testing, and staying
                        current with industry trends to ensure the excellence and security of web projects.
                    </span>
                </div>
            </Col>
            <Col className="mt-30px" lg={6}>
                <Row className="fw-bolder">
                    <Col lg={6}>
                        <h6 className="fs-30px text-ok">1 <span className="fs-20px">YEAR OF </span></h6>
                            <p className='fs-20px '>EXPERIENCE</p>
                    </Col>
                    <Col lg={6}>
                        <h6 className="fs-30px text-ok">6 <span className="fs-20px">SUCCESS PROJECT </span></h6>
                        <p className='fs-20px '>COMPLETE</p>
                    </Col>

                    <span className='fw-normal fs-14px'>
                        Collaboration with cross-functional teams, adherence to best coding practices, regular testing for performance and security, troubleshooting, debugging, and staying abreast of industry trends are integral to enhancing and maintaining the quality of web projects and completed
                        7 Websites, 6 Systems.
                    </span>
                </Row>
            </Col>
            <span className="mt-20px fs-30px mb-0 ">
                More About Me <Image src={next} alt="Icon"/>
            </span>
            {/*<span className="custom-border mx-3x"></span>*/}
        </Row>
    );
};

export default AboutDavid;