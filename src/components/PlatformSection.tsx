import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, MapPin, Database, Brain, Users, ChevronRight, Wifi, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import webPortalImage from "@/assets/web-portal-dashboard.jpg";
import mobileAppImage from "@/assets/mobile-app-user.jpg";

const PlatformSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Two Powerful
            <span className="block bg-gradient-earth bg-clip-text text-transparent">
              Interfaces
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive ecosystem designed for seamless interaction between officials and beneficiaries, 
            bridging the digital divide through intelligent design.
          </p>
        </div>

        {/* Web Portal Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-forest-primary/10 text-forest-primary px-4 py-2 rounded-full mb-6 border border-forest-primary/20">
              <Monitor className="w-4 h-4" />
              <span className="text-sm font-medium">Web Portal for Officials</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The "Vikas" Web Portal
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The central nervous system for FRA implementation. AI-powered document processing, 
              interactive GIS mapping, and intelligent decision support systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-forest-primary" />
                </div>
                <span className="text-sm text-foreground">AI Document Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-forest-primary" />
                </div>
                <span className="text-sm text-foreground">Interactive GIS Atlas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-forest-primary" />
                </div>
                <span className="text-sm text-foreground">Decision Support System</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-forest-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-forest-primary" />
                </div>
                <span className="text-sm text-foreground">Delta Analysis</span>
              </div>
            </div>

            <Button variant="forest" size="lg" className="group" onClick={() => navigate('/web-portal')}>
              Explore Web Portal
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={webPortalImage}
                alt="Web Portal Dashboard Interface"
                className="w-full rounded-2xl shadow-hero border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="relative">
              <img
                src={mobileAppImage}
                alt="Mobile App User Interface"
                className="w-full rounded-2xl shadow-hero border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 bg-earth-primary/10 text-earth-primary px-4 py-2 rounded-full mb-6 border border-earth-primary/20">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Mobile App for Communities</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The "Adhikar" Mobile App
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Empowering communities with offline-capable, voice-enabled access to their rights, 
              schemes, and livelihood opportunities in their native languages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-earth-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-earth-primary" />
                </div>
                <span className="text-sm text-foreground">Voice Navigation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-earth-primary/10 rounded-lg flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-earth-primary" />
                </div>
                <span className="text-sm text-foreground">Offline Capability</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-earth-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-earth-primary" />
                </div>
                <span className="text-sm text-foreground">Digital Document Wallet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-earth-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-earth-primary" />
                </div>
                <span className="text-sm text-foreground">Vernacular Languages</span>
              </div>
            </div>

            <Button variant="earth" size="lg" className="group" onClick={() => navigate('/mobile-app')}>
              Download Mobile App
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI-Powered OCR", description: "Automated document digitization", icon: Brain },
            { title: "Offline Sync", description: "Works without internet connectivity", icon: Wifi },
            { title: "GIS Mapping", description: "Interactive satellite imagery", icon: MapPin },
            { title: "Grievance System", description: "Transparent issue tracking", icon: Shield },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;