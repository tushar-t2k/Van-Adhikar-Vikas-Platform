import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-primary via-transparent to-earth-primary"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-card-foreground mb-2">10M+</div>
              <div className="text-muted-foreground">Forest families to be empowered</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-card-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Transparent & accountable</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-card-foreground mb-2">28</div>
              <div className="text-muted-foreground">States & Union Territories</div>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transform Forest Rights
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Into Real Development
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            Join us in building the most comprehensive digital ecosystem for Forest Rights Act implementation. 
            Every line of code, every feature, and every interaction is designed to empower forest-dwelling communities 
            and create lasting social impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group px-12" onClick={() => navigate('/auth')}>
              Start Your Journey
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-forest rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-gradient-earth rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-gradient-forest rounded-full border-2 border-background"></div>
              </div>
              <span className="text-sm">Trusted by government officials</span>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border/50 shadow-card">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To transform the Forest Rights Act from a legal document into a living, breathing ecosystem 
              of empowerment, ensuring that every forest-dwelling family in India can access their rightful 
              benefits and opportunities through the power of technology."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;