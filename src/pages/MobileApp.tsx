import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Users, 
  Wifi, 
  Shield, 
  Globe, 
  Volume2,
  Download,
  PlayCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import mobileAppImage from "@/assets/mobile-app-user.jpg";

const MobileApp = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Voice Navigation",
      description: "Navigate the app using voice commands in local dialects including Gondi and Santhali"
    },
    {
      icon: Wifi,
      title: "Offline Capability",
      description: "Works without internet connection. Sync data when connectivity is available"
    },
    {
      icon: Shield,
      title: "Digital Document Wallet",
      description: "Secure storage for your FRA patta and other important documents"
    },
    {
      icon: Globe,
      title: "Vernacular Languages",
      description: "Available in multiple local languages with text-to-speech support"
    },
    {
      icon: Volume2,
      title: "Audio Assistance",
      description: "Listen to information and navigate using audio cues"
    }
  ];

  const appModules = [
    {
      title: "My Adhikar Dashboard",
      description: "Simple card-based interface showing your land, schemes, and documents",
      icon: Users,
      color: "bg-gradient-forest"
    },
    {
      title: "Field Verification",
      description: "Offline data collection with geotagging for field workers", 
      icon: Shield,
      color: "bg-gradient-earth"
    },
    {
      title: "Grievance System",
      description: "Report issues with photo/voice notes and track resolution status",
      icon: Volume2,
      color: "bg-gradient-card"
    },
    {
      title: "Livelihood Advisory",
      description: "Resource-based recommendations and hyperlocal alerts",
      icon: Globe,
      color: "bg-gradient-forest"
    }
  ];

  const testimonials = [
    {
      name: "Radha Devi",
      role: "Beneficiary from Chhattisgarh",
      rating: 5,
      comment: "Now I can check my land status and schemes in my own language. Very helpful!"
    },
    {
      name: "Kumar Singh",
      role: "Field Worker",
      rating: 5,
      comment: "Works perfectly even in remote areas without internet. Game changer for field work."
    }
  ];

  return (
    <div className="min-h-screen bg-nature-muted">
      {/* Header */}
      <header className="bg-card border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            ← Back to Home
          </Button>
          <Button variant="earth" onClick={() => navigate('/auth')}>
            Get App Access
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-earth-primary/10 to-forest-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-earth-primary/10 text-earth-primary px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Mobile App for Communities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                The "Adhikar" 
                <span className="block bg-gradient-earth bg-clip-text text-transparent">
                  Mobile App
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Empowering communities with offline-capable, voice-enabled access to their rights, 
                schemes, and livelihood opportunities in their native languages.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="earth" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download APK
                </Button>
                <Button variant="outline" size="lg">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="mt-6 flex items-center gap-4">
                <Badge variant="secondary">Android 8.0+</Badge>
                <Badge variant="secondary">15 Languages</Badge>
                <Badge variant="secondary">Offline Ready</Badge>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={mobileAppImage}
                alt="Mobile App Interface"
                className="w-full rounded-2xl shadow-hero border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for forest-dwelling communities with limited literacy and connectivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Modules */}
      <section className="py-16 bg-nature-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">App Modules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive modules for beneficiaries, field workers, and community empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{module.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Users Say</h2>
            <p className="text-lg text-muted-foreground">Real feedback from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-earth-primary/10 to-forest-primary/10">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-4xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <Smartphone className="w-16 h-16 text-earth-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Get Started Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of forest families already using the Van Adhikar Vikas mobile app 
                to access their rights and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="earth" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/auth')}>
                  Create Account
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;