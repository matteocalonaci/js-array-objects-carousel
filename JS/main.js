//Array di oggetti da ricordare che l'indice parte da 0.
// sono 5 oggetti ma i loro indici parono da 0 e finiscono con 4
const images = [
    // oggetto 0
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    // oggetto 1
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    // oggetto 2
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    // oggetto 3
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    // oggetto 4
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Recupero in pagina il container
let container = document.querySelector("div.container")

// Ciclo for per ciclare gli oggetti
for (const slide of images) {
    // creo una card slide da js e non in index
    let slide_ = `
    <div class=" slide bg-transparent text-white">
                <div class="card-img">
                    <img src="${slide.image}" alt="">
                </div>
                <div class="info-container">
                    <h5 id="title">${slide.title}</h5>
                    <p id="text">${slide.text}</p>
                </div>
    </div>
    `
    // Aggiungo la card slide al container
    container.innerHTML += slide_
}
// imposto la slide attiva sulla zeresima
let slideSelected = 0;
// ad ogni classe slide slide_active aggiungo una classe active per visulizzarla in pagina
document.querySelectorAll("div.slide")[slideSelected].classList.add("active");

// raggiungo un evento al bottone prev 
let prev = document.getElementById("prev").addEventListener("click",
    function () {
        console.log("hai cliccato prev");
        // images.length = 5 
        // sottraendo 1 = 4 ( 4 = indice ultimo oggetto)
        const indiceUltimaSlide = images.length - 1;
        // recupero tutti i selettori con classe slide
        // ad ogni click sul bottone prev rimuovo la classe active spostandola all'oggeto prima
        document.querySelectorAll(".slide")[slideSelected].classList.remove("active");
        // se la slide selezionate è 0
        if (slideSelected === 0) {
            // la prossima slide selezionata sarà l'ultima (id 4)
            slideSelected = indiceUltimaSlide;
            // altrimenti -1
        } else {
            slideSelected--
        }
        // aggiungo la classe active alla slide prima
        document.querySelectorAll(".slide")[slideSelected].classList.add("active");
    })

// aggiungo un evento al bottone next 
let next = document.getElementById("next").addEventListener("click",
    function () {
        console.log("hai cliccato next");
        // images.length = 5 
        // sottraendo 1 = 4 ( 4 = indice ultimo oggetto)
        const indiceUltimaSlide = images.length - 1;
        // recupero tutti i selettori con classe slide
        // ad ogni click sul bottone next rimuovo la classe active spostandola all'oggeto successivo
        document.querySelectorAll(".slide")[slideSelected].classList.remove("active");
        // se la slide selezionata è l'ultima (id 4)
        if (slideSelected >= indiceUltimaSlide) {
            // la prossima slide selezionata sarà la prima (id 0)
            slideSelected = 0;
        } else {
            // altrimenti +1
            slideSelected++
        }
        // aggiungo la classe active alla slide dopo
        document.querySelectorAll(".slide")[slideSelected].classList.add("active");
    })


let aarray = [
    'ugo',
    'marco',
    'luca',
]

console.log(aarray.length)
