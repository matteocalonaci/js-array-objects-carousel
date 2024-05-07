// MILESTONE #0
// Creazione del markup statico in HTML:
// - costruiamo il container e inseriamo l'immagine grande in modo da poter stilizzare lo slider.

// MILESTONE #1
// Rimuoviamo i contenuti statici dall'HTML.
// Costruiamo noi delle slide da aggiungere in pagina tramite un ciclo sul nostro array.

// MILESTONE #2
// Al click dell'utente sulle frecce verso sinistra o destra,
// l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// MILESTONE #3
// Aggiungere il ciclo infinito del carosello.
// Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso destra,
// la slide che deve attivarsi sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.


const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images)


// Costruiamo noi delle slide da aggiungere in pagina tramite un ciclo sul nostro array.
const container = document.getElementById("container");

for (let i = 0; i < images.length; i++) {

    let membro = images[i]

    container.innerHTML += `<div class="card">
                            <img src="./img/${membro.image}"></img>
                            <h2>${membro.title}</h2>
                            <p>Ruolo: ${membro.text}</p>
                            </div>`
}

// images.forEach(ugo);
//NON TROVA I CONTENUTI - Failed to load resource: net::ERR_FILE_NOT_FOUND

// function ugo(element, index, array) {
//     container.innerHTML += `<div class="card">
//     <img src="./img/${images.image}"></img>
//     <h2>${images.title}</h2>
//     <p>Ruolo: ${images.text}</p>
//     </div>`
// }