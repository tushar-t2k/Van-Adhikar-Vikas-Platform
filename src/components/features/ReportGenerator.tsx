import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  DollarSign,
  MapPin,
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowLeft,
  X
} from "lucide-react";

interface ReportGeneratorProps {
  onClose?: () => void;
}

const ReportGenerator: React.FC<ReportGeneratorProps> = ({ onClose }) => {
  const [selectedReport, setSelectedReport] = useState('comprehensive');
  const [reportPeriod, setReportPeriod] = useState('monthly');

  const reportTypes = [
    {
      id: 'comprehensive',
      name: 'Comprehensive District Report',
      description: 'Complete overview of all FRA schemes and implementations',
      includes: ['Beneficiary Statistics', 'Budget Utilization', 'Scheme Performance', 'GIS Analysis'],
      format: ['PDF', 'Excel', 'PowerPoint']
    },
    {
      id: 'beneficiary',
      name: 'Beneficiary Progress Report', 
      description: 'Detailed analysis of beneficiary enrollment and satisfaction',
      includes: ['Registration Trends', 'Verification Status', 'Scheme Uptake', 'Feedback Analysis'],
      format: ['PDF', 'Excel']
    },
    {
      id: 'financial',
      name: 'Financial Utilization Report',
      description: 'Budget allocation, utilization and variance analysis',
      includes: ['Budget vs Actual', 'Scheme-wise Allocation', 'Payment Status', 'Audit Trail'],
      format: ['PDF', 'Excel']
    },
    {
      id: 'gis',
      name: 'GIS & Spatial Analysis Report',
      description: 'Maps, satellite analysis and spatial statistics',
      includes: ['Land Use Changes', 'Forest Cover Analysis', 'Delta Analysis', 'Asset Mapping'],
      format: ['PDF', 'GIS Package']
    }
  ];

  const recentReports = [
    {
      name: 'Monthly Progress Report - November 2024',
      type: 'Comprehensive',
      generated: '2024-12-01',
      status: 'completed',
      size: '2.5 MB'
    },
    {
      name: 'FRA Verification Status - Q3 2024',
      type: 'Beneficiary',
      generated: '2024-11-28',
      status: 'completed',
      size: '1.8 MB'
    },
    {
      name: 'Budget Utilization Analysis - H1 2024',
      type: 'Financial',
      generated: '2024-11-25',
      status: 'processing',
      size: 'Pending'
    }
  ];

  const kpiSummary = [
    { label: 'Total Beneficiaries', value: '45,280', icon: Users, color: 'text-blue-600' },
    { label: 'Budget Utilized', value: '₹89.2 Cr', icon: DollarSign, color: 'text-green-600' },
    { label: 'Verified Pattas', value: '38,450', icon: CheckCircle, color: 'text-purple-600' },
    { label: 'Active Schemes', value: '12', icon: BarChart3, color: 'text-orange-600' }
  ];

  const handleGenerateReport = () => {
    // Report generation logic would go here
    console.log(`Generating ${selectedReport} report for ${reportPeriod} period`);
    // Here you would typically:
    // 1. Call API to generate report
    // 2. Download the generated file
    // 3. Show success message
    alert(`Generating ${selectedReport} report for ${reportPeriod} period. This would typically download a file.`);
  };

  const handleExportReport = (reportName) => {
    // Export existing report
    console.log(`Exporting report: ${reportName}`);
    alert(`Exporting report: ${reportName}. This would typically download the file.`);
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FileText className="w-8 h-8 text-forest-primary" />
              Report Generator
            </h1>
            <p className="text-muted-foreground mt-2">
              Generate comprehensive reports with real-time data and analytics
            </p>
          </div>
          <div className="flex items-center gap-3">
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

        {/* KPI Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {kpiSummary.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{kpi.label}</p>
                      <p className="text-2xl font-bold">{kpi.value}</p>
                    </div>
                    <IconComponent className={`w-8 h-8 ${kpi.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Report Configuration */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Configure Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Report Type Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Select Report Type</label>
                  <div className="space-y-3">
                    {reportTypes.map((report) => (
                      <div 
                        key={report.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedReport === report.id ? 'border-forest-primary bg-forest-primary/5' : 'border-border hover:border-border/80'
                        }`}
                        onClick={() => setSelectedReport(report.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{report.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {report.includes.map((include, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {include}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-1">
                              {report.format.map((format, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {format}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedReport === report.id ? 'border-forest-primary bg-forest-primary' : 'border-border'
                          }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Period Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Time Period</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['weekly', 'monthly', 'quarterly', 'yearly'].map((period) => (
                      <Button
                        key={period}
                        variant={reportPeriod === period ? 'default' : 'outline'}
                        onClick={() => setReportPeriod(period)}
                        className="capitalize"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {period}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="forest" 
                    size="lg" 
                    className="w-full"
                    onClick={handleGenerateReport}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports & Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Recent Reports
                  </span>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentReports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{report.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{report.type}</Badge>
                        <Badge variant={report.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                          {report.status === 'completed' ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {report.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Generated: {report.generated}</span>
                        <span>Size: {report.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {report.status === 'completed' && (
                        <>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleExportReport(report.name)}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      {report.status === 'processing' && (
                        <Button variant="outline" size="sm" disabled>
                          Processing...
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Report Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Report Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-forest-primary/10 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-forest-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">Charts & Graphs</p>
                    </div>
                    <div className="p-4 bg-earth-primary/10 rounded-lg">
                      <MapPin className="w-8 h-8 text-earth-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">Maps & Analysis</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Select a report type and generate to see the preview with real-time data visualizations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGenerator;