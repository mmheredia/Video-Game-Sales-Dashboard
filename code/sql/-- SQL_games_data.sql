-- SQL_games_data
-- Creating the table for our SQL database.

DROP TABLE games_data;

CREATE TABLE games_data(
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

SELECT * FROM games_data;

CREATE TABLE year_data AS
SELECT year, na_sales, eu_sales, jp_sales, global_sales
FROM games_data;

SELECT * FROM year_data;