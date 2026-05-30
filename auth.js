async function signUp() {

  const email =
    document.getElementById("signupEmail").value;

  const password =
    document.getElementById("signupPassword").value;

  const btn =
    document.getElementById("signupBtn");

  btn.innerText = "Creating...";

  const { data, error } =
    await supabaseClient.auth.signUp({
      email,
      password
    });

  if (error) {

    alert(error.message);

    btn.innerText =
      "Create Account";

    return;
  }

  await supabaseClient
    .from("profiles")
    .insert([
      {
        id: data.user.id,
        email: email
      }
    ]);

  alert(
    "Account created successfully. Please login."
  );

  location.reload();
}
async function login() {

  const email =
    document.getElementById("loginEmail").value;

  const password =
    document.getElementById("loginPassword").value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {

    alert(error.message);

    return;
  }

  window.location.href =
    "dashboard.html";
}
