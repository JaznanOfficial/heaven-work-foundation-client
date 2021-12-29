import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Typical from 'react-typical';

import './Footer.css'

const Footer = () => {
    return (
        <div>
        <Row className='footer d-flex flex-lg-row'>
            <Col sm={6} className="left-footer my-3">
                <h1 className='heaven text-light mx-3'><span className='heaven-text'>HEAVEN</span><span className='work text-success m-0 p-0'>WORK</span></h1>
                <p className='text-light m-3'>A passionate group of people who wishes to inspire a nation and beyond. <strong className='text-danger'>HEAVENWORK</strong> is an educational voluntary organization that originated from Bangladesh.</p>
                <a href="https://www.fb.com/heavenworkfoundation" target='_blank'><i className="fs-1 text-light mx-3 fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/heavenworkbd" target='_blank'><i className="fs-1 text-light mx-3 fab fa-twitter"></i></a>
                <a href="" target='_blank' ><i className="fs-1 text-light mx-3 fab fa-instagram"></i></a>
                <a href="" target='_blank' ><i className="fs-1 text-light mx-3 fab fa-google-plus-g"></i></a>
            </Col>
            <Col sm={6} className="right-footer my-3 mx-auto">
                    <h1 className='text-light mx-2'>Contact</h1>
                    <div className='ms-2'>
                    <h5 className='text-start text-light'><i class="fas fa-map-marker-alt"></i> Head Office: Namuja, Bogura Sadar, Bogura, Bangladesh</h5>
                    <h5 className='text-start text-light'><i class="fas fa-phone-volume"></i> +8801719251114</h5>
                    <h5 className='text-start text-light'><i class="fas fa-envelope-open-text"></i> heavenworkfoundation@gmail.com</h5>
                    </div>
                   
                    
            </Col>
            <h6 className='text-center text-danger mt-3'><span className='text-light'><i class="far fa-copyright"></i> All Rights Reserved by </span><strong className='fw-bolder fs-4'><Typical
            steps={['', 500, 'HEAVENWORK FOUNDATION', 300]}
            loop={Infinity}
            
          /></strong></h6>
            </Row>
            <h6> Developed by <br /><a href="https://md-abdur-rahman-portfolio.netlify.app/" className='text-success developer' target='_blank'>&lt;&#47; Md Abdur Rahman &gt;</a> </h6>
            
            
        </div>
    );
};

export default Footer;