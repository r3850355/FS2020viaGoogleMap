from flask import Flask, jsonify, request
from SimConnect import *

# GOOGLE MAP API KEY
googleMapAPIKey = ''

# Create simconnection
sm = SimConnect()
ae = AircraftEvents(sm)
aq = AircraftRequests(sm, _time=10)
def trigger_event(event_name, value_to_use = None):

	EVENT_TO_TRIGGER = ae.find(event_name)
	if EVENT_TO_TRIGGER is not None:
		if value_to_use is None:
			EVENT_TO_TRIGGER()
		else:
			EVENT_TO_TRIGGER(int(value_to_use))

		status = "success"
	else:
		status = "Error: %s is not an Event" % (event_name)

	return status

# SERVER PART

app = Flask(__name__, static_folder='html')

@app.route('/')
def pwa():
	return app.send_static_file('index.html')

@app.route('/<path:path>')
def statuc_dir(path):
	print('PATH' + path)
	return app.send_static_file(path)

@app.route('/key')
def key():
	return googleMapAPIKey

@app.route('/api/navigation', methods=["GET"])
def navigation():
	dataset_map = {}
	request_location = [
		'PLANE_ALTITUDE',
		'PLANE_LATITUDE',
		'PLANE_LONGITUDE',
		'PLANE_HEADING_DEGREES_TRUE',
		'GROUND_VELOCITY',
	]
	for datapoint_name in request_location:
		dataset_map[datapoint_name] = aq.get(datapoint_name)

	return jsonify(dataset_map)

@app.route('/api/get/<datapoint_name>', methods=["GET"])
def get_datapoint_endpoint(datapoint_name):

	output = aq.get(datapoint_name)

	return output


@app.route('/api/event/<event_name>', methods=["POST"])
def trigger_event_endpoint(event_name):

	ds = request.get_json() if request.is_json else request.form
	value = ds.get('value')

	status = trigger_event(event_name, value)

	return jsonify(status)

@app.route('/api/mobiflight/<event_name>', methods=["POST"])
def trigger_event_mobiflight(event_name):

	cmd = "MobiFlight." + event_name
	bt = bytes(cmd, encoding = "utf-8")
	Sk3 = Event(bt, sm)
	Sk3()
	return '200'

app.run(host='0.0.0.0', port=5000, debug=True)
