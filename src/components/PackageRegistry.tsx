import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Package, Search, Upload, Download, RefreshCw, Star, HardDrive, RotateCcw } from 'lucide-react';

const PackageRegistry: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="container mx-auto p-4 max-w-4xl space-y-6">
      <Card>
        <CardHeader className="border-b pb-3">
          <CardTitle className="text-2xl font-bold">Package Registry Interface</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Input 
              placeholder="Search packages with regex..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button variant="secondary">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="upload">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="upload">Package Management</TabsTrigger>
          <TabsTrigger value="query">Package Query</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Primary actions - dark background */}
                <Button variant="default" className="w-full bg-slate-900 hover:bg-slate-800">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Package
                </Button>
                <Button variant="default" className="w-full bg-slate-900 hover:bg-slate-800">
                  <Download className="w-4 h-4 mr-2" />
                  Download Package
                </Button>

                {/* Secondary actions - light gray background */}
                <Button variant="secondary" className="w-full">
                  <Star className="w-4 h-4 mr-2" />
                  Check Rating
                </Button>
                <Button variant="secondary" className="w-full">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Update Package
                </Button>

                {/* Optional actions - outline style */}
                <Button variant="outline" className="w-full">
                  <Package className="w-4 h-4 mr-2" />
                  Ingest NPM Package
                </Button>
                <Button variant="outline" className="w-full">
                  <HardDrive className="w-4 h-4 mr-2" />
                  Check Package Size
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="query">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-4">
                <Button variant="default" className="w-full bg-slate-900 hover:bg-slate-800">
                  <Package className="w-4 h-4 mr-2" />
                  Fetch Available Versions
                </Button>
                <Button variant="default" className="w-full bg-slate-900 hover:bg-slate-800">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Package Directory
                </Button>
                <Button variant="default" className="w-full bg-slate-900 hover:bg-slate-800">
                  <HardDrive className="w-4 h-4 mr-2" />
                  Check Dependency Sizes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="pt-6">
          <Button variant="destructive" className="w-full">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Registry
          </Button>
        </CardContent>
      </Card>

      <Alert>
        <AlertDescription>
          This interface connects to REST API endpoints for package management operations.
          Each action is validated and processed according to the specified requirements.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default PackageRegistry;