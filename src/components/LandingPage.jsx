import React from "react";
import logo from "../Logo.png";
import img1 from "../images/Element4.png";
import img2 from "../images/Element6.png";
import img3 from "../images/Element7.png";
import img4 from "../images/Sticker.png";
import Features from "./Features";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const LandingPage = () => {
  return (
    <>
      <MainLayout>
        <div className="container text-center p-5 my-5 main-container">
          <h1>المكان الأفضل والأمتع </h1>
          <h1>
            <span className="primary-color marhey-bold"> للتعلم </span>و
            <span className="secondary-color marhey-bold"> اللعب </span>
            للأطفال
          </h1>
          <p className="pt-3">
            اكتشف العديد من أنشطة التعلم الممتعة والتفاعلية لدعم نمو طفلك وعملية
            التعلم
          </p>
          <img className="img2-position" src={img1} width={150} alt=""></img>
          <img className="img1-position" src={img2} width={150} alt=""></img>
          <img className="img3-position" src={img3} width={100} alt=""></img>
          <img className="img4-position" src={img4} width={120} alt=""></img>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <Link to="/activities" className="nav-link">
              <div
                className="rounded rounded-5 p-3 text-center text-light primary-color-background d-flex justify-content-center align-content-center"
                style={{
                  width: "150px",
                  height: "55px",
                  display: "inline-block",
                }}
              >
                <h5> إبدأ الآن</h5>
                <i className="bi bi-arrow-left-short  fs-5 p-1 me-2 icon-with-circle text-center"></i>
              </div>
            </Link>
          </div>

          <div className="space-100" />
          <Features />

          <div className="space-100" />
          <ContactUs />

          <div className="container">
            <div className="row">
              <div className="col">
                <div>
                  <img
                    src={logo}
                    width={35}
                    alt="logo"
                    className="mobile-visible"
                  />
                  <h6 className="mx-2 pt-3 text-dark marhey-regular">
                    WonderKids
                  </h6>
                </div>

                <div>
                  <ul className="d-inlinelist-inline">
                    <li className="list-inline-item">
                      <div
                        className="rounded rounded-circle border border-1 p-2 "
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="bi bi-instagram primary-color"></i>
                      </div>
                    </li>

                    <li className="list-inline-item">
                      <div
                        className="rounded rounded-circle border border-1 p-2 m-2 "
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="bi bi-facebook primary-color"></i>
                      </div>
                    </li>

                    <li className="list-inline-item">
                      <div
                        className="rounded rounded-circle border border-1 p-2 m-2 "
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="bi bi-whatsapp primary-color"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default LandingPage;
