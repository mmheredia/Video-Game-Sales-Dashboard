-- SQL_games_data
-- Creating the table for our SQL database.

DROP TABLE games_data;

CREATE TABLE games_data(
	game_id SERIAL PRIMARY KEY,
	rank INT,
	name TEXT,
	platform TEXT,
	year INT, 
	genre TEXT, 
	publisher TEXT,
  na_sales FLOAT, 
	eu_sales FLOAT,
	jp_sales FLOAT,
	other_sales FLOAT,
	global_sales FLOAT
);