
// ==========================================
// CHAPTER 1 - DESA BANYUBIRU
// ==========================================


// ==========================================
// DAFTAR ADEGAN
// ==========================================

const scenes = [
    {
        type: "background",
        background: "images/jalan-desa.png",
        engine: true
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Sore itu, Sebuah mobil melaju menyusuri jalan desa yang diapit hamparan sawah hijau.",
        background: "images/jalan-desa.png",
        engine: true,
        voice: "audio/narator-1.mp3"
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Sementara, sebuah desa mulai terlihat dari kejauhan.",
        background: "images/jalan-desa.png",
        engine: true
    },
    {
        type: "background",
        background: "images/gapuradesa.png",
        engine: true
    },
    {
        type: "dialog",
        speaker: "?",
        text: "Sudah lama sekali, sejak terakhir kali aku ke sini.",
        background: "images/gapuradesa.png",
        engine: false,
        voice: "audio/kanaya.mp3"
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Desa Banyubiru merupakan desa yang masih menjunjung tinggi adat istiadat dan kepercayaan leluhur.",
        background: "images/gapuradesa.png",
        engine: true
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Tradisi yang diwariskan turun-temurun tetap dijaga oleh masyarakatnya, seolah menjadi bagian yang tak terpisahkan dari kehidupan mereka.",
        background: "images/gapuradesa.png",
        engine: true
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "...",
        background: "images/gapuradesa.png",
        engine: true
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Tak berselang lama setelah melewati deretan rumah warga, mobil itu akhirnya berhenti di depan sebuah rumah yang cukup besar.",
        background: "images/gapuradesa.png",
        engine: true
    },
    {
        type: "background",
        background: "images/gerbangsantoso.png",
        engine: true
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Keluar dari mobil.",
        background: "images/gerbangsantoso.png",
        engine: false,
        sfx: "audio/nutupmobil.mp3"
    },
    {
        type: "dialog",
        speaker: "?",
        text: "Hah... akhirnya sampai juga...",
        background: "images/gerbangsantoso.png",
        voice: "audio/kanaya-1.mp3",
        character: "images/kanaya.png"
    },
    {
        type: "dialog",
        speaker: "?",
        text: "Rumah ini ga berubah sama sekali ya.",
        background: "images/gerbangsantoso.png",
        voice: "audio/kanaya2.mp3",
        character: "images/kanaya.png"
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Lalu ia membunyikan bel rumah itu.",
        background: "images/gerbangsantoso.png",
        engine: false,
        sfx: "audio/doorbell.mp3"
    },
    {
        type: "dialog",
        speaker: "?",
        text: "Tunggu sebentar!",
        background: "images/gerbangsantoso.png"
    },
    {
        type: "background",
        background: "images/gerbangsantoso.png",
        sfx: "audio/bukatutupgerbang.mp3"
    },
    {
        type: "dialog",
        speaker: "?",
        text: "Eh Naya, udah sampai? Aduh kenapa ga ngabarin sih, kan bisa ku masakin dulu tadi.",
        background: "images/gerbangbukasantoso.png",
        character: "images/ratna.png"
    },
    {
        type: "dialog",
        speaker: "KANAYA",
        text: "Santai aja lah rat, tadi juga udah makan kok.",
        background: "images/gerbangbukasantoso.png",
        character: "images/kanaya.png",
        voice: "audio/kanaya3.mp3"
    },
    {
        type: "dialog",
        speaker: "RATNA",
        text: "Yaudah, masuk aja dulu.",
        background: "images/gerbangbukasantoso.png",
        character: "images/ratna.png"
    },
    {
        type: "background",
        background: "images/gerbangsantoso.png",
        sfx: "audio/bukatutupgerbang.mp3"
    },
    {
        type: "background",
        background: "images/pendoposantoso.png"
    },
    {
        type: "dialog",
        speaker: "RATNA",
        text: "Cuma ada teh ga papa ya",
        background: "images/pendoposantoso.png",
        character: "images/ratna.png"
    },
    {
        type: "dialog",
        speaker: "KANAYA",
        text: "Aman aja. btw kamu sendirian dirumah?",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png",
        voice: "audio/kanaya4.mp3"
    },
    {
        type: "dialog",
        speaker: "RATNA",
        text: "Itu suami sama anak aku masih kerja, paling sebentar lagi pulang",
        background: "images/pendoposantoso.png",
        character: "images/ratna.png"
    },
    {
        type: "dialog",
        speaker: "KANAYA",
        text: "Ohhh",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png",
        voice: "audio/kanaya5.mp3"
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Saat Kanaya meminum teh nya, Ratna terus memperhatikan dengan seksama.",
        background: "images/pendoposantoso.png"
    },
    {
        type: "dialog",
        speaker: "RATNA",
        text: "Kamu... bener-bener ga berubah ya.",
        background: "images/pendoposantoso.png",
        character: "images/ratna.png"
    },
    {
        type: "dialog",
        speaker: "NARATOR",
        text: "Seketika suasana menjadi hening.",
        background: "images/pendoposantoso.png"
    },
    {
        type: "dialog",
        speaker: "KANAYA",
        text: "Iya rat, seperti yang kamu tau...",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png",
        voice: "audio/kanaya6.mp3"
    },
    {
        type: "dialog",
        speaker: "KANAYA",
        text: "Waktu terus berlalu, tapi aku nggak pernah bertambah tua.",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png",
        voice: "audio/kanaya7.mp3"
    }
];


// ==========================================
// VARIABEL GAME
// ==========================================

let currentScene = 0;
let storyFinished = false;


// ==========================================
// SISTEM AUDIO
// ==========================================

const bgm = new Audio("audio/bgm-desa.mp3");
bgm.loop = true;
bgm.volume = 0.1;

const ambience = new Audio("audio/ambience-sawah.mp3");
ambience.loop = true;
ambience.volume = 0.5;

const carSound = new Audio("audio/suara-mobil.mp3");
carSound.loop = true;
carSound.volume = 0.4;

let audioStarted = false;
let currentVoice = null;

function startAudio() {
    if (audioStarted) return;

    audioStarted = true;

    bgm.play().catch(() => {});
    ambience.play().catch(() => {});
}

function playSFX(file, volume = 0.7) {
    if (!file) return;

    const sound = new Audio(file);
    sound.volume = volume;
    sound.play().catch(() => {});
}

function playVoice(file) {
    // Hentikan suara dialog sebelumnya
    if (currentVoice) {
        currentVoice.pause();
        currentVoice.currentTime = 0;
    }

    if (!file) {
        currentVoice = null;
        return;
    }

    currentVoice = new Audio(file);
    currentVoice.volume = 1;
    currentVoice.play().catch(() => {});
}

function updateSceneAudio(scene) {
    // Suara mesin mobil
    if (scene.engine) {
        carSound.play().catch(() => {});
    } else {
        carSound.pause();
        carSound.currentTime = 0;
    }

    // Efek suara
    if (scene.sfx) {
        playSFX(scene.sfx);
    }

    // Suara karakter atau narator
    playVoice(scene.voice);
}


// ==========================================
// MENAMPILKAN ADEGAN
// ==========================================

function showScene() {
    const scene = scenes[currentScene];

    if (!scene) return;

    const background = document.querySelector(".scene-background");
    const dialogContainer = document.querySelector(".dialog-container");
    const speaker = document.getElementById("speaker");
    const dialogText = document.getElementById("dialogText");
    const sceneNumber = document.getElementById("sceneNumber");
    const nextButton = document.getElementById("nextButton");
    const characterImage = document.getElementById("characterImage");

    // Ganti background
    background.style.backgroundImage = `url('${scene.background}')`;

    // Ganti gambar karakter
    if (scene.character) {
        characterImage.src = scene.character;
        characterImage.style.display = "block";
    } else {
        characterImage.style.display = "none";
    }

    // Atur tampilan dialog
    if (scene.type === "background") {
        dialogContainer.classList.add("background-only");
    } else {
        dialogContainer.classList.remove("background-only");

        speaker.textContent = scene.speaker || "";
        dialogText.textContent = scene.text || "";

        sceneNumber.textContent =
            `ADEGAN ${currentScene + 1} / ${scenes.length}`;
    }

    // Teks tombol
    if (currentScene === scenes.length - 1) {
        nextButton.textContent = "Selesaikan Chapter →";
    } else {
        nextButton.textContent = "Selanjutnya →";
    }

    // Jalankan audio adegan
    updateSceneAudio(scene);
}


// ==========================================
// PINDAH ADEGAN
// ==========================================

function nextScene() {
    if (storyFinished) {
        backToChapter();
        return;
    }

    if (currentScene < scenes.length - 1) {
        currentScene++;
        showScene();
    } else {
        finishStory();
    }
}


// ==========================================
// CHAPTER SELESAI
// ==========================================

function finishStory() {
    storyFinished = true;

    // Hentikan semua audio adegan
    playVoice(null);

    carSound.pause();
    carSound.currentTime = 0;

    const dialogContainer = document.querySelector(".dialog-container");
    const speaker = document.getElementById("speaker");
    const dialogText = document.getElementById("dialogText");
    const sceneNumber = document.getElementById("sceneNumber");
    const nextButton = document.getElementById("nextButton");
    const characterImage = document.getElementById("characterImage");

    dialogContainer.classList.remove("background-only");

    characterImage.style.display = "none";

    speaker.textContent = "NARATOR";

    dialogText.textContent =
        "Chapter 1 telah selesai. Terima kasih telah bermain!";

    sceneNumber.textContent = "CHAPTER 1 SELESAI";

    nextButton.textContent = "Kembali ke Daftar Chapter →";
}


// ==========================================
// KEMBALI KE DAFTAR CHAPTER
// ==========================================

function backToChapter() {
    window.location.href = "mulaipermainan.html";
}


// ==========================================
// TOMBOL DAN EVENT GAME
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const nextButton = document.getElementById("nextButton");
    const exitButton = document.getElementById("exitButton");

    // Tampilkan adegan pertama
    showScene();

    // Mulai audio setelah interaksi pertama
    document.addEventListener("click", function startGameAudio() {
        startAudio();

        document.removeEventListener("click", startGameAudio);
    });

    // Tombol selanjutnya
    nextButton.addEventListener("click", function () {
        startAudio();

        playSFX("audio/suara-klik.mp3", 0.5);

        nextScene();
    });

    // Tombol keluar
    if (exitButton) {
        exitButton.addEventListener("click", function () {
            backToChapter();
        });
    }

});
