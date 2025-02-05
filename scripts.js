document.addEventListener('DOMContentLoaded', () => {
    const cellule = [
        [
            { name: 'Cellula animale', description: '1', modelPath: 'modelli/animale/cellula.glb' },
            { name: 'Mitocondrio', description: '2', modelPath: 'modelli/animale/mitocondrio.glb' },
            { name: 'Nucleolo', description: '3', modelPath: 'modelli/animale/nucleolo.glb' },
            { name: 'Cromatina', description: '4', modelPath: 'modelli/animale/cromatina.glb' },
            { name: 'Involucro nucleare', description: '5', modelPath: 'modelli/animale/involucro nucleare.glb' },
            { name: 'Reticolo endoplasmatico', description: '6', modelPath: 'modelli/animale/reticolo endoplasmatico.glb' },
            { name: 'Apparato di golgi', description: '7', modelPath: 'modelli/animale/apparato di golgi.glb' },
            { name: 'Centriolo e lisosoma', description: '8', modelPath: 'modelli/animale/centriolo e lisosoma.glb' },
            { name: 'Citosol e citoscheletro', description: '9', modelPath: 'modelli/animale/citosol e citoscheletro.glb' },
            { name: 'Membrana plasmatica', description: '10', modelPath: 'modelli/animale/membrana plasmatica.glb' },
            // Aggiungi altri organuli qui con i rispettivi percorsi e descrizioni
        ],
        [
            { name: 'Cellula vegetale', description: '1', modelPath: 'modelli/vegetale/cellula.glb' },
            { name: 'Mitocondrio', description: '2', modelPath: 'modelli/vegetale/mitocondrio.glb' },
            { name: 'Nucleolo', description: '3', modelPath: 'modelli/vegetale/nucleolo.glb' },
            { name: 'Cromatina', description: '4', modelPath: 'modelli/vegetale/cromatina.glb' },
            { name: 'Involucro nucleare', description: '5', modelPath: 'modelli/vegetale/involucro nucleare.glb' },
            { name: 'Reticolo endoplasmatico', description: '6', modelPath: 'modelli/vegetale/reticolo endoplasmatico.glb' },
            { name: 'Apparato di golgi', description: '7', modelPath: 'modelli/vegetale/apparato di golgi.glb' },
            { name: 'Citosol e citoscheletro', description: '9', modelPath: 'modelli/vegetale/citosol e citoscheletro.glb' },
            { name: 'Membrana plasmatica', description: '10', modelPath: 'modelli/vegetale/membrana plasmatica.glb' },
            { name: 'Cloroplasto', description: '11', modelPath: 'modelli/vegetale/cloroplasto.glb' },
            { name: 'Vacuolo centrale', description: '12', modelPath: 'modelli/vegetale/vacuolo centrale.glb' },
            // Aggiungi altri organuli qui con i rispettivi percorsi e descrizioni
        ],
        // Aggiungi altre cellule qui
    ];

    let currentCellIndex = 0;
    let currentOrganuloIndex = 0;
    const container = document.getElementById('cellula');

    if (!container) {
        console.error("L'elemento #cellula non è stato trovato nel DOM.");
        return;
    }

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Aggiungi luce puntuale per creare un'illuminazione direzionale
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Aggiungi ombre
    renderer.shadowMap.enabled = true;
    directionalLight.castShadow = true;
    pointLight.castShadow = true;

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
            organuloMesh.castShadow = true;
            organuloMesh.receiveShadow = true;
            scene.add(organuloMesh);
            camera.position.z = 7;
            animateOrganulo(organuloMesh); // Anima il modello caricato
        });
    }

    function updateOrganulo() {
        const organulo = cellule[currentCellIndex][currentOrganuloIndex];
        document.getElementById('organuloName').innerText = organulo.name;
        const descriptionElement = document.getElementById('description');
        descriptionElement.classList.remove('show');
        setTimeout(() => {
            descriptionElement.innerText = organulo.description;
            descriptionElement.classList.add('show');
        }, 300); // Ritardo per l'effetto fade-out
        loadOrganuloModel(organulo.modelPath);
    }

    // Anima il modello
    function animateOrganulo(organulo) {
        gsap.to(organulo.position, {
            duration: 1,
            y: "+=0.1",
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Serve per cambiare organuli
    document.getElementById('arrowLeft').addEventListener('click', () => {
        currentOrganuloIndex = (currentOrganuloIndex - 1 + cellule[currentCellIndex].length) % cellule[currentCellIndex].length;
        updateOrganulo();
    });

    // Serve per cambiare organuli
    document.getElementById('arrowRight').addEventListener('click', () => {
        currentOrganuloIndex = (currentOrganuloIndex + 1) % cellule[currentCellIndex].length;
        updateOrganulo();
    });

    // Serve per cambiare organuli
    container.addEventListener('dblclick', () => {
        currentOrganuloIndex = (currentOrganuloIndex + 1) % cellule[currentCellIndex].length;
        updateOrganulo();
    });

    // Serve per mettere la cellula vegetale
    document.getElementById('vegetal').addEventListener('click', () => {
        currentCellIndex = 1;
        updateOrganulo();
    });

    // Serve per mettere la cellula animale
    document.getElementById('animal').addEventListener('click', () => {
        currentCellIndex = 0;
        updateOrganulo();
    });

    // Apre la schermata autori
    document.getElementById('author').addEventListener('click', () => {
        document.getElementById('author-overlay').classList.add('show');
    });

    // Chiude la schermata autori
    document.getElementById('close-overlay').addEventListener('click', () => {
        document.getElementById('author-overlay').classList.remove('show');
    });

    // Aggiorna le dimensioni del renderer quando la finestra viene ridimensionata
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    function animate() {
        requestAnimationFrame(animate);
        controls.update(); // Aggiorna i controlli
        renderer.render(scene, camera);
    }

    animate();
    updateOrganulo();
});
