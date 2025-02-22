import { useState, useEffect } from "react";

const QuizCard = ({ question, onNext, questionNumber }) => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [numericAnswer, setNumericAnswer] = useState(""); // For integer-type questions
  const optionLabels = ["A", "B", "C", "D"];

  // Reset when a new question appears
  useEffect(() => {
    setSelected(null);
    setFeedback("");
    setNumericAnswer(""); // Reset numeric input on question change
    setTimeLeft(30); // Reset timer when question changes
  }, [question]);

  // Timer Effect
  useEffect(() => {
    if (timeLeft === 0) {
      onNext(false); // Automatically move to next question when time runs out
      return;
    }

    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]); // Runs when `timeLeft` changes

  const handleAnswer = (answer) => {
    setSelected(answer);

    // Get correct answer in case of MCQ
    const correctAnswer =
      question.type === "MCQ"
        ? question.options["ABCD".indexOf(question.correct)]
        : question.correct;

    const isCorrect = answer.toString().trim() === correctAnswer.toString().trim();
    setFeedback(isCorrect ? "✅ Correct!" : "❌ Wrong!");

    setTimeout(() => onNext(isCorrect), 1000);
  };

  return (
    <div className="card shadow-lg border-primary mb-4">
      <div className="card-body text-center">
        
        <div className="d-flex justify-content-between">
          <h3 className="card-title text-primary">Q{questionNumber}: {question.text}</h3>
        </div>

        {/* Render MCQ Options */}
        {question.type === "MCQ" ? (
          <div className="row row-cols-2 g-2 mt-3">
            {question.options.map((opt, i) => (
              <div className="col" key={i}>
                <button
                  className={`btn w-100 mb-3 ${
                    selected === opt
                      ? opt === question.options["ABCD".indexOf(question.correct)]
                        ? "btn-success" // Correct Answer: Green
                        : "btn-danger" // Wrong Answer: Red
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => handleAnswer(opt)}
                  disabled={selected !== null} // Disable after selection
                >
                  <strong>{optionLabels[i]}.</strong> {opt}
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Render Integer-Type Input
          <div className="mt-3">
            <input
              type="text"
              className="form-control text-center"
              value={numericAnswer}
              onChange={(e) => setNumericAnswer(e.target.value)}
              placeholder="Enter your answer"
            />
            <button
              className="btn btn-success mt-3"
              onClick={() => handleAnswer(numericAnswer)}
              disabled={numericAnswer === ""}
            >
              Submit Answer
            </button>
          </div>
        )}

        {/* Feedback Message */}
        <p className={`mt-3 fs-5 fw-bold ${feedback.includes("✅") ? "text-success" : "text-danger"}`}>
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default QuizCard;
