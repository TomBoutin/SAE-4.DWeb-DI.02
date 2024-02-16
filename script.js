
        // INTERACTIONS

        let count = 0;
        let nombreDechetsTotal = 6;

        function updateScore() {
          count++;
          document.querySelector('#counter').textContent = count;

          var score_air = document.querySelectorAll('.score_air');
          score_air.forEach(function (element) {
            element.setAttribute('text', 'value: DÉCHETS:' + count + '/' + nombreDechetsTotal + '; color: #000000; width: 10; height:10; align: center; wrapCount: 20; font: ./Texture/font/Kanit-Bold-msdf.json; negate:false;; alphaTest: 10');
          });
        }
        // Canettes
        document.querySelector('#canette1').addEventListener('click', function () {
          // var score = document.querySelector('#score');
          // score.innerHTML = parseInt(score.innerHTML) + 5;
          var son = document.querySelector('#son-canette1');
          son.components.sound.playSound();

          updateScore();
          
          var objet = document.querySelector('#canette1');
          objet.setAttribute('visible', 'false');
          objet.setAttribute('position', { y: -2 });
        });
        // Bouteilles

        document.querySelector('#bouteille1').addEventListener('click', function () {
          // var score = document.querySelector('#score');
          // score.innerHTML = parseInt(score.innerHTML) + 5;
          var son = document.querySelector('#son-bouteille1');
          son.components.sound.playSound();

          var objet = document.querySelector('#bouteille1');

          updateScore();

          objet.setAttribute('visible', 'false');
          objet.setAttribute('position', { y: -2 });

        });

        // Boite de pizza
        document.querySelector('#boite_pizza1').addEventListener('click', function () {
          // var score = document.querySelector('#score');
          // score.innerHTML = parseInt(score.innerHTML) + 5;
          var son = document.querySelector('#son-boite_pizza1');
          son.components.sound.playSound();

          var objet = document.querySelector('#boite_pizza1');

          updateScore();

          objet.setAttribute('visible', 'false');
          objet.setAttribute('position', { y: -2 });

        });

        // Sac poubelle noir
        document.querySelector('#sac-poubelle_noir1').addEventListener('click', function () {
          // var score = document.querySelector('#score');
          // score.innerHTML = parseInt(score.innerHTML) + 5;
          var son = document.querySelector('#son-sac-poubelle_noir1');
          son.components.sound.playSound();

          var objet = document.querySelector('#sac-poubelle_noir1');

          updateScore();

          objet.setAttribute('visible', 'false');
          objet.setAttribute('position', { y: -2 });

        });

        // Sac poubelle gris
        document.querySelector('#sac-poubelle_gris1').addEventListener('click', function () {
          // var score = document.querySelector('#score');
          // score.innerHTML = parseInt(score.innerHTML) + 5;
          var son = document.querySelector('#son-sac-poubelle_gris1');
          son.components.sound.playSound();

          var objet = document.querySelector('#sac-poubelle_gris1');

          updateScore();

          objet.setAttribute('visible', 'false');
          objet.setAttribute('position', { y: -2 });

        });

        // Tas de déchets
        document.querySelector('#tas-de-dechet1').addEventListener('click', function () {
          // var score = document.querySelector('#score');
          // score.innerHTML = parseInt(score.innerHTML) + 5;
          var son = document.querySelector('#son-tas-de-dechet1');
          son.components.sound.playSound();

          var objet = document.querySelector('#tas-de-dechet1');

          updateScore();

          objet.setAttribute('visible', 'false');
          objet.setAttribute('position', { y: -2 });

        });


document.querySelector('#rightController').addEventListener('triggerdown', function (event) {
  var intersectedElement = document.querySelector('[raycaster]').components.raycaster.intersectedEls[0];

  if (intersectedElement && intersectedElement.id === 'canette1') {
    var son = document.querySelector('#son-canette1');
    son.components.sound.playSound();

    var objet = document.querySelector('#canette1');
    updateScore();

    objet.setAttribute('visible', 'false');
    objet.setAttribute('position', { y: -2 });
  } else if(intersectedElement && intersectedElement.id === 'bouteille1'){
    var son = document.querySelector('#son-bouteille1');
    son.components.sound.playSound();

    var objet = document.querySelector('#bouteille1');
    updateScore();

    objet.setAttribute('visible', 'false');
    objet.setAttribute('position', { y: -2 });
  } else if(intersectedElement && intersectedElement.id === 'boite_pizza1'){
    var son = document.querySelector('#son-boite_pizza1');
    son.components.sound.playSound();

    var objet = document.querySelector('#boite_pizza1');
    updateScore();

    objet.setAttribute('visible', 'false');
    objet.setAttribute('position', { y: -2 });
  } else if(intersectedElement && intersectedElement.id === 'sac-poubelle_noir1'){
    var son = document.querySelector('#son-sac-poubelle_noir1');
    son.components.sound.playSound();

    var objet = document.querySelector('#sac-poubelle_noir1');
    updateScore();

    objet.setAttribute('visible', 'false');
    objet.setAttribute('position', { y: -2 });
  } else if(intersectedElement && intersectedElement.id === 'sac-poubelle_gris1'){
    var son = document.querySelector('#son-sac-poubelle_gris1');
    son.components.sound.playSound();

    var objet = document.querySelector('#sac-poubelle_gris1');
    updateScore();

    objet.setAttribute('visible', 'false');
    objet.setAttribute('position', { y: -2 });
  } else if(intersectedElement && intersectedElement.id === 'tas-de-dechet1'){
    var son = document.querySelector('#son-tas-de-dechet1');
    son.components.sound.playSound();

    var objet = document.querySelector('#tas-de-dechet1');
    updateScore();

    objet.setAttribute('visible', 'false');
    objet.setAttribute('position', { y: -2 });
  }
});