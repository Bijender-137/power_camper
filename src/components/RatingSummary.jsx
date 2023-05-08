import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Starsyellow from "../assets/img/svg/5_starts.svg";
import Stars from "../assets/img/png/star_groupin_icon.png";
import MainImg from "../assets/img/png/main_img.png";
import TopShadow from "../assets/img/png/shadow_img_top.png";
import TopShadowMain from "../assets/img/png/shadow_main_top.png";
import BottomShadow from "../assets/img/png/shadow_img_bottom.png";
import BottomShadow_main from "../assets/img/png/shadow_main_bottom.png";
import FlowerImg from "../assets/img/svg/flower_img.svg";
import Dots1 from "../assets/img/png/started_sec_left_dots.png";
import Dots2 from "../assets/img/png/dots_2nd_right.png";
import Dots3 from "../assets/img/png/dots_3rd left.png";
import Dots4 from "../assets/img/png/dots_4th_bottom.png";
const RatingSummary = () => {
  return (
    <>
      <section className="ratin_sec_bg_clr position-relative mt-5">
        <img
          className="position-absolute first_dots_group z_index_10 d-none d-sm-block"
          src={Dots1}
          alt="Dots1"
        />
        <img
          className="position-absolute second_dots_group z_index_10 d-none d-sm-block"
          src={Dots2}
          alt="Dots2"
        />
        <img
          className="position-absolute third_dots_group z_index_10 d-none d-sm-block
          "
          src={Dots3}
          alt="Dots3"
        />
        <img
          className="position-absolute fourth_dots_group z_index_10 d-none d-sm-block
          "
          src={Dots4}
          alt="Dots4"
        />
        <img
          className="position-absolute w-100 main_shadow_img_top d-none d-lg-block z_index_minus_1"
          src={TopShadowMain}
          alt="TopShadowMain"
        />
        <img
          className="position-absolute w-100 d-none d-lg-block main_shadow_img_bottom"
          src={BottomShadow_main}
          alt="BottomShadow_main"
        />{" "}
        <div>
          <Container className="py-5">
            <Row className="py-5">
              <Col xl={4} className="z_index_10">
                <div className="overflow_w d-none d-xl-block"></div>
                <div className="rating_box_bg py-4 p-4">
                  <h2 className="ff_comic fw-bold fs-medium text-white">
                    Ratings Summary
                  </h2>
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <p className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Overall Rating
                    </p>
                    <img src={Starsyellow} alt="Starsyellow" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt_26">
                    <p className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Access
                    </p>
                    <img src={Stars} alt="Stars" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt_26">
                    <p className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Location
                    </p>
                    <img src={Starsyellow} alt="Starsyellow" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt_26">
                    <p className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Cleanlines
                    </p>
                    <img src={Stars} alt="Stars" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt_26">
                    <p className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Site Quality
                    </p>
                    <img src={Stars} alt="Stars" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt_26">
                    <p className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Noise
                    </p>
                    <img src={Stars} alt="Stars" />
                  </div>
                </div>
              </Col>
              <Col xl={8}>
                <Row>
                  <Col
                    md={8}
                    className="text-center text-md-start mt-4 mt-xl-0"
                  >
                    <h3 className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                      Filter By
                    </h3>
                    <div className="d-sm-flex align-items-center mt-3 justify-content-center justify-content-md-start">
                      <div class="dropdown ">
                        <button
                          class="btn btn-secondary dropdown-toggle drop_p opacity fw-normal ff_Calibri fs_xsm "
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Traveler Type
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown ms-sm-4 mt-3 mt-sm-0">
                        <button
                          class="btn btn-secondary dropdown-toggle drop_p opacity  fw-normal ff_Calibri fs_xsm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Traveler Frequency
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} className="mt-4 mt-xl-0">
                    <div className="text-center text-text-md-start ">
                      <h3 className="ff_Calibri fw-normal fs_xsm text-white mb-0">
                        Sort By
                      </h3>
                      <div class="dropdown mt-3">
                        <button
                          class="btn btn-secondary dropdown-toggle drop_p opacity"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Newest - default
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center mt-4">
                  <Col lg={3}>
                    <div>
                      <img className="w-100" src={MainImg} alt="MainImg" />
                      <div className="text-center ">
                        <p className=" fw-bold ff_Calibri fs_xsm text-white mb-0">
                          Snoopinaround
                        </p>
                        <p className=" fw-bold ff_Calibri fs_xsm text-white mb-0 opacity pt-1">
                          Geneseo,IL
                        </p>
                        <p className=" fw-bold ff_Calibri fs_xsm text-white mb-0 opacity pt-1">
                          Ram 2500
                        </p>
                        <p className=" fw-bold ff_Calibri fs_xsm text-white mb-0 opacity pt-1">
                          21 reviews
                        </p>
                        {/* <button className="ff_comic fw-bold fw_xsm text-white btn_log_in mt-4">
                          Member
                        </button> */}
                      </div>
                    </div>
                  </Col>
                  <Col lg={9} className="mt-5 ">
                    <div className="text-center text-lg-start">
                      <p className="fw-bold ff_Calibri fs_xsm text-white mb-0 ">
                        Outstanding Campground
                      </p>
                      <p className=" fw-normal ff_Calibri fs_xsm text-white mb-0 opacity pt-1">
                        Reviewed 10/24/2021
                      </p>
                      <div className="d-flex align-items-center mt-3 justify-content-center justify-content-lg-start">
                        <p className=" fw-normal ff_Calibri fs_xsm text-white mb-0 opacity">
                          Overall Rating
                        </p>
                        <img
                          className="ms-3 mt-1"
                          src={Starsyellow}
                          alt="Starsyellow"
                        />
                      </div>
                      <p className=" fw-normal ff_Calibri fs_xsm text-white mb-0 opacity pt-3">
                        The government campgrounds are the best and this one is
                        no exception. We stayed in loop #1 with electricity.
                        Spacious and private sites with fire rings and picnic
                        tables. The only noise was from acorns falling on rv’s.
                        There is a walking trail (Dog friendly but no bikes) to
                        the beach from the campground. Bicyclists can take a
                        short
                      </p>
                      {/* <div className="mt-4 pt-4">
                        <button className="ff_comic fw_xsm text-white btn_helpful">
                          Helpful
                        </button>
                      </div> */}
                    </div>
                  </Col>
                  <Row className="justify-content-center justify-content-lg-start">
                    <Col sm={3}>
                      <div className="mt-3 text-center">
                        <button className="ff_comic fw-bold fw_xsm text-white btn_log_in">
                          Member
                        </button>
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="mt-3 text-center text-sm-start">
                        <button className="ff_comic fw_xsm text-white btn_helpful">
                          Helpful
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
            <div className="py-5 position-relative  mt_100 ">
              <img
                className="w-100 position-absolute top_shadow_img  d-none d-lg-block"
                src={TopShadow}
                alt="TopShadow"
              />
              <img
                className="w-100  position-absolute bottom_shadow_img d-none d-lg-block "
                src={BottomShadow}
                alt="BottomShadow"
              />
              <div className=" large_box_bg_clr pb-5">
                <p className="fw-bold fs_sm ff_comic text-white py-sm-5 py-3 text-center">
                  Your comment/rating/review;
                </p>
                <div className="ratting_box_bg_clr custom_width mx-auto pt-4 pb-5">
                  <p className="fw-bold fs-medium ff_Calibri text-white text-center">
                    {" "}
                    Your Rating
                  </p>
                  <div className="text-center">
                    <img src={Starsyellow} alt="Starsyellow" />
                  </div>
                  <div className="pt-5">
                    <div className=" mx-2 mx-sm-5 px-5">
                      <input
                        type="text"
                        className="w-100 input_name py-3 px-4 input_clr fw-normal ff_Calibri fs_xsm"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mt-3 pt-1 mx-2 mx-sm-5 px-5">
                      <input
                        type="text"
                        className="w-100 input_name py-3 px-4 input_clr fw-normal ff_Calibri fs_xsm"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mt-3 pt-1 mx-2 mx-sm-5 px-5">
                      <input
                        type="text"
                        className="w-100 input_name review_input px-4 input_clr fw-normal ff_Calibri fs_xsm"
                        placeholder="Review"
                      />
                    </div>
                  </div>
                  <p className="ms-sm-5 ps-5 ff_Calibri fw-normal fs_xsm text-white opacity mt-3">
                    Your email address will not be published. Required fields
                    marked
                  </p>
                  <div className="d-sm-flex mx-5 ms-sm-5 ps-sm-5 align-items-center justify-content-center text-center justify-content-md-start">
                    <button className="ff_comic fw-bold fw_xsm text-white btn_log_in mt-4">
                      Post Review
                    </button>
                    <div className="mx-3 ms-sm-5 mt-4 btn_helpful d -flex justify-content-center align-items-center btn_choose">
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4914 10.1984V19.1984M11.4914 10.1984L8.99142 12.1984M11.4914 10.1984L13.9914 12.1984M4.52542 7.31543C3.57963 7.55342 2.75329 8.12859 2.20167 8.93287C1.65005 9.73715 1.4111 10.7152 1.52972 11.6832C1.64835 12.6512 2.11638 13.5426 2.84588 14.1899C3.57538 14.8372 4.51615 15.1958 5.49142 15.1984H6.49142"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.3219 5.33596C14.9801 3.98253 14.1364 2.8097 12.962 2.05522C11.7875 1.30073 10.3701 1.02105 8.99711 1.27286C7.6241 1.52468 6.3982 2.28914 5.56792 3.4113C4.73764 4.53345 4.36512 5.92933 4.52586 7.31596C4.52586 7.31596 4.67886 8.19796 4.99186 8.69796"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.4912 15.1982C17.1972 15.1978 17.8952 15.0478 18.5391 14.7581C19.183 14.4684 19.7582 14.0457 20.2269 13.5177C20.6957 12.9897 21.0473 12.3684 21.2586 11.6948C21.4699 11.0211 21.5362 10.3103 21.453 9.60919C21.3698 8.90806 21.1391 8.23251 20.776 7.62698C20.4129 7.02146 19.9257 6.49969 19.3464 6.09603C18.7672 5.69236 18.109 5.41596 17.4152 5.285C16.7214 5.15405 16.0078 5.17151 15.3212 5.33624L13.9912 5.69824"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <button className="ff_comic fw_xsm text-white  border-0 btn_clr bg-transparent ms-2">
                        Helpful
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default RatingSummary;
