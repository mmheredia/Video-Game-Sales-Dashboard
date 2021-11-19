# App start 
# Imports
from flask import Flask 
from flask import render_template, request

# Init App
app = Flask(__name__)

# Route Section
@app.route('/')
@app.route('/index')
def index():
    return "hello world"

if __name__ == "__main__":
    app.run(debug=True)