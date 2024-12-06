import "../App";
import fc1 from "../images/FeaturesCard1.png";
import fc2 from "../images/FeaturesCard2.png";
import fc3 from "../images/FeaturesCard3.png";

const Features = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h1>
            ميزاتنا
            <span className="primary-color marhey-regular"> التفاعلية </span>
          </h1>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-sm-3 fc-position">
              <img src={fc1} width={260} alt=""></img>
              <div className="fc-text-position-65">
                <h3 className="marhey-regular"> اختبارات ممتعة</h3>
                <p>اختبر فهم طفلك مع اختبارات قصيرة</p>
              </div>
            </div>
            <div className="col-sm-3 fc-position">
              <img src={fc2} width={260} alt=""></img>
              <div className="fc-text-position-65 text-light">
                <h3 className="marhey-regular"> أنشطة إبداعية</h3>
                <p>اكتشف الأنشطة الممتعة مثل التلوين والعلوم</p>
              </div>
            </div>
            <div className="col-sm-3 fc-position">
              <img src={fc3} width={260} alt=""></img>
              <div className="fc-text-position-65">
                <h3 className="marhey-regular"> تعلم مع الألعاب</h3>
                <p>تعلم شيئًا جديدًا أثناء لعب أطفالك للألعاب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
