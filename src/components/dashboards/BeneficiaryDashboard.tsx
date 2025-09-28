import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from '@supabase/supabase-js';
import { 
  MapPin, 
  FileText, 
  Gift, 
  Volume2, 
  Camera, 
  Phone,
  Users,
  TreePine,
  Banknote,
  AlertCircle
} from "lucide-react";
import DocumentManager from '../features/DocumentManager';

interface BeneficiaryDashboardProps {
  user: User;
}

const BeneficiaryDashboard: React.FC<BeneficiaryDashboardProps> = ({ user }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const beneficiaryData = {
    name: "Smt. Radha Devi",
    village: "Bastar, Chhattisgarh",
    fraPattaNumber: "FRA/2023/BST/001234",
    landSize: "2.5 hectares",
    status: "Verified",
    schemes: [
      { name: "PM-KISAN", amount: "₹6,000/year", status: "Active", nextPayment: "15 Dec 2024" },
      { name: "MGNREGA", amount: "₹250/day", status: "Eligible", action: "Apply Now" },
      { name: "Forest Produce", amount: "Market Rate", status: "Active", action: "Check Rates" }
    ],
    documents: [
      { name: "FRA Patta", status: "Verified", date: "12 Mar 2023" },
      { name: "Aadhaar Card", status: "Linked", date: "05 Jan 2020" },
      { name: "Bank Account", status: "Active", date: "18 Sep 2019" }
    ]
  };

  return (
    <div className="p-6 bg-nature-muted min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Header */}
        <Card className="bg-gradient-forest text-primary-foreground border-0">
          <CardContent className="p-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">स्वागत है, {beneficiaryData.name}</h1>
                <p className="text-primary-foreground/90 text-lg">{beneficiaryData.village}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-0">
                    FRA Beneficiary
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
                    <Volume2 className="w-4 h-4 mr-2" />
                    सुनें (Listen)
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-card transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-forest-primary mx-auto mb-3" />
              <h3 className="font-semibold text-sm">मेरी जमीन</h3>
              <p className="text-xs text-muted-foreground">My Land</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Gift className="w-8 h-8 text-earth-primary mx-auto mb-3" />
              <h3 className="font-semibold text-sm">योजनाएं</h3>
              <p className="text-xs text-muted-foreground">Schemes</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-forest-primary mx-auto mb-3" />
              <h3 className="font-semibold text-sm">दस्तावेज</h3>
              <p className="text-xs text-muted-foreground">Documents</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-earth-primary mx-auto mb-3" />
              <h3 className="font-semibold text-sm">शिकायत</h3>
              <p className="text-xs text-muted-foreground">Complaint</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Land Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="w-5 h-5 text-forest-primary" />
                मेरी भूमि की जानकारी (My Land Information)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">FRA Patta Number</p>
                  <p className="font-medium">{beneficiaryData.fraPattaNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Land Size</p>
                  <p className="font-medium">{beneficiaryData.landSize}</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-forest-primary/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Status: {beneficiaryData.status}</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => {
                  alert('Opening land location on map... This would show the exact boundaries of your FRA patta.');
                }}>
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Map
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Available Schemes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-earth-primary" />
                उपलब्ध योजनाएं (Available Schemes)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {beneficiaryData.schemes.map((scheme, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{scheme.name}</p>
                    <p className="text-sm text-muted-foreground">{scheme.amount}</p>
                    {scheme.nextPayment && (
                      <p className="text-xs text-green-600">Next: {scheme.nextPayment}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <Badge variant={scheme.status === 'Active' ? 'default' : 'secondary'}>
                      {scheme.status}
                    </Badge>
                    {scheme.action && (
                      <Button variant="outline" size="sm" className="mt-2 block" onClick={() => {
                        alert(`${scheme.action} for ${scheme.name}... This would redirect to the scheme application process.`);
                      }}>
                        {scheme.action}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Documents and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Document Wallet */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-forest-primary" />
                डिजिटल दस्तावेज (Digital Documents)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {beneficiaryData.documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">Updated: {doc.date}</p>
                  </div>
                  <Badge variant={doc.status === 'Verified' ? 'default' : 'secondary'}>
                    {doc.status}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full" onClick={() => setActiveModal('documents')}>
                <Camera className="w-4 h-4 mr-2" />
                Add New Document
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-earth-primary" />
                सूचनाएं (Notifications)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Payment Received</p>
                    <p className="text-sm text-green-600">PM-KISAN installment ₹2,000 credited</p>
                    <p className="text-xs text-green-500">2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">New Scheme Available</p>
                    <p className="text-sm text-blue-600">You are eligible for Forest Produce scheme</p>
                    <p className="text-xs text-blue-500">1 week ago</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Weather Alert</p>
                    <p className="text-sm text-yellow-600">Heavy rain expected in 2 days</p>
                    <p className="text-xs text-yellow-500">Today</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modal Components */}
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

export default BeneficiaryDashboard;