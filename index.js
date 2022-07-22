let isPlaying = false;
let currentMusic = 0;
let isShuffling = false;
let isMuted = false;

var progressArea = document.getElementById("progress-area");
var progressBar = document.getElementById("progress-bar");
var playPrevMusic = document.getElementById("play-prevMusic");

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
    },
    {
        id: 3,
        name: "Treasure",
        artist: "Bruno Mars",
        song: './assets/audios/BrunoMars-Treasure.mp3',
        bg: './assets/images/background/BrunoMars-Treasure.jpg'
    },
    {
        id: 4,
        name: "I Want It In That Way",
        artist: "Backstreet Boys",
        song: './assets/audios/BSB-IWantItInThatWay.mp3',
        bg: './assets/images/background/BSB-IWantItThatWay.jpg'
    },
    {
        id: 5,
        name: "Dangerous",
        artist: "Kardinal Offishall",
        song: './assets/audios/Kardinal-Dangerous.mp3',
        bg: './assets/images/background/Kardinal-Dangerous.jpg'
    },
    {
        id: 6,
        name: "Maps",
        artist: "Maroon 5",
        song: './assets/audios/Maroon5-Maps.mp3',
        bg: './assets/images/background/Maroon5-Maps.jpg'
    },
    {
        id: 7,
        name: "Moves Like Jagger",
        artist: "Maroon 5",
        song: './assets/audios/Maroon5-MovesLikeJagger.mp3',
        bg: './assets/images/background/Maronn5-MovesLikeJagger.jpg'
    },
    {
        id: 8,
        name: "Sunflower",
        artist: "Post Malone",
        song: './assets/audios/PostMalone-Sunflower.mp3',
        bg: './assets/images/background/PostMalone-Sunflower.jpg'
    },
    {
        id: 9,
        name: "Mercy",
        artist: "Shawn Mendes",
        song: './assets/audios/ShawnMendes-Mercy.mp3',
        bg: './assets/images/background/ShawnMendes-Mercy.jfif'
    },
    {
        id: 10,
        name: "In Your Eyes",
        artist: "The Weeknd",
        song: './assets/audios/TheWeeknd-InYourEyes.mp3',
        bg: './assets/images/background/TheWeeknd-InYourEyes.jpg'
    }
]

//Setar a música atual selecionada
function setCurrentMusic(id) {
    var image = document.getElementById("image-music");
    var nameMusic = document.getElementById("name-music");
    var nameArtist = document.getElementById("name-artist");
    var musicPlaying = document.getElementById("music-playing");
    var playMusicIcon = document.getElementById("play-music-icon");
    
    image.style.backgroundImage = `url(${myMusics[id].bg})`;
    nameMusic.innerText = `${myMusics[id].name}`;
    nameArtist.innerText = `${myMusics[id].artist}`;
    musicPlaying.src = `${myMusics[id].song}`;

    progressBar.style.width = '0%';
    playMusicIcon.src = './assets/images/icons/play-music.svg';
    isPlaying = false;
}

//Toggle de play e pause
function toggleIsPlaying() {
    var playMusicIcon = document.getElementById("play-music-icon");

    if(isPlaying) {
        playMusicIcon.src = './assets/images/icons/play-music.svg';
        isPlaying = false;
        pauseMusic(playMusicIcon);
    } else {
        playMusicIcon.src = './assets/images/icons/pause-music.svg';
        isPlaying = true;
        playMusic(playMusicIcon);
    }
}

var music = document.getElementById("music-playing");

//Começar uma música
function playMusic(icon) {
    var playMusicIcon = document.getElementById("play-music-icon");
    playMusicIcon.src = './assets/images/icons/pause-music.svg';
    isPlaying = true;
    music = document.getElementById("music-playing");
    music.play();
}

//Pausar uma música
function pauseMusic(icon) {
    var playMusicIcon = document.getElementById("play-music-icon");
    playMusicIcon.src = './assets/images/icons/play-music.svg';
    isPlaying = false;
    music = document.getElementById("music-playing");
    music.pause();
}

// atualizar dados da progressbar
music.addEventListener("timeupdate", (e) => {
    var currentTime = e.target.currentTime;
    var duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.getElementById("current");
    let musicDurationTime = document.getElementById("duration");

    music.addEventListener("loadeddata", () => {
        let audioDuration = music.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        musicDurationTime.innerText = `${totalMin}:${totalSec}`;
    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) {
        currentSec = `0${currentSec}`;
    };
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

    if(currentTime == duration) {
        nextMusic();
    }
});

progressArea.addEventListener("click", (e) => {
    let progressWidthVal = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = music.duration;

    music.currentTime = ((clickedOffSetX / progressWidthVal) * songDuration);
})

//Próxima Música
function nextMusic() {
    if(currentMusic < (myMusics.length - 1)) {
        currentMusic++;
        setCurrentMusic(currentMusic);
        playMusic();  
    } else {
        currentMusic = 0;
        setCurrentMusic(currentMusic);
    }
};

function prevMusic() {
    if(currentMusic > 0) {
        currentMusic--;
        setCurrentMusic(currentMusic); 
        playMusic();   
    }
}

// voltar música do início
playPrevMusic.addEventListener("click", () => {
    setCurrentMusic(currentMusic);
    playMusic();
});

// voltar Música anterior
playPrevMusic.addEventListener("dblclick", () => {
    prevMusic();
})

//Embaralhar
function shuffling() {

}

//Toggle Ativar e Desativar o embaralhamento
function toggleShuffling() {

}

//Mutar uma música
function muteMusic() {
    var muteMusicIcon = document.getElementById("mute-music-icon");

    if(isMuted) {
        isMuted = false;
        muteMusicIcon.src = './assets/images/icons/mute-music.svg';
        music.muted = false;
    } else {
        isMuted = true;
        muteMusicIcon.src = './assets/images/icons/mute-music-active.svg';
        music.muted = true;
    }
}

//Começar o app
function app() {
    setCurrentMusic(currentMusic);
}

app()