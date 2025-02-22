import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="text-center vh-100 d-flex flex-column align-items-center justify-content-center">
    <h1 className="text-primary fw-bold display-4">🎯 Welcome to the Quiz!</h1>
    <p className="fs-5 text-muted">Test your knowledge and challenge yourself.</p>

    {/* Instructions Section */}
    <div className="card text-start shadow-lg p-4 mt-4" style={{ maxWidth: "600px", textAlign: "justify" }}>
      <h4 className="fw-bold text-dark mb-3">📜 Instructions:</h4>

      <div className="d-flex align-items-center mb-2">
        
        <p className="mb-0">✅ For multiple-choice questions, select the one best answer (A, B, C, or D).</p>
      </div>

      <div className="d-flex align-items-center mb-2">
       
        <p className="mb-0">✅ For integer-type questions, write your numerical answer clearly.</p>
      </div>

      <div className="d-flex align-items-center mb-2">
       
        <p className="mb-0">🚫 No calculators unless specified.</p>
      </div>

      <div className="d-flex align-items-center">
        
        <p className="mb-0">⏳ You have <strong>30 seconds per question</strong> to complete this quiz.</p>
      </div>
    </div>

    {/* Start Quiz Button */}
    <Link to="/quiz">
      <button className="btn btn-success mt-4">Start Quiz</button>
    </Link>
  </div>
);

export default LandingPage;
