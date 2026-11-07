
 // =====================================
 // KONEKSI SUPABASE
 // =====================================

const SUPABASE_URL = "https://qwoabxhswjqgsamwgxex.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xfUCirPUJRXzHqz71JbFpg_71gnKcRQ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);


// =====================================
// PROSES LOGIN PEMAIN
// =====================================

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginButton.disabled = true;
    loginButton.textContent = "MEMERIKSA AKUN...";
    loginMessage.textContent = "";

    try {

        // Login ke Supabase
        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

        if (error) {
            throw error;
        }

        // Periksa profil dan jenis akun
        const { data: profile, error: profileError } =
            await supabaseClient
                .from("profiles")
                .select("username, role")
                .eq("id", data.user.id)
                .single();

        if (profileError || !profile) {
            await supabaseClient.auth.signOut();
            throw new Error("Profil akun tidak ditemukan.");
        }

        // Admin tidak boleh masuk melalui login pemain
        if (profile.role !== "player") {
            await supabaseClient.auth.signOut();

            throw new Error(
                "Akun ini bukan akun pemain. Silakan gunakan halaman login admin."
            );
        }

        // Simpan nama pemain untuk digunakan di game
        sessionStorage.setItem("playerName", profile.username);

        // Masuk ke menu utama
        window.location.href = "index.html";

    } catch (error) {

        loginMessage.textContent =
            error.message || "Login gagal. Silakan coba lagi.";

        loginButton.disabled = false;
        loginButton.textContent = "MASUK";

    }

});
