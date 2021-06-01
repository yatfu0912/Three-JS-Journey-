//Create scene
const scene = new THREE.Scene()

// Blue Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : 'blue'})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//Sizes 
const sizes = {
    width: 800,
    height: 600,
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//Renderer 
const canvas = document.querySelector('.webgl')
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene, camera);

const animate = function () {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
};
animate();
