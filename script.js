// Sélection des éléments du DOM nécessaires pour le carrousel
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carrousel = document.querySelector(".carrousel");
const img = carrousel.querySelectorAll("img");
const imgPreviews = document.querySelectorAll(".previews img");
const currentImg = document.getElementById("current");

// Initialisation des variables
let active = 0;
let currentNumber = 1;

// Fonction pour recharger le slider du carrousel
const reloadSlider = () => {
  // Retirer la classe 'current' de tous les aperçus
  imgPreviews.forEach((i) => i.classList.remove("current"));
  // Ajouter la classe 'current' à l'élément actif
  imgPreviews[active].classList.add("current");
  
  // Mettre à jour le numéro courant
  currentImg.innerText = (active + 1).toLocaleString("fr-FR", {
    minimumIntegerDigits: 2,
  });
  
  // Déplacer le carrousel
  carrousel.style.left = -img[active].offsetLeft + "px";
};

// Gestionnaire d'événements pour le bouton "suivant"
nextBtn.addEventListener("click", () => {
  active = (active + 1) % img.length;
  reloadSlider();
});

// Gestionnaire d'événements pour le bouton "précédent"
prevBtn.addEventListener("click", () => {
  active = (active - 1 + img.length) % img.length;
  reloadSlider();
});

// Gestionnaire d'événements pour les aperçus
imgPreviews.forEach((p, i) => {
  p.addEventListener("click", () => {
    active = i;
    reloadSlider();
  });
});