import React from 'react';
import PackageRegistry from './components/PackageRegistry';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600">
      <PackageRegistry />
    </div>
  );
}

export default App;