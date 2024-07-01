import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function Transcripts() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Transcripts</h1>
      <div className="flex justify-between items-center">
        <Input placeholder="Search transcripts..." className="max-w-xs" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Transcripts</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No transcripts available.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Transcripts;