import MainLayout from "../layouts/MainLayout";
import fc1 from "../images/FeaturesCard1.png";
import fc3 from "../images/FeaturesCard3.png";
import { Link } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";

const ActivitiesPage = () => {
  return (
    <>
      <MainLayout>
        <div className="container pt-3">
          <div className="row">
            <div className="col-sm-3">
              <LeaderBoard />
            </div>
            <div className="col-sm-9 ">
              <div className="row my-4 me-5">
                <div className="col">
                  <h3>
                    ابدأ وأكتشف المتعة مع{" "}
                    <span className="marhey-bold primary-color">اختبارات </span>
                    ممتعة أو{" "}
                    <span className="marhey-bold primary-color">ألعاب </span>
                    تعليمية
                  </h3>
                </div>
              </div>
              <div className="row mt-3 me-5">
                <div className="col-sm-4 fc-position ">
                  <Link to="/quiz" className="nav-link">
                    <img src={fc1} width={300} alt="" />
                    <h3 className="fc-text-position-50 marhey-bold">
                      ابدأ الاختبار
                    </h3>
                  </Link>
                </div>

                <div className="col-sm-4 fc-position ">
                  <Link to="/quiz" className="nav-link">
                    <img src={fc3} width={300} alt="" />
                    <h3 className="fc-text-position-50 marhey-bold">
                      ابدأ التحدي
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ActivitiesPage;
