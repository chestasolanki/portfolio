import React from 'react';
import Spline from '@splinetool/react-spline';

const SCENE_URL = 'https://prod.spline.design/O6mhUyGSnkb59uZb/scene.splinecode';

export default function RobotCompanion() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}