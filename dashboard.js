async function checkUser() {

  const {
    data: { user }
  } =
    await supabaseClient.auth.getUser();

  if (!user) {

    window.location.href =
      "index.html";

    return;
  }

  document.getElementById(
    "welcome"
  ).innerText =
    user.email;
}

checkUser();
