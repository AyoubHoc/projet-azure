document.getElementById('btn').onclick = async () => {
    try {
      // Précise le port 5000 pour appeler Flask
      const res = await fetch('http://127.0.0.1:5000/api/hello');
      const data = await res.json();
      document.getElementById('output').textContent =
        JSON.stringify(data, null, 2);
    } catch (err) {
      document.getElementById('output').textContent =
        'Erreur : ' + err.message;
    }
  };
  