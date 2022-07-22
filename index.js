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
    var musicPlaying = document.getElementById("music-playing");
    
    image.style.backgroundImage = `url(${myMusics[id].bg})`;
    nameMusic.innerText = `${myMusics[id].name}`;
    nameArtist.innerText = `${myMusics[id].artist}`;
    musicPlaying.src = `${myMusics[id].song}`;
}

//Toggle de play e pause
function toggleIsPlaying() {
    var playMusicIcon = document.getElementById("play-music-icon");

    if(isPlaying) {
        playMusicIcon.src = './assets/images/icons/play-music.svg';
        isPlaying = false;
        pauseMusic(currentMusic);
    } else {
        playMusicIcon.src = './assets/images/icons/pause-music.svg';
        isPlaying = true;
        playMusic(currentMusic);
    }
}

//Começar uma música
function playMusic(id) {
    var music = document.getElementById("music-playing");
    music.play();
}

//Pausar uma música
function pauseMusic(id) {
    var music = document.getElementById("music-playing");
    music.pause();
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