import React from 'react';
import Spline from '@splinetool/react-spline';

/**
 * RobotCompanion
 * Embeds the actual Spline robot scene the user created/remixed, for an
 * exact visual match to the reference photo. Cursor-tracking is already
 * built into the scene itself, so no extra JS is needed here.
 *
 * Note: uses '@splinetool/react-spline' (NOT '@splinetool/react-spline/next')
 * since this is a Vite project, not Next.js. The '/next' import path only
 * works inside a Next.js app.
 */
const SCENE_URL = 'https://prod.spline.design/O6mhUyGSnkb59uZb/scene.splinecode';

export default function RobotCompanion() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Spline scene={SCENE_URL} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}