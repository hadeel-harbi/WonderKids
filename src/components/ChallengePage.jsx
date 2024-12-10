import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Background from "./Background";
import puzzleList from "../PuzzlesList";

const ChallengePage = () => {
  const [currentPuzzleIndex, setcurrentPuzzleIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentPuzzle = puzzleList[currentPuzzleIndex];

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setcurrentPuzzleIndex(currentPuzzleIndex + 1);
  };

  return (
    <>
      <div className="quiz-size primary-color-background ">
        <div className="row">
          <div className="col">
            <Background />
            <div className="quiz-container text-center">
              <div className="row">
                <div className="col text-end mt-2 me-2">
                  {/* close button */}
                  <Link to="/activities">
                    <i className="bi bi-x-circle fs-4"></i>
                  </Link>
                </div>
              </div>

              <div>
                <h3> {currentPuzzle.question}</h3>
                <div className="row">
                  <div className="col">
                    <img
                      src={currentPuzzle.puzzleImage}
                      alt="puzzle"
                      border="0"
                      height={"250px"}
                      className="m-2 mobile-visible"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {currentPuzzle.choices.map((choice, index) => (
                      <button
                        key={index}
                        className={
                          selectedAnswer === choice.number
                            ? isCorrect
                              ? "correct-image"
                              : "wrong-image"
                            : choice.number === choice.correct &&
                              selectedAnswer !== null &&
                              !isCorrect
                            ? "correct-image"
                            : "choice-image"
                        }
                        onClick={
                          selectedAnswer
                            ? () => {}
                            : () => {
                                setIsCorrect(choice.number === choice.correct);
                                setSelectedAnswer(choice.number);
                              }
                        }
                      >
                        <img
                          src={choice.image}
                          alt="puzzle"
                          border="0"
                          height={"70px"}
                          className="mobile-visible"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    {currentPuzzleIndex === puzzleList.length - 1 ? (
                      // finish button
                      <Link to="/activities">
                        <button className="app-button">إنتهاء</button>
                      </Link>
                    ) : (
                      <button
                        className="app-button"
                        onClick={nextQuestion}
                        disabled={!selectedAnswer}
                      >
                        التالي
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengePage;
