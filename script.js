/* Tableau de positions pour les déchets */
let objPosition = [
  { x: -20.57778, y: 0.06, z: -53.53054 },
  { x: 42.27, y: 0.06, z: -40.98 },
  { x: 31.499, y: 0.06, z: -28.892 },
  { x: 7.46496, y: 0.06, z: 2.49558 },
  { x: 43.693, y: 0.547, z: -10.4 },
  { x: 27.103, y: 4.224, z: -40.84 },
  { x: -8.18803, y: 0.06, z: 26.40926 },
  { x: 50.56496, y: 0.06, z: 8.20747 },
  { x: -15.512, y: 0.06, z: -62.733 },
  { x: 20.18225, y: 0.06, z: 9.15884 },
  { x: 14.217, y: 0.06, z: -29.249 },
  { x: 67.713, y: 0.06, z: -66.943 },
  { x: 35.99, y: 0.343, z: -0.632 },
  { x: 43.906, y: 4.675, z: -5.345 },
  { x: 31.406, y: 1.305, z: -19.454 },
  { x: 40.111, y: 0.06, z: -51.4 },
  { x: 59.261, y: 0.06, z: 24.634 },
  { x: 13.081, y: 0.06, z: -56.462 },
  { x: 53.67, y: 0.06, z: -75.1 },
  { x: 46.112, y: 0.06, z: -17.887 },
];

/* Tableau de déchets */
let dechets = [
  {
    id: "canette1",
    model: "#canette",
    sound: "#son-canette1",
    scale: "2 2 2",
    AddPositionY: 0,
  },
  {
    id: "canette2",
    model: "#canette",
    sound: "#son-canette2",
    scale: "2 2 2",
    AddPositionY: 0,
  },
  {
    id: "canette3",
    model: "#canette",
    sound: "#son-canette3",
    scale: "2 2 2",
    AddPositionY: 0,
  },
  {
    id: "bouteille1",
    model: "#bouteille",
    sound: "#son-bouteille1",
    scale: "0.1 0.1 0.1",
    AddPositionY: 0.345,
  },
  {
    id: "bouteille2",
    model: "#bouteille",
    sound: "#son-bouteille2",
    scale: "0.1 0.1 0.1",
    AddPositionY: 0.345,
  },
  {
    id: "bouteille3",
    model: "#bouteille",
    sound: "#son-bouteille3",
    scale: "0.1 0.1 0.1",
    AddPositionY: 0.345,
  },
  {
    id: "boite_pizza1",
    model: "#boite_pizza",
    sound: "#son-boite_pizza1",
    scale: "1 1 1",
    AddPositionY: -0.06,
  },
  {
    id: "sac-poubelle_noir1",
    model: "#sac-poubelle_noir",
    sound: "#son-sac-poubelle_noir1",
    scale: "3 3 3",
    AddPositionY: 0.44,
  },
  {
    id: "sac-poubelle_noir2",
    model: "#sac-poubelle_noir",
    sound: "#son-sac-poubelle_noir2",
    scale: "3 3 3",
    AddPositionY: 0.44,
  },
  {
    id: "sac-poubelle_gris1",
    model: "#sac-poubelle_gris",
    sound: "#son-sac-poubelle_gris1",
    scale: "3 3 3",
    AddPositionY: 0.52,
  },
];

let count = -1;
let nombreDechetsTotal = 10;


/* Fonction pour charger la scene de fin */
function endScene(){
  var cam = document.querySelector("#cam");
  var box = document.createElement("a-box");
  
  box.setAttribute("position", "0 1.5 0");
  box.setAttribute("color", "#000000");
  box.setAttribute("scale", "2 2 2");
  box.setAttribute("opacity", "0");
  box.setAttribute("material", "side: double");
  box.setAttribute("material", "shader: flat");
  cam.appendChild(box);
  box.setAttribute("animation", "property: opacity; to: 1; dur: 3000");


  setTimeout(function(){
    var scene1 = document.querySelector("#scene1");
    var scene2 = document.querySelector("#scene2");
    scene1.setAttribute("visible", "false");
    scene1.setAttribute("position", "0 -100 0");
    scene2.setAttribute("position", "0 0 0");
    scene2.setAttribute("visible", "true");
    cam.setAttribute("position", "0 0 0");
    cam.removeAttribute("movement-controls");
  }, 3000);

  setTimeout(function(){
    box.setAttribute("animation", "property: opacity; to: 0; dur: 500");
    box.setAttribute("animation__2", "property: position; to: 0 -5 0; dur: 1; delay: 500");

    var bouton = document.querySelector("#button_rejouer");
    bouton.addEventListener("click", function () {
  
      window.location.reload();
        
    });
  
    // Ajoute un écouteur d'événement pour chaque déchet avec les manettes VR
    document.querySelector("#rightController").addEventListener("triggerdown", function () {
      var intersectedElement = document.querySelector("[raycaster]").components.raycaster.intersectedEls[0];
  
      if (intersectedElement.id === bouton.id) {
        window.location.reload();
        
      }
    });
  }, 3500);
  
  

}



/* Fonction pour mettre à jour le score */

function updateScore() {
  count++;
  document.querySelector("#counter").textContent = count;

  var score_air = document.querySelectorAll(".score_air");
  score_air.forEach(function (element) {
    element.setAttribute(
      "text",
      "value: DÉCHETS:" +
      count +
      "/" +
      nombreDechetsTotal +
      "; color: #000000; width: 10; height:10; align: center; wrapCount: 20; font: ./Texture/font/Kanit-Bold-msdf.json; negate:false;; alphaTest: 10"
    );
  });

  if (count == nombreDechetsTotal) {
    endScene();
  }
}

updateScore();


/* Fonction pour générer des déchets avec des positions aléatoires */

function DechetSpawn() {
dechets.forEach(function (dechet) {

  
  // Choisit une position aléatoire dans le tableau objPosition
  let index = Math.floor(Math.random() * objPosition.length);
  let position = objPosition[index];
  objPosition.splice(index, 1); // Supprime la position utilisée du tableau

  // Crée un élément a-entity pour chaque déchet avec les attributs nécessaires
  let entity = document.createElement("a-entity");
  let sound = document.createElement("a-sound");
  entity.setAttribute("gltf-model", dechet.model);
  entity.setAttribute("id", dechet.id);
  entity.setAttribute("position", {
    x: position.x,
    y: position.y + dechet.AddPositionY,
    z: position.z,
  });
  entity.setAttribute("scale", dechet.scale);
  entity.setAttribute("class", "collectible clickable");
  sound.setAttribute(
    "src",
    "src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)"
  );
  sound.setAttribute("volume", ".6");
  sound.setAttribute("position", position);
  sound.setAttribute("id", dechet.sound);

  document.querySelector("a-scene").appendChild(sound);

  // Ajoute un écouteur d'événement pour chaque déchet sur le clic
  entity.addEventListener("click", function () {

    sound.components.sound.playSound();
    updateScore();
    var objet = entity;
    objet.setAttribute("visible", "false");
    objet.setAttribute("position", { y: -2 });

  });

  // Ajoute un écouteur d'événement pour chaque déchet avec les manettes VR
  document.querySelector("#rightController").addEventListener("triggerdown", function () {
    var intersectedElement = document.querySelector("[raycaster]").components.raycaster.intersectedEls[0];

    if (intersectedElement && intersectedElement.id === dechet.id) {
      sound.components.sound.playSound();
      updateScore();
      var objet = entity;
      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    }
  });

  document.querySelector("a-scene").appendChild(entity);

});
}

DechetSpawn();

