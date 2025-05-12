const btn = document.getElementById('callApi');
const result = document.getElementById('result');

const API_URL = 'https://projet-azure-api-fbb2hqxfafbab7ct.francecentral-01.azurewebsites.net/api/hello';

btn.addEventListener('click', async () => {
  result.textContent = 'Chargement…';
  try {
    const res = await fetch(API_URL);
    const json = await res.json();
    result.textContent = JSON.stringify(json, null, 2);
  } catch (e) {
    result.textContent = `Erreur : ${e.message}`;
  }
});
