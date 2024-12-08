import React from "react";
import img5 from "../images/Element5.png";
import img6 from "../images/Element8.png";
import contact from "../images/Contact.png";

const ContactUs = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="container rounded rounded-5 primary-color-background m-5 p-5 ">
          <div className="row">
            <div className="col-sm-5 ">
              <h2 className="secondary-color marhey-regular">تواصل معنا</h2>
              <p className="text-light">كيف نستطيع مساعدتك؟</p>
              <form>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    id="form4Example1"
                    className="form-control"
                    placeholder="الاسم"
                  />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form4Example2"
                    className="form-control"
                    placeholder="الايميل"
                  />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    id="form4Example3"
                    rows="4"
                    placeholder="الرسالة"
                  ></textarea>
                </div>

                <button
                  data-mdb-ripple-init
                  type="button"
                  className="app-button mb-4"
                >
                  إرسال
                </button>
              </form>
            </div>
            <div className="col" style={{ position: "relative" }}>
              <img
                src={img5}
                width={100}
                alt=""
                style={{ position: "absolute", left: "50px", top: "0px" }}
              ></img>
              <img
                src={img6}
                width={100}
                alt=""
                style={{ position: "absolute", left: "0px", bottom: "0px" }}
              ></img>
              <img
                src={contact}
                width={450}
                alt=""
                style={{
                  position: "absolute",
                  left: "120px",
                  bottom: "60px",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
