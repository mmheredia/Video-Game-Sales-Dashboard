# App start 
# Imports
from flask import Flask 
from flask import render_template

# Init App
app = Flask(__name__)

# Route Section
@app.route('/')
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
    
