import React, { useEffect } from 'react';
import { Ion, Viewer, Cartesian3, Color, ScreenSpaceEventType } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { fetchBuildings } from '../services/api'; // Import the API function

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYWFkN2QyNS0wMzM3LTRjNDctOWUwMC03OWU1YTVhMWU2OWEiLCJpZCI6MjU1MDcxLCJpYXQiOjE3MzE1MjExNDR9.1ZYdq-aQQA4Zn4UAuqGWTgucAdaXsme1WEAd6paH8wQ';

const Map = ({ onBuildingClick }) => {
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer', {
      baseLayerPicker: false,
    });

    fetchBuildings().then((buildings) => {
      buildings.forEach((building) => {
        viewer.entities.add({
          id: building.id,
          name: building.name,
          position: Cartesian3.fromDegrees(building.longitude, building.latitude, building.height),
          point: {
            pixelSize: 10,
            color: Color.RED,
          },
        });
      });
    });

    viewer.screenSpaceEventHandler.setInputAction((click) => {
      const pickedEntity = viewer.scene.pick(click.position);
      if (pickedEntity && pickedEntity.id) {
        const buildingId = pickedEntity.id.id;
        const building = building.find(b => b.id === buildingId);
        viewer.camera.flyTo({
          destination: Cartesian3.fromDegrees(building.longitude, building.latitude, building.height + 100),
        });
        onBuildingClick(building); // Pass selected building data to parent
      }
    }, ScreenSpaceEventType.LEFT_CLICK);

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }} />;
};

export default Map;
