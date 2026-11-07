
const SUPABASE_URL = "https://qwoabxhswjqgsamwgxex.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xfUCirPUJRXzHqz71JbFpg_71gnKcRQ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const adminLoginForm = document.getElementById("adminLoginForm");
const adminLoginButton = document.getElementById("adminLoginButton");
const adminLoginMessage = document.getElementById("adminLoginMessage");

adminLoginForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    adminLoginButton.disabled = true;
    adminLoginButton.textContent = "MEMERIKSA ADMIN...";
    adminLoginMessage.textContent = "";

    try {
        // Memeriksa email dan password
        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

        if (error) throw error;

        // Mengambil role akun
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

        // Memastikan akun adalah admin
        if (profile.role !== "admin") {
            await supabaseClient.auth.signOut();
            throw new Error("Akses ditolak. Akun ini bukan administrator.");
        }

        // Login admin berhasil
        window.location.href = "admin.html";

    } catch (error) {
        adminLoginMessage.textContent =
            error.message || "Login admin gagal.";

        adminLoginButton.disabled = false;
        adminLoginButton.textContent = "MASUK SEBAGAI ADMIN";
    }
});
