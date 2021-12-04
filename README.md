<!-- README START -->

<!-- HEADER -->

# Video Game Sales Dashboard

## About

---

### This is a Data Visualization Dashboard built with a collection of technology. Flask, Python, Javascript, Plotly, SQL and much more were used to create this application.

<br>

![dash](app/static/img/dashboard.gif)

<!-- TECH/TOOLS  -->

## Technology

---

<p align="center">
  <img src="https://img.shields.io/badge/Tools-python-yellow?style=for-the-badge&logo=python&logoColor=black">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Language-SQL-yellow?style=for-the-badge&logo=postgresql&logoColor=black">
  <img src="https://img.shields.io/badge/tools-Flask-yellow?style=for-the-badge&logo=flask&logoColor=black">
  <img src="https://img.shields.io/badge/tools-plotly-yellow?style=for-the-badge&logo=plotly&logoColor=black">
  <img src="https://img.shields.io/badge/tools-pandas-yellow?style=for-the-badge&logo=pandas&logoColor=black">
  <img src="https://img.shields.io/badge/tools-D3.JS-yellow?style=for-the-badge&logo=d3dotjs&logoColor=black">
  <img src="https://img.shields.io/badge/Web-Bootstrap-yellow?style=for-the-badge&logo=bootstrap&logoColor=black">
  <img src="https://img.shields.io/badge/Web-CSS-yellow?style=for-the-badge&logo=css3&logoColor=black">
  <img src="https://img.shields.io/badge/Web-HTML-yellow?style=for-the-badge&logo=html5&logoColor=black">
</p>

<!-- ABOUT FLASK -->

</br>

## Flask App

---

