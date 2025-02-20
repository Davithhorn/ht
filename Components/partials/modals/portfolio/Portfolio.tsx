import React from 'react';
import { Col, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Product1 from "@assets/icon/image/portfolio/product1.jpg"
import Product2 from "@assets/icon/image/portfolio/product2.png"
import Link from "next/link";


// Dummy Data
const portfolioData = [
    {
        id: 1,
        image: Product1,
        title: "Movie Booking Ticket",
        description: "Finance Website Landing Page designed by Nishar Multani.",
        projectType: "React JS"
    },
    {
        id: 2,
        image: Product2,
        title: "E-Commerce Website",
        description: "A fully responsive online shopping platform.",
        projectType: "Next.js"
    },
];

const Portfolio = () => {
    return (
        <div className='mt-5' style={{ minHeight: "100vh", padding: "50px 0", lineHeight: "59px" }}>
            <p className="text-light">/ My Portfolio</p>
            <h2 className="text-light">Take a look at the latest</h2>
            <p className="fs-30px text-light">projects I’ve done</p>

            <Row className="justify-content-center mt-30px">
                {portfolioData.map((project) => (
                    <Col key={project.id} lg={6} md={6} sm={12} className="mb-4 d-flex justify-content-center">
                        <Card className="shadow-sm border-secondary mt-5"
                              style={{
                                  maxWidth: "527px",
                                  backgroundColor: "#222831",
                                  color: "#fff",
                                  borderRadius: "20px"
                              }}>
                            <Image src={project.image} alt={project.title} height={300} width={500}
                                   className="rounded object-fit-cover custom-hover"/>
                            <Card.Body className="p-2 m-1 pt-5 mb-3" style={{paddingTop: "30px"}}>
                                <Card.Title className="fs-24px text-light">{project.title}</Card.Title>
                                <Card.Text className="fs-16px text-light" style={{lineHeight: '30px'}}>
                                    {project.description}
                                </Card.Text>
                                <div className="d-flex gap-2 justify-content-end mt-5">
                                    <Button className="custom-bottom-card text-ok"
                                            style={{backgroundColor: "rgba(68, 77, 97, 0.43)"}}>
                                        View Demo
                                    </Button>
                                </div>
                                <p className="fs-12px text-black-77 fw-bolder cursor-pointer">
                                    Project Type <span className="text-hover"> / {project.projectType}</span>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Link href="/" className="d-flex justify-content-end fs-16px">sell all </Link>
            </Row>
        </div>
    );
};

export default Portfolio;
