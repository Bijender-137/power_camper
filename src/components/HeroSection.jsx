import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dogimg from "../assets/img/png/dog_img.png";
import Sawerimg from "../assets/img/png/sawer_img.png";
import Cross from "../assets/img/png/cross_btn.png";
import Stars from "../assets/img/png/star_groupin_icon.png";
import Dots from "../assets/img/png/doted_group.png";
import RytDots from "../assets/img/png/ryt_dots.png";
const HeroSection = () => {
  return (
    <>
      <section className="d-flex flex-column flex-grow-1 justify-content-center align-items-cente py-5">
        <Container className="header_container text-center position-relative pb-5">
          <img className="position-absolute left_dots d-none d-lg-block" src={Dots} alt="Dots" />
          <img className="position-absolute Ryt_dots d-none d-lg-block" src={RytDots} alt="RytDots" />
          <div className="bg_box_clr py-3 px-3">
            <div className="border_2_bg py-4">
              <h2 className="ff_comic fw-bold fs_sm text-white ">
                Platte River Campground
              </h2>
              <p className="ff_Calibri fw-normal fs_xsm opacity text-white">
                Among Top 50 campgrounds in California
              </p>
              <img src={Stars} alt="Stars" />
              <p className="ff_Calibri fw-normal fs_xsm opacity text-white mb-0 pt-3">
                5685 Lake Michigan Rd, Honor, MI 49640, United States
              </p>
              <a href="#">
                  <p className="ff_Calibri fw-normal fs_xsm opacity text-white mb-0">
                    Contact: +1 231 326 5134
                  </p>
              </a>
              <a href="#">
                  <p className="ff_Calibri fw-normal fs_xsm opacity text-white mb-0">
                    www.example.com
                  </p>
              </a>

              <Row className=" ms-sm-4 ps-1 py-5">
                <Col xs={6} sm={4} className="justify-content-center d-flex">
                  <div className="white_circel d-flex justify-content-center align- items-center flex-column text">
                    <h3 className="ff_Calibri fw-bold text-white fs_xsm mb-0">
                      All year
                    </h3>
                    <p className="ff_Calibri fw-normal fs_xsm text-white opacity mb-0 clr">
                      Season
                    </p>
                  </div>
                </Col>
                <Col xs={6} sm={4} className="justify-content-center d-flex">
                  {" "}
                  <div className="white_circel d-flex justify-content-center align- items-center flex-column text    ">
                    <h3 className="ff_Calibri fw-bold text-white fs_xsm mb-0">
                      174
                    </h3>
                    <p className="ff_Calibri fw-normal fs_xsm text-white opacity mb-0 clr">
                      Total Sites
                    </p>
                  </div>
                </Col>
                <Col xs={6} sm={4} className="justify-content-center d-flex">
                  <div className="white_circel d-flex justify-content-center align- items-center flex-column mt-4 mt-sm-0 text">
                    <h3 className="ff_Calibri fw-bold text-white fs_xsm mb-0">
                      45
                    </h3>
                    <p className="ff_Calibri fw-normal fs_xsm text-white opacity mb-0 clr">
                      Nightly cost
                    </p>
                  </div>
                </Col>
                <Col xs={6} sm={4} className="justify-content-center d-flex">
                  {" "}
                  <div className="white_circel d-flex justify-content-center align-items-center mt-4">
                    <img width={70} height={70} src={Dogimg} alt="Dogimg" />
                  </div>
                </Col>
                <Col xs={6} sm={4} className="justify-content-center d-flex">
                  <div className="white_circel d-flex justify-content-center align-items-center mx -5 mt-4">
                    <img width={50} height={50} src={Sawerimg} alt="Sawerimg" />
                  </div>
                </Col>
                <Col xs={6} sm={4} className="justify-content-center d-flex">
                  <div className="white_circel d-flex justify-content-center align-items-center position-relative mt-4 text">
                    <p className="ff_Calibri fw-normal fs_xsm text-white opacity mb-0 clr">
                      RV/Trailers
                    </p>
                    <img
                      className="position-absolute cross_icon me-3 mt-1"
                      src={Cross}
                      alt="Cross"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
