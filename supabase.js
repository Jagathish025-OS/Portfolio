const SUPABASE_URL =
"https://lhsptgfeoojuvavsqdas.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_cdCtff0oXM7b-Bv4iEJ7Kg_tMEnhr38";

const supabaseClient =
window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
async function loadFiles() {
const user = (await supabaseClient.auth.getUser()).data.user;
if (!user) return;

const fileList = document.getElementById("fileList");

const { data, error } = await supabaseClient
    .storage
    .from("files")
    .list(user.id);

if (error) {
    fileList.innerHTML = "Failed to load files";
    return;
}

if (!data || data.length === 0) {
    fileList.innerHTML = "No files";
    return;
}

fileList.innerHTML = "";

data.forEach(file => {

    const row = document.createElement("div");

    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.alignItems = "center";
    row.style.padding = "10px";
    row.style.marginBottom = "10px";
    row.style.background = "#16253d";
    row.style.borderRadius = "8px";

    const name = document.createElement("span");
    name.textContent = "📄 " + file.name;

    const actions = document.createElement("div");

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download";

    downloadBtn.onclick = async () => {

        const { data } = supabaseClient
            .storage
            .from("files")
            .getPublicUrl(`${user.id}/${file.name}`);

        window.open(data.publicUrl, "_blank");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.background = "crimson";
    deleteBtn.style.color = "white";

    deleteBtn.onclick = async () => {

        if (!confirm("Delete file?")) return;

        await supabaseClient
            .storage
            .from("files")
            .remove([`${user.id}/${file.name}`]);

        loadFiles();
    };

    actions.appendChild(downloadBtn);
    actions.appendChild(deleteBtn);

    row.appendChild(name);
    row.appendChild(actions);

    fileList.appendChild(row);
});

}