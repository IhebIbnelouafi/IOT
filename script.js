class SVGManipulator {
    constructor(elementIds) {
      this.elements = elementIds.map((id) => document.getElementById(id));
    }
  
    // Toggle visibility of all elements
    toggleDisplay() {
      this.elements.forEach((element) => {
        const currentDisplay = element.style.display || "block"; // Default to "block" if not set
        element.style.display = currentDisplay === "none" ? "block" : "none";
      });
    }
  
    // Hide all elements
    hide() {
      this.elements.forEach((element) => {
        element.style.display = "none";
      });
    }
  
    // Show all elements
    show() {
      this.elements.forEach((element) => {
        element.style.display = "block";
      });
    }
  }
  
  // Usage example
  const svgManipulator = new SVGManipulator(["rec1", "rec2", ]);
  
  // Toggle visibility
  svgManipulator.toggleDisplay();
  
  // Hide all
  // svgManipulator.hide();
  
  // Show all
  // svgManipulator.show();


  //

  function toggleColor() {
    // Alterner les couleurs des cercles entre jaune et noir
    const circles = [
        document.getElementById('circle1892-0'),
        document.getElementById('circle1892-9'),
        document.getElementById('circle1892-5')
    ];
    circles.forEach(circle => {
        // Récupérer la couleur actuelle
        const style = circle.getAttribute('style');
        const match = style.match(/fill:(#[0-9A-Fa-f]{6})/);
        const currentColor = match ? match[1] : '#000000'; // Noir par défaut si `fill` est introuvable

        // Alterner la couleur
        const newColor = (currentColor === '#FFFF00') ? '#000000' : '#FFFF00'; // Noir ou jaune
        circle.setAttribute('style', `fill:${newColor}`);
    });
}


//Street light

function toggleColor() {
    // Alterner les couleurs des cercles entre jaune et noir
    const circles = [
        document.getElementById('circle1892-0'),
        document.getElementById('circle1892-9'),
        document.getElementById('circle1892-5')
    ];
    circles.forEach(circle => {
        // Récupérer la couleur actuelle
        const style = circle.getAttribute('style');
        const match = style.match(/fill:(#[0-9A-Fa-f]{6})/);
        const currentColor = match ? match[1] : '#000000'; // Noir par défaut si `fill` est introuvable

        // Alterner la couleur
        const newColor = (currentColor === '#FFFF00') ? '#000000' : '#FFFF00'; // Noir ou jaune
        circle.setAttribute('style', `fill:${newColor}`);
    });
}


//Drone movement 

class Drone { 
    constructor(elementId) {
        this.svgElement = document.getElementById(elementId); // Élément du drone
        this.centerX = 200; // Centre du cercle en X
        this.centerY = 200; // Centre du cercle en Y
        this.radius = 150; // Rayon du cercle
        this.angle = 0; // Angle actuel (en radians)
        this.speed = 0.01; // Vitesse de rotation par défaut (en radians)
        this.isMoving = false; // État de mouvement
        this.isVisible = false; // État d'affichage
    }

    // Déplacer le drone en cercle
    move() {
        if (this.isMoving) {
            this.angle += this.speed; // Incrémenter l'angle
            if (this.angle >= 2 * Math.PI) {
                this.angle -= 2 * Math.PI; // Réinitialiser après un tour complet
            }

            // Calculer les nouvelles positions
            const x = this.centerX + this.radius * Math.cos(this.angle);
            const y = this.centerY + this.radius * Math.sin(this.angle);

            // Appliquer les nouvelles positions
            this.svgElement.setAttribute("x", x);
            this.svgElement.setAttribute("y", y);
        }
    }

    // Activer/désactiver le mouvement
    toggleMovement() {
        this.isMoving = !this.isMoving;
    }

    // Ajuster la vitesse
    setSpeed(newSpeed) {
        const maxSpeed = 0.1; // Vitesse maximale en radians (contrôle la vitesse maximale de rotation)
        this.speed = (newSpeed / 100) * maxSpeed; // Limiter la vitesse à un pourcentage de maxSpeed
    }

    // Afficher/Masquer le drone
    toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.svgElement.style.display = this.isVisible ? "block" : "none";

        // Si visible, activer le mouvement
        if (this.isVisible) {
            this.isMoving = true;
        } else {
            this.isMoving = false;
        }
    }
}

// Instance globale du drone
let drone;

// Initialisation après chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    // Créer une instance du drone
    drone = new Drone("drone");

    // Contrôle de la vitesse avec le curseur
    const speedSlider = document.getElementById("speedSlider");
    speedSlider.addEventListener("input", () => {
        const speedValue = parseInt(speedSlider.value);
        drone.setSpeed(speedValue); // Ajuster la vitesse du drone
    });

    // Animation continue
    setInterval(() => {
        if (drone) drone.move();
    }, 50); // Mise à jour toutes les 50 ms
});

// Fonction pour basculer le drone
function toggleDrone() {
    if (drone) {
        drone.toggleVisibility();
    }
}


function toggleWiFi() {
      const wifiElements = ['Wifi1', 'Wifi2', 'Wifi3', 'Wifi4'];
      wifiElements.forEach(id => {
        const element = document.getElementById(id);
        if (element.style.display === 'none') {
          element.style.display = 'block'; // Show the element
        } else {
          element.style.display = 'none'; // Hide the element
        }
      });
    }


  let intervalId = null; // Identifiant de la boucle

  function toggleFeux() {
    if (intervalId === null) {
      startFeux(); // Démarre les feux si arrêtés
    } else {
      stopFeux(); // Arrête les feux si déjà actifs
    }
  }

  function allumerFeux() {
    // Réinitialiser tous les feux à noir
    const ids = [
      "Cylinder_face_146_",
      "Cylinder_face_144_",
      "Cylinder_face_143_",
      "Cylinder_face_14_",
      "Cylinder_face_12_",
      "Cylinder_face_10_",
    ];

    ids.forEach((id) => {
      const element = document.getElementById(id);
      element.style.fill = "black"; // Remettre à noir
    });

    // Liste des feux avec leurs couleurs et délais
    const feux = [
      { id: "Cylinder_face_146_", color: "green", delay: 0 }, // Vert
      { id: "Cylinder_face_144_", color: "orange", delay: 1000 }, // Orange
      { id: "Cylinder_face_143_", color: "red", delay: 2500 }, // Rouge
      { id: "Cylinder_face_14_", color: "red", delay: 0 }, // Rouge
      { id: "Cylinder_face_12_", color: "orange", delay: 1000 }, // Orange
      { id: "Cylinder_face_10_", color: "green", delay: 2500 }, // Vert
    ];

let index = 0;

// Fonction pour gérer l'animation d'un index à la fois
function animateFeux() {
  if (index > 2) return; // Arrêter si l'index dépasse 2

  const element = document.getElementById(feux[index].id);
  const element2 = document.getElementById(feux[index + 3].id);

  // Changer les couleurs
  element.style.fill = feux[index].color;
  element2.style.fill = feux[index + 3].color;

  setTimeout(() => {
    // Remettre les couleurs à "black"
    element.style.fill = "black";
    element2.style.fill = "black";

    // Passer à l'index suivant après un délai
    index++;
    animateFeux(); // Appeler la fonction pour l'index suivantLL
  }, 2000);
}

// Lancer l'animation
animateFeux();

  }

  function startFeux() {
    const duration = 6000; // Durée totale d'une boucle (ajustable)
    allumerFeux(); // Première exécution immédiate
    intervalId = setInterval(allumerFeux, duration); // Répéter
  }

  function stopFeux() {
    if (intervalId !== null) {
      clearInterval(intervalId); // Arrêter la boucle
      intervalId = null;

      // Réinitialiser tous les feux à noir
      const ids = [
        "Cylinder_face_146_",
        "Cylinder_face_144_",
        "Cylinder_face_143_",
        "Cylinder_face_14_",
        "Cylinder_face_12_",
        "Cylinder_face_10_",
      ];
      ids.forEach((id) => {
        const element = document.getElementById(id);
        element.style.fill = "black";
      });
    }
  }
