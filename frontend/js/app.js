const HELLO_URL = "/api/hello";
const DB_URL    = "/api/dbhello";
const resultEl  = document.getElementById("result");

async function callEndpoint(url) {
  resultEl.textContent = "Chargement…";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status + " " + res.statusText);
    const data = await res.json();
    resultEl.textContent = data.msg || JSON.stringify(data);
  } catch (e) {
    resultEl.textContent = `Erreur : ${e.message}`;
  }
}

document.getElementById("call-btn")
  .addEventListener("click", () => callEndpoint(HELLO_URL));

document.getElementById("call-db-btn")
  .addEventListener("click", () => callEndpoint(DB_URL));
