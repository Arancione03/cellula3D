document.addEventListener('DOMContentLoaded', () => {
    const cellule = [
        [
            { name: 'Cellula animale', description: "Le cellule animali sono unità fondamentali degli organismi animali. Sono cellule eucariotiche, caratterizzate da un nucleo ben definito racchiuso da un involucro nucleare, e contengono numerosi organuli che svolgono funzioni specifiche. A differenza delle cellule vegetali, non possiedono una parete cellulare rigida né cloroplasti. La membrana plasmatica regola gli scambi con l\'ambiente esterno. Organuli come i mitocondri forniscono energia attraverso la respirazione cellulare, mentre l'apparato di Golgi e il reticolo endoplasmatico sono coinvolti nella sintesi e nel trasporto di proteine e lipidi. I lisosomi digeriscono materiale di scarto, e il citoscheletro conferisce forma e supporto strutturale.", modelPath: 'modelli/animale/cellula.glb' },
            { name: 'Mitocondrio', description: "I mitocondri sono organuli a doppia membrana presenti in quasi tutte le cellule animali. Noti come le 'centrali energetiche' della cellula, producono ATP (adeninatrisosfato) attraverso la respirazione cellulare, convertendo nutrienti come glucosio (C₆H₁₂O₂) e ossigeno (O₂) in energia utilizzabile. La membrana interna forma pieghe chiamate creste, che servono per le reazioni chimiche. I mitocondri possiedono il proprio DNA e possono replicarsi indipendentemente.", modelPath: 'modelli/animale/mitocondrio.glb' },
            { name: 'Nucleolo', description: "Il nucleolo è una struttura sferica all'interno del nucleo cellulare. Non è delimitato da una membrana propria, ma serve alla sintesi dell'RNA ribosomiale (rRNA) che si assembla con proteine provenienti dal citoplasma. Queste subunità vengono poi esportate nel citoplasma, dove formano i ribosomi per la sintesi proteica.", modelPath: 'modelli/animale/nucleolo.glb' },
            { name: 'Cromatina', description: "La cromatina è formata da DNA e proteine che si trovano nel nucleo delle cellule eucariotiche. Il DNA è avvolto attorno a proteine di struttura quaternaria chiamate istoni, formando una struttura compatta che permette di organizzare il materiale genetico all'interno del nucleo. Quando c'è la divisione cellulare la cromatina si avvolge ancora di più e si divide formando i cromosomi. Le cellule eucariotiche possono essere diploidi se hanno 2 cromosomi identici, aploidi se hanno solo un cromosoma identico e poliploide se ha piu di 3 cromosomi identici.", modelPath: 'modelli/animale/cromatina.glb' },
            { name: 'Involucro nucleare', description: "L'involucro nucleare è una doppia membrana che avvolge il nucleo della cellula, separandolo dal citoplasma. Questa struttura protegge il DNA e regola il traffico di molecole attraverso pori nucleari, permettendo il passaggio controllato di RNA, proteine e altri fattori essenziali. La membrana esterna dell'involucro è continua con il reticolo endoplasmatico ruvido, facilitando l'interazione tra nucleo e citoplasma.", modelPath: 'modelli/animale/involucro nucleare.glb' },
            { name: 'Reticolo endoplasmatico', description: "Il reticolo endoplasmatico (RE) è un organulo costituito da una rete di membrane che si estende nel citoplasma. Esistono due tipi: il reticolo endoplasmatico ruvido, con ribosomi attaccati, coinvolto nella sintesi e nel ripiegamento delle proteine che raggiungeranno l'apparato di Golgi; e il reticolo  liscio, privo di ribosomi, che partecipa alla sintesi dei lipidi, al metabolismo dei carboidrati e alla modifica dei farmaci e tossine potenzialmente dannosi. Il RE è essenziale per il trasporto di molecole all'interno della cellula e per la comunicazione tra il nucleo e altri organuli.", modelPath: 'modelli/animale/reticolo endoplasmatico.glb' },
            { name: 'Apparato di golgi', description: "L'apparato di Golgi è un organulo formato da una serie di sacche appiattite chiamate cisterne. Funziona come centro di elaborazione, modifica e smistamento di proteine e lipidi sintetizzati dal reticolo endoplasmatico. Qui, le molecole vengono ulteriormente modificate, e poi indirizzate verso la loro destinazione finale che può essere la membrana plasmatica, secretate all'esterno della cellula o destinate ad altri organuli come i lisosomi. L'apparato di Golgi è essenziale per la corretta distribuzione delle sostanze all'interno e all'esterno della cellula.", modelPath: 'modelli/animale/apparato di golgi.glb' },
            { name: 'Centriolo e lisosoma', description: "I centrioli sono cilindri composti da microtubuli. Si trovano in coppia e servono per la divisione cellulare. I lisosomi sono vescicole contenenti enzimi digestivi. Servono da sistema di smaltimento dei rifiuti della cellula, digerendo materiali inutilizzati o danneggiati, come organelli vecchi o molecole complesse. Questi enzimi possono demolire proteine, lipidi, carboidrati e acidi nucleici.", modelPath: 'modelli/animale/centriolo e lisosoma.glb' },
            { name: 'Citosol e citoscheletro', description: "Il citosol è la componente fluida del citoplasma in cui sono immersi gli organuli. Il citoscheletro è una rete dinamica di filamenti proteici che conferisce forma, supporto meccanico, capacità di movimento alla cellula e facilita il trasporto intracellulare di vescicole e organuli . Comprende microfilamenti formati da actina, microtubuli formati da tubulina e filamenti intermedi formati da subunità fibrose.", modelPath: 'modelli/animale/citosol e citoscheletro.glb' },
            { name: 'Membrana plasmatica', description: "La membrana plasmatica è una barriera selettiva che circonda la cellula, composta da un doppio strato di fosfolipidi. Regola il passaggio di sostanze, mantenendo l'equilibrio interno. Il trasporto può essere passivo, senza richiedere ATP, o attivo, che richiede ATP. Il trasporto passivo include la diffusione semplice, che non richiede proteine e passa per diffusione, la diffusione facilitata, che usa glicoproteine di transmembrana, e l'osmosi, che usa canali con una grandezza specifica. Un esempio di trasporto attivo è la pompa sodio-potassio, che sposta sodio e potassio contro gradiente di concentrazione. ", modelPath: 'modelli/animale/membrana plasmatica.glb' },
            // Aggiungi altri organuli qui con i rispettivi percorsi e descrizioni
        ],
        [
            { name: 'Cellula vegetale', description: "Le cellule vegetali sono le unità fondamentali degli organismi vegetali. Caratterizzate da un nucleo ben definito e numerosi organuli. Hanno alcune cose diverse come la parete cellulare, il cloroplasto e il vacuolo centrale. La parete cellulare, composta principalmente di cellulosa, conferisce rigidità e protezione. I cloroplasti permettono la fotosintesi, trasformando l'energia solare in energia chimica. Il vacuolo centrale immagazzina acqua e altre sostanze. Poi ha anche altri organuli, come il reticolo endoplasmatico, l'apparato di Golgi e i mitocondri che svolgono funzioni simili a quelle nelle cellule animali.", modelPath: 'modelli/vegetale/cellula.glb' },
            { name: 'Mitocondrio', description: "I mitocondri sono organuli a doppia membrana presenti in quasi tutte le cellule vegetali. Noti come le 'centrali energetiche' della cellula, producono ATP (adeninatrisosfato) attraverso la respirazione cellulare, convertendo nutrienti come glucosio (C₆H₁₂O₂) e ossigeno (O₂) in energia utilizzabile. La membrana interna forma pieghe chiamate creste, che servono per le reazioni chimiche. I mitocondri possiedono il proprio DNA e possono replicarsi indipendentemente.", modelPath: 'modelli/vegetale/mitocondrio.glb' },
            { name: 'Nucleolo', description: "Il nucleolo è una struttura sferica all'interno del nucleo cellulare. Non è delimitato da una membrana propria, ma serve alla sintesi dell'RNA ribosomiale (rRNA) che si assembla con proteine provenienti dal citoplasma. Queste subunità vengono poi esportate nel citoplasma, dove formano i ribosomi per la sintesi proteica.", modelPath: 'modelli/vegetale/nucleolo.glb' },
            { name: 'Cromatina', description: "La cromatina è formata da DNA e proteine che si trovano nel nucleo delle cellule vegetali. Il DNA è avvolto attorno a proteine di struttura quaternaria chiamate istoni, formando una struttura compatta che permette di organizzare il materiale genetico all'interno del nucleo. Quando c'è la divisione cellulare la cromatina si avvolge ancora di più e si divide formando i cromosomi. Le cellule eucariotiche possono essere diploidi se hanno 2 cromosomi identici, aploidi se hanno solo un cromosoma identico e poliploide se ha piu di 3 cromosomi identici.", modelPath: 'modelli/vegetale/cromatina.glb' },
            { name: 'Involucro nucleare', description: "L'involucro nucleare è una doppia membrana che avvolge il nucleo della cellula, separandolo dal citoplasma. Questa struttura protegge il DNA e regola il traffico di molecole attraverso pori nucleari, permettendo il passaggio controllato di RNA, proteine e altri fattori essenziali. La membrana esterna dell'involucro è continua con il reticolo endoplasmatico ruvido, facilitando l'interazione tra nucleo e citoplasma.", modelPath: 'modelli/vegetale/involucro nucleare.glb' },
            { name: 'Reticolo endoplasmatico', description: "Il reticolo endoplasmatico (RE) è un organulo costituito da una rete di membrane che si estende nel citoplasma. Esistono due tipi: il reticolo endoplasmatico ruvido, con ribosomi attaccati, coinvolto nella sintesi e nel ripiegamento delle proteine che raggiungeranno l'apparato di Golgi; e il reticolo  liscio, privo di ribosomi, che partecipa alla sintesi dei lipidi, al metabolismo dei carboidrati e alla modifica dei farmaci e tossine potenzialmente dannosi. Il RE è essenziale per il trasporto di molecole all'interno della cellula e per la comunicazione tra il nucleo e altri organuli.", modelPath: 'modelli/vegetale/reticolo endoplasmatico.glb' },
            { name: 'Apparato di golgi', description: "L'apparato di Golgi è un organulo formato da una serie di sacche appiattite chiamate cisterne. Funziona come centro di elaborazione, modifica e smistamento di proteine e lipidi sintetizzati dal reticolo endoplasmatico. Qui, le molecole vengono ulteriormente modificate, e poi indirizzate verso la loro destinazione finale che può essere la membrana plasmatica, secretate all'esterno della cellula o destinate ad altri organuli come i lisosomi. L'apparato di Golgi è essenziale per la corretta distribuzione delle sostanze all'interno della cellula vegetale.", modelPath: 'modelli/vegetale/apparato di golgi.glb' },
            { name: 'Citosol e citoscheletro', description: "Il citosol è la componente fluida del citoplasma in cui sono immersi gli organuli. Il citoscheletro è una rete dinamica di filamenti proteici che conferisce forma, supporto meccanico, capacità di movimento alla cellula e facilita il trasporto intracellulare di vescicole e organuli . Comprende microfilamenti formati da actina, microtubuli formati da tubulina e filamenti intermedi formati da subunità fibrose.", modelPath: 'modelli/vegetale/citosol e citoscheletro.glb' },
            { name: 'Membrana plasmatica', description: "La membrana plasmatica delle cellule vegetali è una barriera che regola gli scambi tra l'interno della cellula e l'ambiente esterno. Composta da un doppio strato di fosfolipidi, che controlla il trasporto di molecole. Interagisce strettamente con la parete cellulare. La parete cellulare è la parte più eserna e serve a proteggere la cellula e la aiuta a mantenere la propria forma. La parere cellulare è formata da cellulosa e altre proteine.", modelPath: 'modelli/vegetale/membrana plasmatica.glb' },
            { name: 'Cloroplasto', description: "I cloroplasti sono organuli esclusivi delle cellule vegetali, responsabili della fotosintesi. Contengono clorofilla, il pigmento che cattura l'energia luminosa. Il cloroplasto è delimitato da una doppia membrana e possiede un sistema di membrane interne formanti tilacoidi, dove avvengono le reazioni. I cloroplasti hanno il proprio DNA e ribosomi. Sono fondamentali per la produzione di glucosio e ossigeno, che servono per produrre ATP per i mitocondiri.", modelPath: 'modelli/vegetale/cloroplasto.glb' },
            { name: 'Vacuolo centrale', description: "Il vacuolo centrale è un grande organulo caratteristico delle cellule vegetali. Circondato da una membrana semipermeabile chiamata tonoplasto, può occupare fino al 90% del volume cellulare. Serve come deposito di acqua, nutrienti, prodotti di scarto e sostanze velenose.", modelPath: 'modelli/vegetale/vacuolo centrale.glb' },
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
