import { useState, useEffect } from "react";
import "./MiniQuiz.css";

function MiniQuiz() {
  const quizData = [
    {
      id: 1,
      questionText: "What is the full meaning HTML?",
      answerOption: [
        "Happy text Mark up",
        "Hyper Text Mark Up",
        "Hyper Turn Make Up",
        "Happy Take Mood Up",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      questionText: "What year was React first released?",
      answerOption: ["2013", "2017", "2015", "2011"],
      correctAnswer: 0,
    },
    {
      id: 3,
      questionText: "What does CSS stand for?",
      answerOption: [
        "computer style sheet",
        "creative style system",
        "cascading system styling",
        "cascading style sheet",
      ],
      correctAnswer: 3,
    },
    {
      id: 4,
      questionText: "What year was JavaScript introduced?",
      answerOption: ["1955", "1890", "1995", "2001"],
      correctAnswer: 2,
    },
    {
      id: 5,
      questionText: "Who and when was Tailwind CSS introduced?",
      answerOption: [
        "1995 Brendan Eich",
        "2017 Adam Wathan",
        "1991 Tim Berners-Lee",
        "1996 Hakon Wium Lie",
      ],
      correctAnswer: 1,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    console.log(`Now showing question #${currentQuestionIndex + 1}`);
  }, [currentQuestionIndex]);

  const handleAnswerClick = (selectedIndex) => {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {!quizFinished ? (
        <div>
          <h2 className="question-counter">
            Question {currentQuestionIndex + 1} of {quizData.length}
          </h2>

          <h3 className="question-text">
            {quizData[currentQuestionIndex].questionText}
          </h3>

          <div>
            {quizData[currentQuestionIndex].answerOption.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="answer-btn"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="result-title">
            Weldone! Quiz Finished. Let's see what you got
          </h2>

          <p className="score-text">
            You scored <strong>{score}</strong> out of {quizData.length}
          </p>

          <button onClick={restartQuiz} className="answer-btn">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default MiniQuiz;
