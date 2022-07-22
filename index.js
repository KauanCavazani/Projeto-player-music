let isPlaying = false;
let currentMusic = 0;
let isShuffling = false;
let isMuted = false;


const myMusics = [ 
    {
        id: 1,
        name: "Red",
        artist: "Taylor Swift",
        song: './assets/audios/TaylorSwift-Red.mp3',
        bg: './assets/images/background/TaylorSwift-Red.jpg'
    },
    {
        id: 2,
        name: "You Belong With Me",
        artist: "Taylor Swift",
        song: './assets/audios/TaylorSwift-YouBelongWithMe.mp3',
        bg: './assets/images/background/TaylorSwift-YouBelongwithMe.png'
    }
]

//Setar a música atual selecionada
function setCurrentMusic(id) {
    var image = document.getElementById("image-music");
    var nameMusic = document.getElementById("name-music");
    var nameArtist = document.getElementById("name-artist");
    
    image.style.backgroundImage = `url(${myMusics[id].bg})`;
    nameMusic.innerText = `${myMusics[id].name}`;
    nameArtist.innerText = `${myMusics[id].artist}`;
}

//Toggle de play e pause
function toggleIsPlaying() {

}

//Começar uma música
function playMusic() {

}

//Pausar uma música
function pauseMusic() {

}

//Próxima Música
function nextMusic() {

}

//Voltar de música
function prevMusic() {

}

//Embaralhar
function shuffling() {

}

//Toggle Ativar e Desativar o embaralhamento
function toggleShuffling() {

}

//Mutar uma música
function muteMusic() {

}

//Começar o app
function app() {
    setCurrentMusic(currentMusic);
}

app()