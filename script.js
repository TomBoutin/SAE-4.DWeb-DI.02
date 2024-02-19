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

//   <!-- canettes -->
//   <a-entity gltf-model="#canette" id="canette1" position="14.217 0.04 -29.249" scale="2 2 2"
//     class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-canette1" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="14.217 0.04 -29.249">
//   </a-sound>

//   <a-entity gltf-model="#canette" id="canette2" position="67.713 0.04 -66.943" scale="2 2 2"
//     class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-canette2" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="67.713 0.03957 -66.943">
//   </a-sound>

//   <a-entity gltf-model="#canette" id="canette3" position="35.99 0.343 -0.632" scale="2 2 2"
//     class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-canette3" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="35.99 0.343 -0.632">
//   </a-sound>

//   <!-- Bouteilles -->
//   <a-entity gltf-model="#bouteille" id="bouteille1" scale="0.1 0.1 0.1" position="43.906 4.99 -5.345"
//     class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-bouteille1" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="43.906 4.99 -5.345">
//   </a-sound>

//   <a-entity gltf-model="#bouteille" id="bouteille2" scale="0.1 0.1 0.1" position="31.406 1.643 -19.454"
//     class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-bouteille2" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="31.406 1.643 -19.454">
//   </a-sound>

//   <a-entity gltf-model="#bouteille" id="bouteille3" scale="0.1 0.1 0.1" position="40.111 0.391 -51.4"
//   class="collectible clickable">
// </a-entity>
// <a-sound id="son-bouteille3" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//   position="40.111 0.391 -51.4">
// </a-sound>
//   <!-- Boite de pizza -->
//   <a-entity gltf-model="#boite_pizza" id="boite_pizza1" rotation="0 120 0" position="59.261 -0.008 24.634"
//     class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-boite_pizza1" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="59.261 -0.00836 24.634">
//   </a-sound>

//   <!-- Sac poubelle noir -->
//   <a-entity gltf-model="#sac-poubelle_noir" id="sac-poubelle_noir1"
//     rotation="20.060565647842474 38.03694914534996 1.040491355957575" position="13.081 0.50342 -56.462"
//     scale="3 3 3" class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-sac-poubelle_noir1" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="13.081 0.50342 -56.462">
//   </a-sound>

//   <a-entity gltf-model="#sac-poubelle_noir" id="sac-poubelle_noir2"
//     rotation="20.07 38.037 1.04" position="53.67 0.503 -75.1"
//     scale="3 3 3" class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-sac-poubelle_noir2" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="53.67 0.50342 -75.1">
//   </a-sound>

//   <!-- Sac poubelle gris -->
//   <a-entity gltf-model="#sac-poubelle_gris" id="sac-poubelle_gris1"
//     rotation="17.177 3.525 11.784" position="46.112 0.608 -17.887"
//     scale="3 3 3" class="collectible clickable">
//   </a-entity>
//   <a-sound id="son-sac-poubelle_gris1" src="src: url(./Son/Minecraft Item Drop Sound Effect!.mp3)" volume=".6"
//     position="46.112 0.60845 -17.887">
//   </a-sound>

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

// Fonction pour générer des déchets avec des positions aléatoires
dechets.forEach(function (dechet) {
  let index = Math.floor(Math.random() * objPosition.length);
  let position = objPosition[index];
  objPosition.splice(index, 1); // Supprime la position utilisée du tableau

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
  document.querySelector("a-scene").appendChild(entity);
  document.querySelector("a-scene").appendChild(sound);
});

generateDechets();

// INTERACTIONS
let count = 0;
let nombreDechetsTotal = 10;

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
}

/* ÉCOUTEUR D'ÉVÉNEMENTS */
// Canettes
document.querySelector("#canette1").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-canette1");
  son.components.sound.playSound();

  updateScore();

  var objet = document.querySelector("#canette1");
  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

document.querySelector("#canette2").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-canette2");
  son.components.sound.playSound();

  var objet = document.querySelector("#canette2");

  updateScore();

  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

document.querySelector("#canette3").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-canette3");
  son.components.sound.playSound();

  var objet = document.querySelector("#canette3");

  updateScore();

  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

// Bouteilles

document.querySelector("#bouteille1").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-bouteille1");
  son.components.sound.playSound();

  var objet = document.querySelector("#bouteille1");

  updateScore();

  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

document.querySelector("#bouteille2").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-bouteille2");
  son.components.sound.playSound();

  var objet = document.querySelector("#bouteille2");

  updateScore();

  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

document.querySelector("#bouteille3").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-bouteille3");
  son.components.sound.playSound();

  var objet = document.querySelector("#bouteille3");

  updateScore();

  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

// Boite de pizza
document.querySelector("#boite_pizza1").addEventListener("click", function () {
  // var score = document.querySelector('#score');
  // score.innerHTML = parseInt(score.innerHTML) + 5;
  var son = document.querySelector("#son-boite_pizza1");
  son.components.sound.playSound();

  var objet = document.querySelector("#boite_pizza1");

  updateScore();

  objet.setAttribute("visible", "false");
  objet.setAttribute("position", { y: -2 });
});

// Sac poubelle noir
document
  .querySelector("#sac-poubelle_noir1")
  .addEventListener("click", function () {
    // var score = document.querySelector('#score');
    // score.innerHTML = parseInt(score.innerHTML) + 5;
    var son = document.querySelector("#son-sac-poubelle_noir1");
    son.components.sound.playSound();

    var objet = document.querySelector("#sac-poubelle_noir1");

    updateScore();

    objet.setAttribute("visible", "false");
    objet.setAttribute("position", { y: -2 });
  });

document
  .querySelector("#sac-poubelle_noir2")
  .addEventListener("click", function () {
    // var score = document.querySelector('#score');
    // score.innerHTML = parseInt(score.innerHTML) + 5;
    var son = document.querySelector("#son-sac-poubelle_noir2");
    son.components.sound.playSound();

    var objet = document.querySelector("#sac-poubelle_noir2");

    updateScore();

    objet.setAttribute("visible", "false");
    objet.setAttribute("position", { y: -2 });
  });

// Sac poubelle gris
document
  .querySelector("#sac-poubelle_gris1")
  .addEventListener("click", function () {
    // var score = document.querySelector('#score');
    // score.innerHTML = parseInt(score.innerHTML) + 5;
    var son = document.querySelector("#son-sac-poubelle_gris1");
    son.components.sound.playSound();

    var objet = document.querySelector("#sac-poubelle_gris1");

    updateScore();

    objet.setAttribute("visible", "false");
    objet.setAttribute("position", { y: -2 });
  });

/* ÉCOUTEURS D'ÉVÉNEMENTS POUR LES MANETTES VR */

document
  .querySelector("#rightController")
  .addEventListener("triggerdown", function () {
    var intersectedElement =
      document.querySelector("[raycaster]").components.raycaster
        .intersectedEls[0];

    if (intersectedElement && intersectedElement.id === "canette1") {
      var son = document.querySelector("#son-canette1");
      son.components.sound.playSound();

      var objet = document.querySelector("#canette1");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (intersectedElement && intersectedElement.id === "canette2") {
      var son = document.querySelector("#son-canette2");
      son.components.sound.playSound();

      var objet = document.querySelector("#canette2");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (intersectedElement && intersectedElement.id === "canette3") {
      var son = document.querySelector("#son-canette3");
      son.components.sound.playSound();

      var objet = document.querySelector("#canette3");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (intersectedElement && intersectedElement.id === "bouteille1") {
      var son = document.querySelector("#son-bouteille1");
      son.components.sound.playSound();

      var objet = document.querySelector("#bouteille1");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (intersectedElement && intersectedElement.id === "bouteille2") {
      var son = document.querySelector("#son-bouteille2");
      son.components.sound.playSound();

      var objet = document.querySelector("#bouteille2");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (intersectedElement && intersectedElement.id === "bouteille3") {
      var son = document.querySelector("#son-bouteille3");
      son.components.sound.playSound();

      var objet = document.querySelector("#bouteille3");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (intersectedElement && intersectedElement.id === "boite_pizza1") {
      var son = document.querySelector("#son-boite_pizza1");
      son.components.sound.playSound();

      var objet = document.querySelector("#boite_pizza1");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (
      intersectedElement &&
      intersectedElement.id === "sac-poubelle_noir1"
    ) {
      var son = document.querySelector("#son-sac-poubelle_noir1");
      son.components.sound.playSound();

      var objet = document.querySelector("#sac-poubelle_noir1");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (
      intersectedElement &&
      intersectedElement.id === "sac-poubelle_noir2"
    ) {
      var son = document.querySelector("#son-sac-poubelle_noir2");
      son.components.sound.playSound();

      var objet = document.querySelector("#sac-poubelle_noir2");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    } else if (
      intersectedElement &&
      intersectedElement.id === "sac-poubelle_gris1"
    ) {
      var son = document.querySelector("#son-sac-poubelle_gris1");
      son.components.sound.playSound();

      var objet = document.querySelector("#sac-poubelle_gris1");
      updateScore();

      objet.setAttribute("visible", "false");
      objet.setAttribute("position", { y: -2 });
    }
  });
