import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./home.css";
import "./media.css";
import Mobile1 from "./MobileSidebar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Landingpage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100
    });
  }, []);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar for desktop */}
          <div className="col-md-2 d-none d-md-block">
            <Sidebar />
          </div>

          <div className="col-md-10 col-12">
            {/* Navbar */}
            <div className="row mynav me-4" style={{ width: "100%" }}>
              <div className="col-md-10">
                <NavBar />
              </div>

              <div className="col-2 d-md-none text-end">
                <button
                  className="btn btn-light"
                  onClick={toggle}
                  style={{ marginTop: "-55px", zIndex: 1 }}
                >
                  {show ? <CloseIcon /> : <MenuOpenIcon />}
                </button>
              </div>
            </div>

            {/* Mobile Sidebar */}
            {show && <Mobile1 />}

            {/* Main content area (child routes) */}
            <section className="main border mt-3 p-2" data-aos="fade-up">
              <Outlet />
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Landingpage;

