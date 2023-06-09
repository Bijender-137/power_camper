import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WaterImg from "../assets/img/png/water_img_1.png";
import WaterImg_2 from "../assets/img/png/water_img_2.png";
import WaterImg_3 from "../assets/img/png/water_img_3.png";
import WaterImgShort from "../assets/img/png/water_img_short_1.png";
import BottomRight from "../assets/img/png/bottom_ryt.png";
import BottomLeft from "../assets/img/png/bottom_left.png";
const Overview = () => {
  const [first, setfirst] = useState(0);
  return (
    <>
      <section className="pt-md-5 position-relative overflow-hidden">
        <img
          className="position-absolute over_dots_left z_index_10 d-none d-sm-block"
          src={BottomLeft}
          alt="BottomLeft"
        />
        <img
          className="position-absolute over_dots_right z_index_10 d-none d-sm-block"
          src={BottomRight}
          alt="BottomRight"
        />
        <Container className="py-5 mt-sm-5">
          <Row>
            <Col lg={6}>
              <div className="pt-sm-5 mt-2">
                <h1 className="fw_xsm ff_comic fw-bold text-black">Overview</h1>
                <div className="ms-4 ps-2">
                  <p className="fw-normal fs_xsm ff_Calibri opacity text-black mb-0 black_circel position-relative">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="fw-normal fs_xsm ff_Calibri opacity text-black mb-0 black_circel position-relative">
                    Commodo venenatis nec enim nisi id. Vestibulum interdum
                    dictumst rhoncus ultrices amet amet.
                  </p>
                  <p className="fw-normal fs_xsm ff_Calibri opacity text-black mb-0 black_circel position-relative">
                    Tellus adipiscing augue curabitur leo, pretium habitant
                    turpis quis.
                  </p>
                  <p className="fw-normal fs_xsm ff_Calibri opacity text-black mb-0 black_circel position-relative">
                    Quam mattis senectus odio mattis gravida gravida
                    sollicitudin commodo. Cursus faucibus ut egestas in metus.
                  </p>
                  <p className="fw-normal fs_xsm ff_Calibri opacity text-black mb-0 black_circel position-relative">
                    Consequat, suspendisse duis eget purus ornare.
                  </p>
                </div>
                <div className="img_w_445">
                  <div className="mt-3 mt-lg-5 d-flex justify-content-center justify-content-lg-start ">
                    <img
                      height={315}
                      className={
                        first === 0 ? "w-100  d-block  " : "w-100  d-none  "
                      }
                      src={WaterImg}
                      alt="WaterImg"
                    />
                    <img
                      height={315}
                      className={
                        first === 1 ? "w-100 d-block " : "w-100 d-none "
                      }
                      src={WaterImg_2}
                      alt="WaterImg"
                    />
                    <img
                      height={315}
                      className={
                        first === 2 ? "w-100 d-block " : "w-100 d-none "
                      }
                      src={WaterImg_3}
                      alt="WaterImg"
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <div className="d-flex  gap-3 bg_overview_bottom p-4 w-50 justify-content-center px-5 py-3">
                      <img
                        onClick={() => {
                          setfirst(0);
                        }}
                        width="51"
                        className={
                          first === 0 ? "scale w_32_xsm " : "none  w_32_xsm"
                        }
                        src={WaterImgShort}
                        alt="WaterImg"
                      />{" "}
                      <img
                        onClick={() => {
                          setfirst(1);
                        }}
                        width="51"
                        className={
                          first === 1 ? "scale w_32_xsm " : "none  w_32_xsm"
                        }
                        src={WaterImg_2}
                        alt="WaterImg"
                      />
                      <img
                        onClick={() => {
                          setfirst(2);
                        }}
                        width="51"
                        className={
                          first === 2 ? "scale w_32_xsm " : "none  w_32_xsm"
                        }
                        src={WaterImg_3}
                        alt="WaterImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mt-5 pt-3">
              <div className="bg_overview py-2">
                <p className="fw-bold fs_sm ff_comic text-white pt-4 px-3 px-md-5">
                  Platte River Sold Out? We can get you a reservation!
                </p>
                <div className=" mx-3  mx-md-5 ">
                  <div className="py-4 started_box_bg_clr my-5">
                    <h2 className="fw-bold ff_comic fs_medium text-white text-center">
                      GET STARTED HERE
                    </h2>
                    <Row className="mx-sm-4 mx-1 mt-4">
                      <Col sm={3}>
                        <div>
                          <form action="/action_page.php">
                            <label for="cars"></label>
                            <select
                              className="w-100 selector_bg_clr text-white arrow"
                              name="cars"
                              id="cars"
                            >
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="volvo"
                              >
                                CA
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="saab"
                              >
                                assistant
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="opel"
                              >
                                manager
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="audi"
                              >
                                owner
                              </option>
                            </select>
                          </form>
                        </div>
                      </Col>
                      <Col sm={9}>
                        <div className="mt-3 mt-sm-0">
                          <form action="/action_page.php">
                            <label for="cars"></label>
                            <select
                              className="w-100 selector_bg_clr text-white arrow"
                              name="cars"
                              id="cars"
                            >
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="volvo"
                              >
                                Doheny State Beach
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="saab"
                              >
                                assistant
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="opel"
                              >
                                manager
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="audi"
                              >
                                owner
                              </option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mx-2 mx-sm-4 mt-3 pt-2">
                      {" "}
                      <Col sm={3}>
                        <div>
                          <h2 className="fw-bold ff_Calibri fs_xsm text-white mt-2">
                            Site Type:
                          </h2>
                        </div>
                      </Col>
                      <Col sm={9}>
                        <Row>
                          <Col sm={6}>
                            <div>
                              <form action="/action_page.php">
                                <label for="cars"></label>
                                <select
                                  className="w-100 selector_bg_clr text-white arrow"
                                  name="cars"
                                  id="cars"
                                >
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="volvo"
                                  >
                                    RV
                                  </option>
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="saab"
                                  >
                                    assistant
                                  </option>
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="opel"
                                  >
                                    manager
                                  </option>
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="audi"
                                  >
                                    owner
                                  </option>
                                </select>
                              </form>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="mt-3 mt-sm-0">
                              <form action="/action_page.php">
                                <label for="cars"></label>
                                <select
                                  className="w-100 selector_bg_clr text-white arrow"
                                  name="cars"
                                  id="cars"
                                >
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="volvo"
                                  >
                                    10 ft.
                                  </option>
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="saab"
                                  >
                                    12 ft.
                                  </option>
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="opel"
                                  >
                                    15 ft.
                                  </option>
                                  <option
                                    className="bg-success fw-normal ff_Calibri fs_xsm"
                                    value="audi"
                                  >
                                    20 ft.
                                  </option>
                                </select>
                              </form>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mx-2 mx-sm-4 mt-3 pt-2">
                      <Col sm={8}>
                        <div>
                          <h2 className="fw-bold ff_Calibri fs_xsm text-white mt-2">
                            Number in your party:
                          </h2>
                        </div>
                      </Col>
                      <Col sm={4}>
                        <div>
                          <form action="/action_page.php">
                            <label for="cars"></label>
                            <select
                              className="w-100 selector_bg_clr text-white arrow"
                              name="cars"
                              id="cars"
                            >
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="volvo"
                              >
                                01
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="saab"
                              >
                                02
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="opel"
                              >
                                03
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="audi"
                              >
                                04
                              </option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mx-sm-4 mx-2 mt-3 pt-2">
                      <Col sm={4} lg={12} xl={4}>
                        <div>
                          <h2 className="fw-bold ff_Calibri fs_xsm text-white mt-2">
                            Check in Date:
                          </h2>
                        </div>
                      </Col>
                      <Col sm={8} lg={12} xl={8}>
                        <div>
                          <form action="/action_page.php">
                            <label for="cars"></label>
                            <select
                              className="w-100 selector_bg_clr text-white arrow"
                              name="cars"
                              id="cars"
                            >
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="volvo"
                              >
                                Friday,May 13/2022
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="saab"
                              >
                                Sunday,May 15/2022
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="opel"
                              >
                                Tuesday,May 17/2022
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="audi"
                              >
                                Thurshday,May 19/2022
                              </option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mx-sm-4 mx-2 mt-3 pt-2">
                      <Col sm={4} lg={12} xl={4}>
                        <div>
                          <h2 className="fw-bold ff_Calibri fs_xsm text-white mt-2">
                            Check out Date:
                          </h2>
                        </div>
                      </Col>
                      <Col sm={8} lg={12} xl={8}>
                        <div>
                          <form action="/action_page.php">
                            <label for="cars"></label>
                            <select
                              className="w-100 selector_bg_clr text-white arrow"
                              name="cars"
                              id="cars"
                            >
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="volvo"
                              >
                                Sunday,May 15/2022
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="saab"
                              >
                                Sunday,May 15/2022{" "}
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="opel"
                              >
                                Sunday,May 15/2022
                              </option>
                              <option
                                className="bg-success fw-normal ff_Calibri fs_xsm"
                                value="audi"
                              >
                                Sunday,May 15/2022
                              </option>
                            </select>
                          </form>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center pt-5">
                      <button className="btn_log_in fw-bold ff_Calibri fs_xsm text-white">
                        Continue to Step 2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Overview;
