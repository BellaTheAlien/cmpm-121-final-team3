import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Create a simple scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(1*202020);
//const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const camera = new THREE.PerspectiveCamera( // Just Testing Camera Settings
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

//Lighting (TESTING)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);

//Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

//Platform
const platformGeometry = new THREE.BoxGeometry(10, 0.5, 10);
const platformMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
const platform = new THREE.Mesh(platformGeometry, platformMaterial);

scene.add(cube);
scene.add(platform);
platform.position.y = -1.5;
camera.position.z = 5;

// Just log some info to verify it works
console.log("Three.js version:", THREE.REVISION);
console.log("Cube position:", cube.position);
console.log("Scene children:", scene.children.length);
console.log("✓ Three.js is working!");
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}


animate();

const hello = document.createElement("h1");
hello.id = "test";
hello.textContent = "Hello World!";
document.body.append(hello);
