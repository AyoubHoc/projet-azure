// frontend/js/app.js

// === Mettez ici VOTRE URL exacte ===
const API_URL = "https://projet-azure-api-fbb2hqxfafbab7ct.francecentral-01.azurewebsites.net/api/hello";

async function callApi() {
  const resultEl = document.getElementById("result");
  resultEl.textContent = "Chargement…";

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const { msg } = await res.json();
    resultEl.textContent = msg;
  } catch (e) {
    console.error("Erreur lors de l'appel API :", e);
    resultEl.textContent = `Erreur : ${e.message}`;
  }
}

document.getElementById("call-btn")
  .addEventListener("click", callApi);
