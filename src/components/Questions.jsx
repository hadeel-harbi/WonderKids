import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionsList from "../QuestionsList";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const Questions = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const username = useSelector((state) => state.username);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = QuestionsList[currentQuestionIndex];

  const answerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion.correctAnswer);
    if (answer === currentQuestion.correctAnswer) {
      dispatch({ type: "CORRECT" });
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const scoreAlert = () => {
    swal({
      title: "إنتهيت الإختبار",
      text: `درجتك : ${score} /50`,
    });
    dispatch({
      type: "NEWSCORE",
      payload: [{ score: score, username: username }],
    });
  };

  return (
    <>
      <h3 className="mb-5">{currentQuestion.question}</h3>

      {currentQuestion.choices.map((choice, index) => (
        <button
          key={index}
          className={
            selectedAnswer === choice
              ? isCorrect
                ? "correct-button"
                : "wrong-button"
              : choice === currentQuestion.correctAnswer &&
                selectedAnswer !== null &&
                !isCorrect
              ? "correct-button"
              : "choice-button"
          }
          onClick={selectedAnswer ? () => {} : () => answerClick(choice)}
        >
          {choice}
        </button>
      ))}

      <div className="space-50"></div>
      <h4>
        {currentQuestionIndex + 1} / {QuestionsList.length}
      </h4>
      {currentQuestionIndex === QuestionsList.length - 1 ? (
        // finish button
        <Link to="/activities">
          <button className="next-button" onClick={scoreAlert}>
            إنتهاء
          </button>
        </Link>
      ) : (
        // next button
        <button
          className="next-button"
          onClick={nextQuestion}
          disabled={!selectedAnswer}
        >
          التالي
        </button>
      )}
    </>
  );
};

export default Questions;
//
