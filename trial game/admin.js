
const SUPABASE_URL = "https://qwoabxhswjqgsamwgxex.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xfUCirPUJRXzHqz71JbFpg_71gnKcRQ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const playersTable = document.getElementById("playersTable");
const progressTable = document.getElementById("progressTable");
const adminMessage = document.getElementById("adminMessage");
const accessPlayer = document.getElementById("accessPlayer");
const chapterAccessList = document.getElementById("chapterAccessList");
const chapterAccessMessage = document.getElementById("chapterAccessMessage");

// ===============================
// CEK ADMIN
// ===============================

async function checkAdmin() {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error || !data.session) {
        window.location.href = "admin-login.html";
        return false;
    }

    const { data: profile, error: profileError } = await supabaseClient
        .from("profiles")
        .select("role")
        .eq("id", data.session.user.id)
        .single();

    if (profileError || !profile || profile.role !== "admin") {
        await supabaseClient.auth.signOut();
        window.location.href = "admin-login.html";
        return false;
    }

    return true;
}

// ===============================
// DAFTAR PEMAIN
// ===============================

async function loadPlayers() {
    const { data: players, error } = await supabaseClient
        .from("profiles")
        .select("id, username, role, created_at")
        .eq("role", "player")
        .order("created_at", { ascending: false });

    if (error) throw error;

    if (!players || players.length === 0) {
        playersTable.innerHTML = `
            <tr>
                <td colspan="4">Belum ada pemain.</td>
            </tr>
        `;
        return;
    }

    playersTable.innerHTML = players.map(player => `
        <tr>
            <td>${escapeHTML(player.username)}</td>
            <td>${escapeHTML(player.role)}</td>
            <td>${new Date(player.created_at).toLocaleDateString("id-ID")}</td>
            <td>
                <div class="player-actions">
                    <button
                        class="edit-button"
                        data-action="edit"
                        data-id="${escapeHTML(player.id)}"
                        data-username="${escapeHTML(player.username)}">
                        Edit
                    </button>

                    <button
                        class="delete-button"
                        data-action="delete"
                        data-id="${escapeHTML(player.id)}">
                        Hapus
                    </button>
                </div>
            </td>
        </tr>
    `).join("");
}

// Tombol Edit dan Hapus menggunakan event delegation
playersTable.addEventListener("click", async function(event) {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const userId = button.dataset.id;

    if (button.dataset.action === "edit") {
        await editPlayer(userId, button.dataset.username);
    }

    if (button.dataset.action === "delete") {
        await deletePlayer(userId);
    }
});


// ===============================
// CHAPTER ACCESS - DAFTAR PEMAIN
// ===============================

async function loadAccessPlayers() {
    const { data: players, error } = await supabaseClient
        .from("profiles")
        .select("id, username")
        .eq("role", "player")
        .order("username", { ascending: true });

    if (error) throw error;

    if (!players || players.length === 0) {
        accessPlayer.innerHTML = `
            <option value="">Belum ada pemain</option>
        `;
        return;
    }

    accessPlayer.innerHTML = `
        <option value="">-- Pilih Pemain --</option>
        ${players.map(player => `
            <option value="${escapeHTML(player.id)}">
                ${escapeHTML(player.username)}
            </option>
        `).join("")}
    `;
}


// ===============================
// CHAPTER ACCESS - TAMPILKAN STATUS
// ===============================

async function loadChapterAccess(userId) {
    if (!userId) {
        chapterAccessList.innerHTML =
            "<p>Pilih pemain untuk melihat akses chapter.</p>";
        return;
    }

    chapterAccessList.innerHTML = "<p>Memuat akses chapter...</p>";

    const { data, error } = await supabaseClient
        .from("chapter_access")
        .select("chapter_id, is_unlocked")
        .eq("user_id", userId)
        .order("chapter_id", { ascending: true });

    if (error) {
        console.error(error);
        chapterAccessList.innerHTML =
            "<p>Gagal mengambil data akses chapter.</p>";
        return;
    }

    // Daftar chapter yang ditampilkan
    const chapters = [
        "chapter1",
        "chapter2",
        "chapter3",
        "chapter4",
        "chapter5"
    ];

    chapterAccessList.innerHTML = chapters.map(chapterId => {
        const chapter = data.find(
            item => item.chapter_id === chapterId
        );

        // Chapter 1 selalu terbuka
        const unlocked = chapterId === "chapter1"
            ? true
            : chapter?.is_unlocked === true;

        return `
            <div class="chapter-access-item">
                <div>
                    <strong>${chapterId.replace("chapter", "Chapter ")}</strong>
                    <p>${unlocked ? "Terbuka" : "Terkunci"}</p>
                </div>

                ${
                    chapterId === "chapter1"
                    ? `<span>Selalu terbuka</span>`
                    : `
                        <button
                            class="chapter-toggle-button"
                            data-chapter="${chapterId}"
                            data-unlocked="${unlocked}">
                            ${unlocked ? "Kunci" : "Buka"}
                        </button>
                    `
                }
            </div>
        `;
    }).join("");
}


// ===============================
// CHAPTER ACCESS - UBAH STATUS
// ===============================

