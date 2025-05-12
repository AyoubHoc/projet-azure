import os
from flask import Flask, jsonify
from dotenv import load_dotenv
from flask_cors import CORS           # ← import
# (Key Vault commenté pour l'instant)

# Charge .env en dev
load_dotenv()

app = Flask(__name__)
CORS(app)                             # ← active CORS pour tout

@app.route('/api/hello')
def hello():
    return jsonify(msg="Hello Azure depuis Flask !")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
