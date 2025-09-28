import { Card, CardContent } from "@/components/ui/card";
import { Users, UserCheck, Shield } from "lucide-react";

const PersonasSection = () => {
  const personas = [
    {
      name: "Smt. Radha",
      title: "The Beneficiary",
      age: "45 years",
      location: "Village in Chhattisgarh",
      icon: Users,
      gradient: "bg-gradient-forest",
      description: "A tribal woman with FRA patta but limited literacy. Uses a shared smartphone and needs information in her local language.",
      needs: [
        "Check land status and rights",
        "Find eligible government schemes", 
        "Voice-based interaction in local dialect",
        "Digital document storage"
      ]
    },
    {
      name: "Shri Kumar",
      title: "The Field Worker",
      age: "30 years", 
      location: "Gram Rojgar Sevak covering 5 villages",
      icon: UserCheck,
      gradient: "bg-gradient-earth",
      description: "Local official who travels frequently with poor connectivity. Needs tools to verify claims and assist beneficiaries on the ground.",
      needs: [
        "Offline data collection capabilities",
        "Field verification with geotagging",
        "Beneficiary application assistance",
        "Real-time data synchronization"
      ]
    },
    {
      name: "Mr. Singh", 
      title: "The District Officer",
      age: "50 years",
      location: "District FRA Implementation Head",
      icon: Shield,
      gradient: "bg-gradient-card",
      description: "Bureaucrat responsible for FRA implementation and planning. Overwhelmed with paperwork and needs comprehensive dashboard views.",
      needs: [
        "Unified data dashboard",
        "Progress monitoring and analytics",
        "Report generation for state government", 
        "Decision support system"
      ]
    }
  ];

  return (
    <section className="py-24 bg-nature-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Every
            <span className="block bg-gradient-forest bg-clip-text text-transparent">
              Stakeholder
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding diverse user needs from grassroots beneficiaries to district administrators, 
            our platform serves each persona with tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const IconComponent = persona.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-forest transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${persona.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-card`}>
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{persona.name}</h3>
                      <p className="text-lg text-accent-foreground font-medium">{persona.title}</p>
                      <p className="text-sm text-muted-foreground">{persona.age} • {persona.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {persona.description}
                  </p>

                  {/* Key Needs */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-3 uppercase tracking-wider">
                      Key Needs
                    </h4>
                    <ul className="space-y-2">
                      {persona.needs.map((need, needIndex) => (
                        <li key={needIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-forest-primary rounded-full mt-2 shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;