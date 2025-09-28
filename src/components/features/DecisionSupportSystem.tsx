import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Download,
  Lightbulb,
  BarChart3,
  PieChart,
  ArrowLeft,
  X
} from "lucide-react";

interface DecisionSupportSystemProps {
  onClose?: () => void;
}

const DecisionSupportSystem: React.FC<DecisionSupportSystemProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('recommendations');

  const recommendations = [
    {
      title: "Increase MGNREGA Allocation",
      priority: "High",
      impact: "High",
      beneficiaries: 2450,
      budget: "₹15.2 Cr",
      description: "Based on demand analysis, Kanker and Dantewada blocks need 60% more MGNREGA allocation for Q4.",
      confidence: 89,
      reasoning: [
        "Historical demand patterns show 40% increase in winter months",
        "Current unemployment rate in target blocks: 12.5%",
        "Available budget allows for immediate implementation"
      ]
    },
    {
      title: "Accelerate FRA Patta Verification",
      priority: "Medium",
      impact: "High",
      beneficiaries: 1850,
      budget: "₹5.8 Cr",
      description: "Deploy additional field verification teams to clear backlog of 1,850 pending FRA applications.",
      confidence: 76,
      reasoning: [
        "Current verification rate: 45 pattas/week per team",
        "Adding 3 teams would clear backlog in 8 weeks",
        "High beneficiary satisfaction expected"
      ]
    },
    {
      title: "Forest Produce Marketing Support",
      priority: "Medium",
      impact: "Medium",
      beneficiaries: 3200,
      budget: "₹8.9 Cr",
      description: "Establish collection centers and improve market linkages for forest produce in 15 villages.",
      confidence: 82,
      reasoning: [
        "Current market prices 30% below potential",
        "Similar programs show 45% income increase",
        "Strong community participation expected"
      ]
    }
  ];

  const convergenceOpportunities = [
    {
      schemes: ["MGNREGA", "Forest Rights", "PM-KISAN"],
      potential: "₹23.5 Cr",
      beneficiaries: 4500,
      description: "Integrated watershed development with guaranteed employment and forest conservation"
    },
    {
      schemes: ["Tribal Development", "Skill Development", "Forest Produce"],
      potential: "₹12.8 Cr", 
      beneficiaries: 2800,
      description: "Value addition training for forest produce with marketing support"
    }
  ];

  const analyticsData = [
    { metric: "Scheme Efficiency", value: 78, target: 85, trend: "+5%" },
    { metric: "Budget Utilization", value: 71, target: 80, trend: "+8%" },
    { metric: "Beneficiary Satisfaction", value: 84, target: 90, trend: "+12%" },
    { metric: "Process Automation", value: 65, target: 75, trend: "+15%" }
  ];

  const handleExportAnalysis = () => {
    console.log('Exporting analysis data');
    alert('Exporting analysis data. This would typically download an Excel or PDF report with AI recommendations.');
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Brain className="w-8 h-8 text-forest-primary" />
              AI Decision Support System
            </h1>
            <p className="text-muted-foreground mt-2">
              Intelligent recommendations for scheme allocation and convergence planning
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline"
              onClick={handleExportAnalysis}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Analysis
            </Button>
            <Button 
              variant="ghost"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <Button variant="ghost" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 mb-6 border-b border-border">
          <Button 
            variant={activeTab === 'recommendations' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('recommendations')}
            className="pb-2"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Recommendations
          </Button>
          <Button 
            variant={activeTab === 'convergence' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('convergence')}
            className="pb-2"
          >
            <Target className="w-4 h-4 mr-2" />
            Convergence
          </Button>
          <Button 
            variant={activeTab === 'analytics' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('analytics')}
            className="pb-2"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics
          </Button>
        </div>

        {/* Recommendations Tab */}
        {activeTab === 'recommendations' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold text-green-800">12</p>
                      <p className="text-sm text-green-600">Active Recommendations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold text-blue-800">8,500</p>
                      <p className="text-sm text-blue-600">Potential Beneficiaries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="text-2xl font-bold text-purple-800">₹29.9 Cr</p>
                      <p className="text-sm text-purple-600">Budget Impact</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{rec.title}</h3>
                          <Badge variant={rec.priority === 'High' ? 'destructive' : 'secondary'}>
                            {rec.priority} Priority
                          </Badge>
                          <Badge variant="outline">
                            {rec.impact} Impact
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{rec.description}</p>
                        
                        <div className="grid grid-cols-3 gap-6 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Beneficiaries</p>
                            <p className="text-lg font-semibold">{rec.beneficiaries.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Budget Required</p>
                            <p className="text-lg font-semibold">{rec.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">AI Confidence</p>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-muted rounded-full">
                                <div 
                                  className="h-2 bg-forest-primary rounded-full" 
                                  style={{ width: `${rec.confidence}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{rec.confidence}%</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">AI Reasoning:</p>
                          <ul className="space-y-1">
                            {rec.reasoning.map((reason, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-forest-primary rounded-full mt-2 flex-shrink-0"></div>
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-6">
                        <Button variant="forest">
                          Implement
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Convergence Tab */}
        {activeTab === 'convergence' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Scheme Convergence Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {convergenceOpportunities.map((opp, index) => (
                  <div key={index} className="p-6 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          {opp.schemes.map((scheme, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {scheme}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4">{opp.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Convergence Potential</p>
                            <p className="text-lg font-semibold">{opp.potential}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Target Beneficiaries</p>
                            <p className="text-lg font-semibold">{opp.beneficiaries.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="forest">
                        Plan Convergence
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticsData.map((data, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">{data.metric}</h3>
                      <Badge variant="outline" className={data.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {data.trend}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{data.value}%</span>
                        <span className="text-sm text-muted-foreground">Target: {data.target}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full">
                        <div 
                          className="h-2 bg-forest-primary rounded-full" 
                          style={{ width: `${(data.value / data.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="w-5 h-5" />
                    Scheme Performance Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-8">
                    <PieChart className="w-16 h-16 text-forest-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive chart showing scheme performance distribution would be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Trend Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-8">
                    <TrendingUp className="w-16 h-16 text-earth-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Time-series analysis of key performance indicators would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionSupportSystem;