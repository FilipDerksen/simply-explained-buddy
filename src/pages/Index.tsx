import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Sparkles, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const examplePrompts = [
  "Quantum entanglement",
  "What is blockchain?",
  "Explain machine learning",
  "What does API mean?",
];

const mockExplanations: Record<string, string> = {
  "quantum entanglement": "Imagine you have two magic coins. When you flip one and it lands on heads, the other coin - no matter how far away - instantly becomes tails! That's kind of like quantum entanglement, where tiny particles can be connected and affect each other instantly, even when they're super far apart.",
  "blockchain": "Think of a blockchain like a notebook that everyone in class can see and write in, but nobody can erase what's already written. Every time someone adds something new, everyone gets a copy of the whole notebook. This makes it really hard to cheat or change what happened before!",
  "machine learning": "Imagine teaching your dog a new trick by giving it treats when it does the right thing. Machine learning is like that, but for computers! The computer tries different things, and when it gets the answer right, we tell it 'good job!' It keeps learning from what works and gets better and better, just like your dog learning tricks.",
  "api": "An API is like a waiter at a restaurant. You (your app) tell the waiter (the API) what you want from the kitchen (another app or service), and the waiter brings it back to you. You don't need to know how the kitchen works - the waiter handles everything!",
};

const Index = () => {
  const [input, setInput] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleExplain = async () => {
    if (!input.trim()) {
      toast({
        title: "Oops!",
        description: "Please enter something to explain",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Call the backend API
      const response = await fetch('http://localhost:3001/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get explanation');
      }

      const data = await response.json();
      setExplanation(data.explanation);
      
    } catch (error) {
      console.error('Error calling backend:', error);
      
      // Fallback to mock data if backend is not available
      const lowerInput = input.toLowerCase().trim();
      let result = mockExplanations[lowerInput];
      
      if (!result) {
        // Find a partial match
        const matchKey = Object.keys(mockExplanations).find(key => 
          lowerInput.includes(key) || key.includes(lowerInput)
        );
        result = matchKey 
          ? mockExplanations[matchKey]
          : `Sorry, I couldn't connect to the AI service. Please make sure the backend server is running. For now, try one of the example prompts above to see how it works!`;
      }
      
      setExplanation(result);
      
      // Show error toast
      toast({
        title: "Backend Connection Failed",
        description: "Using offline mode. Make sure the backend server is running.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setInput(example);
    setExplanation("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Explain It Like I'm 5</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Make Complex Simple
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Enter any jargon or complex topic, and we'll explain it in simple terms anyone can understand!
          </p>
        </div>

        {/* Example Prompts */}
        <div className="flex flex-wrap gap-2 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          {examplePrompts.map((prompt) => (
            <Button
              key={prompt}
              variant="outline"
              size="sm"
              onClick={() => handleExampleClick(prompt)}
              className="rounded-full hover:bg-primary/10 hover:border-primary transition-all"
            >
              {prompt}
            </Button>
          ))}
        </div>

        {/* Input Section */}
        <Card className="p-6 shadow-lg border-2 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-secondary" />
                What do you want explained?
              </label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type any complex term or concept here..."
                className="min-h-[120px] resize-none text-base focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <Button
              onClick={handleExplain}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                  Simplifying...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explain It!
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Result Section */}
        {explanation && (
          <Card className="p-6 shadow-lg border-2 border-secondary/20 bg-gradient-to-br from-card to-secondary/5 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-secondary font-medium">
                <Lightbulb className="w-5 h-5" />
                <span>Simple Explanation</span>
              </div>
              <p className="text-base leading-relaxed text-foreground">
                {explanation}
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
