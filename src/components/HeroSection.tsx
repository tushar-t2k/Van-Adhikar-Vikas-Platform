import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Map, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-forest-rights.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Forest communities using digital technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-primary/90 via-forest-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-nature-light/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full mb-6 border border-border/50">
            <div className="w-2 h-2 bg-forest-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Transforming Forest Rights Implementation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Van Adhikar
            <span className="block bg-gradient-earth bg-clip-text text-transparent">
              Vikas Platform
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl">
            Empowering every forest-dwelling family through AI-powered digitization, 
            intelligent mapping, and seamless connection to government schemes and livelihood opportunities.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">10M+</div>
                  <div className="text-sm text-muted-foreground">Beneficiaries Targeted</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-earth rounded-lg flex items-center justify-center">
                  <Map className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">40M+</div>
                  <div className="text-sm text-muted-foreground">Hectares Mapped</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-card border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Mobile-First Design</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="group" onClick={() => navigate('/web-portal')}>
              Explore Web Portal
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="nature" size="xl" onClick={() => navigate('/mobile-app')}>
              Download Mobile App
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;