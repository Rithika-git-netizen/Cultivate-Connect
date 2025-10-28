import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Sprout, Users, TrendingUp, Leaf } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">🌾 Agriculture Meets Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Empowering Indian Farmers with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Smart Agriculture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Harness the wisdom of tradition and the power of technology to maximize your harvest
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/recommend">
              <Button size="lg" className="text-lg px-8 h-14">
                Get Crop Recommendations
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Smart Recommendations</h3>
              <p className="text-muted-foreground">
                AI-powered crop suggestions based on soil and climate data
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl">Traditional Wisdom</h3>
              <p className="text-muted-foreground">
                Combining ancestral farming knowledge with modern science
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-xl">Increase Yield</h3>
              <p className="text-muted-foreground">
                Optimize your farming decisions for better productivity
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl">Community Driven</h3>
              <p className="text-muted-foreground">
                Join thousands of farmers across India growing together
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2">
          <CardContent className="py-16 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start making data-driven decisions today and watch your harvest flourish
            </p>
            <Link to="/recommend">
              <Button size="lg" className="text-lg px-8 h-14 mt-4">
                Start Now →
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
