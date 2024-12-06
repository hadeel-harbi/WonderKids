import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionsList from "../QuestionsList";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = QuestionsList[currentQuestionIndex];

  const answerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion.correctAnswer);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
                ? "correct-button" //green
                : "wrong-button" //red
              : choice === currentQuestion.correctAnswer &&
                selectedAnswer !== null &&
                !isCorrect
              ? "correct-button" //green
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
          <button className="next-button">إنتهاء</button>
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
