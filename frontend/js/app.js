// frontend/js/app.js

// URL exacte de votre API Flask (reprenez-la depuis le portail Azure > Overview > Default domain)
const API_URL = "https://projet-azure-api-fbb2hqxfafbab7ct.francecentral-01.azurewebsites.net/api/hello";

async function callApi() {
  const resultEl = document.getElementById("result");
  resultEl.textContent = "Chargement…";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    resultEl.textContent = data.msg;
  } catch (error) {
    console.error("Erreur lors de l'appel API :", error);
    resultEl.textContent = `Erreur : ${error.message}`;
  }
}

document.getElementById("call-btn")
  .addEventListener("click", callApi);
