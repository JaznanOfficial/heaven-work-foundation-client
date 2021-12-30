import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import helpOne from "./help-1.jpg";
import helpTwo from "./help-2.jpg";
import helpThree from "./help-3.jpg";
import "./MiddlePart.css";

const MIddlePart = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col sm={6}>
                        <Carousel fade variant="success">
                            <Carousel.Item>
                                <img className="d-block w-100" src={helpOne} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={helpTwo} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100" src={helpThree} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={6} className="mt-5">
                        <h3 className="text-success">
                            Let's fight against <strong className="text-danger">POVERTY</strong>{" "}
                        </h3>
                        <p className="text-start">
                            {" "}
                            Heaven Work has begun its Emergency COVID-19 campaign to fight against
                            Coronavirus to the most vulnerable people in Bangladesh: the poor,
                            disabled, jobless, hungry, elderly, and orphans. We are attempting to
                            distribute food among 500,000 people. We are all completely acknowledged
                            about the poor socio-economic condition of Bangladesh.COVID-19 has made
                            the situation even worse by putting an already poverty stricken
                            population on lockdown where accessibility to nutritional food, drinking
                            water, products which are necessary to maintain hygienic life-style,
                            medicines and other daily commodities are scarcer day by day. This
                            project is addressing to cope up with the emergency need with
                            distribution of survival kits to thousands of people who need it most.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MIddlePart;
