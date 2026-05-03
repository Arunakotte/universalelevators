/**
 * Premium 3D glass elevator hero animation.
 * Uses Three.js with MeshPhysicalMaterial for realistic glass.
 * Lightweight — simple box geometry, no textures.
 */
import { useRef, useEffect } from "react";
import * as THREE from "three";

/* ---------- constants ---------- */
const SHAFT_W = 2.2;
const SHAFT_H = 5;
const SHAFT_D = 2.2;
const CAB_W = 1.6;
const CAB_H = 1.1;
const CAB_D = 1.5;
const TRAVEL = 1.6;         // ±Y travel range
const SPEED = 0.35;         // radians per second (slower, smooth)
const FLOOR_COUNT = 6;

export function ElevatorShaft() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    /* ---- renderer ---- */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    /* ---- scene ---- */
    const scene = new THREE.Scene();

    /* ---- camera ---- */
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.6, 7.5);
    camera.lookAt(0, 0, 0);

    /* ---- lighting ---- */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xffffff, 1.2, 20);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xf0f5ff, 0.5, 15);
    fillLight.position.set(-3, -1, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 0.3, 12);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    /* ---- shaft (wireframe structure) ---- */
    const shaftGroup = new THREE.Group();

    // Vertical corner pillars (steel)
    const pillarGeo = new THREE.CylinderGeometry(0.035, 0.035, SHAFT_H, 8);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x99aacc,
      metalness: 0.8,
      roughness: 0.2,
    });

    const halfW = SHAFT_W / 2;
    const halfD = SHAFT_D / 2;
    const corners = [
      [-halfW, -halfD],
      [halfW, -halfD],
      [halfW, halfD],
      [-halfW, halfD],
    ];

    corners.forEach(([x, z]) => {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(x, 0, z);
      shaftGroup.add(pillar);
    });

    // Horizontal floor beams (steel)
    const beamMatFront = new THREE.MeshStandardMaterial({
      color: 0x8899aa,
      metalness: 0.7,
      roughness: 0.3,
    });
    const beamGeoX = new THREE.CylinderGeometry(0.02, 0.02, SHAFT_W, 6);
    beamGeoX.rotateZ(Math.PI / 2);
    const beamGeoZ = new THREE.CylinderGeometry(0.02, 0.02, SHAFT_D, 6);
    beamGeoZ.rotateX(Math.PI / 2);

    for (let i = 0; i <= FLOOR_COUNT; i++) {
      const y = -SHAFT_H / 2 + (SHAFT_H / FLOOR_COUNT) * i;

      // Front & back horizontal beams
      [-halfD, halfD].forEach((z) => {
        const beam = new THREE.Mesh(beamGeoX, beamMatFront);
        beam.position.set(0, y, z);
        shaftGroup.add(beam);
      });

      // Left & right horizontal beams
      [-halfW, halfW].forEach((x) => {
        const beam = new THREE.Mesh(beamGeoZ, beamMatFront);
        beam.position.set(x, y, 0);
        shaftGroup.add(beam);
      });
    }

    // Guide rails (inside the shaft)
    const railGeo = new THREE.BoxGeometry(0.06, SHAFT_H, 0.06);
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x8899aa,
      metalness: 0.9,
      roughness: 0.2,
    });
    const railOffset = CAB_W / 2 + 0.1;
    [-railOffset, railOffset].forEach((x) => {
      const rail = new THREE.Mesh(railGeo, railMat);
      rail.position.set(x, 0, 0);
      shaftGroup.add(rail);
    });

    scene.add(shaftGroup);

    /* ---- elevator cabin (glass) ---- */
    const cabinGroup = new THREE.Group();

    // Glass body
    const glassGeo = new THREE.BoxGeometry(CAB_W, CAB_H, CAB_D);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.95,
      opacity: 0.35,
      transparent: true,
      roughness: 0.05,
      metalness: 0.1,
      thickness: 0.3,
      ior: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide,
    });
    const glassBox = new THREE.Mesh(glassGeo, glassMat);
    cabinGroup.add(glassBox);

    // Cabin frame (edges)
    const edgesGeo = new THREE.EdgesGeometry(glassGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x8899aa,
      transparent: true,
      opacity: 0.4,
    });
    const edges = new THREE.LineSegments(edgesGeo, edgesMat);
    cabinGroup.add(edges);

    // Floor inside cabin
    const floorGeo = new THREE.BoxGeometry(CAB_W - 0.04, 0.04, CAB_D - 0.04);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x334455,
      metalness: 0.6,
      roughness: 0.5,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -CAB_H / 2 + 0.02;
    cabinGroup.add(floor);

    // Doors (two halves)
    const doorGeo = new THREE.BoxGeometry(CAB_W / 2 - 0.02, CAB_H * 0.95, 0.02);
    const doorMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.8,
      opacity: 0.5,
      transparent: true,
      roughness: 0.1,
      metalness: 0.2,
      ior: 1.4,
    });
    const doorLeft = new THREE.Mesh(doorGeo, doorMat);
    const doorRight = new THREE.Mesh(doorGeo, doorMat);
    
    // Position doors at the front
    doorLeft.position.set(-CAB_W / 4, 0, CAB_D / 2);
    doorRight.position.set(CAB_W / 4, 0, CAB_D / 2);
    cabinGroup.add(doorLeft);
    cabinGroup.add(doorRight);

    // Interior light (very subtle)
    const cabLight = new THREE.PointLight(0xffffff, 0.2, 3);
    cabLight.position.set(0, CAB_H / 2 - 0.1, 0);
    cabinGroup.add(cabLight);

    scene.add(cabinGroup);

    /* ---- resize handler ---- */
    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    /* ---- animation loop ---- */
    const clock = new THREE.Clock();

    function animate() {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth sinusoidal elevator motion
      const motionPhase = Math.sin(elapsed * SPEED);
      cabinGroup.position.y = motionPhase * TRAVEL;

      // Door opening logic: open when at the very top or bottom
      // Math.abs(motionPhase) approaches 1 at the extremes
      const atExtreme = Math.max(0, (Math.abs(motionPhase) - 0.95) * 20); // 0 to 1
      const openAmount = Math.pow(atExtreme, 2) * (CAB_W / 2.5);
      doorLeft.position.x = -CAB_W / 4 - openAmount;
      doorRight.position.x = CAB_W / 4 + openAmount;

      // Subtle cabin sway for realism
      cabinGroup.rotation.z = Math.sin(elapsed * 1.3) * 0.002;

      // Gentle scene rotation for depth
      shaftGroup.rotation.y = Math.sin(elapsed * 0.1) * 0.04;
      cabinGroup.rotation.y = shaftGroup.rotation.y;

      // Pulse the cabin interior light subtly
      cabLight.intensity = 0.15 + Math.sin(elapsed * 2) * 0.05;

      renderer.render(scene, camera);
    }

    animate();

    /* ---- cleanup ---- */
    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="elevator-3d-container" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
