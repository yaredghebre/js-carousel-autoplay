// Al carousel fatto precedentemente aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) 
// l’immagine attiva dovrà cambiare alla successiva.
// Bonus 1:
// Gestire il tempo di autoplay dopo il click dell'utente, rimettendo il timer di 3 secondi dopo il click per avere autoplay sempre regolare.
// Bonus2:
// Stoppare autoplay all'hover sullo slider e farlo ripartire al togliere del hover. Qui potrebbe servire un po di ricerca per trovare l'evento giusto 

// Definisco variabili TIMING


const arrayImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
const itemsContainer = document.querySelector (".slider-items");


for (let i = 0;  i < arrayImages.length; i++) {
    const currentImage = arrayImages [i];
    console.log(currentImage);
// Concateno con un template literal assegnato a una variabile
    const sliderItems = `<div class="item"> <img src="${currentImage}"> </div>`;
    itemsContainer.innerHTML += sliderItems;
}

// Immagine di partenza
const arrayItems = document.getElementsByClassName("item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let activeItemIndex = 0;
arrayItems[activeItemIndex].classList.add("active");


// Gestisco bottone next (basso) e gli assegno EventListener per il click
nextBtn.addEventListener("click", function () {
    clearInterval(interval);
    // rimuovo la classe "active" per passare alla slide successiva 
    arrayItems[activeItemIndex].classList.remove("active");

    if(activeItemIndex === arrayItems.length-1) {
        activeItemIndex = 0;
    } else {
    // passo alla slide successiva
        activeItemIndex++;
    }
    
    // una volta passato alla slide successivo, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    console.log(arrayItems);
    setInterval(autoPlay, 3000);
});


// Gestisco bottone prev (alto) e gli assegno EventListener per il click
prevBtn.addEventListener("click", function () {
    clearInterval(interval);
    // rimuovo la classe "hidden" per passare alla slide successiva 
    nextBtn.classList.remove("hidden");

    arrayItems[activeItemIndex].classList.remove("active");

    if(activeItemIndex === 0) {
        activeItemIndex = arrayItems.length-1;
    } else {
    // passo alla slide precedente
        activeItemIndex--;
    }
    
    // una volta passato alla slide precedente, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    setInterval(autoPlay, 3000);    
});

// FUNZIONI

let interval = setInterval(autoPlay, 3000)

function autoPlay() {
    
    prevBtn.classList.remove("hidden");
    // rimuovo la classe "active" per passare alla slide successiva 
    arrayItems[activeItemIndex].classList.remove("active");

    if(activeItemIndex === arrayItems.length-1) {
        activeItemIndex = 0;
    } else {
        activeItemIndex++;
    }
    // una volta passato alla slide successivo, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    console.log(arrayItems);


console.log(arrayItems[activeItemIndex]);

}

function stopCarousel() {
    clearInterval(interval);
}

document.querySelector(".slider-items").addEventListener("mouseover", stopCarousel);


function restartCarousel() {
    setInterval(autoPlay, 3000);
}

document.querySelector(".slider-items").addEventListener("mouseout", restartCarousel);
