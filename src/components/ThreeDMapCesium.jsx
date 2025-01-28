import React, { useEffect } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const ThreeDMapCesium = () => {
  useEffect(() => {
    // Make sure Cesium is loaded
    if (!Cesium) {
      console.error('Cesium is not loaded');
      return;
    }

    // Set Cesium Ion Access Token
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YTgzYjY5YS01ZjMzLTRkM2ItYjg3Mi1jODQyNWIxYjE3ZWQiLCJpZCI6MjcxNzcxLCJpYXQiOjE3MzgwMDExNzR9.G1NMgZHhRxBPNPK31-qumePUytUbvKEWNzEmDLWestU'; // Replace with your token

    // Initialize the Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain(),
    });

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default ThreeDMapCesium;
