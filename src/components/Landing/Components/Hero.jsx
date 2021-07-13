import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import VR_User from '../../../assests/img/VR-user.jpg';
// import Headphone_User from '../../../assests/img/headphone-user.jpg';
// import Smartphone from '../../../assests/img/smartphone.jpg';
import Camera_360 from '../../../assests/img/camera-360.png';
import Earbuds from '../../../assests/img/earbuds.png';
import Smartphone_Small from '../../../assests/img/smartphone.png';


const Hero = () => {

    return (
        <>
        <section className="bg-secondary py-4 pt-md-5">
  <div className="container py-xl-2">
    <div className="row">
      {/* Slider: ensure you learn about React carousel and insert it into this part of the page   */}
      <div className="col-xl-9 pt-xl-4 order-xl-2">
          <div className="tns-carousel">
          <div className="tns-outer">
                  <div>
                      <div className="row align-items-center">
                          <div className="col-md-6 order-md-2">
                              <img className="d-block mx-auto" src={VR_User} alt="VR Collection" />
                        </div>
                          <div
                              className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
                              <h2 className="fw-light pb-1 from-start">Explore the best</h2>
                              <h1 className="display-4 from-start delay-1">VR Collection</h1>
                              <h5 className="fw-light pb-3 from-start delay-2">on the market</h5>
                              <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                                  <Link className="btn btn-primary btn-shadow" to="/shop">Shop Now
                                    <FiArrowRightCircle className="ms-2 me-n1" />
                                    </Link>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Banner group*/}
      <div className="col-xl-3 order-xl-1 pt-4 mt-3 mt-xl-0 pt-xl-0">
        <div className="table-responsive" data-simplebar>
          <div className="d-flex d-xl-block">
              <Link className="d-flex align-items-center bg-faded-success rounded-3 pt-2 ps-2 mb-4" to="#" style={{minWidth: '16rem'}}>
                    <img src={Earbuds} width={125} alt="Banner" />
                <div className="py-4 px-2">
                    <h5 className="mb-2"><span className="fw-light">Catch Big</span><br />Deals <span className="fw-light">on</span><br />Earbuds</h5>
                    <div className="text-success fs-sm">Shop now <FiArrowRightCircle className="fs-xs ms-1" /></div>
                </div>
              </Link>
              <Link className="d-flex align-items-center bg-faded-warning rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0" to="#" style={{minWidth: '16rem'}}>
                  <img src={Smartphone_Small} width={125} alt="Smartphone" />
                <div className="py-4 px-2">
                    <h5 className="mb-2">
                        <span className="fw-light">Top Rated</span><br />Gadgets<br /><span className="fw-light">are on </span>Sale
                    </h5>
                    <div className="text-warning fs-sm">Shop now <FiArrowRightCircle className="fs-xs ms-1" /></div>
                </div>
              </Link>
              <Link className="d-flex align-items-center bg-faded-info rounded-3 pt-2 ps-2 mb-4 me-4 me-xl-0" to="#" style={{minWidth: '16rem'}}>
                  <img src={Camera_360} width={125} alt="Camera 360" />
                <div className="py-4 px-2">
                    <h5 className="mb-2"><span className="fw-light">Next Gen</span><br />Video <span className="fw-light">with</span><br />360 Cam</h5>
                    <div className="text-info fs-sm">Shop now <FiArrowRightCircle className="fs-xs ms-1" /></div>
                </div>
              </Link>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    )
}

export default Hero;
