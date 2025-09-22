from flask import Flask, render_template, request
import requests

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

if __name__ == "__main__":
    app.run(debug=True)
