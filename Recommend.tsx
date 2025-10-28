import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RecommendationData {
  crop: string;
  score: number;
  timestamp: string;
  inputs: {
    n: number;
    p: number;
    k: number;
    temp: number;
    humidity: number;
    ph: number;
    rainfall: number;
  };
}

const Recommend = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [recommendation, setRecommendation] = useState<RecommendationData | null>(null);
  const [history, setHistory] = useState<RecommendationData[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const crops = ["Rice", "Wheat", "Cotton", "Sugarcane", "Maize", "Pulses", "Tea", "Coffee"];
    const randomCrop = crops[Math.floor(Math.random() * crops.length)];
    const randomScore = (Math.random() * 30 + 70).toFixed(1);

    const newRecommendation: RecommendationData = {
      crop: randomCrop,
      score: parseFloat(randomScore),
      timestamp: new Date().toLocaleString(),
      inputs: {
        n: parseFloat(formData.nitrogen),
        p: parseFloat(formData.phosphorus),
        k: parseFloat(formData.potassium),
        temp: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
      },
    };

    setRecommendation(newRecommendation);
    setHistory([newRecommendation, ...history]);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-3xl font-bold">Enter Soil & Weather Data</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Soil Nutrients */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Soil Nutrients</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nitrogen">Nitrogen (N)</Label>
                        <Input
                          id="nitrogen"
                          type="number"
                          min="0"
                          required
                          value={formData.nitrogen}
                          onChange={(e) => handleInputChange("nitrogen", e.target.value)}
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phosphorus">Phosphorus (P)</Label>
                        <Input
                          id="phosphorus"
                          type="number"
                          min="0"
                          required
                          value={formData.phosphorus}
                          onChange={(e) => handleInputChange("phosphorus", e.target.value)}
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="potassium">Potassium (K)</Label>
                        <Input
                          id="potassium"
                          type="number"
                          min="0"
                          required
                          value={formData.potassium}
                          onChange={(e) => handleInputChange("potassium", e.target.value)}
                          className="border-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Atmospheric Conditions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-secondary">Atmospheric Conditions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="temperature">Temperature (°C)</Label>
                        <Input
                          id="temperature"
                          type="number"
                          required
                          value={formData.temperature}
                          onChange={(e) => handleInputChange("temperature", e.target.value)}
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="humidity">Humidity (%)</Label>
                        <Input
                          id="humidity"
                          type="number"
                          min="0"
                          max="100"
                          required
                          value={formData.humidity}
                          onChange={(e) => handleInputChange("humidity", e.target.value)}
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ph">Soil pH</Label>
                        <Input
                          id="ph"
                          type="number"
                          min="0"
                          max="14"
                          step="0.1"
                          required
                          value={formData.ph}
                          onChange={(e) => handleInputChange("ph", e.target.value)}
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rainfall">Rainfall (mm)</Label>
                        <Input
                          id="rainfall"
                          type="number"
                          min="0"
                          required
                          value={formData.rainfall}
                          onChange={(e) => handleInputChange("rainfall", e.target.value)}
                          className="border-2"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    Get Crop Recommendation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recommendation Output */}
            {recommendation && (
              <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-secondary/5 animate-fade-in">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="text-2xl font-bold text-center">Recommended Crop</h3>
                  <div className="text-center space-y-2">
                    <p className="text-5xl font-bold text-primary">{recommendation.crop}</p>
                    <p className="text-xl text-muted-foreground">
                      Match Score: <span className="font-semibold text-accent">{recommendation.score}%</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* History Column */}
          <div className="lg:col-span-1">
            <Card className="border-2 sticky top-20">
              <CardHeader className="bg-gradient-to-r from-secondary/10 to-primary/10">
                <CardTitle>Your Past Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ScrollArea className="h-[600px] pr-4">
                  {history.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">No history yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {history.map((item, index) => (
                        <Card key={index} className="border bg-card/50">
                          <CardContent className="pt-4 space-y-2">
                            <div className="flex justify-between items-start">
                              <p className="font-bold text-lg text-primary">{item.crop}</p>
                              <p className="text-sm text-accent font-semibold">{item.score}%</p>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
