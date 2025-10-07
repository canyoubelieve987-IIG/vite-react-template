import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThirtyDayCalendarProps {
  currentDay: number;
  completedDays: Set<number>;
  onDayClick: (day: number) => void;
}

export function ThirtyDayCalendar({ currentDay, completedDays, onDayClick }: ThirtyDayCalendarProps) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const getProgressPercentage = () => {
    return Math.round((completedDays.size / 30) * 100);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-2xl font-serif">
              Your 30-Day Journey
            </CardTitle>
          </div>
          <Badge variant="secondary" className="text-base px-4 py-1">
            {getProgressPercentage()}% Complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-3">
          {days.map((day) => {
            const isCompleted = completedDays.has(day);
            const isCurrent = day === currentDay;
            const isUpcoming = day > currentDay;

            return (
              <button
                key={day}
                onClick={() => onDayClick(day)}
                className={cn(
                  "relative aspect-square rounded-lg border-2 flex flex-col items-center justify-center transition-all hover-elevate",
                  isCompleted && "border-green-500 bg-green-500/10",
                  isCurrent && "border-primary bg-primary/10 ring-2 ring-primary/20",
                  isUpcoming && "border-border bg-muted/30",
                  !isCompleted && !isCurrent && !isUpcoming && "border-border"
                )}
                data-testid={`day-${day}`}
              >
                <span className="text-sm font-semibold mb-1">Day {day}</span>
                {isCompleted && (
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                )}
                {isCurrent && (
                  <Circle className="h-4 w-4 text-primary fill-primary" />
                )}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
