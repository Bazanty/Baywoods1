'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function ThreeSneakerViewer({ modelId, texturePath }) {
  const mountRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(texturePath);
    
    // Create sneaker model (simplified for example)
    let sneaker;
    if (modelId === 'air-jordan-1') {
      // AJ1 model
      const geometry = new THREE.BoxGeometry(3, 1.5, 5);
      const material = new THREE.MeshStandardMaterial({ 
        map: texture,
        roughness: 0.3,
        metalness: 0.1
      });
      sneaker = new THREE.Mesh(geometry, material);
    } else if (modelId === 'air-max-90') {
      // Air Max 90 model
      const geometry = new THREE.BoxGeometry(3, 1.8, 5);
      const material = new THREE.MeshStandardMaterial({ 
        map: texture,
        roughness: 0.4,
        metalness: 0.2
      });
      sneaker = new THREE.Mesh(geometry, material);
    } else {
      // Default model
      const geometry = new THREE.BoxGeometry(3, 1.5, 5);
      const material = new THREE.MeshStandardMaterial({ 
        map: texture,
        roughness: 0.5,
        metalness: 0.1
      });
      sneaker = new THREE.Mesh(geometry, material);
    }
    
    scene.add(sneaker);

    // Camera position
    camera.position.z = 7;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [modelId, texturePath]);

  return <div ref={mountRef} className="w-full h-full" />;
}