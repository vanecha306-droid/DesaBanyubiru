
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

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    loginButton.disabled = true;
    loginButton.textContent = "MEMERIKSA AKUN...";
    loginMessage.textContent = "";

    try {
        // Login menggunakan username dan password
        const { data, error } = await supabaseClient.functions.invoke(
            "login-with-username",
            {
                body: {
                    username,
                    password
                }
            }
        );

        if (error) throw error;
        if (data?.error) throw new Error(data.error);

        if (!data?.session?.access_token || !data?.session?.refresh_token) {
            throw new Error("Sesi login tidak berhasil dibuat.");
        }

        // Simpan sesi login ke Supabase di browser
        const { data: sessionData, error: sessionError } =
            await supabaseClient.auth.setSession({
                access_token: data.session.access_token,
                refresh_token: data.session.refresh_token
            });

        if (sessionError) throw sessionError;

        // Periksa profil dan jenis akun
        const { data: profile, error: profileError } =
            await supabaseClient
                .from("profiles")
                .select("username, role")
                .eq("id", sessionData.user.id)
                .single();

        if (profileError || !profile) {
            await supabaseClient.auth.signOut();
            throw new Error("Profil akun tidak ditemukan.");
        }

        // Admin tidak boleh masuk melalui login pemain
        if (profile.role !== "player") {
            await supabaseClient.auth.signOut();

            throw new Error(
                "Akun ini bukan akun pembaca. Silakan gunakan halaman login admin."
            );
        }

        // Simpan nama untuk digunakan di game
        sessionStorage.setItem("playerName", profile.username);

        // Masuk ke menu utama
        window.location.href = "index.html";

    } catch (error) {
        console.error(error);

        loginMessage.textContent =
            error.message || "Login gagal. Silakan coba lagi.";

        loginButton.disabled = false;
        loginButton.textContent = "MASUK";
    }
});
