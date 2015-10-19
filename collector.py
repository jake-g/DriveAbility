__author__ = 'chrisgervang'

import sqlite3
from flask import Flask, request, g, render_template, session, jsonify, Response
from contextlib import closing
import numpy as np
import datetime
import json
import os
from flask_webpack import Webpack


# configuration
DATABASE = '/tmp/dubhacks_collector.db'
DEBUG = True
SECRET_KEY = 'development key'
USERNAME = 'admin'
PASSWORD = 'default'

# create our little application :)
app = Flask(__name__)
app.config.from_object(__name__)
# app.secret_key = 'some key for session'
webpack = Webpack()

webpack.init_app(app)

def connect_db():
    return sqlite3.connect(app.config['DATABASE'])

def init_db():
    with closing(connect_db()) as db:
        with app.open_resource('schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

def root_dir():  # pragma: no cover
    print os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "app", "src"))
    return os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "app", "src"))

def get_file(filename):  # pragma: no cover
    try:
        src = os.path.join(root_dir(), filename)
        # Figure out how flask returns static files
        # Tried:
        # - render_template
        # - send_file
        # This should not be so non-obvious
        return open(src).read()
    except IOError as exc:
        return str(exc)

@app.before_request
def before_request():
    g.db = connect_db()

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()

@app.route('/')
def show_entries():
    # cur = g.db.execute('select title, text from entries order by id desc')
    # entries = [dict(title=row[0], text=row[1]) for row in cur.fetchall()]
    return Response(open('../app/src/index.html').read(), mimetype="text/html")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def get_resource(path):  # pragma: no cover
    mimetypes = {
        ".css": "text/css",
        ".html": "text/html",
        ".js": "application/javascript",
    }
    complete_path = os.path.join(root_dir(), path)
    ext = os.path.splitext(path)[1]
    mimetype = mimetypes.get(ext, "text/html")
    content = get_file(complete_path)
    return Response(content, mimetype=mimetype)

@app.route('/drive')
def drive():
    return render_template('collector.html')
@app.route('/carride', methods=['POST'])
def post_carride():
    obj = {"ride": eval(request.json["ride"])}
    with open('gherkin.json', 'w') as outfile:
         json.dump(obj, outfile)
    # session['ridesa'] = request.json["ride"]
    print obj
    return "beautiful"

@app.route('/rides', methods=["GET"])
def get_rides():
    with open('gherkin.json', 'r') as infile:
        rides = json.load(infile)["ride"]
        print rides
        print rides[1]["time"], rides[-1]["time"]
        time = datetime.datetime.fromtimestamp(int(rides[1]["time"])/1000).strftime("%h %d | %I:%M %p") + datetime.datetime.fromtimestamp(int(rides[-1]["time"])/1000).strftime(" - %I:%M %p")
        # time = "2"
        dist = np.average([value["distractedness"] for value in rides])
        happ = np.average([value["happiness"] for value in rides])
        fidg = np.average([value["fidgetiness"] for value in rides])
        final = {"distractedness": dist, "happiness": happ, "fidgetiness": fidg, "time": time}
        # final = "{distractedness: " + str(dist) + ", happiness: " + str(happ) + ", fidgetiness: " + str(fidg) + ", time: " + str(time) + "}"
        print final
        return jsonify(**final)

if __name__ == '__main__':
    # app.secret_key = 'some key for session'
    app.run(host='0.0.0.0')
