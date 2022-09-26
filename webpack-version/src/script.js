import './style.css'
import * as THREE from 'three'
// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
/**
 * Position
 */
// mesh.position.y = 2
// mesh.position.x = 5
// mesh.position.z = -4
// ou  mesh.position.set(2, 5, -4)
// scene.add(mesh)

/**
 * Scale
 */
// Change l'étirement de notre objet
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5 
// ou  mesh.scale.set(2, 0.25, 0.5)

/**
 * Rotation
 */
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Vous pouvez l'utiliser pour faire pivoter la caméra vers un objet, orienter un canon pour faire face à un ennemi ou déplacer les yeux du personnage vers un objet.
camera.lookAt(new THREE.Vector3(0, - 1, 0))
// or camera.lookAt(mesh.position)

// Determiner la position entre le centre de la scene et notre objet
console.log(mesh.position.length())
// Determiner la distance distance du centre et de notre objet
console.log(mesh.position.distanceTo(camera.position))

/**
 * Axes Helper
 */
// Cet outil n'est pas obligatoire il nous permet d'avoir une idée d'ou se situe notre objet sur l'axe des X/Y/Z
 const axesHelper = new THREE.AxesHelper(2)
 scene.add(axesHelper)

 /**
 * Scene graph
 */
// Nous allons regrouper toutes les proriétés précédentes (position, scale, rotation) dans un objet afin de pouvoir manipuler l'ensemble que ce soit pour une animation ou autre
// Nous allons faire le test avec 3 cubes différents
/**
 * Objects
 */
 const group = new THREE.Group()
 group.scale.y = 2
 group.rotation.y = 0.2
 scene.add(group)
 
 const cube1 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0x00ff00 })
 )
 cube1.position.x = - 1.5
 group.add(cube1)
 
 const cube2 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0xff0000 })
 )
 cube2.position.x = 0
 group.add(cube2)
 
 const cube3 = new THREE.Mesh(
     new THREE.BoxGeometry(1, 1, 1),
     new THREE.MeshBasicMaterial({ color: 0x0000ff })
 )
 cube3.position.x = 1.5
 group.add(cube3)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