A dashboard web app developed with [Flask](https://palletsprojects.com/p/flask/) framework.

The main purpose is to introduce how to implement the essential elements in web application with Flask, including

- URL Building

- Authentication with Sessions

- Template & Template Inheritance

- Error Handling

- Integrating with _Bootstrap_

- Interaction with Database

- Invoking static resources

For more basic knowledge of Flask, you can refer to the documenration here: [documentation](https://flask.palletsprojects.com/en/2.0.x/).

<!-- HOW TO RUN APPLICATION LOCALLY -->

</br>

## How to Run

---

- Step 1: Make sure you have Python

- Step 2: Install the requirements: `pip install -r requirements.txt`

- Step 3: Go to this app's directory and run `python app.py`

- Step 4: Visit applications local URL: http://localhost:5000/

<!-- PROJECT DIRECTORY STRUCTURE -->

</br>

## Directory Structure

---

```
Video-Games-Sales-Dashboard
|
|   .gitignore
|   README.md
|
+---app
|   |   app.py
|   |   scraper.py
|   |
|   +---static
|   |   +---css
|   |   |       style.css
|   |   |
|   |   +---img
|   |   |       chart.svg
|   |   |       dashboard.gif
|   |   |
|   |   \---js
|   |           script.js
|   |
|   \---templates
|           index.html
|
\---code
    +---csv
    |       clean_vgsales.csv
    |
    \---sql
            -- SQL_games_data.sql
            sql_connection.ipynb

```

## Data Table

| Rank |                     Name                     | Platform | Year |    Genre     |          Publisher          | NA Sales | EU Sales | JP Sales | Other Sales | Global Sales |
| :--: | :------------------------------------------: | :------: | :--: | :----------: | :-------------------------: | :------: | :------: | :------: | :---------: | :----------: |
|  1   |                  Wii Sports                  |   Wii    | 2006 |    Sports    |          Nintendo           |  41.49   |  29.02   |   3.77   |    8.46     |    82.74     |
|  2   |              Super Mario Bros.               |   NES    | 1985 |   Platform   |          Nintendo           |  29.08   |   3.58   |   6.81   |    0.77     |    40.24     |
|  3   |                Mario Kart Wii                |   Wii    | 2008 |    Racing    |          Nintendo           |  15.85   |  12.88   |   3.79   |    3.31     |    35.83     |
|  4   |              Wii Sports Resort               |   Wii    | 2009 |    Sports    |          Nintendo           |  15.75   |  11.01   |   3.28   |    2.96     |      33      |
|  5   |           Pokemon Red/Pokemon Blue           |    GB    | 1996 | Role-Playing |          Nintendo           |  11.27   |   8.89   |  10.22   |      1      |    31.38     |
|  6   |                    Tetris                    |    GB    | 1989 |    Puzzle    |          Nintendo           |   23.2   |   2.26   |   4.22   |    0.58     |    30.26     |
|  7   |            New Super Mario Bros.             |    DS    | 2006 |   Platform   |          Nintendo           |  11.38   |   9.23   |   6.5    |     2.9     |    30.01     |
|  8   |                   Wii Play                   |   Wii    | 2006 |     Misc     |          Nintendo           |  14.03   |   9.2    |   2.93   |    2.85     |    29.01     |
|  9   |          New Super Mario Bros. Wii           |   Wii    | 2009 |   Platform   |          Nintendo           |  14.59   |   7.06   |   4.7    |    2.26     |    28.61     |
|  10  |                  Duck Hunt                   |   NES    | 1984 |   Shooter    |          Nintendo           |  26.93   |   0.63   |   0.28   |    0.47     |    28.31     |
|  11  |                  Nintendogs                  |    DS    | 2005 |  Simulation  |          Nintendo           |   9.07   |    11    |   1.93   |    2.75     |    24.75     |
|  12  |                Mario Kart DS                 |    DS    | 2005 |    Racing    |          Nintendo           |   9.81   |   7.57   |   4.13   |    1.92     |    23.43     |
|  13  |         Pokemon Gold/Pokemon Silver          |    GB    | 1999 | Role-Playing |          Nintendo           |    9     |   6.18   |   7.2    |    0.71     |    23.09     |
|  14  |                   Wii Fit                    |   Wii    | 2007 |    Sports    |          Nintendo           |   8.94   |   8.03   |   3.6    |    2.15     |    22.72     |
|  15  |                 Wii Fit Plus                 |   Wii    | 2009 |    Sports    |          Nintendo           |   9.09   |   8.59   |   2.53   |    1.79     |      22      |
|  16  |              Kinect Adventures!              |   X360   | 2010 |     Misc     |   Microsoft Game Studios    |  14.97   |   4.94   |   0.24   |    1.67     |    21.82     |
|  17  |              Grand Theft Auto V              |   PS3    | 2013 |    Action    |    Take-Two Interactive     |   7.01   |   9.27   |   0.97   |    4.14     |    21.39     |
|  18  |        Grand Theft Auto: San Andreas         |   PS2    | 2004 |    Action    |    Take-Two Interactive     |   9.43   |   0.4    |   0.41   |    10.57    |    20.81     |
|  19  |              Super Mario World               |   SNES   | 1990 |   Platform   |          Nintendo           |  12.78   |   3.75   |   3.54   |    0.55     |    20.62     |
|  20  | Brain Age: Train Your Brain in Minutes a Day |    DS    | 2005 |     Misc     |          Nintendo           |   4.75   |   9.26   |   4.16   |    2.05     |    20.22     |
|  21  |        Pokemon Diamond/Pokemon Pearl         |    DS    | 2006 | Role-Playing |          Nintendo           |   6.42   |   4.52   |   6.04   |    1.37     |    18.35     |
|  22  |               Super Mario Land               |    GB    | 1989 |   Platform   |          Nintendo           |  10.83   |   2.71   |   4.18   |    0.42     |    18.14     |
|  23  |             Super Mario Bros. 3              |   NES    | 1988 |   Platform   |          Nintendo           |   9.54   |   3.44   |   3.84   |    0.46     |    17.28     |
|  24  |              Grand Theft Auto V              |   X360   | 2013 |    Action    |    Take-Two Interactive     |   9.63   |   5.31   |   0.06   |    1.38     |    16.38     |
|  25  |         Grand Theft Auto: Vice City          |   PS2    | 2002 |    Action    |    Take-Two Interactive     |   8.41   |   5.49   |   0.47   |    1.78     |    16.15     |
|  26  |        Pokemon Ruby/Pokemon Sapphire         |   GBA    | 2002 | Role-Playing |          Nintendo           |   6.06   |   3.9    |   5.38   |     0.5     |    15.84     |
|  27  |         Pokemon Black/Pokemon White          |    DS    | 2010 | Role-Playing |          Nintendo           |   5.57   |   3.28   |   5.65   |    0.82     |    15.32     |
|  28  | Brain Age 2: More Training in Minutes a Day  |    DS    | 2005 |    Puzzle    |          Nintendo           |   3.44   |   5.36   |   5.32   |    1.18     |     15.3     |
|  29  |            Gran Turismo 3: A-Spec            |   PS2    | 2001 |    Racing    | Sony Computer Entertainment |   6.85   |   5.09   |   1.87   |    1.16     |    14.97     |
|  30  |        Call of Duty: Modern Warfare 3        |   X360   | 2011 |   Shooter    |         Activision          |   9.03   |   4.28   |   0.13   |    1.32     |    14.76     |
|  31  |   Pokémon Yellow: Special Pikachu Edition    |    GB    | 1998 | Role-Playing |          Nintendo           |   5.89   |   5.04   |   3.12   |    0.59     |    14.64     |
|  32  |           Call of Duty: Black Ops            |   X360   | 2010 |   Shooter    |         Activision          |   9.67   |   3.73   |   0.11   |    1.13     |    14.64     |
|  33  |             Pokemon X/Pokemon Y              |   3DS    | 2013 | Role-Playing |          Nintendo           |   5.17   |   4.05   |   4.34   |    0.79     |    14.35     |
|  34  |          Call of Duty: Black Ops 3           |   PS4    | 2015 |   Shooter    |         Activision          |   5.77   |   5.81   |   0.35   |    2.31     |    14.24     |
|  35  |          Call of Duty: Black Ops II          |   PS3    | 2012 |   Shooter    |         Activision          |   4.99   |   5.88   |   0.65   |    2.52     |    14.04     |
|  36  |          Call of Duty: Black Ops II          |   X360   | 2012 |   Shooter    |         Activision          |   8.25   |   4.3    |   0.07   |    1.12     |    13.74     |
|  37  |        Call of Duty: Modern Warfare 2        |   X360   | 2009 |   Shooter    |         Activision          |   8.52   |   3.63   |   0.08   |    1.29     |    13.52     |
|  38  |        Call of Duty: Modern Warfare 3        |   PS3    | 2011 |   Shooter    |         Activision          |   5.54   |   5.82   |   0.49   |    1.62     |    13.47     |
|  39  |             Grand Theft Auto III             |   PS2    | 2001 |    Action    |    Take-Two Interactive     |   6.99   |   4.51   |   0.3    |     1.3     |     13.1     |
|  40  |           Super Smash Bros. Brawl            |   Wii    | 2008 |   Fighting   |          Nintendo           |   6.75   |   2.61   |   2.66   |    1.02     |    13.04     |
|  41  |           Call of Duty: Black Ops            |   PS3    | 2010 |   Shooter    |         Activision          |   5.98   |   4.44   |   0.48   |    1.83     |    12.73     |
|  42  |         Animal Crossing: Wild World          |    DS    | 2005 |  Simulation  |          Nintendo           |   2.55   |   3.52   |   5.33   |    0.88     |    12.28     |
|  43  |                 Mario Kart 7                 |   3DS    | 2011 |    Racing    |          Nintendo           |   4.74   |   3.91   |   2.67   |    0.89     |    12.21     |
|  44  |                    Halo 3                    |   X360   | 2007 |   Shooter    |   Microsoft Game Studios    |   7.97   |   2.83   |   0.13   |    1.21     |    12.14     |
|  45  |              Grand Theft Auto V              |   PS4    | 2014 |    Action    |    Take-Two Interactive     |   3.8    |   5.81   |   0.36   |    2.02     |    11.99     |
|  46  |     Pokemon HeartGold/Pokemon SoulSilver     |    DS    | 2009 |    Action    |          Nintendo           |   4.4    |   2.77   |   3.96   |    0.77     |     11.9     |
|  47  |                Super Mario 64                |   N64    | 1996 |   Platform   |          Nintendo           |   6.91   |   2.85   |   1.91   |    0.23     |     11.9     |
|  48  |                Gran Turismo 4                |   PS2    | 2004 |    Racing    | Sony Computer Entertainment |   3.01   |   0.01   |   1.1    |    7.53     |    11.65     |
|  49  |              Super Mario Galaxy              |   Wii    | 2007 |   Platform   |          Nintendo           |   6.16   |   3.4    |   1.2    |    0.76     |    11.52     |
|  50  |  Pokemon Omega Ruby/Pokemon Alpha Sapphire   |   3DS    | 2014 | Role-Playing |          Nintendo           |   4.23   |   3.37   |   3.08   |    0.65     |    11.33     |
