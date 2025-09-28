import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { User } from '@supabase/supabase-js';
import { TreePine, Smartphone, Shield, Users } from "lucide-react";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        navigate('/dashboard');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        navigate('/dashboard');
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignUp = async (userType: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            user_type: userType
          }
        }
      });

      if (error) throw error;
      
      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast({
        title: "Welcome back!",
        description: "You have been signed in successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const userTypes = [
    {
      type: 'beneficiary',
      title: 'Beneficiary',
      description: 'Forest-dwelling community member',
      icon: Users,
      gradient: 'bg-gradient-forest'
    },
    {
      type: 'field_worker',
      title: 'Field Worker',
      description: 'Gram Rojgar Sevak or local official',
      icon: Smartphone,
      gradient: 'bg-gradient-earth'
    },
    {
      type: 'district_officer',
      title: 'District Officer',
      description: 'Administrative or planning official',
      icon: Shield,
      gradient: 'bg-gradient-card'
    }
  ];

  return (
    <div className="min-h-screen bg-nature-muted flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-forest rounded-full flex items-center justify-center mx-auto mb-4">
            <TreePine className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Van Adhikar Vikas</h1>
          <p className="text-muted-foreground">Access your digital forest rights platform</p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                <Button 
                  onClick={handleSignIn}
                  className="w-full" 
                  disabled={loading || !email || !password}
                  variant="forest"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Choose a password"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>Select your role:</Label>
                  {userTypes.map((userType) => {
                    const IconComponent = userType.icon;
                    return (
                      <Button
                        key={userType.type}
                        onClick={() => handleSignUp(userType.type)}
                        variant="outline"
                        className="w-full justify-start gap-3 h-auto p-4"
                        disabled={loading || !email || !password}
                      >
                        <div className={`w-8 h-8 ${userType.gradient} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{userType.title}</div>
                          <div className="text-sm text-muted-foreground">{userType.description}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;