import React, { useState } from "react";
import img5 from "../images/Element5.png";
import img6 from "../images/Element8.png";
import contact from "../images/Contact.png";

const ContactUs = () => {
  const [mailTitle, setMailTitle] = useState("");
  const [mailBody, setMailBody] = useState("");

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
                    type="email"
                    id="title"
                    className="form-control"
                    placeholder="العنوان"
                    onChange={(e) => setMailTitle(e.target.value)}
                  />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    id="body"
                    rows="4"
                    placeholder="الرسالة"
                    onChange={(e) => setMailBody(e.target.value)}
                  ></textarea>
                </div>
                <a
                  href={`mailto:hadeel-4102@outlook.com?subject=${mailTitle}&body=${mailBody}`}
                >
                  <button
                    data-mdb-ripple-init
                    type="button"
                    className="app-button mb-4"
                  >
                    إرسال
                  </button>
                </a>
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
                  bottom: "40px",
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
