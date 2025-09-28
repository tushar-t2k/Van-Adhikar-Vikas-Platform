import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Database, 
  MapPin, 
  Brain, 
  Globe, 
  Users, 
  FileText, 
  BarChart3,
  ArrowRight,
  Play,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import webPortalImage from "@/assets/web-portal-dashboard.jpg";

const WebPortal = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "AI Document Processing",
      description: "Automated OCR and NER for bulk patta digitization",
      status: "Active",
      demo: "View Demo"
    },
    {
      icon: MapPin,
      title: "Interactive GIS Atlas",
      description: "Multi-layer satellite mapping with asset visualization",
      status: "Active", 
      demo: "Explore Maps"
    },
    {
      icon: Brain,
      title: "Decision Support System",
      description: "AI-powered scheme recommendations and convergence planning",
      status: "Active",
      demo: "Try DSS"
    },
    {
      icon: Globe,
      title: "Delta Analysis",
      description: "Satellite imagery comparison for change detection",
      status: "Beta",
      demo: "Run Analysis"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time progress monitoring and report generation",
      status: "Active",
      demo: "View Reports"
    },
    {
      icon: Users,
      title: "Beneficiary Management",
      description: "Complete lifecycle management of FRA beneficiaries",
      status: "Active",
      demo: "Manage Users"
    }
  ];

  const workflows = [
    {
      step: 1,
      title: "Document Upload",
      description: "Drag-and-drop scanned pattas for bulk processing"
    },
    {
      step: 2,
      title: "AI Processing",
      description: "OCR extraction and validation workflow"
    },
    {
      step: 3,
      title: "GIS Mapping",
      description: "Plot boundaries and asset mapping"
    },
    {
      step: 4,
      title: "Decision Support",
      description: "Scheme recommendations and planning"
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
          <Button variant="forest" onClick={() => navigate('/auth')}>
            Access Portal
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-forest-primary/10 to-earth-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-forest-primary/10 text-forest-primary px-4 py-2 rounded-full mb-6">
                <Monitor className="w-4 h-4" />
                <span className="text-sm font-medium">Web Portal for Officials</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                The "Vikas" 
                <span className="block bg-gradient-forest bg-clip-text text-transparent">
                  Web Portal
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The central nervous system for FRA implementation. AI-powered document processing, 
                interactive GIS mapping, and intelligent decision support systems all in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="forest" size="lg" onClick={() => navigate('/auth')}>
                  <Play className="w-4 h-4 mr-2" />
                  Launch Portal
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={webPortalImage}
                alt="Web Portal Dashboard"
                className="w-full rounded-2xl shadow-hero border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Portal Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed for efficient FRA implementation and monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-forest rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge variant={feature.status === 'Active' ? 'default' : 'secondary'}>
                        {feature.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <Button variant="outline" size="sm" className="w-full group">
                      {feature.demo}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 bg-nature-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamlined workflow from document upload to decision support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((workflow, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{workflow.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{workflow.title}</h3>
                <p className="text-muted-foreground">{workflow.description}</p>
                {index < workflows.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-muted-foreground mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-4xl mx-auto border-border/50 bg-gradient-card">
            <CardContent className="p-12">
              <CheckCircle className="w-16 h-16 text-forest-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of officials already using the Van Adhikar Vikas platform to transform 
                forest rights implementation in their regions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="forest" size="lg" onClick={() => navigate('/auth')}>
                  Access Web Portal
                </Button>
                <Button variant="outline" size="lg">
                  Request Training
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WebPortal;