from flask import Flask, render_template, request, send_from_directory
import requests
import os

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    data = None
    url = None
    error = None

    if request.method == "POST":
        url = request.form.get("api_url")
        try:
            response = requests.get(url)
            response.raise_for_status()  # raise error if API fails
            data = response.json()
        except Exception as e:
            error = str(e)

    return render_template("index.html", data=data, url=url, error=error)


# Serve service worker and manifest from root for proper scope
@app.route('/sw.js')
def service_worker():
    return send_from_directory('static', 'sw.js', mimetype='application/javascript')


@app.route('/manifest.webmanifest')
def manifest():
    return send_from_directory('static', 'manifest.webmanifest', mimetype='application/manifest+json')

if __name__ == "__main__":
    # Use Render's PORT environment variable if available
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
