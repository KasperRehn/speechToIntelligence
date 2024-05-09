import sys
from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_cors import CORS
from datetime import timedelta, datetime
import pandas as pd
import os
import logging


# Setup logging
logging.basicConfig(level=logging.WARNING)
logging.info("Prefix: ", prefix)


# instantiate APP
app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app, resources={r"api/*": {"origins": "https://apphub.nzcorp.net" +
     prefix, "methods": ["GET", "POST", "OPTIONS"]}})
tasks_list = []

# - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - SPA pathing


@app.route('/transcripts', methods=['POST'])
def receive_transcript():
    if not request.json or 'transcript' not in request.json:
        return jsonify({'error': 'Bad request'}), 400

    transcript = request.json['transcript']
    # Process or save the transcript here, e.g., log it, save to a database, etc.
    print(f"Received transcript: {transcript}")

    # After processing the transcript
    return jsonify({'message': 'Transcript received successfully'}), 200


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    logging.info(f"Serving static file: {path}")
    if path != "" and os.path.exists('static_frontend/' + path):
        return send_from_directory('static_frontend', path)
    else:
        return send_from_directory('static_frontend', 'index.html')


if __name__ == "__main__":
    host = '0.0.0.0'
    port = 8356
    app.run(host=host, port=port, debug=False)
