import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const manifestationSchema = z.object({
  desire: z.string().min(10, "Please describe your desire in at least 10 characters"),
  currentSituation: z.string().min(10, "Please describe your current situation"),
  specificGoal: z.string().min(5, "Please specify your goal"),
});

type ManifestationFormData = z.infer<typeof manifestationSchema>;

interface ManifestationFormProps {
  onSubmit: (data: ManifestationFormData) => void;
}

export function ManifestationForm({ onSubmit }: ManifestationFormProps) {
  const form = useForm<ManifestationFormData>({
    resolver: zodResolver(manifestationSchema),
    defaultValues: {
      desire: "",
      currentSituation: "",
      specificGoal: "",
    },
  });

  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-serif">
              Create Your Manifestation Practice
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Share your desires and we'll create personalized visualizations and affirmations
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="desire"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">What do you desire to manifest?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I desire a fulfilling career that allows me to use my creative talents and earn abundant income..."
                          className="min-h-[120px] resize-none"
                          data-testid="input-desire"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Be specific and describe what you want as if it's already yours
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currentSituation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Your current situation</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I am currently working in a job that doesn't fulfill me..."
                          className="min-h-[100px] resize-none"
                          data-testid="input-current-situation"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Briefly describe where you are now
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specificGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Specific goal or milestone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Earn $100,000 per year doing creative work"
                          data-testid="input-goal"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        One clear, measurable outcome
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base"
                  data-testid="button-create-practice"
                >
                  Create My Practice
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
