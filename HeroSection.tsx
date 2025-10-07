import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background"
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Transform Your Reality
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
          Manifest Your Desires with{" "}
          <span className="text-primary">Divine Wisdom</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Create personalized visualizations inspired by Neville Goddard and affirmations based on Florence Scovel Shinn's teachings. Begin your 30-day journey to transformation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 h-auto"
            onClick={onGetStarted}
            data-testid="button-get-started"
          >
            Begin Your Journey
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-6 h-auto backdrop-blur-sm"
            data-testid="button-learn-more"
          >
            Learn the Principles
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">
              Visualizations
            </div>
            <p className="text-sm text-muted-foreground">
              Neville Goddard's SATS technique
            </p>
          </div>
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">
              Affirmations
            </div>
            <p className="text-sm text-muted-foreground">
              Florence Scovel Shinn's principles
            </p>
          </div>
          <div>
            <div className="text-3xl font-serif font-semibold text-primary mb-2">
              30-Day Programs
            </div>
            <p className="text-sm text-muted-foreground">
              Structured transformation journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
