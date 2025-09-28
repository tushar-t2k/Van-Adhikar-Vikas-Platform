import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  Camera,
  Eye,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  Folder,
  Image,
  FileCheck,
  ArrowLeft,
  X
} from "lucide-react";

interface DocumentManagerProps {
  onClose?: () => void;
}

const DocumentManager: React.FC<DocumentManagerProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const documentCategories = [
    { id: 'all', name: 'All Documents', count: 24 },
    { id: 'fra-pattas', name: 'FRA Pattas', count: 8 },
    { id: 'identity', name: 'Identity Proofs', count: 6 },
    { id: 'income', name: 'Income Certificates', count: 5 },
    { id: 'photos', name: 'Field Photos', count: 5 }
  ];

  const documents = [
    {
      id: 'DOC001',
      name: 'FRA_Patta_RD_001.pdf',
      type: 'FRA Patta',
      category: 'fra-pattas',
      size: '2.4 MB',
      uploadDate: '2024-12-01',
      status: 'verified',
      beneficiary: 'Radha Devi',
      thumbnail: '/placeholder.svg',
      confidence: 95
    },
    {
      id: 'DOC002', 
      name: 'Aadhaar_RS_002.jpg',
      type: 'Identity Proof',
      category: 'identity',
      size: '1.8 MB',
      uploadDate: '2024-11-30',
      status: 'processing',
      beneficiary: 'Ram Singh',
      thumbnail: '/placeholder.svg',
      confidence: 88
    },
    {
      id: 'DOC003',
      name: 'Land_Survey_Photo_001.jpg',
      type: 'Field Photo',
      category: 'photos',
      size: '3.2 MB',
      uploadDate: '2024-11-29',
      status: 'verified',
      beneficiary: 'Maya Kumari',
      thumbnail: '/placeholder.svg',
      confidence: 92
    },
    {
      id: 'DOC004',
      name: 'Income_Certificate_MK_003.pdf',
      type: 'Income Certificate',
      category: 'income',
      size: '1.1 MB',
      uploadDate: '2024-11-28',
      status: 'rejected',
      beneficiary: 'Maya Kumari',
      thumbnail: '/placeholder.svg',
      confidence: 45
    }
  ];

  const aiProcessingStats = [
    { label: 'OCR Accuracy', value: '94%', color: 'text-green-600' },
    { label: 'Auto-Classification', value: '87%', color: 'text-blue-600' },
    { label: 'Data Extraction', value: '91%', color: 'text-purple-600' },
    { label: 'Fraud Detection', value: '89%', color: 'text-orange-600' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'verified': return 'default';
      case 'processing': return 'secondary';
      case 'rejected': return 'destructive';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'verified': return CheckCircle;
      case 'processing': return Clock;
      case 'rejected': return AlertTriangle;
      default: return FileText;
    }
  };

  const handleDownloadDocument = (docName) => {
    console.log(`Downloading document: ${docName}`);
    alert(`Downloading document: ${docName}. This would typically download the file.`);
  };

  const handleViewDocument = (docName) => {
    console.log(`Viewing document: ${docName}`);
    alert(`Opening document viewer for: ${docName}`);
  };

  const handleDeleteDocument = (docName) => {
    console.log(`Deleting document: ${docName}`);
    if (confirm(`Are you sure you want to delete ${docName}?`)) {
      alert(`Document ${docName} would be deleted from the system.`);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FileText className="w-8 h-8 text-forest-primary" />
              AI Document Manager
            </h1>
            <p className="text-muted-foreground mt-2">
              Intelligent document processing with OCR and automatic verification
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="forest">
              <Upload className="w-4 h-4 mr-2" />
              Upload Documents
            </Button>
            <Button variant="outline">
              <Camera className="w-4 h-4 mr-2" />
              Camera Capture
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

        {/* AI Processing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {aiProcessingStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <FileCheck className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Document Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {documentCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'ghost'}
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="flex items-center gap-2">
                      <Folder className="w-4 h-4" />
                      {category.name}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Document Grid */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Documents</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {documents
                    .filter(doc => selectedCategory === 'all' || doc.category === selectedCategory)
                    .map((doc) => {
                      const StatusIcon = getStatusIcon(doc.status);
                      return (
                        <div key={doc.id} className="border border-border rounded-lg p-4 hover:shadow-card transition-all duration-300">
                          {/* Document Thumbnail */}
                          <div className="bg-muted rounded-lg mb-3 h-32 flex items-center justify-center">
                            {doc.name.includes('.jpg') || doc.name.includes('.png') ? (
                              <Image className="w-8 h-8 text-muted-foreground" />
                            ) : (
                              <FileText className="w-8 h-8 text-muted-foreground" />
                            )}
                          </div>

                          {/* Document Info */}
                          <div className="space-y-2">
                            <div className="flex items-start justify-between">
                              <h3 className="font-medium text-sm truncate flex-1" title={doc.name}>
                                {doc.name}
                              </h3>
                              <Badge variant={getStatusColor(doc.status)} className="text-xs ml-2">
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {doc.status}
                              </Badge>
                            </div>
                            
                            <div className="text-xs text-muted-foreground space-y-1">
                              <p>Type: {doc.type}</p>
                              <p>Beneficiary: {doc.beneficiary}</p>
                              <p>Size: {doc.size} • {doc.uploadDate}</p>
                            </div>

                            {/* AI Confidence Score */}
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">AI Confidence:</span>
                              <div className="flex-1 h-1.5 bg-muted rounded-full">
                                <div 
                                  className={`h-1.5 rounded-full ${
                                    doc.confidence >= 80 ? 'bg-green-500' :
                                    doc.confidence >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: `${doc.confidence}%` }}
                                ></div>
                              </div>
                              <span className="text-xs font-medium">{doc.confidence}%</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2 pt-2">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1"
                                onClick={() => handleViewDocument(doc.name)}
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                View
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDownloadDocument(doc.name)}
                              >
                                <Download className="w-3 h-3" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDeleteDocument(doc.name)}
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Upload Zone */}
                <div className="mt-6 border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Upload New Documents</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop files here or click to browse. AI will automatically process and classify your documents.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Button variant="forest">
                      <Upload className="w-4 h-4 mr-2" />
                      Browse Files
                    </Button>
                    <Button variant="outline">
                      <Camera className="w-4 h-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentManager;