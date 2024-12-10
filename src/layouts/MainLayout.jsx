import React from "react";
import "../App";
import logo from "../Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="navbar App-navbar ">
          <div className="container px-3 ">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={logo}
                width={35}
                alt="logo"
                className="mobile-visible"
              />
              <h6 className="mx-2 pt-3 text-dark marhey-regular">WonderKids</h6>
            </div>

            <div className="pt-3 d-flex align-items-start justify-content-start">
              <ul className="list-inline">
                <li className="list-inline-item rounded rounded-5 px-3 py-1 text-center primary-color-background">
                  <Link to="/" className="nav-link">
                    الرئيسية
                  </Link>
                </li>

                <li className="list-inline-item rounded rounded-5 px-3 py-1 text-center primary-color-background">
                  <Link to="/activities" className="nav-link">
                    الفعاليات
                  </Link>
                </li>
                <li className="list-inline-item rounded rounded-5 px-3 py-1 me-2 text-center primary-color-background">
                  <Link to="/aboutus" className="nav-link">
                    عن موقعنا
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-center align-items-center rounded rounded-5 p-2 text-center primary-color-background">
              <a
                href={`mailto:hadeel-4102@outlook.com`}
                style={{ textDecoration: "none", color: "white" }}
              >
                تواصل معنا
              </a>
              <i className="bi bi-envelope-fill p-1 me-2 icon-with-circle text-center"></i>
            </div>
          </div>
        </nav>
      </header>

      <main className="App-main">{children}</main>

      <footer></footer>
    </>
  );
};

export default MainLayout;
