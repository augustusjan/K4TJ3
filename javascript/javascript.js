//arrays voor de kleding, zodat ik altijd plaatjes extra kan toevoegen
const haarPlank = ['haar1.png', 'haar2.png', 'haar3.png'];
const extraPlank = ['extra1.png', 'extra2.png'];
const kettingPlank = ['ketting1.png', 'ketting2.png'];
const shirtPlank = ['shirt1.png', 'shirt2.png', 'shirt3.png'];
const broekPlank = ['broek1.png', 'broek2.png', 'broek3.png'];

//array voor tekst van de kat
const katTekst = ['Y1PP33! :3', 'M30W!', 'MW3H... :(', 'M30W!1!! M30W, M30WWW!!!!!!', 'Y1PP33! :3', '........M30w???', '3V3RY0N3 1S C0NN3CT3D!', 'L3TS 4LL L0V3 L41N <3'];

let aantal = 0;
let aantalGeklikt = 0;

// verandert plaatje door op knop te klikken
function veranderKleding(soortId, kledingArray) {
    aantal = (aantal + 1) % kledingArray.length;
    const kledingStuk = kledingArray[aantal];
    // bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    // (soortId + " img"); spatie moet er zijn want anders krijg je #haarimg en niet #haar img.
    const imgKleding = document.querySelector(soortId + ' img');
    imgKleding.src = 'img/' + kledingStuk;
}

//random outfit op het begin elke keer
randomOutfit();

function randomOutfit() {
    randomKleding('#haar', haarPlank);
    randomKleding('#extra', extraPlank);
    randomKleding('#ketting', kettingPlank);
    randomKleding('#shirt', shirtPlank);
    randomKleding('#broek', broekPlank);
}

function randomKleding(soortId, kledingArray) {
    let random = Math.floor(Math.random() * kledingArray.length);
    const kledingStuk = kledingArray[random];
    const imgKleding = document.querySelector(soortId + ' img');
    imgKleding.src = 'img/' + kledingStuk;
    speelGeluid();
}

// functie voor de knoppen (DRY)
function knopKleding(knopId, soortId, kledingArray, functie) {
    const knop = document.querySelector(knopId);
    knop.addEventListener('click', function () {
        functie(soortId, kledingArray);

        //telt aantal klikken
        aantalGeklikt++;

        if (aantalGeklikt == 4) {
            speelGeluid();
            aantalGeklikt = 0;
        }
    });
}

// geluid functie
function speelGeluid() {
    let audio = document.getElementById('meow');
    audio.play();
}

//katje tekst verandert om de 8 seconden.
setInterval(veranderTekst, 8000);

function veranderTekst() {
    const tekst = document.querySelector('#kattekst p');
    let random = Math.floor(Math.random() * katTekst.length);
    tekst.textContent = katTekst[random];
}

// knoppen
knopKleding('#haarknop', '#haar', haarPlank, veranderKleding);
knopKleding('#extraknop', '#extra', extraPlank, veranderKleding);
knopKleding('#kettingknop', '#ketting', kettingPlank, veranderKleding);
knopKleding('#shirtknop', '#shirt', shirtPlank, veranderKleding);
knopKleding('#broekknop', '#broek', broekPlank, veranderKleding);

const randomKnop = document.querySelector('#randomizer');
randomKnop.addEventListener('click', randomOutfit);