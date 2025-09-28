import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from '@supabase/supabase-js';
import { 
  MapPin, 
  Users, 
  FileCheck, 
  Camera, 
  Wifi, 
  WifiOff,
  Clock,
  CheckCircle,
  AlertTriangle,
  Navigation,
  Smartphone,
  Database
} from "lucide-react";
import FieldNavigation from '../features/FieldNavigation';
import DocumentManager from '../features/DocumentManager';

interface FieldWorkerDashboardProps {
  user: User;
}

const FieldWorkerDashboard: React.FC<FieldWorkerDashboardProps> = ({ user }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const fieldWorkerData = {
    name: "Shri Kumar Singh",
    designation: "Gram Rojgar Sevak",
    assignedVillages: ["Bastar", "Kanker", "Dantewada", "Narayanpur", "Jagdalpur"],
    todayTasks: 12,
    completedTasks: 8,
    pendingVerifications: 15,
    offlineSync: true,
    lastSync: "2 hours ago"
  };

  const recentVerifications = [
    { 
      id: "VER001", 
      name: "Radha Devi", 
      village: "Bastar", 
      type: "Land Verification", 
      status: "Pending GPS", 
      priority: "High",
      date: "Today"
    },
    { 
      id: "VER002", 
      name: "Ram Singh", 
      village: "Kanker", 
      type: "Document Check", 
      status: "Completed", 
      priority: "Medium",
      date: "Yesterday"
    },
    { 
      id: "VER003", 
      name: "Maya Kumari", 
      village: "Dantewada", 
      type: "Scheme Application", 
      status: "In Progress", 
      priority: "High",
      date: "Today"
    }
  ];

  const quickActions = [
    { icon: Camera, title: "Field Verification", description: "Start land verification with GPS" },
    { icon: FileCheck, title: "Document Review", description: "Process pending applications" },
    { icon: Users, title: "Beneficiary Assist", description: "Help with scheme applications" },
    { icon: Navigation, title: "Route Planning", description: "Optimize field visit routes" }
  ];

  return (
    <div className="p-6 bg-nature-muted min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-forest text-primary-foreground border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80">Today's Tasks</p>
                  <p className="text-3xl font-bold">{fieldWorkerData.completedTasks}/{fieldWorkerData.todayTasks}</p>
                </div>
                <CheckCircle className="w-8 h-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-earth text-primary-foreground border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80">Pending Verifications</p>
                  <p className="text-3xl font-bold">{fieldWorkerData.pendingVerifications}</p>
                </div>
                <Clock className="w-8 h-8" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Assigned Villages</p>
                  <p className="text-3xl font-bold text-foreground">{fieldWorkerData.assignedVillages.length}</p>
                </div>
                <MapPin className="w-8 h-8 text-forest-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Connectivity</p>
                  <div className="flex items-center gap-2 mt-1">
                    {fieldWorkerData.offlineSync ? (
                      <>
                        <WifiOff className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">Offline Mode</span>
                      </>
                    ) : (
                      <>
                        <Wifi className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Online</span>
                      </>
                    )}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => {
                  // Simulate sync functionality
                  alert('Syncing data... This would sync offline data with the server.');
                }}>
                  <Database className="w-4 h-4 mr-2" />
                  Sync Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-forest-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Card key={index} className="hover:shadow-card transition-all duration-300 cursor-pointer border-border/50">
                    <CardContent className="p-4 text-center">
                      <IconComponent className="w-8 h-8 text-forest-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Verifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-earth-primary" />
                  Recent Verifications
                </span>
                <Button variant="outline" size="sm" onClick={() => setActiveModal('documents')}>View All</Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentVerifications.map((verification) => (
                <div key={verification.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{verification.name}</p>
                      <Badge variant={verification.priority === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                        {verification.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{verification.village} • {verification.type}</p>
                    <p className="text-xs text-muted-foreground">{verification.date}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={verification.status === 'Completed' ? 'default' : verification.status === 'Pending GPS' ? 'destructive' : 'secondary'}
                      className="mb-2"
                    >
                      {verification.status}
                    </Badge>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        {verification.status === 'Completed' ? 'View' : 'Continue'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Field Map & Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-forest-primary" />
                Field Navigation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-br from-forest-primary/10 to-earth-primary/10 p-6 rounded-lg text-center">
                <MapPin className="w-12 h-12 text-forest-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Interactive Field Map</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  View your assigned areas, plan routes, and navigate to verification locations
                </p>
                <Button variant="forest" onClick={() => setActiveModal('navigation')}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Open Map
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Assigned Villages</h4>
                <div className="grid grid-cols-2 gap-2">
                  {fieldWorkerData.assignedVillages.slice(0, 4).map((village, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                      <span className="text-sm">{village}</span>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 10) + 1} tasks
                      </Badge>
                    </div>
                  ))}
                </div>
                {fieldWorkerData.assignedVillages.length > 4 && (
                  <Button variant="ghost" size="sm" className="w-full">
                    View all {fieldWorkerData.assignedVillages.length} villages
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offline Sync Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-earth-primary" />
              Offline Data Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-1">8 Records</h3>
                <p className="text-sm text-muted-foreground">Synced Successfully</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-1">5 Records</h3>
                <p className="text-sm text-muted-foreground">Pending Sync</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-1">Storage</h3>
                <p className="text-sm text-muted-foreground">75% Used</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <Button variant="forest" onClick={() => {
                alert('Force syncing all data... This would sync all offline records with the server.');
              }}>
                <Database className="w-4 h-4 mr-2" />
                Force Sync All
              </Button>
              <Button variant="outline" onClick={() => {
                alert('Downloading latest data... This would fetch the latest data from the server.');
              }}>
                <Smartphone className="w-4 h-4 mr-2" />
                Download Latest Data
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Modal Components */}
        {activeModal === 'navigation' && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
            <FieldNavigation onClose={() => setActiveModal(null)} />
          </div>
        )}
        
        {activeModal === 'documents' && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
            <DocumentManager onClose={() => setActiveModal(null)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FieldWorkerDashboard;