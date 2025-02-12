from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import random
import string
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MangoDB
client = MongoClient('192.168.23.204:27017')
db = client['registration_db']
users_collection = db['users']

def generate_token(length=20):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        print("Received data:", data)
        username = data['username']
        token = generate_token()
        print("Generated token:", token)
        users_collection.insert_one({'username': username, 'token': token})
        return jsonify({'token': token})
    except Exception as e:
        print("Error:", e)
        return jsonify({'message': 'Internal server error'}), 500


# @app.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     token = data['token']
#     user = users_collection.find_one({'token': token})
#     if user:
#         return jsonify({'message': 'Login successful!'})
#     else: 
#         return jsonify({'message': 'Invalid token'}), 401

if __name__ == '__main__':
    app.run(debug=True)
