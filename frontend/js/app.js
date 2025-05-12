const apiBase = process.env.API_BASE_URL || window.location.origin;

async function callApi() {
  try {
    const res = await fetch(`${apiBase}/api/hello`);
    if (!res.ok) throw new Error(res.statusText);
    const { msg } = await res.json();
    document.getElementById('result').textContent = msg;
  } catch (err) {
    document.getElementById('result').textContent = `Erreur : ${err.message}`;
  }
}

document.getElementById('call-btn')
  .addEventListener('click', callApi);
