import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transcripts</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No recent transcripts available.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <Link to="/upload" className="text-blue-500 underline">
            Upload a new audio file
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transcription Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No recent transcription jobs available.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;