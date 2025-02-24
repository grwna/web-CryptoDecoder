from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
from caesar import caesar_cipher

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route("/api/caesar", methods=['GET'])
def decode():
    pt = request.args.get('pt', '')
    rot = int(request.args.get('rot', 0))
    ciphertext = caesar_cipher(pt, rot)
    return (
        jsonify({
            "ciphertext": ciphertext
        })
    )

if __name__ == "__main__":
    app.run(debug=True, port=8080)    

