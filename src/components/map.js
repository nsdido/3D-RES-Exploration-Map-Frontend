// src/components/map.js
import React, { useEffect } from 'react';
import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const Map = () => {
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer', {
      baseLayerPicker: false,
    });

    return () => viewer.destroy();
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
