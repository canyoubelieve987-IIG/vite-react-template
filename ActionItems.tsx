import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface ActionItemsProps {
  actions: string[];
}

export function ActionItems({ actions }: ActionItemsProps) {
  const [completedActions, setCompletedActions] = useState<Set<number>>(new Set());

  const toggleAction = (index: number) => {
    const newCompleted = new Set(completedActions);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedActions(newCompleted);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <CheckCircle2 className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">
            Divine Action Steps
          </CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Non-resistant actions aligned with your manifestation
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-lg hover-elevate transition-colors cursor-pointer"
            onClick={() => toggleAction(index)}
            data-testid={`action-item-${index}`}
          >
            <Checkbox
              checked={completedActions.has(index)}
              className="mt-0.5"
              data-testid={`checkbox-action-${index}`}
            />
            <span
              className={`text-base flex-1 ${
                completedActions.has(index)
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              }`}
            >
              {action}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
