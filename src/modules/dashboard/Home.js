import React, { Fragment, useEffect } from 'react';
import './home.css';
import TableData from './TableData';
import Sellchart from './Sellchart';
import PiChart from './PiChart';
import '@srexi/purecounterjs';

import ReceiptIcon from '@mui/icons-material/Receipt';
import IconButton from '@mui/material/IconButton';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BalanceIcon from '@mui/icons-material/Balance';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

import img1 from '../../images/img.jpg';
import img2 from '../../images/home1.jpg';
import Footer1 from './Footer';
import './media.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <Fragment>
      <div className='container-fluid mt-5'>
        <div className='row block1 justify-content-center' data-aos='fade-up'>

          {/* Earning */}
          <div className='col-md-2 hbr'>
            <section>
              <span className='circle' style={{
                fontSize: "70px", transform: "scale(.5, 1)",
                height: "30px", width: "50px", borderRadius: "90px",
                backgroundColor: "rgba(119, 216, 108, 0.26)", marginTop: "30px"
              }}>
                <IconButton size='large'>
                  <CurrencyRupeeIcon fontSize='large' />
                </IconButton>
              </span>
              <span data-purecounter-start='0' data-purecounter-end='99' data-purecounter-duration='1' className='purecounter count'>
                99<span>k</span>
              </span>
              <p className='fw-light fs-5'>Earning this month</p>
            </section>
          </div>

          {/* Order */}
          <div className='col-md-2 offset-md-1 hbr'>
            <section>
              <span className='circle' style={{
                fontSize: "70px", transform: "scale(.5, 1)",
                height: "30px", width: "40px", borderRadius: "90px",
                backgroundColor: "#e0b9ff30", marginTop: "30px"
              }}>
                <IconButton size='large'>
                  <ReceiptIcon fontSize='large' style={{ color: "red" }} />
                </IconButton>
              </span>
              <span data-purecounter-start='0' data-purecounter-end='50' data-purecounter-duration='1' className='purecounter count'>
                50<span>k</span>
              </span>
              <p className='fw-light fs-5'>Orders this month</p>
            </section>
          </div>

          {/* Balance */}
          <div className='col-md-2 offset-md-1 hbr'>
            <section>
              <span className='circle' style={{
                fontSize: "70px", transform: "scale(.5, 1)",
                height: "30px", width: "50px", borderRadius: "90px",
                backgroundColor: "rgba(99, 229, 218, 0.19)", marginTop: "30px"
              }}>
                <IconButton size='large'>
                  <BalanceIcon fontSize='large' />
                </IconButton>
              </span>
              <span data-purecounter-start='0' data-purecounter-end='30' data-purecounter-duration='1' className='purecounter count' style={{ color: "red" }}>
                30<span>k</span>
              </span>
              <p className='fw-light fs-5'>Balance this month</p>
            </section>
          </div>

          {/* Total Sell */}
          <div className='col-md-2 offset-md-1 pe-4 hbr'>
            <section>
              <span className='circle' style={{
                fontSize: "70px", transform: "scale(.5, 1)",
                height: "30px", width: "50px", borderRadius: "90px",
                backgroundColor: "rgba(119, 216, 108, 0.26)", marginTop: "30px"
              }}>
                <IconButton size='large'>
                  <GolfCourseIcon fontSize='large' />
                </IconButton>
              </span>
              <span data-purecounter-start='0' data-purecounter-end='90' data-purecounter-duration='1' className='purecounter count' style={{ color: "green" }}>
                90<span>k</span>
              </span>
              <p className='fw-light fs-5'>Total sell</p>
            </section>
          </div>
        </div>

        {/* Charts */}
        <div className='row box2 mt-5 justify-content-center'>
          <div className='col-md-7 bg-light' data-aos='fade-up'>
            <h6 className='fs-5 fw-light'>Overview Monthly Earning</h6>
            <Sellchart />
          </div>
          <div className='col-md-3 offset-md-1 bg-light' data-aos='fade-up'>
            <h6 className='fs-5 fw-light'>Customer who bought products</h6>
            <PiChart />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className='row box3 mt-5'>
        <div className='col-md-12 border' style={{ marginTop: "50px" }} data-aos='fade-up'>
          <TableData />
        </div>
      </div>

      {/* Banners */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-5 mt-5'>
            <img src={img1} alt='Workspace setup' style={{ height: "100%", width: "100%" }} data-aos='fade-up' />
          </div>
          <div className='col-md-5 offset-md-1 mt-5' data-aos='fade-up'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-5 offset-md-1 mt-5' data-aos='fade-up'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </div>
          <div className='col-md-5 mt-5'>
            <img src={img2} alt='Analytics chart' style={{ height: "100%", width: "100%" }} data-aos='fade-up' />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Footer1 />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
