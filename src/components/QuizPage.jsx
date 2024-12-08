import { Link } from "react-router-dom";
import Questions from "./Questions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Background from "./Background";

const QuizPage = () => {
  const dispatch = useDispatch();

  const [start, setStart] = useState(null);
  const [username, setUsername] = useState(null);

  const handleStartClick = () => {
    setStart(true);
    dispatch({ type: "RESET" });
    dispatch({
      type: "USERNAME",
      payload: username,
    });
  };

  return (
    <>
      <div className="quiz-size primary-color-background ">
        <div className="row">
          <div className="col">
            <Background />
            <div className="quiz-container text-center p-2">
              <div className="row">
                <div className="col text-end m-2">
                  {/* close button */}
                  <Link to="/activities">
                    <i className="bi bi-x-circle fs-4"></i>
                  </Link>
                </div>
              </div>
              {start ? (
                <Questions />
              ) : (
                <div className="d-flex justify-content-center p-5">
                  <div className="col-sm-5">
                    <h3 className="mt-5 p-1">أدخل إسمك</h3>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                    />

                    <button
                      onClick={(e) => handleStartClick()}
                      className="app-button mt-5"
                    >
                      ابدأ الاختبار
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
