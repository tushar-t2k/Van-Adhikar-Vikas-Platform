import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { User } from '@supabase/supabase-js';
import BeneficiaryDashboard from "@/components/dashboards/BeneficiaryDashboard";
import FieldWorkerDashboard from "@/components/dashboards/FieldWorkerDashboard";
import DistrictOfficerDashboard from "@/components/dashboards/DistrictOfficerDashboard";
import { Button } from "@/components/ui/button";
import { LogOut, TreePine } from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate('/auth');
      }
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-nature-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <TreePine className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const userType = user.user_metadata?.user_type || 'beneficiary';

  const renderDashboard = () => {
    switch (userType) {
      case 'beneficiary':
        return <BeneficiaryDashboard user={user} />;
      case 'field_worker':
        return <FieldWorkerDashboard user={user} />;
      case 'district_officer':
        return <DistrictOfficerDashboard user={user} />;
      default:
        return <BeneficiaryDashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-forest rounded-lg flex items-center justify-center">
              <TreePine className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Van Adhikar Vikas</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;