<!-- README START -->

<!-- HEADER -->

# Video-Game-Sales-Dashboard

---

<!-- ABOUT PROJECT -->

## About

---

This is a Data Visualization Dashboard built with a collection of technology. Flask, Python, Javascript, Plotly, SQL and much more were used to create this application.

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
|   .gitignore
|   README.md
|   requirements.txt
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
|   |   |
|   |   \---js
|   |           script.js
|   |
|   +---templates
|   |       index.html
|   |
\---code
    +---csv
    |       clean_vgsales.csv
    |
    \---sql
            -- SQL_games_data.sql
            sql_connection.ipynb

```

## Data

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

<!-- NEED TO FORMAT STILL! -->

 <!-- | 50 | 51 | Super Mario Land 2: 6 Golden Coins | GB | 1992 | Adventure | Nintendo | 6.16 | 2.04 | 2.69 | 0.29 | 11.18 | 51 | 52 | Grand Theft Auto IV | X360 | 2008 | Action | Take-Two Interactive | 6.76 | 3.1 | 0.14 | 1.03 | 11.03 | 52 | 53 | Gran Turismo | PS | 1997 | Racing | Sony Computer Entertainment | 4.02 | 3.87 | 2.54 | 0.52 | 10.95 | 53 | 54 | Super Mario 3D Land | 3DS | 2011 | Platform | Nintendo | 4.89 | 2.99 | 2.13 | 0.78 | 10.79 | 54 | 55 | Gran Turismo 5 | PS3 | 2010 | Racing | Sony Computer Entertainment | 2.96 | 4.88 | 0.81 | 2.12 | 10.77 | 55 | 56 | Call of Duty: Modern Warfare 2 | PS3 | 2009 | Shooter | Activision | 4.99 | 3.69 | 0.38 | 1.63 | 10.69 | 56 | 57 | Grand Theft Auto IV | PS3 | 2008 | Action | Take-Two Interactive | 4.76 | 3.76 | 0.44 | 1.62 | 10.58 | 57 | 58 | Super Mario All-Stars | SNES | 1993 | Platform | Nintendo | 5.99 | 2.15 | 2.12 | 0.29 | 10.55 | 58 | 59 | Pokemon FireRed/Pokemon LeafGreen | GBA | 2004 | Role-Playing | Nintendo | 4.34 | 2.65 | 3.15 | 0.35 | 10.49 | 59 | 60 | Super Mario 64 | DS | 2004 | Platform | Nintendo | 5.08 | 3.11 | 1.25 | 0.98 | 10.42 | 60 | 61 | Just Dance 3 | Wii | 2011 | Misc | Ubisoft | 6.05 | 3.15 | 0 | 1.07 | 10.27 | 61 | 62 | Call of Duty: Ghosts | X360 | 2013 | Shooter | Activision | 6.72 | 2.63 | 0.04 | 0.82 | 10.21 | 62 | 63 | Halo: Reach | X360 | 2010 | Shooter | Microsoft Game Studios | 7.03 | 1.98 | 0.08 | 0.78 | 9.87 | 63 | 64 | Mario Kart 64 | N64 | 1996 | Racing | Nintendo | 5.55 | 1.94 | 2.23 | 0.15 | 9.87 | 64 | 65 | New Super Mario Bros. 2 | 3DS | 2012 | Platform | Nintendo | 3.66 | 3.07 | 2.47 | 0.63 | 9.83 | 65 | 66 | Halo 4 | X360 | 2012 | Shooter | Microsoft Game Studios | 6.63 | 2.36 | 0.04 | 0.73 | 9.76 | 66 | 67 | Final Fantasy VII | PS | 1997 | Role-Playing | Sony Computer Entertainment | 3.01 | 2.47 | 3.28 | 0.96 | 9.72 | 67 | 68 | Call of Duty: Ghosts | PS3 | 2013 | Shooter | Activision | 4.09 | 3.73 | 0.38 | 1.38 | 9.58 | 68 | 69 | Just Dance 2 | Wii | 2010 | Misc | Ubisoft | 5.84 | 2.89 | 0.01 | 0.78 | 9.52 | 69 | 70 | Gran Turismo 2 | PS | 1999 | Racing | Sony Computer Entertainment | 3.88 | 3.42 | 1.69 | 0.5 | 9.49 | 70 | 71 | Call of Duty 4: Modern Warfare | X360 | 2007 | Shooter | Activision | 5.91 | 2.38 | 0.13 | 0.9 | 9.32 | 71 | 72 | Donkey Kong Country | SNES | 1994 | Platform | Nintendo | 4.36 | 1.71 | 3 | 0.23 | 9.3 | 72 | 73 | Minecraft | X360 | 2013 | Misc | Microsoft Game Studios | 5.58 | 2.83 | 0.02 | 0.77 | 9.2 | 73 | 74 | Animal Crossing: New Leaf | 3DS | 2012 | Simulation | Nintendo | 2.01 | 2.32 | 4.36 | 0.41 | 9.1 | 74 | 75 | Mario Party DS | DS | 2007 | Misc | Nintendo | 4.46 | 1.88 | 1.98 | 0.7 | 9.02 | 75 | 76 | The Elder Scrolls V: Skyrim | X360 | 2011 | Role-Playing | Bethesda Softworks | 5.03 | 2.86 | 0.1 | 0.85 | 8.84 | 76 | 77 | Super Mario Kart | SNES | 1992 | Racing | Nintendo | 3.54 | 1.24 | 3.81 | 0.18 | 8.77 | 77 | 78 | FIFA 16 | PS4 | 2015 | Sports | Electronic Arts | 1.11 | 6.06 | 0.06 | 1.26 | 8.49 | 78 | 79 | Wii Party | Wii | 2010 | Misc | Nintendo | 1.79 | 3.53 | 2.49 | 0.68 | 8.49 | 79 | 80 | Halo 2 | XB | 2004 | Shooter | Microsoft Game Studios | 6.82 | 1.53 | 0.05 | 0.08 | 8.48 | 80 | 81 | Mario Party 8 | Wii | 2007 | Misc | Nintendo | 3.81 | 2.3 | 1.58 | 0.73 | 8.42 | 81 | 82 | Pokemon Black 2/Pokemon White 2 | DS | 2012 | Role-Playing | Nintendo | 2.91 | 1.86 | 3.14 | 0.43 | 8.34 | 82 | 83 | FIFA Soccer 13 | PS3 | 2012 | Action | Electronic Arts | 1.06 | 5.05 | 0.13 | 2.01 | 8.25 | 83 | 84 | The Sims 3 | PC | 2009 | Simulation | Electronic Arts | 0.98 | 6.42 | 0 | 0.71 | 8.11 | 84 | 85 | GoldenEye 007 | N64 | 1997 | Shooter | Nintendo | 5.8 | 2.01 | 0.13 | 0.15 | 8.09 | 85 | 86 | Mario & Sonic at the Olympic Games | Wii | 2007 | Sports | Sega | 2.58 | 3.9 | 0.66 | 0.91 | 8.05 | 86 | 87 | Final Fantasy X | PS2 | 2001 | Role-Playing | Sony Computer Entertainment | 2.91 | 2.07 | 2.73 | 0.33 | 8.04 | 87 | 88 | Final Fantasy VIII | PS | 1999 | Role-Playing | SquareSoft | 2.28 | 1.72 | 3.63 | 0.23 | 7.86 | 88 | 89 | Pokémon Platinum Version | DS | 2008 | Role-Playing | Nintendo | 2.82 | 1.78 | 2.69 | 0.55 | 7.84 | 89 | 90 | Pac-Man | 2600 | 1982 | Puzzle | Atari | 7.28 | 0.45 | 0 | 0.08 | 7.81 | 90 | 91 | Grand Theft Auto: Liberty City Stories | PSP | 2005 | Action | Take-Two Interactive | 2.9 | 2.83 | 0.24 | 1.75 | 7.72 | 91 | 92 | Super Mario Galaxy 2 | Wii | 2010 | Platform | Nintendo | 3.66 | 2.42 | 0.98 | 0.64 | 7.7 | 92 | 93 | Star Wars Battlefront (2015) | PS4 | 2015 | Shooter | Electronic Arts | 2.93 | 3.29 | 0.22 | 1.23 | 7.67 | 93 | 94 | Call of Duty: Advanced Warfare | PS4 | 2014 | Shooter | Activision | 2.8 | 3.3 | 0.14 | 1.37 | 7.61 | 94 | 95 | The Legend of Zelda: Ocarina of Time | N64 | 1998 | Action | Nintendo | 4.1 | 1.89 | 1.45 | 0.16 | 7.6 | 95 | 96 | Crash Bandicoot 2: Cortex Strikes Back | PS | 1997 | Platform | Sony Computer Entertainment | 3.78 | 2.17 | 1.31 | 0.31 | 7.57 | 96 | 97 | Super Mario Bros. 2 | NES | 1988 | Platform | Nintendo | 5.39 | 1.18 | 0.7 | 0.19 | 7.46 | 97 | 98 | Super Smash Bros. for Wii U and 3DS | 3DS | 2014 | Fighting | Nintendo | 3.24 | 1.35 | 2.42 | 0.43 | 7.44 | 98 | 99 | Call of Duty: World at War | X360 | 2008 | Shooter | Activision | 4.79 | 1.9 | 0 | 0.69 | 7.38 | 99 | 100 | Battlefield 3 | X360 | 2011 | Shooter | Electronic Arts | 4.46 | 2.13 | 0.06 | 0.69 | 7.34 | -->

<!-- WIP SS -->
<!-- will update as we go -->

## UI Idea

---

</br>

![rough-draft-dashboard](app/static/img/testDash.png)
