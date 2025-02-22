import { useState, useEffect } from "react";
import { getAttempts } from "../utils/indexedDB";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    async function fetchHistory() {
      const attempts = await getAttempts();
      setHistory(attempts);
    }
    fetchHistory();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center fw-bold">📜 Quiz History</h2>

      {history.length === 0 ? (
        <p className="text-muted text-center">No past attempts yet.</p>
      ) : (
        <ul className="list-group mt-4  ">
          {history.map((attempt, i) => (
            <li
              key={i}
              className="list-group-item border border-primary rounded p-3 shadow-sm mb-3"
            >
              <p>
                📅 <strong>Date:</strong>{" "}
                {new Date(attempt.date).toLocaleString()}
              </p>
              <p>
                ✅ <strong>Score:</strong> {attempt.score} / {attempt.total}
              </p>
              <p>
                ⏳ <strong>Time Taken:</strong> {attempt.time}s
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Close Button to Redirect to Landing Page */}
      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          ❌ Close
        </button>
      </div>
    </div>
  );
};

export default HistoryPage;
