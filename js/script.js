// Creo un array con le immagini
const arrayImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
// Richiamo dal DOM con querySelector
const itemsContainer = document.querySelector (".slider-items");
console.log(itemsContainer);
// Creo ciclo for per mostrare le slide
for (let i = 0;  i < arrayImages.length; i++) {
    const currentImage = arrayImages [i];
    console.log(currentImage);
// Concateno con un template literal assegnato a una variabile
    const sliderItems = `<div class="item"> <img src="${currentImage}"> </div>`;
// Mostro in pagina le slide (sequenza usando +=)
    itemsContainer.innerHTML += sliderItems;
}

// Immagine di partenza
// Prelevo il container 
const arrayItems = document.getElementsByClassName("item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

console.log(arrayItems);

// Creo variabile da accodare a array e uso classList per usare la classe su immagine corrente
let activeItemIndex = 0;
arrayItems[activeItemIndex].classList.add("active");
prevBtn.classList.add("hidden");

// Gestisco bottone next (basso) e gli assegno EventListener per il click
nextBtn.addEventListener("click", function () {
    prevBtn.classList.remove("hidden");
    // rimuovo la classe "active" per passare alla slide successiva 
    arrayItems[activeItemIndex].classList.remove("active");

    // passo alla slide successiva
    activeItemIndex++;

    // una volta passato alla slide successivo, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");
    console.log(arrayItems);

    // creo condizione if per stabilire la "fine" delle slide con il -1
    if (activeItemIndex === arrayItems.length - 1) {
        nextBtn.classList.add("hidden");

    }
});


// Gestisco bottone prev (alto) e gli assegno EventListener per il click
prevBtn.addEventListener("click", function () {
    // rimuovo la classe "hidden" per passare alla slide successiva 
    nextBtn.classList.remove("hidden");

    arrayItems[activeItemIndex].classList.remove("active");

    // passo alla slide precedente
    activeItemIndex--;

    // una volta passato alla slide precedente, gli assegno classe "active"
    arrayItems[activeItemIndex].classList.add("active");

        // creo condizione if per stabilire "inizio" delle slide senza lo 0 (prima slide con)
        if (activeItemIndex === 0) {
            prevBtn.classList.add("hidden");
        }
});


