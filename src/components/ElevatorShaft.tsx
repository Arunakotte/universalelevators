import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import fallbackImg from "../assets/hero-lift.jpg";

/* ---------- configuration ---------- */
const CAB_W = 1.6;
const CAB_H = 2.2;
const CAB_D = 1.6;
const TRAVEL = 1.2;
const DURATION = 8.0;

export function ElevatorShaft() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check WebGL support
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    /* ---- renderer ---- */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    /* ---- scene & camera ---- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    /* ---- lighting (Premium Corporate) ---- */
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2.5);
    topLight.position.set(0, 10, 2);
    scene.add(topLight);

    const blueTintLight = new THREE.DirectionalLight(0x1a6fc4, 1.5);
    blueTintLight.position.set(5, 0, 5);
    scene.add(blueTintLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, 0, 5);
    scene.add(fillLight);

    /* ---- materials ---- */
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xd0d5dd,
      metalness: 0.7,
      roughness: 0.2,
    });

    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.6,
      roughness: 0.4,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xf8fafc,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.5,
      thickness: 0.1,
      side: THREE.DoubleSide,
    });

    /* ---- elevator assembly ---- */
    const elevatorGroup = new THREE.Group();

    // 1. Cabin Roof & Floor
    const capGeo = new THREE.BoxGeometry(CAB_W, 0.1, CAB_D);
    const roof = new THREE.Mesh(capGeo, metalMat);
    roof.position.y = CAB_H / 2 + 0.05;
    const floor = new THREE.Mesh(capGeo, darkMetalMat);
    floor.position.y = -CAB_H / 2 - 0.05;
    elevatorGroup.add(roof);
    elevatorGroup.add(floor);

    // 2. Solid Back Wall (Metal)
    const backWallGeo = new THREE.BoxGeometry(CAB_W, CAB_H, 0.05);
    const backWall = new THREE.Mesh(backWallGeo, metalMat);
    backWall.position.set(0, 0, -CAB_D / 2 + 0.025);
    elevatorGroup.add(backWall);

    // 3. Glass Side Walls
    const sideWallGeo = new THREE.BoxGeometry(0.05, CAB_H, CAB_D - 0.05);
    const leftWall = new THREE.Mesh(sideWallGeo, glassMat);
    leftWall.position.set(-CAB_W / 2 + 0.025, 0, 0.025);
    const rightWall = new THREE.Mesh(sideWallGeo, glassMat);
    rightWall.position.set(CAB_W / 2 - 0.025, 0, 0.025);
    elevatorGroup.add(leftWall);
    elevatorGroup.add(rightWall);

    // 4. Center-Split Glass Doors
    const doorGeo = new THREE.BoxGeometry(CAB_W / 2 - 0.02, CAB_H, 0.05);
    const doorLeft = new THREE.Mesh(doorGeo, glassMat);
    const doorRight = new THREE.Mesh(doorGeo, glassMat);
    
    doorLeft.position.set(-CAB_W / 4, 0, CAB_D / 2 - 0.025);
    doorRight.position.set(CAB_W / 4, 0, CAB_D / 2 - 0.025);
    elevatorGroup.add(doorLeft);
    elevatorGroup.add(doorRight);

    // 5. Door Frames (Subtle metal strips)
    const frameGeo = new THREE.BoxGeometry(0.04, CAB_H, 0.06);
    const frameLeft = new THREE.Mesh(frameGeo, metalMat);
    frameLeft.position.set(-CAB_W / 2 + 0.02, 0, CAB_D / 2 - 0.025);
    const frameRight = new THREE.Mesh(frameGeo, metalMat);
    frameRight.position.set(CAB_W / 2 - 0.02, 0, CAB_D / 2 - 0.025);
    elevatorGroup.add(frameLeft);
    elevatorGroup.add(frameRight);

    // Add simple central light inside cabin
    const interiorLight = new THREE.PointLight(0xffffff, 0.5, 4);
    interiorLight.position.set(0, CAB_H / 2 - 0.2, 0);
    elevatorGroup.add(interiorLight);

    scene.add(elevatorGroup);

    /* ---- ground shadow (fake subtle shadow) ---- */
    const shadowGeo = new THREE.PlaneGeometry(CAB_W * 1.5, CAB_D * 1.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -TRAVEL - CAB_H / 2 - 0.1;
    scene.add(shadow);

    // Slight angle to make it look dynamic
    elevatorGroup.rotation.y = 0.3;
    shadow.rotation.z = -0.3;

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
      const elapsed = clock.getElapsedTime() % DURATION;
      const progress = elapsed / DURATION; // 0 to 1

      let y = 0;
      let doorsOpen = 0;

      // 0.00 -> 0.35 : Move Up
      if (progress < 0.35) {
        const t = progress / 0.35;
        // Smooth ease-in-out
        y = -TRAVEL + ((Math.sin(t * Math.PI - Math.PI / 2) + 1) / 2) * (TRAVEL * 2);
        doorsOpen = 0;
      }
      // 0.35 -> 0.50 : Pause at Top, Open & Close Doors
      else if (progress < 0.5) {
        y = TRAVEL;
        const t = (progress - 0.35) / 0.15;
        doorsOpen = Math.sin(t * Math.PI); // 0 -> 1 -> 0
      }
      // 0.50 -> 0.85 : Move Down
      else if (progress < 0.85) {
        const t = (progress - 0.5) / 0.35;
        y = TRAVEL - ((Math.sin(t * Math.PI - Math.PI / 2) + 1) / 2) * (TRAVEL * 2);
        doorsOpen = 0;
      }
      // 0.85 -> 1.00 : Pause at Bottom, Open & Close Doors
      else {
        y = -TRAVEL;
        const t = (progress - 0.85) / 0.15;
        doorsOpen = Math.sin(t * Math.PI); // 0 -> 1 -> 0
      }

      elevatorGroup.position.y = y;
      
      // Reset rotation since we removed the scroll tilt
      elevatorGroup.rotation.x = 0;

      // Animate doors sliding outward
      const openAmount = doorsOpen * (CAB_W / 2.2);
      doorLeft.position.x = -CAB_W / 4 - openAmount;
      doorRight.position.x = CAB_W / 4 + openAmount;

      // Subtle cabin floating/sway
      elevatorGroup.position.y += Math.sin(clock.getElapsedTime() * 2) * 0.02;

      // Scale shadow based on height
      const heightPercent = Math.max(0, Math.min(1, (elevatorGroup.position.y - (-TRAVEL)) / (TRAVEL * 2))); // 0 to 1
      shadow.scale.setScalar(1 + heightPercent * 0.2);
      shadowMat.opacity = 0.15 - heightPercent * 0.1;

      renderer.render(scene, camera);
    }

    animate();

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
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] overflow-hidden elevator-wrapper rounded-2xl">
      {!webglSupported ? (
        <img
          src={fallbackImg}
          alt="Premium Elevator"
          className="absolute top-0 left-0 w-full h-full object-cover shadow-elevated"
        />
      ) : (
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full block outline-none" />
      )}
    </div>
  );
}
