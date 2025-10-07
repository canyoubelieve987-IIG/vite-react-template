import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareQuote } from "lucide-react";

interface AffirmationCardsProps {
  affirmations: string[];
}

export function AffirmationCards({ affirmations }: AffirmationCardsProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <MessageSquareQuote className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">
            Your Florence Scovel Shinn Affirmations
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Speak these affirmations with conviction and faith
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {affirmations.map((affirmation, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
          >
            <p className="font-serif text-xl leading-relaxed text-center italic">
              "{affirmation}"
            </p>
          </div>
        ))}
        <div className="mt-6 p-4 rounded-lg bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">How to Use:</strong> Speak these affirmations aloud with feeling and conviction. Repeat them throughout your day, especially upon waking and before sleep. Feel the truth of the words as you speak them.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
