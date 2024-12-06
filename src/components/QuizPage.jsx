import img1 from "../images/Element2.png";
import img2 from "../images/Element3.png";
import img3 from "../images/Element5.png";
import img4 from "../images/Element8.png";
import img5 from "../images/Element1.png";
import { Link } from "react-router-dom";
import Questions from "./Questions";

const QuizPage = () => {
  return (
    <>
      <div className="quiz-size primary-color-background ">
        <div className="row">
          <div className="col">
            <img
              src={img1}
              width={100}
              alt=""
              style={{
                position: "absolute",
                top: "50px",
                left: "80px",
                opacity: "30%",
              }}
            />
            <img
              src={img2}
              width={100}
              alt=""
              style={{ position: "absolute", top: "80px", right: "150px" }}
            />
            <img
              src={img3}
              width={100}
              alt=""
              style={{ position: "absolute", bottom: "100px", right: "50px" }}
            />
            <img
              src={img4}
              width={100}
              alt=""
              style={{
                position: "absolute",
                bottom: "200px",
                left: "120px",
                opacity: "50%",
              }}
            />
            <img
              src={img5}
              width={1500}
              alt=""
              style={{ position: "absolute", top: "0px", right: "0px" }}
            />

            <div
              className="text-center quiz-position p-2"
              style={{
                backgroundColor: "white",
                width: "60%",
                height: "80%",
              }}
            >
              <div className="row">
                <div className="col text-end">
                  <Link to="/activities">
                    <div className="p-3">
                      <i class="bi bi-x-circle fs-4"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <Questions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
