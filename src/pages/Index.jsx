import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Voice Transcript Manager</h1>
      <p className="mb-4">Manage your voice transcripts efficiently.</p>
      <Link to="/dashboard" className="text-blue-500 underline">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default Index;