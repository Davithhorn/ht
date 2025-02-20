import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
// import { CardList } from "../../../constant/cardummy";
import Image from "next/image";
import phone from "@assets/icon/home-page/phone.svg";
import location from "@assets/icon/home-page/location.svg";
import NSSF from "@assets/icon/home-page/NSSF.svg";
type Props = {
  category?: string;
  className?: string;
};

const CustomHosCard: React.FC<Props> = ({ category, className }) => {
  return (
    <Container>
      <div className="my-8" data-aos="fade-up">
        <div data-aos="fade-up" className="my-12">
          <Link href='/medical-institutions/hospital' className={`text-default-blue ${className} fw-normal text-normal hover-underline-animation`}>
            {category}
          </Link>
        </div>
        <Row>
          {/*{CardList.map((item, index) => (*/}
          {/*  <Col*/}
          {/*    className="p-1 p-md-4 mb-3"*/}
          {/*    data-aos="fade-up"*/}
          {/*    key={index}*/}
          {/*    xs={6}*/}
          {/*    lg={4}  */}
          {/*    xl={3}*/}
          {/*  >*/}
          {/*    <Card className="w-100 custom-hos-card overflow-hidden">*/}
          {/*      {item.NSSF && (*/}
          {/*        <div className="NSSF bg-white ">*/}
          {/*          <Image className="w-100" src={NSSF} alt="NSSF" />*/}
          {/*        </div>*/}
          {/*      )}*/}
          {/*      <Link href={`/medical-institutions/hospital/${item.id}`}>*/}
          {/*        <Image*/}
          {/*          src={item.image}*/}
          {/*          alt="Card image"*/}
          {/*          className="w-100 img-hover-effect h-100"*/}
          {/*        />*/}
          {/*        <Card.Body className="px-5 pb-4 fs-12px">*/}
          {/*          <Card.Title>*/}
          {/*            {item.name}*/}
          {/*          </Card.Title>*/}
          {/*          <div className="mt-3">*/}
          {/*            <span className="fs-14px fw-normal me-md-4 text-black-44 me-1">*/}
          {/*              ឯទេស:*/}
          {/*            </span>*/}
          {/*            {item.skills.map((i: string) => (*/}
          {/*              <span*/}
          {/*                key={i}*/}
          {/*                className="d-inline-block bg-default-blue skills px-3 py-1 text-white me-md-4 me-1 mb-1"*/}
          {/*              >*/}
          {/*                {i}*/}
          {/*              </span>*/}
          {/*            ))}*/}
          {/*          </div>*/}
          {/*          <div className="mt-3 d-flex">*/}
          {/*            <Image*/}
          {/*              width={15}*/}
          {/*              className="text-default-blue me-lg-2"*/}
          {/*              src={phone}*/}
          {/*              alt="phone"*/}
          {/*            />*/}
          {/*            <div>*/}
          {/*              {item.phone.map((phone: string, index: number) => (*/}
          {/*                <span key={index} className="me-2 mb-0 text-black-77">*/}
          {/*                  {phone}*/}
          {/*                  {index + 1 === item.phone.length ? "" : ","}*/}
          {/*                </span>*/}
          {/*              ))}*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*          <Row className="mt-4 pb-0 text-default-blue">*/}
          {/*            <Col xs={5}>*/}
          {/*              <Image width={15} src={location} alt="phone" />*/}
          {/*              <span className="ms-md-2">{item.location}</span>*/}
          {/*            </Col>*/}
          {/*            <Col className="text-end " xs={7}>*/}
          {/*              {item.distance}គីឡូម៉ែត្រ*/}
          {/*            </Col>*/}
          {/*          </Row>*/}
          {/*        </Card.Body>*/}
          {/*      </Link>*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*))}*/}
        </Row>
      </div>
    </Container>
  );
};

export default CustomHosCard;
