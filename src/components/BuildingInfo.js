// BuildingInfo.js
import React from 'react';

const BuildingInfo = ({ building }) => {
  if (!building) return null;

  return (
    <div className="building-info">
      <h2>{building.name}</h2>
      <p>Height: {building.height}</p>
      <p>Location: ({building.latitude}, {building.longitude})</p>
      <p>Details: {building.details}</p>
    </div>
  );
};

export default BuildingInfo;
