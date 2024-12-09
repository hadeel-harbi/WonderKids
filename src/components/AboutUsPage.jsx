import MainLayout from "../layouts/MainLayout";
import img from "../images/Element9.png";
import logo from "../Logo.png";

const AboutUsPage = () => {
  return (
    <>
      <MainLayout>
        <div className="container text-center m-5 p-5">
          <div className="row">
            <div className="col-sm-6 text-end">
              <h2 className="m-2">عن موقعنا</h2>
              <h5>
                موقع Wonder Kids يهدف إلى تطوير ذكاء الأطفال بطريقة تفاعلية
                <br />
                عن طريق مسابقات وأنشطة تعليمية وممتعة
              </h5>

              <div className="space-100" />
              <h4>تنفيذ وبرمجة:</h4>
              <h5>هديل الحربي</h5>
            </div>
            <div className="col-sm-6">
              <img src={img} width={300} alt="" />
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div>
                <img src={logo} width={35} alt="logo" />
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
      </MainLayout>
    </>
  );
};

export default AboutUsPage;
