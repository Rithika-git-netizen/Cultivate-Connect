import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Navigation />
      
      <div className="container py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Bridging Tradition with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We are dedicated to empowering Indian farmers by combining centuries of agricultural wisdom 
            with cutting-edge technology.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-8 space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize precision agriculture by making advanced crop recommendation technology 
                accessible to every farmer in India, helping them make informed decisions that lead to 
                better yields and sustainable farming practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-8 space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted agricultural technology platform in India, fostering a community 
                where traditional farming knowledge and modern science work hand in hand to create a 
                prosperous and sustainable future for Indian agriculture.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 text-center hover:border-primary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Farmer First</h3>
                <p className="text-muted-foreground">
                  Every decision we make prioritizes the wellbeing and success of our farming community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center hover:border-accent transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We promote farming practices that protect our environment for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center hover:border-secondary transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our technology to serve farmers better and more effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-8 space-y-6">
              <h2 className="text-3xl font-bold text-center">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Cultivate Connect was born from a simple observation: Indian farmers possess generations 
                  of invaluable agricultural knowledge, yet they often lack access to modern tools that could 
                  amplify their expertise.
                </p>
                <p>
                  Founded by a team of agricultural scientists, data engineers, and rural development experts, 
                  we set out to create a platform that respects traditional farming wisdom while leveraging 
                  advanced algorithms to provide precise, location-specific crop recommendations.
                </p>
                <p>
                  Today, we serve thousands of farmers across India, helping them optimize their crop choices 
                  based on real-time soil and weather data. Our journey has just begun, and we're committed 
                  to growing alongside the farmers we serve.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
