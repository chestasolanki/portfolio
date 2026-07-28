import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * RobotCompanion
 * Interactive 3D head-tracking companion robot optimized for both Dark & Light themes:
 * - Ground shadow plane for realistic grounding on light/white background.
 * - Metallic dark slate/blue chamfered cube pedestal and head shell.
 * - Luminous sky blue glowing sphere eyes.
 * - Real-time 3D cursor head tracking (follows mouse movement).
 * - Theme-aware "Built with Spline" floating glass badge.
 */
export default function RobotCompanion() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // ---------- Scene / Camera / Renderer ----------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100);
    camera.position.set(0, 0.35, 7.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // ---------- Lighting ----------
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 7, 6);
    scene.add(keyLight);

    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.6);
    scene.add(ambientLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 5.5, 15);
    rimLight.position.set(-4, 3, -1);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x0284c7, 3.2, 12);
    fillLight.position.set(3, -3, 3);
    scene.add(fillLight);

    const frontLight = new THREE.DirectionalLight(0x7dd3fc, 1.0);
    frontLight.position.set(0, 1, 5);
    scene.add(frontLight);

    const geometriesToDispose = [];
    const materialsToDispose = [];

    // Helper: Create rounded rectangle shape
    function createRoundedRectShape(w, h, r) {
      const shape = new THREE.Shape();
      const x = -w / 2;
      const y = -h / 2;
      shape.moveTo(x + r, y);
      shape.lineTo(x + w - r, y);
      shape.quadraticCurveTo(x + w, y, x + w, y + r);
      shape.lineTo(x + w, y + h - r);
      shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      shape.lineTo(x + r, y + h);
      shape.quadraticCurveTo(x, y + h, x, y + h - r);
      shape.lineTo(x, y + r);
      shape.quadraticCurveTo(x, y, x + r, y);
      return shape;
    }

    // ---------- Materials ----------
    const shellMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.88,
      roughness: 0.16,
    });
    materialsToDispose.push(shellMat);

    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.2,
    });
    materialsToDispose.push(pedestalMat);

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.1,
    });
    materialsToDispose.push(chromeMat);

    const darkJointMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      metalness: 0.6,
      roughness: 0.3,
    });
    materialsToDispose.push(darkJointMat);

    const faceScreenMat = new THREE.MeshStandardMaterial({
      color: 0x030712,
      metalness: 0.4,
      roughness: 0.25,
    });
    materialsToDispose.push(faceScreenMat);

    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 2.3,
      roughness: 0.05,
    });
    materialsToDispose.push(eyeMat);

    // Robot group
    const robotGroup = new THREE.Group();
    robotGroup.position.set(0, -0.2, 0);
    scene.add(robotGroup);

    // ---------- Ground Shadow Disc (Enables realistic grounding in light mode) ----------
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sctx = shadowCanvas.getContext('2d');
    const sgrad = sctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    sgrad.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
    sgrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.18)');
    sgrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    sctx.fillStyle = sgrad;
    sctx.fillRect(0, 0, 128, 128);

    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(2.6, 2.6);
    geometriesToDispose.push(shadowGeo);

    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false });
    materialsToDispose.push(shadowMat);

    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -2.18, 0);
    robotGroup.add(shadowMesh);

    // ---------- 1. Pedestal Base (Chamfered Cube) ----------
    const pedestalShape = createRoundedRectShape(1.85, 1.85, 0.18);
    const pedestalExtrudeOpts = {
      depth: 1.85,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.07,
      bevelThickness: 0.07,
    };
    const pedestalGeo = new THREE.ExtrudeGeometry(pedestalShape, pedestalExtrudeOpts);
    pedestalGeo.center();
    geometriesToDispose.push(pedestalGeo);

    const pedestalMesh = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestalMesh.position.set(0, -1.25, 0);
    pedestalMesh.rotation.y = -0.28;
    pedestalMesh.rotation.x = 0.08;
    robotGroup.add(pedestalMesh);

    // ---------- 2. Neck Assembly & Pegs ----------
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, -0.22, 0);
    robotGroup.add(neckGroup);

    const pegGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.28, 16);
    geometriesToDispose.push(pegGeo);

    const pegL = new THREE.Mesh(pegGeo, darkJointMat);
    pegL.position.set(-0.16, 0.05, 0);
    neckGroup.add(pegL);

    const pegR = new THREE.Mesh(pegGeo, darkJointMat);
    pegR.position.set(0.16, 0.05, 0);
    neckGroup.add(pegR);

    // Conical collar cup
    const collarGeo = new THREE.CylinderGeometry(0.38, 0.22, 0.32, 32);
    geometriesToDispose.push(collarGeo);
    const collar = new THREE.Mesh(collarGeo, shellMat);
    collar.position.set(0, 0.26, 0);
    neckGroup.add(collar);

    // Chrome upper neck shaft
    const neckShaftGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.35, 32);
    geometriesToDispose.push(neckShaftGeo);
    const neckShaft = new THREE.Mesh(neckShaftGeo, chromeMat);
    neckShaft.position.set(0, 0.52, 0);
    neckGroup.add(neckShaft);

    // Top neck ball joint
    const jointBallGeo = new THREE.SphereGeometry(0.2, 32, 32);
    geometriesToDispose.push(jointBallGeo);
    const jointBall = new THREE.Mesh(jointBallGeo, chromeMat);
    jointBall.position.set(0, 0.72, 0);
    neckGroup.add(jointBall);

    // ---------- 3. Head Assembly (Rotates with Cursor) ----------
    const headPivot = new THREE.Group();
    headPivot.position.set(0, 0.58, 0);
    robotGroup.add(headPivot);

    const headGroup = new THREE.Group();
    headPivot.add(headGroup);

    // Main Boxy Head
    const headShape = createRoundedRectShape(1.85, 1.35, 0.24);
    const headExtrudeOpts = {
      depth: 1.2,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };
    const headGeo = new THREE.ExtrudeGeometry(headShape, headExtrudeOpts);
    headGeo.center();
    geometriesToDispose.push(headGeo);

    const headMesh = new THREE.Mesh(headGeo, shellMat);
    headMesh.position.set(0, 0.55, 0);
    headGroup.add(headMesh);

    // Screen Frame
    const screenFrameShape = createRoundedRectShape(1.5, 1.0, 0.16);
    const screenFrameOpts = {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    };
    const screenFrameGeo = new THREE.ExtrudeGeometry(screenFrameShape, screenFrameOpts);
    screenFrameGeo.center();
    geometriesToDispose.push(screenFrameGeo);

    const screenFrame = new THREE.Mesh(screenFrameGeo, darkJointMat);
    screenFrame.position.set(0, 0.55, 0.62);
    headGroup.add(screenFrame);

    // Screen Face Plate
    const screenPlateShape = createRoundedRectShape(1.4, 0.9, 0.12);
    const screenPlateGeo = new THREE.ShapeGeometry(screenPlateShape);
    geometriesToDispose.push(screenPlateGeo);

    const screenPlate = new THREE.Mesh(screenPlateGeo, faceScreenMat);
    screenPlate.position.set(0, 0.55, 0.66);
    headGroup.add(screenPlate);

    // ---------- 4. Glowing Eye Spheres ----------
    const eyeGeo = new THREE.SphereGeometry(0.155, 32, 32);
    geometriesToDispose.push(eyeGeo);

    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.35, 0.58, 0.68);
    headGroup.add(eyeL);

    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.35, 0.58, 0.68);
    headGroup.add(eyeR);

    // Blue eye point light
    const eyePointLight = new THREE.PointLight(0x38bdf8, 2.0, 2.5);
    eyePointLight.position.set(0, 0.58, 0.9);
    headGroup.add(eyePointLight);

    // ---------- Mouse Pointer Tracking ----------
    const targetRot = { x: 0, y: 0 };
    const currentRot = { x: 0, y: 0 };

    function handlePointerMove(e) {
      const rect = mount.getBoundingClientRect();
      const robotCenterX = rect.left + rect.width / 2;
      const robotCenterY = rect.top + rect.height * 0.4;

      const dx = e.clientX - robotCenterX;
      const dy = e.clientY - robotCenterY;

      const maxDistX = window.innerWidth * 0.55;
      const maxDistY = window.innerHeight * 0.55;

      targetRot.y = THREE.MathUtils.clamp(dx / maxDistX, -1, 1) * 0.75;
      targetRot.x = THREE.MathUtils.clamp(dy / maxDistY, -1, 1) * 0.45;
    }
    window.addEventListener('mousemove', handlePointerMove);

    // ---------- Resize Handler ----------
    function handleResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    // ---------- Animation Loop ----------
    let frameId;
    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();

      // Floating bobbing
      const floatY = Math.sin(t * 1.6) * 0.04;
      headPivot.position.y = 0.58 + floatY;

      // Lerp rotation towards cursor
      currentRot.y += (targetRot.y - currentRot.y) * 0.07;
      currentRot.x += (targetRot.x - currentRot.x) * 0.07;

      headGroup.rotation.y = currentRot.y;
      headGroup.rotation.x = currentRot.x;
      headGroup.rotation.z = -currentRot.y * 0.12;

      // Eye glow pulse
      eyeMat.emissiveIntensity = 2.2 + Math.sin(t * 2.5) * 0.4;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      shadowTexture.dispose();
      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}