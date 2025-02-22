import { useState, useEffect } from "react";
import { saveAttempt } from "../utils/indexedDB";
import { useNavigate } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import sampleQuiz from "../utils/sampleQuiz.json";

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [startTime, setStartTime] = useState(Date.now());
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  // ⏳ Timer Logic: Moves to next question if time runs out
  useEffect(() => {
    if (timer === 0 && !quizCompleted) {
      handleNext(false);
    }
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer, quizCompleted]);

  const handleNext = (isCorrect) => {
    setScore((prev) => (isCorrect ? prev + 1 : prev));

    if (index + 1 < sampleQuiz.length) {
      setIndex((prev) => prev + 1);
      setTimer(30);
    } else {
      setQuizCompleted(true);
      const timeTaken = Math.round((Date.now() - startTime) / 1000);
      saveAttempt({
        score: score + (isCorrect ? 1 : 0),
        total: sampleQuiz.length,
        time: timeTaken,
        date: new Date(),
      });
    }
  };

  const handleReattempt = () => {
    setIndex(0);
    setScore(0);
    setTimer(30);
    setStartTime(Date.now());
    setQuizCompleted(false);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      {!quizCompleted ? (
        <div className="card p-4 shadow-lg border-0">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="fw-bold text-black">
              Question {index + 1} / {sampleQuiz.length}
            </h3>
            <span className="badge bg-danger fs-6">⏳ Time left: {timer}s</span>
          </div>
          <QuizCard
            question={sampleQuiz[index]}
            questionNumber={index + 1}
            onNext={handleNext}
          />
        </div>
      ) : (
        <div className="card text-center border-success shadow-lg p-4">
          <h2 className="fs-3 fw-bold text-success">🎉 Quiz Completed!</h2>
          <p className="fs-5">✅ Your Score: {score}/{sampleQuiz.length}</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="/history" className="btn btn-outline-primary">View History</a>
            <button onClick={handleReattempt} className="btn btn-danger">Reattempt Quiz</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
