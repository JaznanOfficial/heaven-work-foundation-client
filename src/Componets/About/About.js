import React from "react";
import "./About.css";

const About = () => {
    return (
        <div>
            <h1 className="fs-1 fw-bolder about text-light py-3">
                ABOUT <span className="text-danger">US</span>
            </h1>
            <h3 className="fs-3 fw-bolder mt-5">
                We are Team <span className="text-success">HEAVEN WORK</span>
            </h3>
            <p className="mx-3 text-start">
                A passionate group of people who wishes to inspire a nation and beyond. Heaven Work
                is an educational voluntary organization that originated from Bangladesh. The
                official registration No. is S-12258/2015). Heaven Work has been operated by 40
                professionals and with help of thousands of volunteers. Our mission is to globally
                foster philanthropic works. By designing innovative and inspiring programs, our goal
                is to engage students and professionals to work together to educate, empower and
                lift the underprivileged. One of our endeavors is to provide free education,
                educational materials and support. We have established libraries and a printing
                press for original publications. Our motto is to teach with compassion where a good
                human being is developed rather than a typical human who is only professionally
                equipped. Starting from volunteers, their children, refugees, street children and
                orphans, anyone with an underprivileged background is welcome at our door. One of
                the highly successful projects that we carried out is the Ak-Taka-Ahar
                (One-taka-meal) program. Here we let people come in and purchase a meal for only 1
                taka/0.012 USD. This guarantees entitlement to food while feeling self-reliance by
                purchasing with a minimum cost and at the same time having a decent, healthy meal
                with dignity. Under this program, we also provide food for people under the age of
                12 and over 60 years old people. This successful venture has inspired us to launch
                One-Taka-Bazaar where any item sold is just 1 taka/ 0.012 USD and 1 taka Chikistsha
                ( One-taka-treatment). Anyone who has a need can come to get service just by paying
                1 taka and we supplement the rest by crowdfunding.
            </p>

            <h1 className="fs-1 fw-bolder about text-light py-3">
                Our <span className="text-danger">Services</span>
            </h1>
            <div className="text-start mx-3 fw-bold mb-5">
                <i class="far fa-hand-point-right text-success"></i> Interest free loan to active poor, lower/lower-middle class people. <br />
                <i class="far fa-hand-point-right text-success"></i> Financial support to poor & helpless people, poor & talented students, poor orphans. <br />
                <i class="far fa-hand-point-right text-success"></i> Financial support during marriage of poor girls. <br />
                <i class="far fa-hand-point-right text-success"></i>  Support during any natural disasters. <br />
                <i class="far fa-hand-point-right text-success"></i> Collection of "ZAKAT" & it's distribution to determined sectors. <br />
                <i class="far fa-hand-point-right text-success"></i>  Support to disabled person. <br />
                <i class="far fa-hand-point-right text-success"></i> Any public & social services.
            
            </div>
            <h1 className="fs-1 fw-bolder about text-light py-3">
                Terms & <span className="text-danger">Conditions</span>
            </h1>
            <div className="text-start mx-3 fw-bold mb-5">
                <i class="far fa-hand-point-right text-danger"></i> It's a Nonprofit Organization. <br />
                <i class="far fa-hand-point-right text-danger"></i> Your donation is non-refundable. <br />
                <i class="far fa-hand-point-right text-danger"></i> You can donate as a permanent donor or guest donor.<br />
                <i class="far fa-hand-point-right text-danger"></i> As a permanent donor you must have to donate a monthly minimum amount determined by the organization. <br />
                <i class="far fa-hand-point-right text-danger"></i>  Anytime you can resign or rejoin as a permanent donor. <br />
                <i class="far fa-hand-point-right text-danger"></i> Permanent donor can donate any amount above the determined minimum amount. <br />
                <i class="far fa-hand-point-right text-danger"></i> Guest donor anytime can donate any amount.
            
            </div>
        </div>
    );
};

export default About;