async function toggleChapterAccess(userId, chapterId, unlocked) {
    chapterAccessMessage.textContent = "Menyimpan perubahan...";

    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "manage-chapter-access",
            {
                body: {
                    userId,
                    chapterId,
                    unlocked
                }
            }
        );

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        chapterAccessMessage.style.color = "green";
        chapterAccessMessage.textContent = data.message;

        await loadChapterAccess(userId);

    } catch (error) {
        console.error(error);

        chapterAccessMessage.style.color = "#9b493d";
        chapterAccessMessage.textContent =
            error.message || "Gagal mengubah akses chapter.";
    }
}


// ===============================
// CHAPTER ACCESS - EVENT LISTENER
// ===============================

// Saat admin memilih pemain
accessPlayer.addEventListener("change", async function() {
    chapterAccessMessage.textContent = "";
    await loadChapterAccess(this.value);
});

// Saat admin menekan tombol Buka/Kunci
chapterAccessList.addEventListener("click", async function(event) {
    const button = event.target.closest(".chapter-toggle-button");

    if (!button) return;

    const chapterId = button.dataset.chapter;
    const currentlyUnlocked = button.dataset.unlocked === "true";
    const userId = accessPlayer.value;

    if (!userId) return;

    await toggleChapterAccess(
        userId,
        chapterId,
        !currentlyUnlocked
    );
});


// ===============================
// EDIT PEMAIN
// ===============================

async function editPlayer(userId, oldUsername) {
    const newUsername = prompt("Masukkan username baru:", oldUsername);

    if (newUsername === null) return;

    const cleanUsername = newUsername.trim();

    if (cleanUsername.length < 3 || cleanUsername.length > 24) {
        alert("Username harus terdiri dari 3 sampai 24 karakter.");
        return;
    }

    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "manage-player-account",
            {
                body: {
                    action: "update_username",
                    userId,
                    username: cleanUsername
                }
            }
        );

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        alert("Username berhasil diperbarui!");
        await loadPlayers();

    } catch (error) {
        console.error(error);
        alert(error.message || "Gagal mengubah username.");
    }
}

// ===============================
// HAPUS PEMAIN
// ===============================

async function deletePlayer(userId) {
    const confirmed = confirm(
        "Yakin ingin menghapus akun pemain ini?\n\n" +
        "Semua progress permainan pemain juga akan terhapus permanen."
    );

    if (!confirmed) return;

    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "manage-player-account",
            {
                body: {
                    action: "delete",
                    userId
                }
            }
        );

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        alert("Akun pemain berhasil dihapus!");

        await loadPlayers();
        await loadProgress();

    } catch (error) {
        console.error(error);
        alert(error.message || "Gagal menghapus akun.");
    }
}

// ===============================
// DATA PROGRESS
// ===============================

async function loadProgress() {
    const { data, error } = await supabaseClient
        .from("game_progress")
        .select(`
            chapter_id,
            current_scene,
            completed,
            profiles(username)
        `)
        .order("updated_at", { ascending: false });

    if (error) throw error;

    document.getElementById("totalProgress").textContent = data.length;

    if (data.length === 0) {
        progressTable.innerHTML = `
            <tr>
                <td colspan="4">Belum ada progress tersimpan.</td>
            </tr>
        `;
        return;
    }

    progressTable.innerHTML = data.map(item => `
        <tr>
            <td>${escapeHTML(item.profiles?.username || "Tidak diketahui")}</td>
            <td>${escapeHTML(item.chapter_id)}</td>
            <td>${item.current_scene}</td>
            <td>${item.completed ? "Selesai" : "Berjalan"}</td>
        </tr>
    `).join("");
}

// ===============================
// TAMBAH AKUN PEMAIN
// ===============================

const createPlayerForm = document.getElementById("createPlayerForm");
const createPlayerButton = document.getElementById("createPlayerButton");
const createPlayerMessage = document.getElementById("createPlayerMessage");

createPlayerForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("newUsername").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const password = document.getElementById("newPassword").value;

    createPlayerButton.disabled = true;
    createPlayerButton.textContent = "MEMBUAT AKUN...";
    createPlayerMessage.textContent = "";

    try {
        const { data, error } = await supabaseClient.functions.invoke(
            "create-player-account",
            {
                body: { username, email, password }
            }
        );

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        createPlayerMessage.style.color = "green";
        createPlayerMessage.textContent = "Akun pemain berhasil dibuat!";

        createPlayerForm.reset();
        await loadPlayers();

    } catch (error) {
        console.error(error);

        createPlayerMessage.style.color = "#9b493d";
        createPlayerMessage.textContent =
            error.message || "Gagal membuat akun pemain.";

    } finally {
        createPlayerButton.disabled = false;
        createPlayerButton.textContent = "BUAT AKUN PEMAIN";
    }
});

// ===============================
// UTILITAS
// ===============================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// ===============================
// LOGOUT
// ===============================

document.getElementById("logoutButton").addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    window.location.href = "admin-login.html";
});

// ===============================
// MULAI DASHBOARD
// ===============================

async function startDashboard() {
    try {
        const allowed = await checkAdmin();

        if (!allowed) return;

        await Promise.all([
            loadPlayers(),
            loadProgress(),
            loadAccessPlayers()
        ]);

    } catch (error) {
        console.error(error);
        adminMessage.textContent =
            "Gagal mengambil data: " + error.message;
    }
}

startDashboard();
