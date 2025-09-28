import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from '@supabase/supabase-js';
import { 
  BarChart3, 
  Users, 
  MapPin, 
  TrendingUp, 
  Download,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  TreePine,
  Globe,
  Brain,
  Target
} from "lucide-react";
import GISAtlas from '../features/GISAtlas';
import DecisionSupportSystem from '../features/DecisionSupportSystem';
import ReportGenerator from '../features/ReportGenerator';

interface DistrictOfficerDashboardProps {
  user: User;
}

const DistrictOfficerDashboard: React.FC<DistrictOfficerDashboardProps> = ({ user }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const districtData = {
    district: "Bastar District",
    state: "Chhattisgarh",
    totalBeneficiaries: 45280,
    verifiedPattas: 38450,
    pendingVerification: 6830,
    activeSchemes: 12,
    totalBudget: "₹125.6 Cr",
    utilizedBudget: "₹89.2 Cr"
  };

  const kpiData = [
    { title: "Total Beneficiaries", value: "45,280", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Verified Pattas", value: "38,450", change: "+8%", icon: CheckCircle, color: "text-green-600" },
    { title: "Budget Utilization", value: "71%", change: "+5%", icon: DollarSign, color: "text-purple-600" },
    { title: "Scheme Coverage", value: "85%", change: "+15%", icon: Target, color: "text-orange-600" }
  ];

  const recentAlerts = [
    { 
      type: "Budget", 
      message: "MGNREGA allocation for Q4 needs approval", 
      priority: "High", 
      time: "2 hours ago",
      icon: DollarSign
    },
    { 
      type: "Verification", 
      message: "250 pattas pending verification in Kanker block", 
      priority: "Medium", 
      time: "5 hours ago",
      icon: Clock
    },
    { 
      type: "System", 
      message: "New satellite imagery available for delta analysis", 
      priority: "Low", 
      time: "1 day ago",
      icon: Globe
    }
  ];

  const schemePerformance = [
    { name: "PM-KISAN", beneficiaries: 12450, budget: "₹24.9 Cr", utilization: 92 },
    { name: "MGNREGA", beneficiaries: 8920, budget: "₹45.2 Cr", utilization: 78 },
    { name: "Forest Rights", beneficiaries: 15680, budget: "₹32.1 Cr", utilization: 65 },
    { name: "Tribal Development", beneficiaries: 6840, budget: "₹18.8 Cr", utilization: 58 }
  ];

  return (
    <div className="p-6 bg-nature-muted min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-gradient-card border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-card-foreground">District Dashboard</h1>
                <p className="text-lg text-muted-foreground">{districtData.district}, {districtData.state}</p>
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="default" className="bg-forest-primary">
                    {districtData.totalBeneficiaries.toLocaleString()} Beneficiaries
                  </Badge>
                  <Badge variant="secondary">
                    {districtData.activeSchemes} Active Schemes
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-card-foreground">{districtData.utilizedBudget}</div>
                <div className="text-sm text-muted-foreground">of {districtData.totalBudget} utilized</div>
                <Button variant="forest" className="mt-3" onClick={() => setActiveModal('report')}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <Card key={index} className="hover:shadow-card transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{kpi.title}</p>
                      <p className="text-3xl font-bold text-foreground">{kpi.value}</p>
                      <p className={`text-sm font-medium ${kpi.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.change} from last month
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${kpi.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Interactive Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-forest-primary" />
                Analytics & Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-forest-primary/10 to-earth-primary/10 p-6 rounded-lg">
                <Brain className="w-12 h-12 text-forest-primary mb-4" />
                <h3 className="font-semibold mb-2">AI Decision Support System</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get intelligent recommendations for scheme allocation and convergence planning
                </p>
                <Button variant="forest" onClick={() => setActiveModal('dss')}>
                  <Brain className="w-4 h-4 mr-2" />
                  Launch DSS
                </Button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded">
                  <span className="text-sm font-medium">Land Verification Progress</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted rounded-full">
                      <div className="w-20 h-2 bg-forest-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded">
                  <span className="text-sm font-medium">Scheme Enrollment</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted rounded-full">
                      <div className="w-16 h-2 bg-earth-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">67%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded">
                  <span className="text-sm font-medium">Digital Documentation</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-muted rounded-full">
                      <div className="w-22 h-2 bg-forest-primary rounded-full"></div>
                    </div>
                    <span className="text-sm text-muted-foreground">92%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GIS & Mapping */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-earth-primary" />
                GIS Atlas & Delta Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-earth-primary/10 to-forest-primary/10 p-6 rounded-lg">
                <Globe className="w-12 h-12 text-earth-primary mb-4" />
                <h3 className="font-semibold mb-2">Interactive FRA Atlas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore multi-layer satellite imagery with AI-generated asset maps
                </p>
                <Button variant="earth" onClick={() => setActiveModal('atlas')}>
                  <MapPin className="w-4 h-4 mr-2" />
                  Open Atlas
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Recent Delta Analysis</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded">
                    <span className="text-sm">Forest Cover Change</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">+2.3%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded">
                    <span className="text-sm">Infrastructure Development</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">15 Projects</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 border border-yellow-200 rounded">
                    <span className="text-sm">Land Use Changes</span>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">Review Needed</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scheme Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-forest-primary" />
                Scheme Performance Overview
              </span>
              <Button variant="outline" size="sm" onClick={() => setActiveModal('report')}>
                <FileText className="w-4 h-4 mr-2" />
                Detailed Report
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schemePerformance.map((scheme, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h3 className="font-semibold mb-2">{scheme.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Beneficiaries</span>
                      <span className="font-medium">{scheme.beneficiaries.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Budget</span>
                      <span className="font-medium">{scheme.budget}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Utilization</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full">
                          <div 
                            className="h-2 bg-forest-primary rounded-full" 
                            style={{ width: `${scheme.utilization}%` }}
                          ></div>
                        </div>
                        <span className="font-medium">{scheme.utilization}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Recent Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert, index) => {
              const IconComponent = alert.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    alert.priority === 'High' ? 'bg-red-100' : alert.priority === 'Medium' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      alert.priority === 'High' ? 'text-red-600' : alert.priority === 'Medium' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{alert.type}</span>
                      <Badge variant={alert.priority === 'High' ? 'destructive' : alert.priority === 'Medium' ? 'secondary' : 'default'}>
                        {alert.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setActiveModal('report')}>
                    View Details
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Modal Components */}
        {activeModal === 'atlas' && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
            <GISAtlas onClose={() => setActiveModal(null)} />
          </div>
        )}
        
        {activeModal === 'dss' && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
            <DecisionSupportSystem onClose={() => setActiveModal(null)} />
          </div>
        )}
        
        {activeModal === 'report' && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
            <ReportGenerator onClose={() => setActiveModal(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DistrictOfficerDashboard;