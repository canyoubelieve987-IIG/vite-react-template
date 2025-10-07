import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MessageSquareQuote, Calendar } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Eye,
      title: "Neville Goddard Visualizations",
      description: "Experience the power of the State Akin to Sleep (SATS) technique. Create vivid, sensory-rich mental scenes that impress your desires upon your subconscious mind.",
      principles: [
        "First-person perspective",
        "All five senses engaged",
        "Living from the end result",
      ],
    },
    {
      icon: MessageSquareQuote,
      title: "Florence Scovel Shinn Affirmations",
      description: "Harness the vibratory power of words with affirmations rooted in divine order, abundance, and the law of perfect self-expression.",
      principles: [
        "Divine right declarations",
        "Non-resistance to good",
        "Perfect faith activation",
      ],
    },
    {
      icon: Calendar,
      title: "30-Day Practice Programs",
      description: "Transform new thoughts into subconscious beliefs through consistent daily practice. Each program progressively deepens your manifestation practice.",
      principles: [
        "Daily guided practices",
        "Progressive deepening",
        "Habit formation support",
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Your Path to Manifestation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combine timeless spiritual wisdom with modern practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {principle}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
