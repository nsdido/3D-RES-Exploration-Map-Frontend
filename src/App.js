import React, { useState } from 'react';
import Map from './components/map';
import BuildingInfo from './components/BuildingInfo';

const App = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <div className="app">
      <Map onBuildingClick={setSelectedBuilding} />
      <BuildingInfo building={selectedBuilding} />
    </div>
  );
};

export default App;
