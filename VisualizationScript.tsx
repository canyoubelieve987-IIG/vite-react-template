import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";

interface VisualizationScriptProps {
  script: string;
}

export function VisualizationScript({ script }: VisualizationScriptProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Eye className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">
            Your Neville Goddard Visualization
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Practice this State Akin to Sleep (SATS) technique before bed
        </p>
      </CardHeader>
      <CardContent>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="font-serif text-lg leading-relaxed whitespace-pre-line">
            {script}
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Practice Instructions:</strong> As you lie in bed, enter a drowsy state. Visualize this scene in first person, engaging all your senses. Feel the reality of it. Repeat nightly until it feels natural.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
