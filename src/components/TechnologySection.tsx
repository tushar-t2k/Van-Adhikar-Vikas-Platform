import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Map, 
  Cloud, 
  Shield,
  Zap,
  Globe,
  Layers
} from "lucide-react";

const TechnologySection = () => {
  const techCategories = [
    {
      title: "Frontend & User Experience",
      icon: Code,
      gradient: "bg-gradient-forest",
      technologies: [
        { name: "React.js", type: "Web Framework" },
        { name: "React Native", type: "Mobile Framework" },
        { name: "Mapbox GL JS", type: "Interactive Maps" },
        { name: "TypeScript", type: "Type Safety" }
      ]
    },
    {
      title: "Backend & Infrastructure", 
      icon: Database,
      gradient: "bg-gradient-earth",
      technologies: [
        { name: "Node.js", type: "Runtime" },
        { name: "PostgreSQL", type: "Database" },
        { name: "PostGIS", type: "Geospatial Extension" },
        { name: "GeoServer", type: "Map Services" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "bg-gradient-forest", 
      technologies: [
        { name: "TensorFlow", type: "ML Framework" },
        { name: "OpenCV", type: "Computer Vision" },
        { name: "SpaCy", type: "NLP Processing" },
        { name: "EasyOCR", type: "Text Recognition" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "bg-gradient-earth",
      technologies: [
        { name: "AWS S3", type: "File Storage" },
        { name: "Docker", type: "Containerization" },
        { name: "Microservices", type: "Architecture" },
        { name: "REST APIs", type: "Integration" }
      ]
    }
  ];

  const keyFeatures = [
    {
      title: "Geospatial Intelligence",
      description: "Advanced GIS capabilities with satellite imagery analysis and real-time mapping",
      icon: Map,
      color: "text-forest-primary"
    },
    {
      title: "AI-Powered Automation", 
      description: "OCR, NLP, and computer vision for intelligent document processing",
      icon: Brain,
      color: "text-earth-primary"
    },
    {
      title: "Offline-First Design",
      description: "Mobile app works seamlessly without internet connectivity",
      icon: Smartphone,
      color: "text-forest-primary"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with encrypted data transmission and storage",
      icon: Shield,
      color: "text-earth-primary"
    },
    {
      title: "Scalable Architecture",
      description: "Microservices-based design supporting millions of users",
      icon: Layers,
      color: "text-forest-primary"
    },
    {
      title: "Real-time Performance",
      description: "Optimized for fast data processing and instant user interactions",
      icon: Zap,
      color: "text-earth-primary"
    }
  ];

  return (
    <section className="py-24 bg-nature-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cutting-Edge
            <span className="block bg-gradient-forest bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with enterprise-grade technologies to ensure scalability, security, 
            and performance for millions of forest-dwelling families across India.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-forest transition-all duration-500 border-border/50 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${category.gradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="space-y-1">
                        <div className="font-medium text-card-foreground text-sm">{tech.name}</div>
                        <Badge variant="secondary" className="text-xs">
                          {tech.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Platform Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-card rounded-lg flex items-center justify-center shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Architecture Highlight */}
        <div className="text-center bg-gradient-card p-12 rounded-2xl border border-border/50 shadow-card">
          <div className="inline-flex items-center gap-2 bg-forest-primary/10 text-forest-primary px-4 py-2 rounded-full mb-6">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Enterprise Architecture</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
            Designed for Scale & Impact
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our microservices architecture ensures the platform can scale from prototypes to serving 
            millions of users while maintaining high performance and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;