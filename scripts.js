const organuli = [
    { name: 'Cellula animale', description: '1', modelPath: 'modelli/cellula.glb' },
    { name: 'Mitocondrio', description: '2', modelPath: 'modelli/mitocondrio.glb' },
    { name: 'Nucleo', description: '3', modelPath: 'modelli/nucleo.glb' },
    { name: 'Cromatina', description: '4', modelPath: 'modelli/cromatina.glb' },
    { name: 'Involucro nucleare', description: '5', modelPath: 'modelli/involucro nucleare.glb' },
    { name: 'RE ruvido', description: '6', modelPath: 'modelli/RE ruvido.glb' },
    { name: 'Apparato di golgi', description: '7', modelPath: 'modelli/apparato di golgi.glb' },
    { name: 'Centriolo e lisosoma', description: '8', modelPath: 'modelli/centriolo e lisosoma.glb' },
    { name: 'Citosol e citoscheletro', description: '9', modelPath: 'modelli/citosol e citoscheletro.glb' },
    { name: 'Membrana plasmatica', description: '10', modelPath: 'modelli/membrana plasmatica.glb' },
    // Aggiungi altri organuli qui con i rispettivi percorsi e descrizioni
];

let currentOrganuloIndex = 0;
const container = document.getElementById('cellula');

// Crea la scena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x333333); // Colore di sfondo grigio scuro
container.appendChild(renderer.domElement);

// Aggiungi luce direzionale
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Aggiungi luce ambientale
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luce bianca con intensità minore
scene.add(ambientLight);

// Aggiungi controlli orbitanti
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Abilita il rallentamento (inerzia)
controls.dampingFactor = 0.05; // Fattore di damping
controls.zoomSpeed = 0.5; // Velocità di zoom
controls.rotateSpeed = 0.5; // Velocità di rotazione
controls.autoRotate = true; // Abilita la rotazione automatica
controls.autoRotateSpeed = 0.5; // Velocità della rotazione automatica

// Carica il modello 3D dell'organulo corrente
const loader = new THREE.GLTFLoader();
let organuloMesh;

function loadOrganuloModel(path) {
    loader.load(path, (gltf) => {
        if (organuloMesh) {
            scene.remove(organuloMesh);
        }
        organuloMesh = gltf.scene;
        scene.add(organuloMesh);
        camera.position.z = 5;
    });
}

function updateOrganulo() {
    const organulo = organuli[currentOrganuloIndex];
    document.getElementById('organuloName').innerText = organulo.name;
    document.getElementById('description').innerText = organulo.description;
    loadOrganuloModel(organulo.modelPath);
}

// Serve per cambiare organuli
document.getElementById('arrowLeft').addEventListener('click', () => {
    currentOrganuloIndex = (currentOrganuloIndex - 1 + organuli.length) % organuli.length;
    updateOrganulo();
});

// Serve per cambiare organuli
document.getElementById('arrowRight').addEventListener('click', () => {
    currentOrganuloIndex = (currentOrganuloIndex + 1) % organuli.length;
    updateOrganulo();
});

// Serve per cambiare organuli
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { // Controlla se la barra spaziatrice è stata premuta
        currentOrganuloIndex = (currentOrganuloIndex + 1) % organuli.length;
        updateOrganulo();
    }
});

// Apre la schermata autori
document.getElementById('author').addEventListener('click', () => {
    document.getElementById('author-overlay').style.display = 'flex';
});

// Chiude la schermata autori
document.getElementById('close-overlay').addEventListener('click', () => {
    document.getElementById('author-overlay').style.display = 'none';
});

// Aggiorna le dimensioni del renderer quando la finestra viene ridimensionata
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Assicurati che gli elementi della UI siano visibili
    document.getElementById('ui-overlay').style.display = 'flex'
});

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Aggiorna i controlli
    renderer.render(scene, camera);
}

animate();
updateOrganulo();
