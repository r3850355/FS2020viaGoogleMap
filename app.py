from flask import Flask
# from SimConnect import *

# GOOGLE MAP API KEY
googleMapAPIKey = ''

# Create simconnection
# sm = SimConnect()
# ae = AircraftEvents(sm)
# aq = AircraftRequests(sm, _time=10)

app = Flask(__name__, static_folder='html', static_url_path='/html')
@app.route('/')
def pwa():
	return app.send_static_file('index.html')

@app.route('/<path:path>')
def statuc_dir(path):
	return app.send_static_file(path)

@app.route('/key')
def key():
	return googleMapAPIKey

app.run(host='0.0.0.0', port=5000, debug=True)