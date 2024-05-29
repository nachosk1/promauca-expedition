'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

export default function PanoramaViewer() {
    const mountRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, sphere, controls;

        const init = () => {
            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.set(0, 0, 0.1);

            // Renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            mountRef.current.appendChild(renderer.domElement);

            // Sphere
            const geometry = new THREE.SphereGeometry(500, 60, 40);
            geometry.scale(-1, 1, 1);

            const texture = new THREE.TextureLoader().load(
                '/panorama/a1.jpg'
            );
            const material = new THREE.MeshBasicMaterial({ map: texture });
            sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            // Controls
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = true;
            controls.enablePan = true;

            // Resize handler
            window.addEventListener('resize', onWindowResize, false);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        init();
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);
    return <div ref={mountRef} className='w-full h-screen'/>;
}
