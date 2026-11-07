
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
        character: "images/kanaya.png"
    },
    {
        type: "dialog",
        speaker: "?",
        text: "Rumah ini ga berubah sama sekali ya.",
        background: "images/gerbangsantoso.png",
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
    },
    {
        type: "dialog",
        speaker: "RATNA",
        text: "Yaudah, masuk aja dulu.",
        background: "images/gerbangbukasantoso.png",
        character: "images/ratna.png"
    },
    {
        type: "dialog",
        text:"Ratna mempersilahkan Kanaya untuk masuk sambil menutup gerbang.",
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
    },
    {
        type: "dialog",
        speaker: "KANAYA",
        text: "Waktu terus berlalu, tapi aku nggak pernah bertambah tua.",
        background: "images/pendoposantoso.png",
        character: "images/kanaya.png",
    },
    {
    type: "background",
    background: "images/pendoposantoso.png",
    fadeBefore: true
},
{
    type: "background",
    background: "images/mobilmasuk.png",
    engine: true
},

    {
    type: "background",
    background: "images/mobilmasuk.png",
    engine: false
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Rendra membuka pintu mobil dan turun lebih dulu.",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Rendra merapikan jasnya, lalu melangkah menuju pintu rumah.",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Tak lama kemudian, Ardhana keluar dari mobil. Ia menutup pintu mobil dan berjalan menyusul ayahnya.",
    background: "images/rumahmalam.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Capek?",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Lumayan. Hari ini rapatnya nggak selesai-selesai.",
    background: "images/rumahmalam.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Makanya, jangan semua urusan mau kamu tangani sendiri.",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Aku hanya mengikuti contoh, Yah",
    background: "images/rumahmalam.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Rendra tertawa kecil mendengar jawaban putranya.",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Mulai berani menyindir ayah sendiri sekarang?",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Bukan menyindir, Yah. Aku hanya menyampaikan pendapat.",
    background: "images/rumahmalam.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Sudah, ayo masuk. Nanti mamamu mencarimu.",
    background: "images/rumahmalam.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Ya aku sudah lapar. Sebaiknya kita masuk.",
    background: "images/rumahmalam.png",
    character: "images/ardhana.png"
},
{
    type: "background",
    background: "images/ruangmakan.png"
},
{
    type: "dialog",
    speaker: "RATNA",
    text: "Nah, akhirnya pulang juga. Mama kira kalian mau menginap di kantor.",
    background: "images/ruangmakan.png",
    character: "images/ratna.png"
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Kalau sampai menginap, mungkin besok baru bisa pulang.",
    background: "images/ruangmakan.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "RATNA",
    text: "Jangan dibiasakan. Kalian berdua itu punya rumah, bukan tinggal di kantor.",
    background: "images/ruangmakan.png",
    character: "images/ratna.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Aku sudah bilang begitu, Ma. Tapi sepertinya kantor lebih dicintai daripada keluarga.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Belum sempat Rendra menjawab, Kanaya muncul dari arah lorong setelah selesai dari toilet. Ia berjalan kembali menuju meja makan.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png"
},
{
    type: "dialog",
    speaker: "RATNA",
    text: "Nah, Kanaya sudah kembali. Ayo, duduk lagi. Makanannya masih banyak.",
    background: "images/ruangmakan.png",
    character: "images/ratna.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Maaf ya, tadi agak lama.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Tidak apa-apa. Kami juga baru saja masuk.",
    background: "images/ruangmakan.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Silakan duduk.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Terima kasih. Kamu Ardhana, kan?",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Iya. Apa kita pernah bertemu sebelumnya? Wajahmu terasa familiar.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Wajar kamu ga ingat. Waktu itu kamu masih kecil.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Dulu Kanaya tinggal di rumah keluarga Santoso. Waktu itu kamu masih kecil, jadi mungkin ingatanmu tentang dia sudah samar.",
    background: "images/ruangmakan.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Waktu itu kamu masih suka berlarian ke sana kemari, Ardhana.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Sepertinya ada banyak hal yang tidak perlu diingat dari masa itu.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "RATNA",
    text: "Bukan cuma Kanaya yang ingat. Mama juga masih ingat semuanya.",
    background: "images/ruangmakan.png",
    character: "images/ratna.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Sebaiknya dihapus saja.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},

{
    type: "dialog",
    speaker: "RENDRA",
    text: "Ngomong-ngomong, Kanaya, bagaimana kabarmu selama ini? Sudah lama sekali sejak terakhir kali kita bertemu.",
    background: "images/ruangmakan.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Aku baik, Ren. Terima kasih sudah bertanya.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Sudah berapa lama sejak terakhir kali kamu menginjakkan kaki di desa ini?",
    background: "images/ruangmakan.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Cukup lama. Banyak hal berubah sejak aku pergi dari sini.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "RATNA",
    text: "Yang penting sekarang kamu sudah kembali. Semoga kali ini kamu bisa tinggal lebih lama.",
    background: "images/ruangmakan.png",
    character: "images/ratna.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Semoga kamu merasa nyaman selama berada di sini.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "KANAYA",
    text: "Terima kasih, Ardhana.",
    background: "images/ruangmakan.png",
    character: "images/kanaya.png",
},
{
    type: "dialog",
    speaker: "RENDRA",
    text: "Sudah, kita lanjutkan makan dulu. Nanti makanannya benar-benar dingin.",
    background: "images/ruangmakan.png",
    character: "images/rendra.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Percakapan mereka berlanjut dalam suasana hangat. Tak lama kemudian, makan malam pun selesai.",
    background: "images/ruangmakan.png",
    sfx: "audio/makan.mp3"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Ardhana meletakkan peralatan makannya, lalu berdiri dari kursinya.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Aku ke kamar dulu, ya. Hari ini cukup melelahkan.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "RATNA",
    text: "Iya, istirahatlah. Jangan tidur terlalu larut.",
    background: "images/ruangmakan.png",
    character: "images/ratna.png"
},
{
    type: "dialog",
    speaker: "ARDHANA",
    text: "Iya, Ma. Selamat malam.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Ardhana melangkah meninggalkan ruang makan. Namun, sebelum benar-benar pergi, ia sempat menoleh ke arah Kanaya.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Entah mengapa, wajah perempuan itu terasa familier. Ia mencoba mengingatnya sejenak, sebelum akhirnya mengurungkan niatnya.",
    background: "images/ruangmakan.png",
    character: "images/ardhana.png"
},
{
    type: "dialog",
    speaker: "NARATOR",
    text: "Ardhana akhirnya melanjutkan langkahnya menuju kamar, meninggalkan Rendra, Ratna, dan Kanaya di ruang makan.",
    background: "images/lorongrumah.png"
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
        "Chapter 1 telah selesai. Terima kasih telah bermain!";

    sceneNumber.textContent = "CHAPTER 1 SELESAI";

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
