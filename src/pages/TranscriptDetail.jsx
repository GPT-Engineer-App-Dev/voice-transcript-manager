import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TranscriptDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Transcript Detail</h1>
      <Card>
        <CardHeader>
          <CardTitle>Transcript Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Full text of the transcript will be displayed here.</p>
        </CardContent>
      </Card>
      <div className="flex space-x-2">
        <Button>Edit</Button>
        <Button variant="outline">Download</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
  );
}

export default TranscriptDetail;