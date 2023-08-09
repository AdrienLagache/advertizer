// Objet représentant l'écran défilant Advertizr
const advertizer = {

    /**
     * Propriétés
     */

    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,

    // touches letter
    keyElements: document.querySelectorAll('.key'),

    // touche maj
    majElement: document.querySelector('.maj'),

    // touche return
    returnElement: document.querySelector('.return'),

    // champ texte
    screen: document.querySelector('.text'),

    /**
     * Méthodes
     */

    init: function() {

        for (keyElement of advertizer.keyElements) {
        keyElement.addEventListener('click', advertizer.handleClickOnLetter);
        }

        advertizer.majElement.addEventListener('click', advertizer.handleClickOnShift);

        advertizer.returnElement.addEventListener('click', advertizer.handleClickOnReturn);
    },

    handleClickOnLetter: function(event) {
        if (advertizer.isUpperCase === true) {
            advertizer.screen.textContent += event.currentTarget.textContent.toUpperCase();
        } else {
            advertizer.screen.textContent += event.currentTarget.textContent;
        }
    },

    handleClickOnShift: function() {
        if (advertizer.isUpperCase === true) {
            advertizer.isUpperCase = false;
            advertizer.majElement.classList.remove('pressed');
        } else {
            advertizer.isUpperCase = true;
            advertizer.majElement.classList.add('pressed');
        }

    },

    handleClickOnReturn: function() {
        // console.log(advertizer.screen.textContent.slice(0, 4))
        const screenText = advertizer.screen.textContent;
        advertizer.screen.textContent = screenText.slice(0, screenText.length - 1);
    }
}

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" advertizr
document.addEventListener('DOMContentLoaded', advertizer.init);