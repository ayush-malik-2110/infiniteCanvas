import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls';

const Scene = new THREE.Scene();

const renderer =new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const fieldOfView = 75;
const aspectRatio = window.innerWidth/window.innerHeight;
const nearClipping = 0.1;
const farClipping = 1000;

const Camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearClipping, farClipping);

//Creating and adding a axis helper at position 5
const axesHelper = new THREE.AxesHelper(3);
Scene.add(axesHelper);

// Since we add axes helper at 5 moving the camera to 5
Camera.position.z = 3;
Camera.position.y = 1;
// camera.position.set(0,2,5);

Camera.lookAt(0,0,0)

//Adding mobility to camera
const orbit = new OrbitControls(Camera, renderer.domElement)
orbit.update();

const cordinateArray = [
  [[-20, -20], [0,-20], [20, -20]],
  [[-20,0], [0,0], [20, 0]],
  [[-20, 20], [0, 20], [20, 20]]
]

// Adding a plane
const planeGeometry00 = new THREE.PlaneGeometry(20, 20);
const planeMaterial00 = new THREE.MeshBasicMaterial({
  color: 'red',
  side: THREE.DoubleSide,
});
const plane00 = new THREE.Mesh(planeGeometry00, planeMaterial00);
Scene.add(plane00);
plane00.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane00.position.set(cordinateArray[0][0][0],0,cordinateArray[0][0][1])

const planeGeometry01 = new THREE.PlaneGeometry(20, 20);
const planeMaterial01 = new THREE.MeshBasicMaterial({
  color: 'green',
  side: THREE.DoubleSide,
});
const plane01 = new THREE.Mesh(planeGeometry01, planeMaterial01);
Scene.add(plane01);
plane01.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane01.position.set(cordinateArray[0][1][0],0,cordinateArray[0][1][1])

const planeGeometry02 = new THREE.PlaneGeometry(20, 20);
const planeMaterial02 = new THREE.MeshBasicMaterial({
  color: 'blue',
  side: THREE.DoubleSide,
});
const plane02 = new THREE.Mesh(planeGeometry02, planeMaterial02);
Scene.add(plane02);
plane02.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane02.position.set(cordinateArray[0][2][0],0,cordinateArray[0][2][1])

const planeGeometry10 = new THREE.PlaneGeometry(20, 20);
const planeMaterial10 = new THREE.MeshBasicMaterial({
  color: 'yellow',
  side: THREE.DoubleSide,
});
const plane10 = new THREE.Mesh(planeGeometry10, planeMaterial10);
Scene.add(plane10);
plane10.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane10.position.set(cordinateArray[1][0][0],0,cordinateArray[1][0][1])


const planeGeometry11 = new THREE.PlaneGeometry(20, 20);
const planeMaterial11 = new THREE.MeshBasicMaterial({
  color: 'white',
  side: THREE.DoubleSide,
});
const plane11 = new THREE.Mesh(planeGeometry11, planeMaterial11);
Scene.add(plane11);
plane11.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane11.position.set(cordinateArray[1][1][0],0,cordinateArray[1][1][1])


const planeGeometry12 = new THREE.PlaneGeometry(20, 20);
const planeMaterial12 = new THREE.MeshBasicMaterial({
  color: 'orange',
  side: THREE.DoubleSide,
});
const plane12 = new THREE.Mesh(planeGeometry12, planeMaterial12);
Scene.add(plane12);
plane12.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane12.position.set(cordinateArray[1][2][0],0,cordinateArray[1][2][1])


const planeGeometry20 = new THREE.PlaneGeometry(20, 20);
const planeMateria20 = new THREE.MeshBasicMaterial({
  color: 'gray',
  side: THREE.DoubleSide,
});
const plane20 = new THREE.Mesh(planeGeometry20, planeMateria20);
Scene.add(plane20);
plane20.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane20.position.set(cordinateArray[2][0][0],0,cordinateArray[2][0][1])



const planeGeometry21 = new THREE.PlaneGeometry(20, 20);
const planeMaterial21 = new THREE.MeshBasicMaterial({
  color: 'green',
  side: THREE.DoubleSide,
});
const plane21 = new THREE.Mesh(planeGeometry21, planeMaterial21);
Scene.add(plane21);
plane21.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane21.position.set(cordinateArray[2][1][0],0,cordinateArray[2][1][1])


const planeGeometry22 = new THREE.PlaneGeometry(20, 20);
const planeMaterial22 = new THREE.MeshBasicMaterial({
  color: 'blue',
  side: THREE.DoubleSide,
});
const plane22 = new THREE.Mesh(planeGeometry22, planeMaterial22);
Scene.add(plane22);
plane22.rotation.x = -0.5 * Math.PI; // rotating the plane same as grid
plane22.position.set(cordinateArray[2][2][0],0,cordinateArray[2][2][1])

const sun = new THREE.DirectionalLight(0xffffcc)
sun.position.set(0, 1, 0)
Scene.add(sun)

//Adding grid helper
const gridHelper = new THREE.GridHelper(20);
Scene.add(gridHelper);



// Adding logic for controller
// Adding the event listener
let z = 1;
let y = 1;
let x = 1;
window.addEventListener('keydown', function (event){

  if (event.code === 'KeyS') {
    Camera.position.z += z;
  }
  if (event.code === 'KeyD') {
    Camera.position.x += x;
  }
  if (event.code === 'KeyA') {
    Camera.position.x -= x;
  }
  if (event.code === 'KeyW') {
    Camera.position.z -= z;
  }
  if (event.code === 'KeyZ') {
    Camera.position.y += y;
  }
  if (event.code === 'KeyX') {
    Camera.position.y -= y;
  }
});

export function renderCanvas() {
  document.getElementById('infinite-canvas').appendChild(renderer.domElement);
}
// document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame( animate );
  renderer.render( Scene, Camera );
}
animate();


