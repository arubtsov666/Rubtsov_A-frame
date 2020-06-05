document.addEventListener('DOMContentLoaded', () => {
    const toggleSoundElem = document.querySelector('#soundToggle')
    toggleSoundElem.addEventListener('click', () => {
        const status = +toggleSoundElem.getAttribute('isSoundActive')
        if (!status) {
            toggleSoundElem.setAttribute('isSoundActive', '1')
            toggleSoundElem.components.sound.playSound()
        } else {
            toggleSoundElem.setAttribute('isSoundActive', '0')
            toggleSoundElem.components.sound.pauseSound()
        }
    })

    const colorRandom = document.querySelector('#colorRandom')
    colorRandom.addEventListener('click', () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        colorRandom.setAttribute('color', color)
    })
})


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( { color: 0xfffff , wireframe: true} );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 20;


function render() {
requestAnimationFrame(render);
cylinder.rotation.z += 0.01;
cylinder.rotation.y += 0.1;
renderer.render(scene, camera);
}
render();
