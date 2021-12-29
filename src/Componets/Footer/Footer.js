import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Row className='footer d-flex flex-lg-row'>
            <Col sm={4} className="left-footer">
                <h1 className='heaven text-light rounded-pill m-3'>HEAVEN<span className='work text-success m-0 p-0'>WORK</span></h1>
                <p className='text-light m-3'>A passionate group of people who wishes to inspire a nation and beyond. Bidyanondo is an educational voluntary organization that originated from Bangladesh.</p>
            </Col>
            <Col sm={4} className="right-footer">
            
            </Col>
            <Col sm={4} className="right-footer">
            
            </Col>
        </Row>
    );
};

export default Footer;