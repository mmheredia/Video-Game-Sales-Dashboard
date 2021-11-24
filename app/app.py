# App start 
# Imports
from flask import Flask 
from flask import render_template, request
import psycopg2

# Init App
app = Flask(__name__)
# Database Connection
con = psycopg2.connect(database="VideoGamesProject", user="postgres", password="postgres", host="127.0.0.1", port="5432")
cursor = con.cursor()

# Route Section
@app.route('/', methods=['get'])
def index():
    cursor.execute("select * from games_data FETCH FIRST 25 ROWS ONLY")
    result = cursor.fetchall()
    return render_template("index.html", data=result)

if __name__ == "__main__":
    app.run(debug=True)
    
