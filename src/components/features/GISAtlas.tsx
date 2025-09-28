import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Layers, 
  Satellite, 
  TreePine, 
  Home, 
  Navigation,
  ZoomIn,
  ZoomOut,
  Download,
  Share,
  Filter,
  ArrowLeft,
  X
} from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface GISAtlasProps {
  onClose?: () => void;
}

const GISAtlas: React.FC<GISAtlasProps> = ({ onClose }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const layers = [
    { name: "Administrative Boundaries", active: true, type: "Vector", source: "SOI" },
    { name: "Forest Cover 2023", active: true, type: "Raster", source: "FSI" },
    { name: "FRA Pattas", active: true, type: "Vector", source: "District DB" },
    { name: "Village Boundaries", active: false, type: "Vector", source: "Revenue Dept" },
    { name: "Satellite Imagery", active: true, type: "Raster", source: "Sentinel-2" },
    { name: "Forest Fire Risk", active: false, type: "WMS", source: "FSI" }
  ];

  const analysisResults = [
    { type: "Forest Cover Change", value: "+2.3%", period: "2022-2023", status: "positive" },
    { type: "Land Use Changes", value: "15 locations", period: "Last 6 months", status: "warning" },
    { type: "Encroachment Detection", value: "3 alerts", period: "This month", status: "alert" }
  ];

  // Initialize map when token is provided
  useEffect(() => {
    if (!mapContainer.current || !isTokenSet || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9', // Satellite imagery
      center: [78.9629, 20.5937], // Center of India
      zoom: 5,
      pitch: 45,
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

    // Add sample forest boundary markers for demonstration
    const forestAreas = [
      { name: "Madhya Pradesh Forest", coordinates: [78.6569, 22.9734] as [number, number] },
      { name: "Odisha Forest Reserve", coordinates: [85.0985, 20.9517] as [number, number] },
      { name: "Tripura Forests", coordinates: [91.9882, 23.9408] as [number, number] },
      { name: "Telangana Forest", coordinates: [79.0193, 18.1124] as [number, number] }
    ];

    forestAreas.forEach(area => {
      // Add markers for forest areas
      const marker = new mapboxgl.Marker({ color: '#22c55e' })
        .setLngLat(area.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${area.name}</h3><p>FRA Implementation Area</p>`))
        .addTo(map.current!);
    });

    // Add sample polygon boundaries
    map.current.on('load', () => {
      // Add forest cover layer
      map.current!.addSource('forest-areas', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [78.3, 22.5], [79.0, 22.5], [79.0, 23.2], [78.3, 23.2], [78.3, 22.5]
                ]]
              },
              properties: { name: 'MP Forest Block 1', type: 'Reserved Forest' }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [84.8, 20.5], [85.4, 20.5], [85.4, 21.1], [84.8, 21.1], [84.8, 20.5]
                ]]
              },
              properties: { name: 'Odisha CFR Area', type: 'Community Forest Resource' }
            }
          ]
        }
      });

      map.current!.addLayer({
        id: 'forest-boundaries',
        type: 'fill',
        source: 'forest-areas',
        paint: {
          'fill-color': '#22c55e',
          'fill-opacity': 0.3
        }
      });

      map.current!.addLayer({
        id: 'forest-boundaries-outline',
        type: 'line',
        source: 'forest-areas',
        paint: {
          'line-color': '#16a34a',
          'line-width': 2
        }
      });

      // Add click event for boundaries
      map.current!.on('click', 'forest-boundaries', (e) => {
        const properties = e.features![0].properties;
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(`<h3>${properties!.name}</h3><p>Type: ${properties!.type}</p>`)
          .addTo(map.current!);
      });

      // Change cursor on hover
      map.current!.on('mouseenter', 'forest-boundaries', () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });

      map.current!.on('mouseleave', 'forest-boundaries', () => {
        map.current!.getCanvas().style.cursor = '';
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-card border-r border-border overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onClose}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h2 className="text-2xl font-bold">FRA GIS Atlas</h2>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {!isTokenSet && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Setup Required</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Please enter your Mapbox public token to display the interactive map.
                  Get your token from <a href="https://mapbox.com/" target="_blank" className="text-primary underline">mapbox.com</a>
                </p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1Ijoi..."
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleTokenSubmit}>
                    Load Map
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Layer Control */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Map Layers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {layers.map((layer, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={layer.active}
                      onChange={() => {}}
                      className="w-4 h-4 rounded border-border"
                    />
                    <div>
                      <p className="font-medium text-sm">{layer.name}</p>
                      <p className="text-xs text-muted-foreground">{layer.type} • {layer.source}</p>
                    </div>
                  </div>
                  <Badge variant={layer.active ? "default" : "secondary"} className="text-xs">
                    {layer.active ? "ON" : "OFF"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Satellite className="w-5 h-5" />
                Delta Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {analysisResults.map((result, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  result.status === 'positive' ? 'bg-green-50 border-green-200' :
                  result.status === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{result.type}</span>
                    <Badge variant={
                      result.status === 'positive' ? 'default' :
                      result.status === 'warning' ? 'secondary' :
                      'destructive'
                    }>
                      {result.value}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{result.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 relative">
        {/* Map Toolbar */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-background">
              <Navigation className="w-4 h-4 mr-2" />
              Navigate
            </Button>
            <Button variant="outline" size="sm" className="bg-background">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="bg-background">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-background"
              onClick={onClose}
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-20 right-4 z-10 flex flex-col gap-2">
          <Button variant="outline" size="sm" className="bg-background w-10 h-10 p-0">
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="bg-background w-10 h-10 p-0">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="bg-background w-10 h-10 p-0">
            <Home className="w-4 h-4" />
          </Button>
        </div>

        {/* Map Display Area */}
        <div className="w-full h-full relative">
          {isTokenSet ? (
            <div ref={mapContainer} className="absolute inset-0" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <div className="text-center p-8">
                <Satellite className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Interactive Satellite Map</h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Enter your Mapbox token in the sidebar to display satellite imagery with forest boundaries, 
                  administrative areas, and FRA implementation zones.
                </p>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="p-4 bg-background rounded-lg border">
                    <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Forest Areas</p>
                    <p className="text-xs text-muted-foreground">45,280 hectares</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">FRA Pattas</p>
                    <p className="text-xs text-muted-foreground">38,450 verified</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border p-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span>Coordinates: 19.0760° N, 82.1391° E</span>
              <span>Scale: 1:50,000</span>
              <span>Projection: WGS84</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Data sources connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GISAtlas;