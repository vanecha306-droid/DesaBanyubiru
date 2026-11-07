function backToMenu() {
    window.location.href = "index.html";
}

let unlockedChapters = ["chapter1"];

async function loadChapterAccess() {
    const client = window.supabase.createClient(
        "https://qwoabxhswjqgsamwgxex.supabase.co",
        "sb_publishable_xfUCirPUJRXzHqz71JbFpg_71gnKcRQ"
    );

    const { data: sessionData } = await client.auth.getSession();

    if (!sessionData.session) {
        window.location.replace("login.html");
        return;
    }

    const { data, error } = await client
        .from("chapter_access")
        .select("chapter_id, is_unlocked")
        .eq("user_id", sessionData.session.user.id);

    if (error) {
        console.error(error);
        alert("Gagal memuat akses chapter.");
        return;
    }

    unlockedChapters = data
        .filter(item => item.is_unlocked)
        .map(item => item.chapter_id);

    unlockedChapters.push("chapter1");

    updateChapterDisplay();
}

function updateChapterDisplay() {
    document.querySelectorAll("[data-chapter]").forEach(card => {
        const chapterId = card.dataset.chapter;
        const unlocked = unlockedChapters.includes(chapterId);

        card.classList.toggle("locked", !unlocked);
        card.classList.toggle("unlocked", unlocked);

        const status = card.querySelector(".status");

        if (status) {
            status.textContent = unlocked
                ? "▶ MULAI"
                : "🔒 TERKUNCI";
        }
    });
}

function openChapter(number) {
    const chapterId = "chapter" + number;

    if (!unlockedChapters.includes(chapterId)) {
        alert("Chapter ini masih terkunci!");
        return;
    }

    if (number === 1) {
        document.getElementById("chapterMenu").style.display = "none";
        document.getElementById("storyScreen").style.display = "flex";
    } else {
        window.location.href = chapterId + ".html";
    }
}

function closeChapter() {
    document.getElementById("storyScreen").style.display = "none";
    document.getElementById("chapterMenu").style.display = "block";
}

function startStory() {
    window.location.href = "chapter1.html";
}

loadChapterAccess();