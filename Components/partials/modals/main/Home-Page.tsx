import React from 'react';
import Image from "next/image";
import cover from "@assets/icon/image/cover.jpg";
import {Col, Row} from "react-bootstrap";
import david_cover from "../../../assets/icon/image/main.jpg"
const HomePage = () => {
    return (
        <div className='custom-cover'>
            <div className="position-relative custom-container text-ok">
                <Row className="position-absolute custom-text d-flex justify-content-center align-items-center g-4">
                        <Col lg={6}>
                            <div className="d-flex justify-content-center align-items-center custom-border">
                                <div >
                                    <p className='fs-24px d-flex justify-content-center align-items-center gap-3 fw-bolder'>Hello I'm  HORN DAVID</p>
                                    <p  className='fs-14px fw-lighter'>
                                        I'm Front END Developers, And I have 1 year experience 6 system adventure
                                    </p>
                                </div>
                            </div>
                        </Col>
                    <Col lg={6} className="d-flex justify-content-center">
                        <Image src={david_cover} alt="david-cover" width={400} height={400} className="rounded object-fit-cover"/>
                        </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomePage;
