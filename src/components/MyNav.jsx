import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navlogo from "../assets/img/svg/nav_logo.svg";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <section>
        <nav className="bg_nav">
          <Container>
            <div className="d-flex align-items-center justify-content-between">
              <a href="#"><img className="nav_logo_w" src={Navlogo} alt="Navlogo" /></a>
              <div className="d-flex align-items-center">
                <div className={first == true ? "navClose text-center d-flex align-items-center" : " navOpen text-center d-flex align-items-center"}>
                  <ul className="m-0 p-0 d-md-flex align-items-center justify-content-center gap-4">
                    <li>
                      <a
                        href="#"
                        className="ff_comic fw_xsm text-white text_underline z_index_10"
                      >
                        Home
                      </a>
                    </li>
                    <li className="pt-3 pt-md-0">
                      <a
                        href="#"
                        className="ff_comic fw_xsm text-white text_underline z_index_10"
                      >
                        Campgrounds
                      </a>
                    </li>
                    <li className="pt-3 pt-md-0">
                      <a
                        href="#"
                        className="ff_comic fw_xsm text-white text_underline z_index_10"
                      >
                        About us
                      </a>
                    </li>
                    <li className="pt-3 pt-md-0">
                      <a
                        href="#"
                        className="ff_comic fw_xsm text-white text_underline z_index_10"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex  justify-md-content-center align-md-items-center gap-4 ms-lg-5 ps-sm-3 ps-lg-5  pt-3 pt-md-0">
                    <button className="ff_comic fw_xsm text-white btn_sign_in">
                      Sign Up
                    </button>
                    <button className="ff_comic fw_xsm text-white btn_log_in border-0">
                      Log in
                    </button>
                  </div>
                  <button
                    className=" btn-close position-absolute top-0 end-0 mt-5 me-5 fs-4 d-md-none"
                    onClick={() => setfirst(true)}
                  ></button>
                </div>
                <div className="d-md-none" onClick={() => setfirst(false)}>
                  <span className="menu_icon"></span>
                  <span className="menu_icon my-2"></span>
                  <span className="menu_icon"></span>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default MyNav;
