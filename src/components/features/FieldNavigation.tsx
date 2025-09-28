import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Navigation, 
  MapPin, 
  Route,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle,
  Camera,
  Smartphone,
  Battery,
  Wifi,
  WifiOff,
  Target,
  ArrowLeft,
  X
} from "lucide-react";

interface FieldNavigationProps {
  onClose?: () => void;
}

const FieldNavigation: React.FC<FieldNavigationProps> = ({ onClose }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const todayTasks = [
    {
      id: 'T001',
      type: 'Land Verification',
      beneficiary: 'Radha Devi',
      village: 'Bastar',
      priority: 'High',
      status: 'pending',
      location: { lat: 19.0760, lng: 82.1391 },
      estimatedTime: '45 min',
      documents: ['FRA Application', 'Survey Number']
    },
    {
      id: 'T002', 
      type: 'Document Collection',
      beneficiary: 'Ram Singh',
      village: 'Kanker',
      priority: 'Medium',
      status: 'in-progress',
      location: { lat: 20.2731, lng: 81.4872 },
      estimatedTime: '30 min',
      documents: ['Aadhaar Copy', 'Bank Details']
    },
    {
      id: 'T003',
      type: 'Scheme Enrollment',
      beneficiary: 'Maya Kumari',
      village: 'Dantewada',
      priority: 'High',
      status: 'pending',
      location: { lat: 18.8928, lng: 81.3541 },
      estimatedTime: '60 min',
      documents: ['Application Form', 'Income Certificate']
    }
  ];

  const routeOptions = [
    {
      id: 'optimal',
      name: 'Optimal Route',
      distance: '45.2 km',
      duration: '2h 45m',
      fuel: '₹280',
      tasks: 3,
      description: 'Shortest time considering traffic and road conditions'
    },
    {
      id: 'priority',
      name: 'Priority Based',
      distance: '52.8 km', 
      duration: '3h 15m',
      fuel: '₹320',
      tasks: 3,
      description: 'High priority tasks first'
    },
    {
      id: 'distance',
      name: 'Shortest Distance',
      distance: '41.6 km',
      duration: '3h 05m',
      fuel: '₹250',
      tasks: 3,
      description: 'Minimum travel distance'
    }
  ];

  const deviceStatus = {
    battery: 85,
    connectivity: 'offline',
    storage: 75,
    lastSync: '2 hours ago'
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Navigation className="w-8 h-8 text-forest-primary" />
              Field Navigation
            </h1>
            <p className="text-muted-foreground mt-2">
              Plan optimal routes and manage field verification tasks
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Quick Capture
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

        {/* Device Status Bar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Battery: {deviceStatus.battery}%</span>
                </div>
                <div className="flex items-center gap-2">
                  {deviceStatus.connectivity === 'offline' ? (
                    <WifiOff className="w-4 h-4 text-yellow-600" />
                  ) : (
                    <Wifi className="w-4 h-4 text-green-600" />
                  )}
                  <span className="text-sm capitalize">{deviceStatus.connectivity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Storage: {deviceStatus.storage}%</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Last sync: {deviceStatus.lastSync}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Tasks */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Today's Tasks ({todayTasks.length})
                  </span>
                  <Button variant="outline" size="sm">
                    Add Task
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayTasks.map((task, index) => (
                  <div key={task.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{task.beneficiary}</h3>
                          <Badge variant={task.priority === 'High' ? 'destructive' : 'secondary'} className="text-xs">
                            {task.priority}
                          </Badge>
                          <Badge variant={
                            task.status === 'pending' ? 'outline' :
                            task.status === 'in-progress' ? 'secondary' : 'default'
                          } className="text-xs">
                            {task.status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                            {task.status === 'in-progress' && <AlertTriangle className="w-3 h-3 mr-1" />}
                            {task.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                            {task.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {task.type} • {task.village} • Est: {task.estimatedTime}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {task.documents.map((doc, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Button variant="outline" size="sm">
                          <MapPin className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          {task.status === 'pending' ? 'Start' : 'Continue'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Route Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="w-5 h-5" />
                  Route Planning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {routeOptions.map((route) => (
                  <div 
                    key={route.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedRoute === route.id ? 'border-forest-primary bg-forest-primary/5' : 'border-border hover:border-border/80'
                    }`}
                    onClick={() => setSelectedRoute(route.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{route.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{route.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-muted-foreground">Distance & Time</p>
                            <p className="text-sm font-medium">{route.distance} • {route.duration}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Est. Fuel Cost</p>
                            <p className="text-sm font-medium">{route.fuel}</p>
                          </div>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedRoute === route.id ? 'border-forest-primary bg-forest-primary' : 'border-border'
                      }`} />
                    </div>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button variant="forest" className="w-full" disabled={!selectedRoute}>
                    <Navigation className="w-4 h-4 mr-2" />
                    Start Navigation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Live Navigation */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Live Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
                  <div>
                    <MapPin className="w-16 h-16 text-forest-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Interactive Field Map</h3>
                    <p className="text-muted-foreground mb-4 max-w-md">
                      Real-time GPS navigation with offline maps and task locations
                    </p>
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                      <div className="p-3 bg-background rounded border">
                        <Users className="w-6 h-6 text-forest-primary mx-auto mb-1" />
                        <p className="text-xs font-medium">3 Tasks</p>
                        <p className="text-xs text-muted-foreground">Today</p>
                      </div>
                      <div className="p-3 bg-background rounded border">
                        <Route className="w-6 h-6 text-earth-primary mx-auto mb-1" />
                        <p className="text-xs font-medium">45.2 km</p>
                        <p className="text-xs text-muted-foreground">Total Route</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Camera className="w-6 h-6" />
                    <span className="text-sm">GPS Photo</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-sm">Mark Complete</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    <span className="text-sm">Report Issue</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                    <Smartphone className="w-6 h-6" />
                    <span className="text-sm">Sync Data</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldNavigation;