// ==========================================
// CHAPTER 2 - DESA BANYUBIRU
// ==========================================


// ==========================================
// DAFTAR ADEGAN
// ==========================================

const scenes = [
    {
        speaker: "NARATOR",
        text: "Pagi menyelimuti Desa Banyubiru. Cahaya matahari masuk melalui jendela rumah keluarga Santoso, menerangi ruang tengah yang masih terasa tenang.",
        background: "images/gerbangsantoso.png",
        character: null
    },
     {
        speaker: "NARATOR",
        text: "Di dalam rumah, Kanaya tengah bersiap untuk pergi. Ia mengenakan pakaian sederhananya sambil memastikan tidak ada barang yang tertinggal.",
        background: "images/pendoposantoso.png",
        character: null
    },
     {
        speaker: "RATNA",
        text: "Kanaya, kamu mau pergi?",
        background: "images/pendoposantoso.png",
        character: "images/ratna.png"
    },
    {
        speaker: "KANAYA",
        text: "Iya, nih. Ada sedikit urusan yang harus aku selesaikan.",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png"
    },
    {
        speaker: "RATNA",
        text: "Sepagi ini? Memangnya ada urusan apa?",
        background: "images/pendoposantoso.png",
        character: "images/ratna.png"
    },
     {
        speaker: "KANAYA",
        text: "Urusan lama. Sepertinya sudah waktunya aku menengoknya lagi.",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png"
    },
     {
        speaker: "NARATOR",
        text: "Ratna memperhatikan Kanaya sejenak, sedikit penasaran dengan jawabannya.",
        background: "images/pendoposantoso.png",
        character: null
    },
     {
        speaker: "RATNA",
        text: "Ya sudah. Hati-hati di jalan, ya.",
        background: "images/pendoposantoso.png",
        character: "images/ratna.png"
    },
    {
        speaker: "KANAYA",
        text: "Hehe, iya. Tenang saja.",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png"
    },
    {
        speaker: "NARATOR",
        text: "Setelah berpamitan dengan Ratna, Kanaya keluar rumah dan masuk ke mobilnya. Ia menyalakan mesin, lalu melaju menuju pantai Banyubiru.",
        background: "images/pendoposantoso.png",
        character: null
    },
    {
        type: "background",
        background: "images/jalan-desa.png",
        engine: true
    },
    {
        type: "background",
        background: "images/pantai.png",
        engine: true
    },
    {
        speaker: "NARATOR",
        text: "Mobil Kanaya berhenti di dekat pantai. Ia turun, menutup pintu, lalu berjalan mendekati bibir pantai.",
        background: "images/pantai.png",
        engine: true,
        sfx:"audio/ombak.mp3"
    },
     {
        speaker: "NARATOR",
        text: "Angin laut berembus pelan. Kanaya mengedarkan pandangannya, mencari seseorang yang telah menunggunya.",
        background: "images/pantai.png",
        sfx:"audio/ombak.mp3",
        engine: false
    },
    {
         speaker: "KANAYA",
        text: "Sepertinya aku tidak terlambat.",
        background: "images/pantai.png",
        character: "images/kanaya.png",
        sfx:"audio/ombak.mp3",
    },
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
    playSFX(scene.sfx, 0.2);
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

        const scene = scenes[currentScene];

      if (scene.fadeBefore) {
    const fade = document.getElementById("fadeTransition");

    fade.classList.add("active");

    setTimeout(() => {
        showScene();
        fade.classList.remove("active");
    }, 5000);

} else {
    showScene();
}

    } else {
        finishStory();
    }
}


// ==========================================
// CHAPTER SELESAI
// ==========================================
function playChapterCompleteSound() {
    const audio = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((frequency, index) => {
        const oscillator = audio.createOscillator();
        const gain = audio.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        oscillator.connect(gain);
        gain.connect(audio.destination);

        const start = audio.currentTime + index * 0.15;

        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);

        oscillator.start(start);
        oscillator.stop(start + 0.35);
    });
}

function finishStory() {
    playChapterCompleteSound();

    document.getElementById("chapterComplete").classList.add("show");


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
    dialogContainer.style.display = "none";

    characterImage.style.display = "none";

    speaker.textContent = "NARATOR";

    dialogText.textContent =
        "Chapter 2 telah selesai. Terima kasih telah bermain!";

    sceneNumber.textContent = "CHAPTER 2 SELESAI";

    nextButton.style.display = "none";
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
