# App start 
# Imports
from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.automap import automap_base

# Init App
app = Flask(__name__)

# Route Section
@app.route('/')
def index():
    with open('templates/index.html') as f:
        return f.read()

@app.route("/static/js/<filename>")
def get_static(filename):
    with open(f'static/js/{filename}') as f:
        return f.read()

@app.route('/data')
def datafinder():
    username = "postgres"
    password = "postgres"

    rds_connection_string = f"{username}:{password}@localhost:5432/VideoGamesProject"
    engine = create_engine(f'postgresql://{rds_connection_string}')
    
    Base = automap_base()
    Base.prepare(engine, reflect = True)
    Gamedata = Base.classes.games_data

    session = Session(engine)
    query = session.query(Gamedata.rank, Gamedata.name, Gamedata.platform, Gamedata.year,
    Gamedata.genre, Gamedata.publisher, Gamedata.na_sales, Gamedata.eu_sales, Gamedata.jp_sales,
    Gamedata.other_sales, Gamedata.global_sales)

    data = query.all()

    session.close()

    data = [{
        'rank': rank,
        'name': name,
        'platform':platform,
        'year': year,
        'genre':genre,
        'publisher': publisher,
        'na_sales': na_sales,
        'eu_sales': eu_sales,
        'jp_sales': jp_sales,
        'other_sales': other_sales,
        'global_sales': global_sales,  
        } for rank, name, platform, year, genre, publisher, 
        na_sales, eu_sales, jp_sales, other_sales, global_sales in data]

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)