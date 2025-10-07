import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, TrendingUp } from "lucide-react";

interface ThirtyDayPromptProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateProgram: () => void;
}

export function ThirtyDayPrompt({ open, onOpenChange, onCreateProgram }: ThirtyDayPromptProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif text-center">
            Create a 30-Day Practice Program?
          </DialogTitle>
          <DialogDescription className="text-base text-center mt-4">
            Transform this practice into a progressive 30-day journey to cement your new beliefs into your subconscious mind
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 mt-1">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Progressive Daily Practices</h4>
              <p className="text-sm text-muted-foreground">
                Each day builds upon the last, gradually deepening your visualization and affirmation practice
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 mt-1">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Subconscious Reprogramming</h4>
              <p className="text-sm text-muted-foreground">
                Consistent repetition impresses new patterns onto your subconscious mind, as taught by both Goddard and Shinn
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 mt-1">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Track Your Journey</h4>
              <p className="text-sm text-muted-foreground">
                Monitor your progress and witness the transformation as your new thoughts become your reality
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
            data-testid="button-skip-30day"
          >
            Maybe Later
          </Button>
          <Button
            onClick={() => {
              onCreateProgram();
              onOpenChange(false);
            }}
            className="w-full sm:w-auto"
            data-testid="button-create-30day"
          >
            Yes, Create My 30-Day Program
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
